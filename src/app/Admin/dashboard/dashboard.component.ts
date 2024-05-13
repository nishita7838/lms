import { Component ,Input} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
chart:any;
@Input() title!:string;
@Input() value!:number;
@Input() color!:string;

constructor(){}
ngOnInit():void{
  this.createPieChart();

}
createPieChart():void{
const ctx=document.getElementById('pieChart') as HTMLCanvasElement;
//const ctx=this.pieChartCanvas.nativeElement.getContext('2d');
this.chart=new Chart(ctx,{
  type:'pie',
  data:{
    labels:['Fiction','Non Fiction','Biographies','Self Help','Holy Books'],
    datasets: [{
      label:'Books By Genre',
      data:[300,200,150,100,50],
      backgroundColor:[
        'rgba(255,99,132,0.7)',
        'rgba(54,162,235,0.7)',
        'rgba(255,206,86,0.7)',
        'rgba(75,192,192,0.7)',
        'rgba(153,102,255,0.7)',
      ],
      borderWidth:1
    }]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{
        display:true,
        position:'right'
      },
      datalabels:{
        color:'#fff',
        formatter:(value,context)=>{
          return value;
        }

      }
     
    }
  },
  plugins:[pluginDataLabels.default]
})
}
}
