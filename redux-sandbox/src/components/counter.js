import React        from 'react'
import { connect }  from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
            <button className="btn btn-primary btn-lg" onClick={inc}>INC</button>
            <button className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
//     return {
//         inc,
//         dec,
//         rnd: () => {
//             const payload = Math.floor(Math.random() * 10)
//             rnd(payload)
//         },
//     }
// }

export default connect(mapStateToProps, actions)(Counter)