import React           from 'react'
import ReactDom        from 'react-dom'
import { createStore } from 'redux'
import reducer         from './reducer'
import { Provider }    from 'react-redux'
import App             from './components/app'

const store = createStore(reducer)

// const { dispatch } = store

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

// document.getElementById('inc').addEventListener('click', inc)
// document.getElementById('dec').addEventListener('click', dec)
// document.getElementById('rnd').addEventListener('click', () => {
//     const payload = Math.floor(Math.random() * 10)
//     rnd(payload)
// })

// const update = () => {
//     // document.getElementById('counter').innerHTML = store.getState()
//     ReactDom.render(
//         <Provider store={store}>
//             <App/>
//         </Provider>,
//         document.getElementById('root'),
//     )
// }

// store.subscribe(update)
//
// update()

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)