import * as React from 'react'
const list = [
  {
    content:
      '自己第一个基于typescript全栈项目，项目采用前后端分离，代码符合tslint规范，后端采用技术栈准备用koa2，mongoose,koa-jwt,' +
      '前端采用技术栈有react，redux,redux-saga。',
    title: '个人博客系统及其后台管理端',
    url: '#'
  },
  {
    content:
      '一套管控成本的内部系统，' +
      '各个模块的数据管理，权限设置等。',
    title: '中铁成本管理系统',
    url: '#'
  },
  {
    content:
      'e融通是服务商户的一款管理产品（完全独立负责）,<br/>' +
      '金穗慧生活是农行的服务社区产品（参与个人中心和电商模块）。',
    title: '农行e融通和金穗慧生活',
    url: '#'
  },
  {
    content:
      '一个区块链交易所，<br/>' +
      '参与原项目的快速换肤，然后重构首页，重构大盘。',
    title: '区块链交易所',
    url: '#'
  }
]
const Works = () => {
  return (
    <div className="works">
      <p className="title">作品集</p>
      <div className="cards">
        {list.map((item, index) => (
          <div key={index} className="item">
            <span className="work-title">{item.title}</span>
            <p dangerouslySetInnerHTML={{__html: item.content}}/>
            <a className="work-link" href={item.url} target="view_window">
              &#xe626;
            </a>
          </div>
        ))}
      </div>
      <p>
        <a
          href="https://github.com/YoungEffort"
          style={{
            color: '#fff',
            cursor: 'pointer'
          }}>
          在github上查看更多
        </a>
      </p>
    </div>
  )
}

export default Works
