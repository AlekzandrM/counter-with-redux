import React from 'react'
import './counter.css'
import { connect } from 'react-redux'

class CounterWithRedux extends React.Component{
    render(){
        return(
            <div className='counter'>
                <h2>CounterWithRedux</h2>
                <div className='handlers'>
                    <button onClick={this.props.decrement}>-</button>
                    <span>{this.props.count.count}</span>
                    <button onClick={this.props.increment}>+</button>

                    <p>
                        Name: {this.props.data.name}
                        <span>
                            Age: {this.props.data.age}
                        </span>
                    </p>   
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        data: store.data,
        count: store.count
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {dispatch({type: 'INCREMENT'})},
        decrement: () => {dispatch({type: 'DECREMENT'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithRedux)