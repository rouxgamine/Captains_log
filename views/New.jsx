const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <form action="/logs" method="POST">
                <input type="text" placeholder='Title'/>
                <input type="textarea" placeholder='entry'/>
                <input type="checkbox" name='shipIsBroken'/>
                <input type="submit" />










            </form>      
            
            
            
            </>

        )
    }

}




// Create the view, it should contain a form with the following:
// form with action="/logs"and method="POST"


module.exports = New 