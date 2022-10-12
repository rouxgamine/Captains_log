const React = require('react')

class New extends React.Component {
    render(){
        return (
            // <h1> New Page </h1>
            <body>
            <form action="/logs" method="POST">
                <input type="text" name='name' placeholder='Title'/>
                <input type="textarea" placeholder='Entry'/>
                <input type="checkbox" name='shipIsBroken'/>
                <input type="submit" />
            </form>      
            
            </body>

        )
    }

}

// Create the view, it should contain a form with the following:
// form with action="/logs"and method="POST"

module.exports = New 