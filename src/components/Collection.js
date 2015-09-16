var React = require('react')

var MoviePanel = require('./MoviePanel')
var Store = require('../stores/store')

var Collection = React.createClass({
  getInitialState: function() {
    console.log('rendering Collection')
    return {
      movies: Store.getCollection()
    }
  },

  render: function() {
    var movies = this.state.movies
    var movieNodes = movies.map(function(movie, i) {
      return (
        <MoviePanel
          movie={movie}
          key={i} />
      )
    })

    return (
      <div>
        {movieNodes}
      </div>
    )
  }
})

module.exports = Collection