import React from 'react'

class TrueOrFalseButton extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props._onClick}>{this.props.trueOrFalse.toString()}</button>
            </div>
        )
    }
}

export default TrueOrFalseButton