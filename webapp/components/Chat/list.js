/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Invite from './invite'
import userDefaultHead from '@static/user_default_head.png'
import style from './style.less'

class List extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }
  render() {
    return (
        <li>
            {(()=>{
            if(this.props.subType==4){
              const content=JSON.parse(this.props.content);
              if(content.desc==4){
                return <Invite data={content} interviewDeal={this.props.interviewDeal}/>
              }else{
                return <div className={style.notice}>{this.props.isSend ? JSON.parse(content.data).selfMessage : JSON.parse(content.data).otherMessage}</div>
              }
            }else{
              return(
                <div className={this.props.isSend ? style.main  + ' ' + style.self : style.main}>
                  <p>{this.props.getTime(this.props.time)}</p>
                  <img className={style.avatar} src={this.props.userData.length>0 && this.props.userData[this.props.isSend ? 1:0].Image ? this.props.userData[this.props.isSend ? 1:0].Image : userDefaultHead } />
                  <div className={style.text} dangerouslySetInnerHTML={{__html: this.props.subType==3 ? this.props.content.split('}')[1].replace('imageClick(this)','mapClick('+this.props.content.split('}')[0]+'})') : this.props.content}}></div>
                </div>
              )
            }
          })()}
        </li>
    )
  }
}
export default List
