import * as React from 'react'
import logoimg from "../../assets/img/logo.jpg"

const Index = () => (
  <div className="index" key="index">
    <img
      className="header-img"
      src={logoimg}
      alt="header-img"
      key="img"
    />
    <p className="title" key="title">
      年轻代表希望，希望需要努力，努力成就自己的平凡和伟大。
    </p>
    <div className="split" key="split" />
    <p key="name">我叫周凯</p>
    <p key="work">一名前端开发工程师</p>
    <p key="emil">893520964@qq.com</p>
  </div>
)

export default Index
