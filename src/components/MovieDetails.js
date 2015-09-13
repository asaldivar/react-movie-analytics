var React = require('react')

var Store = require('../stores/store')

var MovieDetails = React.createClass({
  render: function() {
    var movie = this.props.movie

    return (
      <div>
        <h1> {movie.Title} </h1>
      </div>
    )
  }
})

module.exports = MovieDetails