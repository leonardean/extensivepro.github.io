var test_data = stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
    return {
        key: '点我：泛盈测试' + i,
        values: data
    };
});
console.log('td',test_data);
var negative_test_data = new d3.range(0,3).map(function(d,i) { return {
    key: '点我：泛盈测试' + i,
    values: new d3.range(0,11).map( function(f,j) {
        return {
            y: 10 + Math.random()*100 * (Math.floor(Math.random()*100)%2 ? 1 : -1),
            x: j
        }
    })
};
});
var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
        .barColor(d3.scale.category20().range());
    chart.multibar
        .hideable(true);
    chart.reduceXTicks(false).staggerLabels(true);
    chart.xAxis
        .showMaxMin(true);
    //  .tickFormat(d3.format(',f'));
    chart.yAxis
        .tickFormat(d3.format(',.1f'));
    d3.select('#discreteBarChart svg')
        .datum(negative_test_data)
        .transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
});