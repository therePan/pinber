import React from 'react'
import style from './style.less'

class PicCard extends React.Component {
  render() {
    return (
      <div className={style.CardContent}>
        <div className={style.top}>照片</div>
        <ul className={style.Content}>
          <li><img src="http://k2.jsqq.net/uploads/allimg/1705/7_170524143440_5.jpg" /></li>
          <li><img src="http://k2.jsqq.net/uploads/allimg/1705/7_170524143440_5.jpg" /></li>
          <li><img src="http://k2.jsqq.net/uploads/allimg/1705/7_170524143440_5.jpg" /></li>
          <li><img src="http://k2.jsqq.net/uploads/allimg/1705/7_170524143440_5.jpg" /></li>
        </ul>
      </div>
    )
  }
}
export default PicCard
