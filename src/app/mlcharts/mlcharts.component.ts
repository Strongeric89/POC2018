import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-mlcharts',
    templateUrl: './mlcharts.component.html',
    styleUrls: ['./mlcharts.component.scss']
})
export class MlchartsComponent implements OnInit {


    //arrays for data from Json response
    public liftLabels = [];
    public liftData_index = [];
    public liftData_model = [];
    public liftData_wizard = [];
    public liftData_random = [];
    public liftFlag = false;

    public gainLabels = [];
    public gainData_index = [];
    public gainData_model = [];
    public gainData_wizard = [];
    public gainData_random = [];
    public gainFlag = false;

    public cmLabels = [];
    public cmData1 = [];
    public cmData2 = [];
    public cmData3 = [];


    //Lift Chart
    public chartType_lift: string = 'line';
    public chartDatasets_lift: Array<any> = [

        {
            data: this.liftData_model, label: this.liftLabels[1]
        },
        {
            data: this.liftData_wizard, label: this.liftLabels[2]
        },
        {
            data: this.liftData_random, label: this.liftLabels[3]
        }

    ];
    public chartLabels_lift: Array<any> = this.liftData_index;
    public chartColors_lift: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 6,
            pointBackgroundColor: 'red',
            pointBorderColor: 'red',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 6,
            pointBackgroundColor: 'green',
            pointBorderColor: 'green',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'purple',
            borderWidth: 6,
            pointBackgroundColor: 'purple',
            pointBorderColor: 'purple',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions_lift: any = {
        responsive: true
    };

    public chartClicked_lift(e: any): void {

    }

    public chartHovered_lift(e: any): void {

    }

    constructor(private dataservice: DataService) {

    }

    // Gain chart - with dynamic data
    public chartType: string = 'line';
    public chartDatasets: Array<any> = [

        {
            data: this.gainData_model, label: this.gainLabels[1]
        },
        {
            data: this.gainData_wizard, label: this.gainLabels[2]
        },
        {
            data: this.gainData_random, label: this.gainLabels[3]
        }

    ];
    public chartLabels: Array<any> = this.gainData_index;
    public chartColors: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 6,
            pointBackgroundColor: 'blue',
            pointBorderColor: 'blue',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'orange',
            borderWidth: 6,
            pointBackgroundColor: 'orange',
            pointBorderColor: 'orange',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 6,
            pointBackgroundColor: 'green',
            pointBorderColor: 'green',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 6,
            pointBackgroundColor: 'red',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 3,
            pointBackgroundColor: 'green',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'purple',
            borderWidth: 3,
            pointBackgroundColor: 'purple',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }





    ngOnInit() {

        //using a json-server   
        this.dataservice.getAll().subscribe(data => {

            console.log(data);

            //getting data from json server for lift
          
            this.liftLabels = data["lift"]["cols"];
            this.liftData_index = data["lift"]["data"][0];
            
            this.liftData_index = this.addPercent(this.liftData_index);
         
            this.liftData_model = data["lift"]["data"][1];
            this.liftData_wizard = data["lift"]["data"][2];
            this.liftData_random = data["lift"]["data"][3];

            //console.log(data["lift"]["data"][0]);
            if (this.liftData_index.length > 0) {
                console.log('recieved lift data')
                this.chartLabels_lift = this.liftData_index;
                this.chartDatasets_lift[0]['data'] = this.liftData_model
                this.chartDatasets_lift[1]['data'] = this.liftData_wizard
                this.chartDatasets_lift[2]['data'] = this.liftData_random

                this.chartDatasets_lift[0]['label'] = this.liftLabels[1];
                this.chartDatasets_lift[1]['label'] = this.liftLabels[2];
                this.chartDatasets_lift[2]['label'] = this.liftLabels[3];
                this.liftFlag = true;
            }

            //getting data from json server for gain
            this.gainLabels = data["gain"]["cols"];
            this.gainData_index = data["gain"]["data"][0];
            this.gainData_index = this.addPercent(this.gainData_index);
         
            this.gainData_model = data["gain"]["data"][1];
            this.gainData_wizard = data["gain"]["data"][2];
            this.gainData_random = data["gain"]["data"][3];


            if (this.gainData_index.length > 0) {
                console.log('recieved gain data')

                this.chartLabels = this.gainData_index;
                this.chartDatasets[0]['data'] = this.gainData_model
                this.chartDatasets[1]['data'] = this.gainData_wizard
                this.chartDatasets[2]['data'] = this.gainData_random

                this.chartDatasets[0]['label'] = this.gainLabels[1];
                this.chartDatasets[1]['label'] = this.gainLabels[2];
                this.chartDatasets[2]['label'] = this.gainLabels[3];
                this.gainFlag = true;



            }

            //getting data from json server for gain
            this.cmLabels = data["cm"]["cols"];
            this.cmData1 = data["cm"]["data"][0];
            this.cmData2 = data["cm"]["data"][1];
            this.cmData3 = data["cm"]["data"][2];

            if (this.cmLabels.length > 0) {

                console.log('recieved cm data')


            }
        }); //end foreach

        //load the charts with new data


    }//end ngOnInit

    public addPercent(labels){
        var newLabels = [];
        labels.forEach((item) =>{
            newLabels.push(item + '%');
        });
        return newLabels;

    }

}
