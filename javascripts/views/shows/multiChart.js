

var multiChartTestData = stream_layers(7,10+Math.random()*100,.1).map(function(data, i) {
    return {
        key: '点我：泛盈测试' + i,
        values: data.map(function(a){a.y = a.y * (i <= 1 ? -1 : 1); return a})
    };
});

multiChartTestData[0].type = "area"
multiChartTestData[0].yAxis = 1
multiChartTestData[1].type = "area"
multiChartTestData[1].yAxis = 1
multiChartTestData[2].type = "line"
multiChartTestData[2].yAxis = 1
multiChartTestData[3].type = "line"
multiChartTestData[3].yAxis = 2
multiChartTestData[4].type = "bar"
multiChartTestData[4].yAxis = 2
multiChartTestData[5].type = "bar"
multiChartTestData[5].yAxis = 2
multiChartTestData[6].type = "bar"
multiChartTestData[6].yAxis = 2


nv.addGraph(function() {
    var chart = nv.models.multiChart()
        .margin({top: 30, right: 60, bottom: 50, left: 70})
        .color(d3.scale.category10().range());

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis1
        .tickFormat(d3.format(',.1f'));

    chart.yAxis2
        .tickFormat(d3.format(',.1f'));


    d3.select('#multiChart svg')
        .datum(multiChartTestData)
        .transition().duration(500).call(chart);

    return chart;
});
