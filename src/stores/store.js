var Dispatcher = require('../dispatchers/dispatcher');
var Constants = require('../constants/constants');
var assign = require('react/lib/Object.assign')
var EventEmitter = require('events').EventEmitter;

var movies = []
var currentMovie = {}
var analyticsCollection = []

function addMovie(movie) {
  movies.push(movie)
}

function removeMovie(index) {
  movies.splice(index, 1)
}

function viewMovieDetails(movie) {
  currentMovie = movie
}

function addToAnalyticsCollection(movie) {
  var movieData = {
    name: movie.Title,
    y: parseInt(movie.imdbRating),
    drilldown: movie.Title
  }
  analyticsCollection.push(movieData)
}

// allows our Views/Components to update based upon those events.
var Store = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change') // EventEmitter's event method
  },

  addChangeListener: function(callback) {
    this.on('change', callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  },

  getMovie: function() {
    return currentMovie
  },

  getCollection: function() {
    return movies
  },

  getAnalyticsCollection: function() {
    return analyticsCollection
  }
})

// register with Dispatcher to listen for broadcasts
Dispatcher.register(function(payload) {
  var action = payload.action

  switch(action.actionType) {
    case Constants.ADD_MOVIE:
      addMovie(action.movie)
      break

    case Constants.REMOVE_MOVIE:
      removeMovie(action.index)
      break

    case Constants.SHOW_MOVIE:
      console.log('in store in SHOW_MOVIE')
      viewMovieDetails(action.movie)
      break

    case Constants.ADD_TO_ANALYTICS:
      addToAnalyticsCollection(action.movie)
      break
  }
  console.log('emit event change')
  Store.emitChange()

  return true // resolve dispatcher so it can move on to next action
})

module.exports = Store