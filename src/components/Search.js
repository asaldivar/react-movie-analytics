var React = require('react')

var Actions = require('../actions/actions')

var Search = React.createClass({
  handleClick: function() {
    var baseURI = 'http://www.omdbapi.com/?t='
    var movieInput = this.refs.movieTitle.getDOMNode().value

    fetch(baseURI + movieInput, {
      method: 'GET'
    }).then(function(response) {
      if (response.status !== 200) return Promise.reject('Falied to get movie.')

      response.json().then(function(data) {
        Actions.setCurrentMovie(data)
      })
    })
  },

  render: function() {
    return (
      <div className="form-group">
        <label>Movie:</label>
        <input type="text" className="form-control" ref="movieTitle" />
        <button type="button" className="btn btn-default" onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})

module.exports = Search