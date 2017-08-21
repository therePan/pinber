import React from 'react'
import Banner from '../Banner'
import JobCard from '../JobCard'
import Padding from '../Padding'
import BossCard from '../BossCard'
import JobInterviewCard from '../JobInterviewCard'
import DetailsJob from '../DetailsJob'
import JobArea from '../JobArea'
import LinkManCard from '../LinkManCard'
import PicCard from '../PicCard'

class Test extends React.Component {
  state={
    array1: [
      '古墩路与育英路交叉口北150m（公司地址)',
    ],
    array2: [
      '古墩路与育英路交叉口北150m（公司地址)',
      '本科及以上学历，相关专业1。',
      '本科及以上学历，相关专业1。',
      '本科及以上学历，相关专业1。',
      '本科及以上学历，相关专业1。',
    ],
  }
  render() {
    return (
      <div style={{padding: '18px', background: '#efefef'}}>
        <Banner />
        <Padding />
        <JobCard />
        <Padding />
        <BossCard />
        <Padding />
        <JobInterviewCard />
        <Padding discribe="职位详情页组件(DetailsJob)" />
        <DetailsJob />
        <Padding />
        <JobArea title="工作地址" position="古墩路" distant="2.9km" detailsPositon={this.state.array1} />
        <Padding />
        <JobArea title="职位描述" detailsPositon={this.state.array2} />
        <Padding />
        <LinkManCard />
        <Padding />
        <PicCard />
      </div>
    )
  }
}
export default Test
