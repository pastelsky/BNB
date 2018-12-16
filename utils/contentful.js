import * as contentful from 'contentful'
import resolveResponse from 'contentful-resolve-response'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const client = contentful.createClient({
  space: 'codv21t7zkss',
  accessToken: '35582c3e1386d1379d3f406b801982af4561e94702a7a1b17c2ea17118bc80e4'
})

function getEntriesByType(type) {
  return client
    .getEntries({
      content_type: type,
    })
    .then(resolveResponse)
    .then(res => res.map(item => item.fields))
    .catch(err => console.error(err))
}

export function getHeader() {
  return getEntriesByType('header')
    .then(res => console.log('res', res) || ({
      ...res[0],
      logo: res[0].logo.fields.file,
      headerLinks: res[0].headerLinks.map(h => h.fields)
    }))
}

export function getHero() {
  return getEntriesByType('hero')
    .then(res => ({
      ...res[0],
      backgroundImage: res[0].backgroundImage.fields.file,
    }))
}

export function getHowItWorksSection() {
  return getEntriesByType('howItWorksSection')
    .then(res => ({
      ...res[0],
      steps: res[0].steps
        .map(step => step.fields)
        .map(step => ({
          ...step,
          photo: step.photo.fields.file,
          description: documentToHtmlString(step.description),
        }))
    }))
}

export function getTeamSection() {
  return getEntriesByType('teamSection')
    .then(res => ({
      ...res[0],
      members: res[0].members
        .map(member => member.fields)
        .map(member => ({
          ...member,
          photo: member.photo.fields.file,
        }))
    }))
}


export function getPartnersSection() {
  return getEntriesByType('partners')
    .then(res => ({
      ...res[0],
      partners: res[0].partners
        .map(partner => partner.fields)
        .map(partner => ({
          url: partner.file.url,
        }))
    }))
}

export function getTestimonialsSection() {
  return getEntriesByType('testimonials')
    .then(res => ({
      ...res[0],
      testimonials: res[0].testimonials
        .map(t => t.fields)
        .map(t => ({...t, review: documentToHtmlString(t.review)}))
    }))
}

export function getFAQsSection() {
  return getEntriesByType('faqSection')
    .then(res => ({
      ...res[0],
      faqs: res[0].faQs
        .map(t => t.fields)
        .map(t => ({
          ...t,
          question: documentToHtmlString(t.question),
          answer: documentToHtmlString(t.answer)
        }))
    }))
}

export function getGallerySection() {
  return getEntriesByType('gallery')
    .then(res => ({
      ...res[0],
      images: res[0].images
        .map(t => t.fields)
        .map(({file}) => ({src: file.url, width: file.details.image.width, height: file.details.image.height}))
    }))
}

export function getExplainationSections() {
  return getEntriesByType('theProblemSection') // legacy reasons :\
    .then(results =>
      results.map(
        res => ({
          ...res,
          body: documentToHtmlString(res.body),
          image: res.image ? res.image.fields.file.url : undefined,
        })
      )
    )
}


getExplainationSections().then(console.log.bind(console))
