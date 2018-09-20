import { Tooltip } from 'antd'
import * as React from 'react'
import wximg from "../../assets/img/wx.png"

const CallMe = () => (
  <div className="call-me">
    <p className="title">联系我</p>
    <div className="tag">
      <span>代码</span>
      <span>兴趣</span>
      <span>积极</span>
      <span>希望</span>
    </div>
    <p> 注重效率，偏爱敏捷开发</p>
    <p> 喜欢尝试，期待新鲜事物</p>
    <p> 前端即兴趣，兴趣即未来</p>
    <p> 行路有良友，便是捷径</p>
    <p>带上我吧，一起看到更大的世界</p>
    <div className="call">
      <Tooltip title="github">
        <a href="https://github.com/YoungEffort">&#xea0a;</a>
      </Tooltip>
      <Tooltip title="个人博客">
        <a>&#xe661;</a>
      </Tooltip>
      <Tooltip
        title={
          <img
            className="wx"
            src={wximg}
            alt="微信"
          />
        }>
        <a>&#xe7e5;</a>
      </Tooltip>
      <Tooltip title="893520964@qq.com">
        <a>&#xe672;</a>
      </Tooltip>
      <Tooltip title="知乎">
        <a href="#">
          &#xe625;
        </a>
      </Tooltip>
    </div>
    <div className="footer">
      <div className="item">All Rights Reserved</div>
    </div>
  </div>
)

export default CallMe
