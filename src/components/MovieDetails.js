var React = require('react')

var Add = require('./Add')

var MovieDetails = React.createClass({
  render: function() {
    var movie = this.props.movie

    var posterStyle = {
      backgroundImage: 'url(' + movie.Poster + ')',
      backgroundSize: 'cover',
      height: '200px'
    }

    return (
      <div>
        <h3>{movie.Title}</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={movie.Poster} />
          </div>
          <div className="col-sm-6">
            <h4>Year: <span className="text-muted">{movie.Year}</span></h4>
            <h4>Writer: <span className="text-muted">{movie.Writer}</span></h4>
            <h4>Actors: <span className="text-muted">{movie.Actors}</span></h4>
            <h4>IMDB Rating: <span className="text-muted">{movie.imdbRating}</span></h4>
            <Add movie={movie} />
          </div>
        </div>

      </div>
    )
  }
})

module.exports = MovieDetails