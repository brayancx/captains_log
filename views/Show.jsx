const React = require("react")
const Nav = require("./components/Nav")

const app = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

class Show extends React.Component {
    render() {
        const log = this.props.log
        return (
            <div style={app}>
            <Nav link='/logs' text="Home" />
            <br />
            <h2>{log.createdAt.toLocaleString()}</h2> 
            <br />
            Title: {log.title}
            <br />
            Entry: {log.entry}
            <br />
            Ship Status:{log.shipIsBroken? 'The ship is broken... cannot touch this' : 'The ship is not broken'}
            </div>
        )
    }
}

module.exports = Show;