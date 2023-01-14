import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { ClientService } from '../services/client.service';
import { CompteService } from '../services/compte.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoaded!: boolean;

  nbEvents: number = 0;
  NbMembers: number = 0;
  Highcharts = Highcharts ;
  chartOptions = {} ;

  constructor(private _renderer2: Renderer2,@Inject(DOCUMENT) private doc: Document, private CS:ClientService, private AS: CompteService) { }


  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    this.addLinks();
    this.CS.getNbClients().subscribe((datsa)=>this.NbMembers=datsa);
    this.AS.getNbComptes().subscribe((datsa)=>this.nbEvents=datsa);
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated '
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      
      tooltip: {
          split: true,
        //   valueSuffix: ' millions'
      },
      credits:{
          enabled : false,
      },
      exporting : {
          enabled :true,
      },
      series: [{
          name: 'Members',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Articles',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Tools',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Events',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }]
  };


  }



  addLinks() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    this.doc.head.appendChild(link);
    link.setAttribute('href', '/assets/adminLTE/plugins/fontawesome-free/css/all.min.css');

    let link2: HTMLLinkElement = this.doc.createElement('link');
    link2.setAttribute('rel', 'stylesheet');
    this.doc.head.appendChild(link2);
    link2.setAttribute('href', 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

    let link3: HTMLLinkElement = this.doc.createElement('link');
    link3.setAttribute('rel', 'stylesheet');
    this.doc.head.appendChild(link3);
    link3.setAttribute('href', '/assets/adminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css');

    let link4: HTMLLinkElement = this.doc.createElement('link');
    link4.setAttribute('rel', 'stylesheet');
    this.doc.head.appendChild(link4);
    link4.setAttribute('href', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700');

    let link5: HTMLLinkElement = this.doc.createElement('link');
    link5.setAttribute('rel', 'stylesheet');
    this.doc.head.appendChild(link5);
    link5.setAttribute('href', '/assets/adminLTE/dist/css/adminlte.min.css');

    let script: HTMLLinkElement = this._renderer2.createElement('script');
    script.setAttribute('src', '/assets/adminLTE/plugins/jquery/jquery.min.js');
    this._renderer2.appendChild(this.doc.body, script);

    let script2: HTMLLinkElement = this._renderer2.createElement('script');
    script2.setAttribute('src', '/assets/adminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js');
    this._renderer2.appendChild(this.doc.body, script2);

    let script3: HTMLLinkElement = this._renderer2.createElement('script');
    script3.setAttribute('src', '/assets/adminLTE/dist/js/adminlte.min.js');
    this._renderer2.appendChild(this.doc.body, script3);
    this.isLoaded = true;
  }

}
