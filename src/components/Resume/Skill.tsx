import * as React from 'react'
const outCircle = [
  { label: 'react', color: 'rgba(121,100,102,0.8)' },
  { label: 'redux', color: 'rgba(76,157,160,0.8)' },
  { label: 'ts', color: 'rgba(49,65,82,0.8)' },
  { label: 'less', color: 'rgba(71,83,94,0.8)' },
  { label: 'scss', color: 'rgba(66,66,66,0.8)' },
  { label: 'antd', color: 'rgba(117,148,179,0.8)' },
  { label: 'node', color: 'rgba(147,147,189,0.8)' },
  { label: 'webpack', color: 'rgba(121,100,102,0.8)' }
]
const innerCircle = [
  { label: 'vue', color: 'rgba(179,164,140,0.8)' },
  { label: 'router', color: 'rgba(171,209,220,0.8)' },
  { label: 'vuex', color: 'rgba(238,215,163,0.8)' },
  { label: 'iview', color: 'rgba(207,184,178,0.8)' }
]
const Skill = () => (
  <div className="skill">
    <p className="title">技术栈</p>
    <div className="skills">
      <div className="skill-circle">
        <div className="out-circle">
          {outCircle.map((item, index) => (
            <div
              key={index}
              className={`circle-item circle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="inner-circle">
          {innerCircle.map((item, index) => (
            <div
              key={index}
              className={`innerCircle-item innerCircle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>熟练使用vue及其周边生态库</p>
        <p>同样也能使用react及其周边生态库</p>
        <p>擅长封装可重用组件，能脱离库书写JS代码</p>
        <p>编码常思其健壮性，扩展性，维护性</p>
        <p>常驻PC/微信平台前端开发</p>
      </div>
    </div>
  </div>
)

export default Skill
