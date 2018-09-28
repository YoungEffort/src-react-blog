import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './index.less'
import reducer from './reducers'
import RouterMap from './router/RouterMap'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

// createStore(reducer, [preloadedState], enhancer)
// 功能：创建一个 Redux store 来以存放应用中所有的 state。
// 参数：reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
// enhancer (Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
// 返回值：(Store): 保存了应用所有 state 的对象。改变 state 的惟一方法是 dispatch action。你也可以 subscribe 监听 state 的变化，然后更新 UI。
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <RouterMap />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
)
