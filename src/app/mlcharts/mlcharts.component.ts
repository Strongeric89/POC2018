import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-mlcharts',
  templateUrl: './mlcharts.component.html',
  styleUrls: ['./mlcharts.component.scss']
})
export class MlchartsComponent implements OnInit {

  
    // Gain chart

    public chartType: string = 'line';
    public chartDatasets: Array<any> = [

        {
            data: [ 26.26,44.82,60.82,73.99,84.81,93.05,97.6,99.51,99.98,100,110], label: 'Model'
        },
        {
            data: [10,20,30,40,50,60,70,80,90,100], label: 'Random'
        },
        {
            data: [41.79,83.58,100,100,100,100,100,100,100,100], label: 'Wizard'
        }

    ];
    public chartLabels: Array<any> = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
    public chartColors: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 3,
            pointBackgroundColor: 'blue',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'orange',
            borderWidth: 3,
            pointBackgroundColor: 'orange',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'brown',
            borderWidth: 3,
            pointBackgroundColor: 'brown',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 3,
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


    //Lift Chart
      public chartType_lift: string = 'line';
      public chartDatasets_lift: Array<any> = [
  
          {
              data: [2.63,2.24,2.03,1.85,1.7,1.55,1.39,1.24,1.11,1], label: 'Model'
          },
          {
              data: [1,1,1,1,1,1,1,1,1,1], label: 'Random'
          },
          {
              data: [4.18,4.18,3.33,2.5,2,1.67,1.43,1.25,1.11,1], label: 'Wizard'
          }
  
      ];
      public chartLabels_lift: Array<any> = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
      public chartColors_lift: Array<any> = [
          {
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderWidth: 3,
              pointBackgroundColor: 'red',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(220,220,220,1)'
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
  
      public chartOptions_lift: any = {
          responsive: true
      };
  
      public chartClicked_lift(e: any): void {
  
      }
  
      public chartHovered_lift(e: any): void {
  
      }



       //KPI - node id:2 from response.json
    public chartType2: string = 'bar';
    public chartDatasets2: Array<any> = [
        { data: [0.8131678983333999,0.5541351940317438], label: 'Partition:1' },
        { data: [ 0.8100465635521461,0.538251615149036], label: 'Partition:2' },
        { data: [0.758191325190439,0.4433497768181516], label: 'Partition:3' },

    ];

    public chartLabels2: Array<any> = ['areaUnderROC', 'areaUnderPR'];
    public chartColors2: Array<any> = [

        {
            backgroundColor: 'green',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'orange',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'blue',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
    ];

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
     
        this.dataservice.getAll().subscribe(data=>{
    
            Array.from(data["nodes"]).forEach((item) => {
                console.log("ID:" + item["id"]);
                this.nodes.push(JSON.stringify(item));
            });//end for each
        })
  
    }//end ngOnInit

}
