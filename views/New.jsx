const React = require("react")
const app = {
    width: "100%",
    height: "170vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "red",
  };

class New extends React.Component {
    render() {
      return(
        <div style={app}>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            Entry: <input type="textarea" name="entry" />
            Ship Is Broken: 
            <input 
              type="checkbox" 
              name="shipIsBroken" 
            /> 
            <input type="submit" value="Submit" />       
          </form>
        </div>
      )
    }
  }
  
  module.exports = New