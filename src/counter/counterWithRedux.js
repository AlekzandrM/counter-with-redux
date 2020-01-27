import React from 'react'

class CounterWithRedux extends React.Component{
    render(){
        return(
            <div>
                <h2>CounterWithRedux</h2>
                <div>
                    <button>-</button>
                    <span>test</span>
                    <button>+</button>

                    <span>Name: </span>
                    <p>Age: </p>
                </div>
            </div>
        )
    }
}

export default CounterWithRedux