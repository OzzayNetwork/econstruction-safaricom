$(function() {

    // Create the chart
    $('#revenue-by-bank').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: 'Bank Revenue collection comparisons',
            style: {
                color: '#a5a8ad'
            }
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total revenue collected'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#a5a8ad'
                }
            }
        },
        xAxis: {
            type: 'category'
        },



        legend: {
            enabled: true
        },

        legend: {
            borderWidth: 0,
            backgroundColor: 'transparent',
            borderColor: '#CCC',
            borderWidth: 1,
            itemStyle: {
                color: 'white',
                font: '600 14px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#a7dbd8',
                font: '600 14px "Muli", sans-serif'
            },
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                //            point: {
                //                events: {
                //                    mouseOver: updateStackColor(0.2),
                //                    mouseOut: updateStackColor(0)
                //                }
                //            }

            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'black',


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            name: 'Bank 1',
            data: [{

                    name: 'Jan',
                    y: 5,
                    drilldown: 'bank 1-jan',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Feb',
                    y: 2,
                    drilldown: 'bank 1-feb',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Mar',
                    y: 4,
                    drilldown: 'bank 1-mar',
                    color: '#e7c500' //yellow
                }, {

                    name: 'Apr',
                    y: 5,
                    drilldown: 'bank 1-apr',
                    color: '#e7c500' //yellow
                }, {
                    name: 'May',
                    y: 2,
                    drilldown: 'bank 1-may',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Jun',
                    y: 4,
                    drilldown: 'bank 1-jun',
                    color: '#e7c500' //yellow
                }, {

                    name: 'Jul',
                    y: 5,
                    drilldown: 'bank 1-jul',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Aug',
                    y: 2,
                    drilldown: 'bank 1-aug',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Sep',
                    y: 4,
                    drilldown: 'bank 1-sep',
                    color: '#e7c500' //yellow
                }, {

                    name: 'Oct',
                    y: 5,
                    drilldown: 'bank 1-oct',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Nov',
                    y: 2,
                    drilldown: 'bank 1-nov',
                    color: '#e7c500' //yellow
                }, {
                    name: 'Dec',
                    y: 4,
                    drilldown: 'bank 1-dec',
                    color: '#e7c500' //yellow
                }]
                //end of national bank collections
        }, {
            //collections by  bank
            name: 'Bank 2',
            data: [{
                    name: 'Jan',
                    y: 1,
                    drilldown: 'bank-2jan',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 5,
                    drilldown: 'bank-2feb',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 2,
                    drilldown: 'bank-2mar',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'bank-2apr',
                    color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'bank-2may',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 2,
                    drilldown: 'bank-2jun',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 1,
                    drilldown: 'bank-2jul',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'bank-2aug',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'bank-2sep',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'bank-2oct',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'bank-2nov',
                    color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'bank-2dec',
                    color: '#0aae8f' // blue
                }]
                //end of bank 1 collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //bank 1 collections by months and dates
                {
                    id: 'bank 1-jan',
                    name: 'Revenue Collected via bank 1 in January 2020',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'bank 1-feb',
                    name: 'Revenue Collected via bank 1 in February 2020',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'bank 1-mar',
                    name: 'Revenue Collected via bank 1 in March 2020',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'bank 1-apr',
                    name: 'Revenue Collected via bank 1 in April 2020',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'bank 1-may',
                    name: 'Revenue Collected via bank 1 in May 2020',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'bank 1-jun',
                    name: 'Revenue Collected via bank 1 in June 2020',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'bank 1-jul',
                    name: 'Revenue Collected via bank 1 in July 2020',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'bank 1-aug',
                    name: 'Revenue Collected via bank 1 in Auust 2020',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'bank 1-sep',
                    name: 'Revenue Collected via bank 1 in September 2020',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'bank 1-oct',
                    name: 'Revenue Collected via bank 1 in October 2020',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'bank 1-nov',
                    name: 'Revenue Collected via bank 1 in November 2020',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'bank 1-dec',
                    name: 'Revenue Collected via bank 1 in December  2020',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of bank 1 collections by months and dates

                //start of bank-2op collections by months and dates
                {
                    id: 'bank-2jan',
                    name: 'Revenue collected Via  Bank in January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'bank-2feb',
                    name: 'Revenue collected Via  Bank February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'bank-2mar',
                    name: 'Revenue collected Via  Bank March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'bank-2apr',
                    name: 'Revenue collected Via  Bank in April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'bank-2may',
                    name: 'Revenue collected Via  Bank May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'bank-2jun',
                    name: 'Revenue collected Via  Bank in June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'bank-2jul',
                    name: 'Revenue collected Via  Bank in July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'bank-2aug',
                    name: 'Revenue collected Via  Bank in August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'bank-2sep',
                    name: 'Revenue collected Via  Bank in September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'bank-2oct',
                    name: 'Revenue collected Via  Bank in October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'bank-2nov',
                    name: 'Revenue collected Via  Bank in November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'bank-2dec',
                    name: 'Revenue collected Via  Bank in December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }
            ]
        }
    })
});