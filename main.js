$(function () {
    var $picture = $('#picture');

    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Hawk Inundation Model'
        },
        subtitle: {
            text: 'Click point for value'
        },

        xAxis: {

            
            categories: ['8/1/14 1:00PM', '8/1/14 2:00 PM ', '8/1/14 3:00 PM', '8/1/14 4:00 PM', '8/1/14 10:00 PM', 
            '8/1/14 11:00 PM', '8/2/14 12:00 AM', '8/2/14 1:00 AM', '8/2/14 11:00 AM', '8/2/14 12:00 PM']

            
        },

        yAxis: {
            title: {

                text: 'Elevation (NAVD88)'
            }

        },
        plotOptions: {
            series: {
                point: {
                    events: {
                        click: function () { //can be hover
                            $picture.html('x: ' + this.x);
                            



                            //var a = 2;
                            var a = this.x;
                            //reporting.appendChild(a);
                            //console.log(a);



                            var img = new Image();
                            
                            

                            img.src = "http://arcgis5.njmeadowlands.gov/municipal/dev/highchartsfloodlevel/pics/" + a + ".jpg";
                            img.height = "400";
                            img.width = "700";
                            picture.appendChild(img);
                        }


                    }
                },
                // events: {
                    // mouseOut: function () {
                        // $picture.empty();
                    // }
                // }
            }
        },

        tooltip: {
            enabled: false
        },

        series: [{
            name: 'Time',
            data: [2.52, 2.45, 1.83, 0.88, 0.42, 1.48, 2.19, 2.55, 1.10, 2.04]
        }]


    });
});