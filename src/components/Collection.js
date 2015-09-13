var React = require('react')
var Store = require('../stores/store')

var Collection = React.createClass({
  getInitialState: function() {
    return {
      movies: Store.getCollection()
    }
  },

  render: function() {
    return (
      <div> Collection </div>
    )
  }
})

module.exports = Collection