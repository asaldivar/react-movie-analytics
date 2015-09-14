var React = require('react')

var Actions = require('../actions/actions')

var Add = React.createClass({
  handleClick: function(movie) {
    var movie = this.props.movie

    Actions.addMovie(movie)
  },

  render: function() {
    return (
      <button
        className="btn btn-default"
        onClick={this.handleClick}>Add To Collection</button>
    )
  }
})

module.exports = Add