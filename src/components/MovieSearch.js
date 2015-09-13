var React = require('react')

var Store = require('../stores/store')
var Search = require('./Search')
var MovieDetails = require('./MovieDetails')

var MovieSearch = React.createClass({
  getInitalState: function() {
    return {
      movie: {}
    }
  },

  componentWillMount: function() {
    // we have to give the functions context so they can manipulate the state of this component
    Store.addChangeListener(function() {
      this.setState({movie: Store.getMovie()})
    }.bind(this))
  },

  render: function() {
    return (
      <div>
        <Search />
        {
          this.state ? <MovieDetails movie={this.state.movie} /> : null
        }
      </div>
    )
  }
})

module.exports = MovieSearch