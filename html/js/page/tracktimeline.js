if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$(function() {
    "use strict";

    $(document).ready(function() {
        var options = {
            chart: {
                height: 80,
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
            document.querySelector("#apex-timeline-one"),
            options
        );
        
        chart.render();
    });

    $(document).ready(function() {
        var options = {
            chart: {
                height: 80,
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
            document.querySelector("#apex-timeline-two"),
            options
        );
        
        chart.render();
    });

    $(document).ready(function() {
        var options = {
            chart: {
                height: 80,
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
            document.querySelector("#apex-timeline-three"),
            options
        );
        
        chart.render();
    });
   
    $('#timetracker-table')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
    });
    $('#timetracker-table-two')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
    });
    $('#timetracker-table-three')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
    });
    $('#timetracker-table-four')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
    });
    $('#timetracker-table-five')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
    });
    
});

function chartloadone() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 150,
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
            document.querySelector("#apex-timeline-four"),
            options
        );
        
        chart.render();
    }, 300);
}

function chartloadtwo() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 150,
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
            document.querySelector("#apex-timeline-five"),
            options
        );
        
        chart.render();
    }, 300);
}

function chartloadthree() {
    setTimeout(function () {
        var options = {
            chart: {
                height: 150,
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
            document.querySelector("#apex-timeline-six"),
            options
        );
        
        chart.render();
    }, 300);
}