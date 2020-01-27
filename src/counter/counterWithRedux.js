import React from 'react'
import './counter.css'

class CounterWithRedux extends React.Component{
    render(){
        return(
            <div className='counter'>
                <h2>CounterWithRedux</h2>
                <div className='handlers'>
                    <button>-</button>
                    <span>test</span>
                    <button>+</button>

                    <p>
                        Name:  
                        <span>
                            Age: 
                        </span>
                    </p>   
                </div>
            </div>
        )
    }
}

export default CounterWithRedux