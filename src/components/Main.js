var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var RouteHandler = Router.RouteHandler

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="movies">Search Movies</Link></li>
              <li><Link to="collection">Collection</Link></li>
              <li><Link to="analytics">Analytics</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
})

module.exports = Main