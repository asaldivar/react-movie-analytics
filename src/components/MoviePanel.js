var React = require('react')

var Actions = require('../actions/actions')

var MoviePanel = React.createClass({
  handleClick: function() {
    var movie = this.props.movie
    Actions.addToAnalytics(movie)
  },

  render: function() {
    var movie = this.props.movie

    return (
      <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">{movie.Title}</h3>
            <i className="fa fa-plus" onClick={this.handleClick}></i>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = MoviePanel