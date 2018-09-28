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
        <h2>基础技能：</h2>
        <p>熟悉HTML5语义化标签，写出符合要求的清晰的结构化代码</p>
        <p>掌握了主流页面布局方式及熟悉盒子模型</p>
        <p>熟悉DOM和BOM以及常用的ES5,ES6,ES7的api</p>
        <p>对js基础有过深入学习（作用域链、原型链、面向对象）</p>
        <p>理解chrome浏览器工作原理</p>
        <p>熟悉http协议及AJAX等通信方式</p>
        <p>懂得前端常规性能优化原理和优化技巧</p>
        <p>了解前端安全（XSS以及CSRF）</p>
        <p>开始入手学习typescript</p>
      </div>
      <div>
        <h2>应用层技能：</h2>
        <p>熟练使用vue及其周边生态库</p>
        <p>同样也能使用react及其周边生态库</p>
        <p>熟悉less、sass预处理器</p>
        <p>对待浏览器兼容性问题有一定的处理经验</p>
        <p>了解nodejs，理解服务端MVC编程思想，能用express框架进行web开发</p>
        <p>会用webpack构建工具进行项目配置，前端优化以及开发调试</p>
        <p>擅长封装可重用组件，能脱离库书写JS代码</p>
        <p>编码常思其健壮性，扩展性，维护性</p>
        <p>常驻PC/微信平台前端开发</p>
      </div>
    </div>
    <div>
      <h2>软技能：</h2>
      <p>熟悉git工具管理项目以及多人协作开发</p>
      <p>懂得利用各种技术社区、博客、github、Stack Overflow解决不会的技术难点</p>
      <p>善于沟通和表达，善于用思维导图理清不清晰的逻辑</p>
      <p>自学能力比较强，有较强的约束力和执行力，喜欢总结和分享学习心得</p>
      <p>趁着年轻，对待工作有一股拼命的干劲，在身体承受范围内，一心只想通过学习提升自己</p>
    </div>
  </div>
)

export default Skill
