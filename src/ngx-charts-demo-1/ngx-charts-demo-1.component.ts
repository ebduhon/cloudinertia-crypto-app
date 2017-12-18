import { Component } from '@angular/core';

@Component({
  selector: 'ngx-charts-demo-1',
  templateUrl: './ngx-charts-demo-1.component.html',
  styleUrls: ['./ngx-charts-demo-1.component.scss']
})
export class NgxChartsDemo1Component {
  
  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  
  view: any[] = [700, 400];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  
  colorScheme = {
    domain: ['#5aa454', '#a10a28', '#c7b42c', '#aaaaaa']
  };
  
  onSelect(event) {
    console.log(event);
  }

  constructor() { }

  

}
