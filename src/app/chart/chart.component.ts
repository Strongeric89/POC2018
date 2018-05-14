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
   
    {data: [0,
        0.05,
        0.1,
        0.15,
        0.2,
        0.25,
        0.3,
        0.35,
        0.4,
        0.45,
        0.5,
        0.55,
        0.6,
        0.65,
        0.7,
        0.75,
        0.8,
        0.85,
        0.9,
        0.95,
        1
        ], label: 'frequency'},
        {data: [0,
            0.151718782,
            0.303437565,
            0.455156347,
            0.606875129,
            0.758593912,
            0.910312694,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
            
            ], label: 'wizard'},
            {data: [0,
                0.144639215,
                0.282985077,
                0.409539743,
                0.514706948,
                0.603179186,
                0.684704554,
                0.760199689,
                0.841653728,
                0.906091398,
                0.960434499,
                0.986015808,
                0.996791467,
                0.999509111,
                1,
                1,
                1,
                1,
                1,
                1,
                1
                
                
                ], label: 'validation'},
                {data: [0,
                    0.05,
                    0.1,
                    0.15,
                    0.2,
                    0.25,
                    0.3,
                    0.35,
                    0.4,
                    0.45,
                    0.5,
                    0.55,
                    0.6,
                    0.65,
                    0.7,
                    0.75,
                    0.8,
                    0.85,
                    0.9,
                    0.95,
                    1
                    
                    
                    ], label: 'random'},
                    {data: [0,
                        0.147295567,
                        0.285890507,
                        0.409761872,
                        0.517770163,
                        0.609477172,
                        0.693718276,
                        0.775830427,
                        0.853817481,
                        0.916762787,
                        0.966976851,
                        0.989194712,
                        0.998111353,
                        0.999902785,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                        
                        
                        ], label: 'estimation'},
                        {data: [0,
                            0.148159164,
                            0.288644435,
                            0.417765276,
                            0.523563815,
                            0.619253657,
                            0.702505277,
                            0.769322629,
                            0.848699164,
                            0.914441258,
                            0.965800592,
                            0.991808524,
                            0.998597351,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                            
                            ], label: 'test'},


  
  ];
  public chartLabels:Array<any> = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
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

  public chartType1:string = 'bar';      
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
