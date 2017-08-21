/**
 * Created by huangchao on 2017/6/27.
 */
import { authApi } from '@helper/reduxFetch'
export const CHAT_MASSAGE_LIST = 'CHAT_MASSAGE_LIST' // 系统消息列表（1：个人小秘书 2：商户小秘书 3： 谁看过你简历的消息 4：谁看过你职位的消息）
export const CHAT_MESSAGE_COUNT = 'CHAT_MESSAGE_COUNT' // 未读系统消息数量
export const CHAT_GENERATE_CARD = 'CHAT_GENERATE_CARD' // 聊天职位信息
export const CHAT_INTERVIEW_DEAL = 'CHAT_INTERVIEW_DEAL' // 面试邀请处理
export const CHAT_MESSAGE_INFO = 'CHAT_MESSAGE_INFO' // 好友列表聊天信息
export const CHAT_MESSAGE_USER = 'CHAT_MESSAGE_USER' // 好友列表聊天信息
export const CHAT_DEL_USER = 'CHAT_DEL_USER' // 删除列表用户

// messageList
//   type,
//   page,
//   page_size,
export const messageList = authApi({
  url: '/api/chat/message_list',
  action: (args, json) => ({
    type: CHAT_MASSAGE_LIST,
    args,
    data: json.data,
  }),
})

export const messageCount = ({
  user_type,
}) => ({
  type: CHAT_MESSAGE_COUNT,
  args: {
    user_type,
  },
})

export const messageInfo = ({
  msgs,
}) => ({
  type: CHAT_MESSAGE_INFO,
  args: {
    msgs,
  },
})

export const usersList = ({
  users,
}) => ({
  type: CHAT_MESSAGE_USER,
  args: {
    users,
  },
})

export const delUser = ({
  account,
}) => ({
  type: CHAT_DEL_USER,
  args: {
    account,
  },
})

export const getGenerateCard = authApi({
  url: '/api/chat/generate_card',
  action: (args, json) => ({
    type: CHAT_GENERATE_CARD,
    args,
    data: json.data,
  }),
})

export const postInterviewDeal = authApi({
  url: '/api/interview/deal',
  action: (args, json) => ({
    type: CHAT_INTERVIEW_DEAL,
    args,
    data: json.data,
  }),
})
