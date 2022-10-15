const React = require('react')

class Edit extends React.Component {
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        return (
            <>
                <h1>Edit This Log</h1>
                <nav>
                    <a href="/logs"> Go Back To Logs Home</a>
                </nav>
                <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                    Title: <input type="text" name="title" placeholder={title}></input><br/>
                    Entry: <input type="text" name="entry" placeholder={entry}></input><br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken"/> <br />
                    <input type="submit" value="Edit Log" />
                </form>
            </>
        )
    }
}

module.exports = Edit