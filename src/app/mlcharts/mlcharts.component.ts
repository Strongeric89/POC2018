import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-mlcharts',
    templateUrl: './mlcharts.component.html',
    styleUrls: ['./mlcharts.component.scss']
})
export class MlchartsComponent implements OnInit {

    public numofcols = 0; // for css to select different colors


    // Lift chart
    public chartFlag = false;
    public chartType: string = 'line';

    public chartDatasets: Array<any> = [];
    public chartLabels: Array<any> = [];
    public chartColors: Array<any> = [];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }


    // Lift chart
    public chartFlag2 = false;
    public chartType2: string = 'line';

    public chartDatasets2: Array<any> = [];
    public chartLabels2: Array<any> = [];
    public chartColors2: Array<any> = [];

    public chartOptions2: any = {
        responsive: true
    };

    public chartClicked2(e: any): void {

    }

    public chartHovered2(e: any): void {

    }


    constructor(private dataservice: DataService) { }

    ngOnInit() {
        this.dataservice.getAll2().subscribe(data => {
            var number_of_cols_lift = data['debrief']['Lift']['rows'].length;
            var number_of_cols_gain = data['debrief']['Gain']['rows'].length;
            var number_of_cols_cm = data['debrief']['Confusion_Matrix']['columes'].length;
            this.numofcols =  data['debrief']['Lift']['columes'].length;
           
            //var number_of_cols_sample =  data['debrief']['sample']['src']['columes'].length;
        

            //get first element x from each array
            var colBase = 0;
            for (var x = 0; x < number_of_cols_lift; x++) {

                this.chartLabels.push(data['debrief']['Lift']['rows'][x][0] + '%');
                this.dataObj(colBase, number_of_cols_lift, data, 'Lift');
                colBase++;

            }

            colBase = 0;
            for (var x = 0; x < number_of_cols_gain; x++) {

                this.chartLabels2.push(data['debrief']['Gain']['rows'][x][0] + '%');
                this.dataObj(colBase, number_of_cols_gain, data, 'Gain');
                colBase++;

            }


            //console.log(this.chartLabels)

            if (this.chartLabels.length > 0) {
                this.chartFlag = true;
            }

            if (this.chartLabels2.length > 0) {
                this.chartFlag2 = true;
            }


        });//end 



    }//end ngOnInit

    public dataObj(colBase, number_of_cols, data, chartName) {
        var d = []; // array for data

        for (var x = 0; x < number_of_cols; x++) {
            //get data for object
            d.push(data['debrief'][chartName]['rows'][x][colBase])


        }

        //create object     
        var obj = { data: d, label: data['debrief'][chartName]['columes'][colBase] };
        console.log(obj)
        //add object to chart data 
        if (obj.label == 'Index' || obj.label == null) {
            return;
        }

        if (chartName == 'Lift') {
            this.chartDatasets.push(obj);
            //create the css for each
            this.chartColors.push(this.createCSSForChart(colBase + 1)); // + 1 to not select empty index
        }

        if (chartName == 'Gain') {
            this.chartDatasets2.push(obj);
            //create the css for each
            this.chartColors2.push(this.createCSSForChart(colBase + this.numofcols )); // + 3 to select different colors
        }



    }


    public createCSSForChart(index) {

        var colors = [' ', 'red', 'green', 'blue', 'purple', 'yellow', 'orange', 'brown', 'yellow', 'grey'];

        //var randomColor = colors[Math.floor(Math.random()*colors.length)];
        var color = colors[index];

        var cssObj = {
            backgroundColor: 'transparent',
            borderColor: color,
            borderWidth: 6,
            pointBackgroundColor: color,
            pointBorderColor: color,
            pointHoverBackgroundColor: color,
            pointHoverBorderColor: color
        };

        //logic to prevent color from getting picked again
        //console.log(cssObj);

        return cssObj;


    }


      

    }//end ngOnInit


    

 

// }
