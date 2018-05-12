import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


    // node 0
 
  public chartType:string = 'line';      
  public chartDatasets:Array<any> = [
    {data: [38927,  4894, 5021, 48842], label: 'node:0'},
  
  ];
  public chartLabels:Array<any> = ['PartitionTrain(1)Count', 'PartitionTest(3)Count','PartitionValidation(2)Count','dataframeRowCount'];
  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = { 
      responsive: true
  };

  public chartClicked(e: any): void { 
       
  } 
  
  public chartHovered(e: any): void {
       
  }

  // node 1

  public chartType1:string = 'pie';      
  public chartDatasets1:Array<any> = [
    {data: [0.9999999688693003,1.7106563550809834,1.3430494648041178], label: 'node:1'},
  
  ];
  public chartLabels1:Array<any> = ['Explained Variance 1', 'Explained Variance 2','Explained Variance 3'];
  public chartColors1:Array<any> = [
   
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions1:any = { 
      responsive: true
  };

  public chartClicked1(e: any): void { 
       
  } 
  
  public chartHovered1(e: any): void {
       
  }


  //node 2
      public chartType2:string = 'bar';      
      public chartDatasets2:Array<any> = [
        {data: [0.42771606912602533, 0.18294103578861887, 0.45888073465505386,0.3654058605060049], label: 'Part-val:1'},
        {data: [0.4228153703345113, 0.1787728373911099, 0.28232636903502417,0.36123766210857067], label: 'Part-val:2'},
        {data: [0.42201004583447577, 0.17809247878521633, 0.3975264573037318,0.36055730350267673], label: 'Part-val:3'},
      
      ];
 
      public chartLabels2:Array<any> = ['rmse','mse','r2','mae'];
      public chartColors2:Array<any> = [
       
          {
              backgroundColor: 'rgba(151,187,205,0.2)',
              borderColor: 'rgba(151,187,205,1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(151,187,205,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(151,187,205,1)'
          },
          {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(120,120,120,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
      ];
    
      public chartOptions2:any = { 
          responsive: true
      };
    
      public chartClicked2(e: any): void { 
           
      } 
      
      public chartHovered2(e: any): void {
           
      }




  constructor() { }

  ngOnInit() {

    
   
  
  }


}
