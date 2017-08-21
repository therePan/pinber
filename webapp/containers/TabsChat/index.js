/* eslint-disable */
import React from 'react'
import webim from '../../components/Chat/webim'
import webimhandler from '../../components/Chat/webim_handler'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { messageList,messageInfo,usersList,delUser } from '@actions/chat'
import style from './style.less'
import userDefaultHead from '@static/user_default_head.png'
import SvgIcon from '../../components/SvgIcon'
import iconEye from '@static/icon_eye.svg'
import iconHeadset from '@static/icon_headset.svg'
import { List, NavBar, Button, Badge,SwipeAction } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
    chat: state.chat,
  }
})
class TabsChat extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    chat: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.Config = {
      sdkappid: 1400022701,
      accountType: 8699,
      accountMode: 0,
    }
    this.setInterval=null
    const userInfo = JSON.parse(localStorage['pinber:user'] || '{}')
    this.userInfo = {
      nickName: this.props.user.user_name,
      identifier: userInfo.user_id + '&' + userInfo.user_type,
      userSig: userInfo.user_sign,
    }
    this.userMsg = {}
    if(!webim.checkLogin(null, true)){
      webimhandler.initIM(this.userInfo,null,(data)=>{
        if(typeof(data)=='boolean'){
          this.getRecentContactList() //获取好友列表
        }
      });
    }else{
      this.getRecentContactList() //获取好友列表
    }
  }
  componentDidMount(){
    this.setInterval=setInterval(()=>{
      this.getRecentContactList(false);
    },10000)
  }
  componentWillUnmount(){
    if(this.setInterval){
      clearInterval(this.setInterval)
    }
  }
  //获取最近联系人
  getRecentContactList = (read=true) =>{
    const that = this
    webim.getRecentContactList({Count:50},function(data){
      if(data){
        data.SessionItem && data.SessionItem.map(function(v,index){
            that.userMsg[v.To_Account]={
              time:v.MsgTimeStamp,
              msg:v.MsgShow,
              num: read ? 0 : that.userMsg[v.To_Account].msg==v.MsgShow ? that.userMsg[v.To_Account].num : that.userMsg[v.To_Account].num+1
            }
        })
        webim.syncMsgs((data)=>{
          data && data.map((v,index)=>{
              if(that.userMsg[v.fromAccount]){
                that.userMsg[v.fromAccount].num=that.userMsg[v.fromAccount].num+1
              }
          })
          that.props.dispatch(messageInfo({
            msgs: that.userMsg
          }))
        })
      }
      that.getAllFriend()
    })
  }
  //我的好友
  getAllFriend = () =>{
    const that=this
    webimhandler.getAllFriend(function(data) {
      that.props.dispatch(usersList({
        users: data
      }))
    })
  }
  //删除好友
  deleteFriend = (account,i) =>{
    const that=this
    const options={
      'To_Account': [account],
      'DeleteType': 'Delete_Type_Single'
    }
    webim.deleteFriend(options,function(data){
        if(data && data.ActionStatus=="OK"){
          that.props.dispatch(delUser({
            account: account
          }))
        }
    })
  }
  componentWillMount() {
    this.props.dispatch(messageList({
      type: 1, // 1：个人小秘书
    }))
  }

  render() {
    const list = this.props.chat.message_list
    const index = this.props.chat.index_1
    const userMsg = this.props.chat.msgs
    const users = this.props.chat.users
    return (
      <div className={style.main}>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            rightContent={
              <Link to="/chat/interview">
                <Badge text="" style={{right: '-.36rem'}}>
                  <Button type="primary" size="small"
                    className={style.icc}>我的面试</Button>
                </Badge>
              </Link>
            }
            iconName={null}>
            聊工作
          </NavBar>
        </div>

        <Link to="/chat/look" className={style.list}>
          <List.Item
            thumb={<SvgIcon icon={iconEye} className={style.icon} />}>
            看过我的
          </List.Item>
        </Link>

        <h3 className={style.tit}>联系人</h3>
        <List>
          {list && index &&
            <Link to="/chat/message" className={style.list}>
              <List.Item
                thumb={<SvgIcon icon={iconHeadset} className={style.icon} />}>
                <span className={style.time}>
                  {index ? webimhandler.formatTimeStamp(new Date(list[index[index.length - 1]].created_time) / 1000) : null}
                </span>
                <h4 className={style.party}>小秘书</h4>
                <p className={style.lastMessage}>
                  {index ? list[index[index.length - 1]].content : '暂无聊天记录'}
                </p>
              </List.Item>
            </Link>
          }
          {users && userMsg && users.map((item, index) => {
            return (
                <SwipeAction
                  key={index}
                  style={{ backgroundColor: '#efefef' }}
                  autoClose
                  right={[
                    {
                      text: '删除',
                      onPress: () => { this.deleteFriend(item.account,index) },
                      style: { backgroundColor: '#F4333C', color: 'white' },
                    },
                  ]}
                >
                <Link className={style.list} to={{
                  pathname: `/chat/${item.account.split('&')[0]}`,state:{time: userMsg[item.account] ? userMsg[item.account].time : '', userName: item.friend_name}}}
                  >
                    {userMsg[item.account] && userMsg[item.account].num>0 &&
                      <span className={style.tip}>{userMsg[item.account].num}</span>
                    }
                    <List.Item
                      thumb={item.friend_head ? item.friend_head : userDefaultHead}>
                      <span className={style.time}>
                        {userMsg[item.account] ? webimhandler.formatTimeStamp(userMsg[item.account].time) : null}
                      </span>
                      <h4 className={style.party}>{item.friend_name}</h4>
                      <p className={style.lastMessage}>
                      {
                        userMsg[item.account] ? userMsg[item.account].msg : '暂无聊天记录'
                      }
                      </p>
                    </List.Item>
                </Link>
              </SwipeAction>
            )
          })}
        </List>
      </div>
    )
  }
}

export default TabsChat
