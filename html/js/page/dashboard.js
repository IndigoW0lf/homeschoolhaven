if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

var options = {
    chart: {
        height: 120,
        type: 'rangeBar',
        toolbar: {
            show: false,
        }
    },        
    plotOptions: {
        bar: {
            horizontal: true,                
        }
    },
    colors: ['#ff4560', '#f7c56b'],

    series: [{
        name: 'Joe',
        data: [{
            x: '',
            y: [new Date('2022-01-31').getTime(), new Date('2022-02-01').getTime()] 
        }]
    }],
    yaxis: {
        min: new Date('2022-01-31').getTime(),
        max: new Date('2022-02-01').getTime()
    },
    xaxis: {
        type: 'datetime'
        },
    fill: {
    type: 'gradient',
    gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    }
}
var chart = new ApexCharts(
    document.querySelector("#apex-timeline"),
    options
);
chart.render();

function chartFunctiontwo() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 300,
                type: 'area',
                stacked: true,
                toolbar: {
                    show: false,
                },
                events: {
                    selection: function(chart, e) {
                    console.log(new Date(e.xaxis.min) )
                    }
                },
            },
    
            colors: ['#f8b500'],
            dataLabels: {
                enabled: false
            },
    
            series: [
                {
                    name: 'Working',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 3, {
                        min: 1,
                        max: 10
                    })
                }
            ],
    
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },
    
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                show: true,
            },
            xaxis: {
                type: 'datetime',            
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
            },
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-stacked-area-yes"),
            options
        );
        chart.render();
        function generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
    }, 300);
}

function chartFunctionthree() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 300,
                type: 'area',
                stacked: true,
                toolbar: {
                    show: false,
                },
                events: {
                    selection: function(chart, e) {
                    console.log(new Date(e.xaxis.min) )
                    }
                },
            },

            colors: ['#00bdaa'],
            dataLabels: {
                enabled: false
            },

            series: [
                {
                    name: 'Hours',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 8, {
                        min: 1,
                        max: 10
                    })
                }
            ],

            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },

            legend: {
                position: 'top',
                horizontalAlign: 'right',
                show: true,
            },
            xaxis: {
                type: 'datetime',            
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
            },
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-stacked-area"),
            options
        );
        chart.render();
        function generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
    }, 300);
}

function chartFunctionfour() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 300,
                type: 'area',
                stacked: true,
                toolbar: {
                    show: false,
                },
                events: {
                    selection: function(chart, e) {
                    console.log(new Date(e.xaxis.min) )
                    }
                },
            },

            colors: ['#ff4560'],
            dataLabels: {
                enabled: false
            },

            series: [
                {
                    name: 'Hours',
                    data: generateDayWiseTimeSeries(new Date('02 Jan 2017 GMT').getTime(), 31, {
                        min: 1,
                        max: 10
                    })
                }
            ],

            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },

            legend: {
                position: 'top',
                horizontalAlign: 'right',
                show: true,
            },
            xaxis: {
                type: 'datetime',            
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
            },
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-stacked-area-month"),
            options
        );
        chart.render();
        function generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
    }, 300);
}

$(function() {

    "use strict"; 
   
    //**************//
 
    //**************//
        var options = {
            chart: {
                height: 180,
                type: 'radialBar',
            },
            colors: ['var(--chart-color1)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            series: [50],
            labels: ['Design'],
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-circle-chart-one"),
            options
        );
        chart.render();

     //**************//
        var options = {
            chart: {
                height: 180,
                type: 'radialBar',
            },
            colors: ['var(--chart-color5)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            series: [80],
            labels: ['Devlopment'],
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-circle-chart-two"),
            options
        );
        chart.render();

    //**************//
        var options = {
            chart: {
                height: 180,
                type: 'radialBar',
            },
            colors: ['var(--chart-color3)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            series: [40],
            labels: ['Marketing'],
        }
        var chart = new ApexCharts(
            document.querySelector("#apex-circle-chart-three"),
            options
        );
        chart.render();

});


$(function () {
    $('#aniimated-thumbnials').lightGallery({
        thumbnail: true,
        close: true,
        selector: 'a'
    });
});


