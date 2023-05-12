const React = require("react")
const Nav = require('./components/Nav')
const app = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "orange",
  };

class Index extends React.Component {
  render() {
    const { logs } = this.props
    return(
        <div style={app}>
        <h1>Captain's Logs</h1>
        <Nav link="/logs/new" text="Enter a New Log"/>
        <ul>
            {logs.map((log, i) => {
                return (
                    <li key={i}>
                        Title:{" "}
                        <a href={`/logs/${log._id}`}>
                            {log.title}
                        </a>{" "}
                        <br />
                         Entry: {log.entry} <br></br>
                        Ship Status: {log.shipIsBroken
                            ? `It is broken`
                            : `It is not broken`}
                        <br />
                    
                        <a href={`/logs/${log._id}/edit`}>Edit This Captain Log</a> 
                        <form action={`/logs/${log._id}?_method=DELETE`} method ="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </li>
                );
            })}
        </ul>
        </div>
    )
  }
}

module.exports = Index