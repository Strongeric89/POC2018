import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


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


    //Gain chart
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
    
    json: string[];
 
    public nodes: Array<any> = [];
   
    ngOnInit() {
     
        this.dataservice.getAll2().subscribe(data=>{
                    //get number of cols needed
                    var number_of_cols_lift = data['lift']['cols'].length;
                    var number_of_cols_gain = data['gain']['cols'].length;
                    var number_of_cols_cm = data['cm']['cols'].length;
                    var number_of_cols_sample = data['sample_data_1']['cols'].length;
                
                    //Lift Chart
                    this.chartLabels = this.addPercent(data['lift']['data'][0]); // this is the chartLabels (x- axis)
                
                    for(var x=1; x< number_of_cols_lift; x++){
                       
                        //create new object
                        var obj = {data: data['lift']['data'][x], label:data['lift']['cols'][x]};

                        //get random css for that dataset
                        this.chartColors.push(this.createCSSForChart(x));
                       //load the chartData sets with new dynamic data
                        this.chartDatasets.push(obj);

                    }
                
                    if(this.chartLabels.length > 0){
                        this.chartFlag = true;
                    }

                    //Gain Chart
                
                    this.chartLabels2 = this.addPercent(data['gain']['data'][0]); // this is the chartLabels (x- axis)
                
                    for(var x=1; x< number_of_cols_gain; x++){
                       
                        //create new object
                        var obj = {data: data['gain']['data'][x], label:data['gain']['cols'][x]};

                        //get random css for that dataset
                        this.chartColors2.push(this.createCSSForChart(x));
                       //load the chartData sets with new dynamic data
                        this.chartDatasets2.push(obj);

                    }
                
                    if(this.chartLabels2.length > 0){
                        this.chartFlag2 = true;
                    }


        })//end foreach 
  
    }//end ngOnInit


    public addPercent(labels){
        var newLabels = [];
        labels.forEach((item) =>{
            newLabels.push(item + '%');
        });
        return newLabels;

    }

    public createCSSForChart(index){

        var colors = [' ','red','green','blue','purple','yellow','orange','pink','brown','grey'];

        //var randomColor = colors[Math.floor(Math.random()*colors.length)];
        var color = colors[index];
       

        var cssObj = {
        backgroundColor: 'transparent',
        borderColor: color ,
        borderWidth: 6,
        pointBackgroundColor: color,
        pointBorderColor: color,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: color
        };

        //logic to prevent color from getting picked again

        return cssObj;


    }

    



}
