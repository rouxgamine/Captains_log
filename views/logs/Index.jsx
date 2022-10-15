const React = require('react')
class Index extends React.Component {
    render(){
        const { logs } = this.props;
        // const logs = this.props.logs
        return (
            <div>
                <h1> Index Page</h1>
                <nav>
                    <a href="/logs/new">Create a New Log</a>
                </nav>
                <ul>
                    { 
                        logs.map((log) => {
                            const { title, entry, shipIsBroken } = log
                            console.log(log)
                            return (
                                <li key={log._id}> 
                                    <a href={`/logs/${log._id}`}>
                                    {title}</a> is {entry}

                                    <br /> 
                                    { 
                                        shipIsBroken? 
                                        'The ship is broken':
                                        'The ship is not broken'
                                    }   
                                    <br />
                                    <form method="POST" action={`/logs/${log}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${entry} ${title}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index 