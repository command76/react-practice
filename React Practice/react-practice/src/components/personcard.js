import React from 'react';
import AuthContext from './authContext'


const Person = (props) => {
    return (
        <AuthContext.Consumer>
            {(context) => context.authenticated ?
            <div style={props.style2} >
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <h3>{props.age}</h3>
            </div> : <div style={props.style2} >
             <p>Please Login</p>
         </div> }
        </AuthContext.Consumer>
    )
}

const House = (props) => {
   return ( 
    <AuthContext.Consumer>
        {(context) => context.authenticated ? <div style={props.style1} >
                <h1>{props.price}</h1>
                <h2>{props.stories}</h2>
                <h3>{props.color}</h3>
         </div> :console.log(context) }
    </AuthContext.Consumer>
   )
}

export { House, Person };

