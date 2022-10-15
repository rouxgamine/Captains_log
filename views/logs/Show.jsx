const React = require('react');
class Show extends React.Component {
    render(){
        let {title, entry, shipIsBroken} = this.props.log 
     return(
     <> 
        <nav>
            <a href="/logs/">Home Page</a>
        </nav>
        <h1> {title[0].toUpperCase() + title.substring(1)} Show Page </h1>
        <p>{title} is {entry},  {shipIsBroken? 'the ship is broken': 'the ship is not broken'} </p>
     </>
     )
    } 
 }
 
 module.exports = Show