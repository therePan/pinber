/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
class ShowPicture extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    photo_list: PropTypes.array,
  }
  render() {
    // console.log(this.props)
    return (
      <div className={style.boss_picture_wrap}>
        <div className={style.title}>照片</div>
        <div className={style.img_box}>
          <div className={style.linner_box} style={{minWidth: `${this.props.photo_list.length}` * 220}}>
            {
              this.props.photo_list.length ? this.props.photo_list.map((v, k) => {
                return <img key={k} className={style.img_item} src={v.thumb_url} alt="照片" />
              }) : <div>暂无照片</div>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default ShowPicture
