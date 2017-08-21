import {
  authFetch,
} from './fetchForm'

export const feedBack = (args) =>
  authFetch('/api/user/feedback', {
    ...args,
  })
