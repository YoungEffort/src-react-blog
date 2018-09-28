import { connect } from 'react-redux'
import Articles, { IArticle } from '../components/Articles/Articles'
import { REQUEST_ARTICLES } from '../constants'
import { IPayload } from '../types'

interface IState {
  articles: IArticles
}
interface IArticles {
  articles: IArticle[]
  total: number
}
const mapStateToProps = (state: IState): object => ({
  articles: state.articles.articles,
  total: state.articles.total
})

// dispatch(action)(Function)
// 功能：更新 state
// 参数：action (Object): 描述应用变化的普通对象。Action 是把数据传入 store 的惟一途径，所以任何数据，无论来自 UI 事件，网络回调或者是其它资源如 WebSockets，最终都应该以 action 的形式被 dispatch。按照约定，action 具有 type 字段来表示它的类型。type 也可被定义为常量或者是从其它模块引入。最好使用字符串，而不是 Symbols 作为 action，因为字符串是可以被序列化的。除了 type 字段外，action 对象的结构完全取决于你
// 返回值：(Object): 要 dispatch 的 action。
export const mapDispatchToProps = (dispatch: any) => ({
  fetchArticle: (payload: IPayload) => {
    dispatch({
      payload,
      type: REQUEST_ARTICLES
    })
  }
})

// connect(Function):
// 功能：连接 React 组件与 Redux store
// 参数：[mapStateToProps(state, [ownProps]): stateProps] (Function): 如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
// 参数：[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将action creator的返回值作为参数执行。这些属性会被合并到组件的 props 中。
// 返回值：根据配置信息，返回一个注入了 state 和 action creator 的 React 组件。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
