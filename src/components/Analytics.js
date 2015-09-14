var React = require('react')
var Highcharts = require('react-highcharts')

var Store = require('../stores/store')

var Analytics = React.createClass({
  render: function() {
    var movies = Store.getAnalyticsCollection()

    var config = {
      xAxis: {
          type: 'category'
      },
      chart: {
          type: 'column'
      },
      series: [{
        name: 'Brands',
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