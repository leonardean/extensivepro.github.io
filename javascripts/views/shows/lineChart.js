// Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
var chart;

nv.addGraph(function() {
    chart = nv.models.lineChart();

    chart
        .x(function(d,i) { return i })


    chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
        .tickFormat(d3.format(',.1f'));

    chart.yAxis
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format(',.2f'));

    d3.select('#lineChart svg')
        //.datum([]) //for testing noData
        .datum(sinAndCos())
        .transition().duration(500)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);
    //nv.utils.windowResize(function() { d3.select('#lineChart svg').call(chart) });

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});



function sinAndCos() {
    var sin = [],
        cos = [];

    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) }); //the nulls are to show how defined works
        cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    return [
        {
            area: true,
            values: sin,
            key: "点我：Sine Wave",
            color: "#ff7f0e"
        },
        {
            values: cos,
            key: "点我：Cosine Wave",
            color: "#2ca02c"
        }
    ];
}