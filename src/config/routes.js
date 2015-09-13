var React = require('react')
var Router = require('react-router')
var Route = Router.Route

var Main = require('../components/Main.js')
var MovieSearch = require('../components/MovieSearch.js')
var Collection = require('../components/Collection.js')
var Analytics = require('../components/Analytics.js')

module.exports = (
  <Route name="home" path="/" handler={Main}>
    <Route name="movies" path="/movies" handler={MovieSearch} />
    <Route name="collection" path="/collection" handler={Collection} />
    <Route name="analytics" path="/analytics" handler={Analytics} />
  </Route>
)