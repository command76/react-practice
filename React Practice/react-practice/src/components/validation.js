import React from 'react';

export default class Validation extends React.Component {
    
    
    render () {
        var output = "";

        if(this.props.length < 5 || this.props.length == null) {
            output = "Text too short";    
        } else {
            output = "Text long enough";
        }

        return (
            <p length={this.props.length}>{output}</p>
        )
    }
    
}








// const VALIDATION = function () {
    
//     var output = "";

//     if(this.props.length < 5) {
//         output = "Text too short";    
//     } else {
//         output = "Text long enough";
//     }

//     return (
//         <p length={this.props.length}>{output}</p>
//     )
    
// }

// export default VALIDATION