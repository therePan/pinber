import { authApi } from '@helper/reduxFetch'
export const INTERVIEW_LIST = 'INTERVIEW_LIST'
export const INTERVIEW_DEAL = 'INTERVIEW_DEAL'

// interviewList
//   status,
export const interviewList = authApi({
  url: '/api/interview/list',
  action: (args, json) => ({
    type: INTERVIEW_LIST,
    args,
    data: json.data,
  }),
})

// interviewDeal
//   interview_id,
//   deal_type,
export const interviewDeal = authApi({
  url: '/api/interview/deal',
  action: (args, json) => ({
    type: INTERVIEW_DEAL,
    args,
    data: json.data,
  }),
})
