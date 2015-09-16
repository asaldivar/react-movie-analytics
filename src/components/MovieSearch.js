var React = require('react')

var Store = require('../stores/store')
var Search = require('./Search')
var MovieDetails = require('./MovieDetails')

function getMovie() {
  return {
    movie: Store.getMovie()
  }
}

var MovieSearch = React.createClass({
  getInitalState: function() {
    return getMovie()
  },

  // component needs to be aware of changes
  componentWillMount: function() {
    // we have to give the functions context so they can manipulate the state of this component
    console.log('listen for event')
    Store.addChangeListener(this._onChange)
  },

  // need this prevent memory leak
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange)
  },

  _onChange: function() {
    console.log('an event was emitted, let me update my state')
    this.setState(getMovie())
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