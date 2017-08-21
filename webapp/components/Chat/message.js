/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { postInterviewDeal } from '@actions/chat'
import webim from './webim'
import webimhandler from './webim_handler'
import SendMsg from './sendMsg'
import BossAddresss from '../BossAddress'
import List from './list'
import style from './style.less'
import { Modal,Toast } from 'antd-mobile'

@connect(state => {
  return {
    deal: state.chat.deal,
  }
})

class Message extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    deal: PropTypes.number,
  }
  constructor(props) {
    super(props)
    this.state = {
      msgs: [],
      modal: false,
      content:null,
      lock:false,
    }
    this.userData=[];
    if(this.props.chatId && this.props.userInfo){
      const that=this
      if(!webim.checkLogin(null, true)){
        webimhandler.initIM(this.props.userInfo,this.props.chatId+"&2",(data)=>{
          if(typeof(data)=='boolean'){
            if(data){
              webimhandler.getProfilePortrait(function(data) {
                if(data){
                  that.userData=data;
                  that._onSendMsg("你好，我正在找以上工作，这是我的简历，我们来聊聊看吧");
                }
              })
            }else{
              this.getProfilePortrait() //获取好友资料及聊天记录
            }
          }else{
            this.receiveMsgs(data)
          }
        },true)
      }else{
        console.log('已经登录');
        const that = this,
              selToID = this.props.chatId+"&2";
        webimhandler.init({
          avChatRoomId: selToID, // 默认房间群ID，群类型必须是直播聊天室（AVChatRoom），这个为官方测试ID(托管模式)
          selType: webim.SESSION_TYPE.C2C,
          selToID: selToID,
          selSess: null, // 当前聊天会话
        })
        webimhandler.applyAddFriend(function(isok){
          if(isok){
            webimhandler.getProfilePortrait(function(data) {
              if(data){
                that.userData=data;
                that._onSendMsg("你好，我正在找以上工作，这是我的简历，我们来聊聊看吧");
              }
            })
          }else{
            that.getProfilePortrait() //获取好友资料及聊天记录
          }
        })
      }
    }
    this.scroll = this.handleScroll.bind(this);
    this.model = 0;
  }
  componentDidMount(){
    const that=this
    //查看图片
    window.imageClick = (imgObj) => {
        that.model=0
        var imgUrls = imgObj.src;
        var imgUrlArr = imgUrls.split("#"); //字符分割
        var bigImgUrl = imgUrlArr[1];//大图
        if(bigImgUrl){
          that.setState({
            modal:true,
            content:bigImgUrl
          })
        }
    }
    window.onChangePlayAudio = (obj) => {
        webimhandler.onChangePlayAudio(obj)
    }
    window.mapClick = (map) =>{
      that.model=1
      if(map){
        that.setState({
          modal:true,
          content:map
        })
      }
    }
    window.addEventListener('scroll',this.scroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.scroll);
  }
  //屏幕滚动获取历史聊天记录
  handleScroll(e){
    let srollPos = window.pageYOffset; //滚动条距顶部距离(页面超出窗口的高度)
    if(srollPos<-5){//屏幕高度+滚动条距顶部距离>页面高度
      //加锁处理
      if(!this.state.lock){
        this.setState({lock:true})
        this.getLastC2CHistoryMsgs(true)
      }
    }
  }
  //显示聊天内容
  receiveMsgs = (data,order=false) => {
    // console.log(data);
    const msgs = this.state.msgs || []
    order ? msgs.unshift(data) : msgs.push(data)
    this.setState({
      msgs: msgs
    })
    order ? null : this._scrollTop()
  }
  // 发消息
  _onSendMsg = (content) =>{
      const that = this
      if(!content.replace(/^\s*|\s*$/g,'')) return
      webimhandler.onSendMsg(content,function(msgs){
          msgs.subType=0;
          msgs.isSend=true;
          that.receiveMsgs(msgs)
          console.log('发送成功');
      })
  }
  // 屏幕底部
  _scrollTop = () => {
    var msgflow = document.getElementsByTagName("body")[0];
    setTimeout(function () {
        msgflow.scrollTop = msgflow.scrollHeight;
    }, 300);
  }
  //获取好友资料
  getProfilePortrait = () =>{
    const that = this
    webimhandler.getProfilePortrait(function(data) {
      if(data){
        that.userData=data;
        that.getLastC2CHistoryMsgs()
      }
    })
  }
  //获取c2c历史消息
  getLastC2CHistoryMsgs = (order=false) =>{
    console.log('读取聊天记录');
    const that = this,
          options={
            count:10,
            order:order
          };
    webimhandler.getLastC2CHistoryMsgs(options,function(data) {
      webimhandler.onMsgNotify(data,function(msgs){
          that.receiveMsgs(msgs,order)
          that.setState({lock:false})
      })
    });
  }
  //mode窗口
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  //面试回复
  interviewDeal = (type,interview_id) =>{
    const that=this
    this.props.dispatch(postInterviewDeal({
      deal_type: type,
      interview_id: interview_id,
    }))
    .then(() => {
      //是否同意邀请面试
      var content=''
      if(type=='agree'){
        content={
            "selfMessage" : "<font color=#999999>已通知对方前去面试，祝您面试愉快</font>",
            "changeType" : 2,
            "otherMessage" : "<font color=#999999>对方已同意参加面试，预祝您聘得良才</font>",
            "changeValue" : "",
            "changeStatus" : 0
        }
        Toast.info('已通知对方前去面试，祝您面试愉快')
      }else{
        content={
            "selfMessage" : "<font color=#999999>已委婉告知对方您需要再考虑</font>",
            "changeType" : 2,
            "otherMessage" : "<font color=#999999>对方还需要再考虑一下，给他一点思考的时间吧</font>",
            "changeValue" : "",
            "changeStatus" : 0
        }
        Toast.info('已委婉告知对方您需要再考虑')
      }
      webimhandler.onSendCustomMsg(JSON.stringify(content),function(msgs){
          that.receiveMsgs(msgs)
          console.log('自定义类型发送成功');
      })
    })
  }
  //发送照片
  uploadFile = (blob) =>{
    const that=this
    webimhandler.uploadPic(blob,(msgs)=>{
      that.receiveMsgs(msgs)
    })
  }
  render() {
    return (
      <div>
        <ul className={style.message}>
          {this.state.msgs.map((item, index,v) => {
            return <List {...item} key={index} userData={this.userData} getTime={webimhandler.formatTimeStamp} interviewDeal={this.interviewDeal}/>
          })}
        </ul>
        <SendMsg onSendMsg={this._onSendMsg} emotions={webim.Emotions} uploadFile={this.uploadFile}/>
        {this.state.modal &&
          <Modal
             transparent
             maskClosable={true}
             style={{width:'88%',height: 'cross'}}
             visible={this.state.modal}
             onClose={this.onClose('modal')}
             footer={[{ text: '确定', onPress: () => {this.onClose('modal')(); } }]}
          >
          {this.model==0 ? <img src={this.state.content} width="100%"/> : <BossAddresss {...this.state.content} style={style.map}/>}
         </Modal>
        }
      </div>
    )
  }
}
export default Message
