import { Card, Pagination } from 'antd'
import QueueAnim from 'rc-queue-anim'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { format } from '../../common'
import { IPayload } from '../../types'
import './style.less'
export interface IArticle {
  _id: string
  tag: ITag
  title: string
  create_at: string
  access: string
  type: string
  abstract: string
}
interface ITag {
  color: string
  title: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IArticles {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
}
class Articles extends React.Component<IArticles> {
  public state = {
    pageIndex: 1,
    pageSize: 10
  }
  public onChange = (page: number, pageSize: number) => {
    // setState(updater, [callback])
    // 功能：setState()将需要处理的变化塞入（译者注：setState源码中将一个需要改变的变化存放到组件的state对象中，采用队列处理）组件的state对象中， 并告诉该组件及其子组件需要用更新的状态来重新渲染。这是用于响应事件处理和服务端响应的更新用户界面的主要方式。
    // 参数：第一个函数是带签名的updater函数，你可以选择性地传递一个对象作为 setState()的第一个参数而不是一个函数
    // setState()的第二个参数是一个可选地回调函数，其将会在setState执行完成同时组件被重渲之后执行。通常，对于这类逻辑，我们推荐使用componentDidUpdate。
    // 返回值：无
    this.setState(
      {
        pageIndex: page,
        pageSize
      },
      () => {
        this.props.fetchArticle(this.state)
      }
    )
  }
  public componentDidMount() {
    this.props.fetchArticle(this.state)
  }
  public render() {
    const { articles = [], total } = this.props
    const { pageIndex, pageSize } = this.state
    
    return (
      <div>
        <QueueAnim
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] }
          ]}>
          {articles.map(item => (
            <Card
              key={item._id}
              bordered={false}
              hoverable={true}
              className="article"
              type="inner">
              <div>
                <h3>{item.title}</h3>
                <p className="tag">
                  <span>发表于：{format(item.create_at)}</span>
                  <span>标签：{item.tag && item.tag.title}</span>
                  <span>浏览：{item.access}</span>
                </p>
                <div className="abstract">{item.abstract}...</div>
                <Link to={`/article/${item._id}`}>
                  <span className="link">阅读全文 >></span>
                </Link>
              </div>
            </Card>
          ))}
        </QueueAnim>
        <QueueAnim className="Pagination" delay={1000}>
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this.onChange}
            key="pagination"
          />
        </QueueAnim>
      </div>
    )
  }
}
export default Articles
