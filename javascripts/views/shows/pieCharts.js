var pieTestdata = [
    {
        key: "点我：One",
        y: 5
    },
    {
        key: "点我：Two",
        y: 2
    },
    {
        key: "点我：Three",
        y: 9
    },
    {
        key: "点我：Four",
        y: 7
    },
    {
        key: "点我：Five",
        y: 4
    },
    {
        key: "点我：Six",
        y: 3
    },
    {
        key: "点我：Seven",
        y: .5
    }
];

nv.addGraph(function() {
    var width = 400,
        height = 400;

    var chart = nv.models.pieChart()
        .x(function(d) { return d.key })
        .y(function(d) { return d.y })
        //.showLabels(false)
        .values(function(d) { return d })
        .color(d3.scale.category10().range())
        .width(width)
        .height(height);

    d3.select("#mypiechart01")
        .datum([pieTestdata])
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

nv.addGraph(function() {

    var width = 500,
        height = 500;

    var chart = nv.models.pieChart()
        .x(function(d) { return d.key })
        //.y(function(d) { return d.value })
        .values(function(d) { return d })
        //.labelThreshold(.08)
        //.showLabels(false)
        .color(d3.scale.category10().range())
        .width(width)
        .height(height)
        .donut(true);

    chart.pie
        .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
        .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

    //chart.pie.donutLabelsOutside(true).donut(true);

    d3.select("#mypiechart02")
        //.datum(historicalBarChart)
        .datum([pieTestdata])
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

    return chart;
});
