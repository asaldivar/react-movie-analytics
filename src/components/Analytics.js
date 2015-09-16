var React = require('react')
var Highcharts = require('react-highcharts')

var Store = require('../stores/store')

var Analytics = React.createClass({
  render: function() {
    var movies = Store.getAnalyticsCollection()

    var config = {
      title: {
        text: 'Movie Ratings'
      },
      yAxis: {
        title: {
          text: 'IMDB Ratings'
        }
      },
      chart: {
          type: 'column'
      },
      series: [{
        name: 'Movies',
        colorByPoint: true,
        data: movies
      }]
    }

    return (
      <Highcharts config={config}></Highcharts>
    )
  }
})

module.exports = Analytics