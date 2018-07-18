import { MatListModule } from '@angular/material/list';
import { DataService } from './../services/data.service';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private dataservice:DataService) { }

    public keys = [];
    public projects = [];

    public modelKey = [];
    public models = [];


    public modelVersionKeys = [];
    public modelVersionData = [];

    public runKeys = [];
    public runData = [];

  ngOnInit() {
    this.dataservice.getAll().subscribe(data =>{
        console.log(data)

        var i = 0;
        for (var key in data) {

            //console.log(key)
            this.keys.push(key)

              //model keys
        for(var key in data[this.keys[i]]['models']){
          this.modelKey.push(key);
      }
        i++;
        }



        for(var i =0;i<this.keys.length;i++){
          console.log(data[this.keys[i]]['models'])
          this.projects.push(data[this.keys[i]])
          this.models.push(data[this.keys[i]]['models'][this.modelKey[i]])


          for(key in data[this.keys[i]]['models'][this.modelKey[i]]['modelVersions']){
            this.modelVersionKeys.push(key)
            this.modelVersionData.push(data[this.keys[i]]['models'][this.modelKey[i]][key])
          }

          for(key in data[this.keys[i]]['models'][this.modelKey[i]]['modelVersions'][this.modelVersionKeys[i]]){

           this.runKeys.push(key)
           this.runData.push(data[this.keys[i]]['models'][this.modelKey[i]]['modelVersions'][this.modelVersionKeys[i]][this.runKeys[i]])

          }

        console.log(this.runData)
        }
    });
  }

  public launch(el){
    alert('launching pipeline for ' + el)
  }

}
