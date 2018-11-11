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
    .then(res => ({
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

export function getTestimonialsSection() {
  return getEntriesByType('testimonials')
    .then(res => ({
      ...res[0],
      testimonials: res[0].testimonials
        .map(t => t.fields)
        .map(t =>({ ...t, review: documentToHtmlString(t.review)}))
    }))
}

getTestimonialsSection().then(console.log.bind(console))
