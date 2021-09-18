import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { MockServiceService } from './mock-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  url=`https://run.mocky.io/v3/6a7e8351-4de2-488a-8474-49caeec20ed7`;
  phoneNumber$;

  constructor(private _mockService:MockServiceService){

  }

  ngOnInit(){

    this.phoneNumber$ = this._mockService.get(this.url).pipe(map((result:any)=>result.phoneNumber));

  }



//   getData(url){
//     this._mockService.get(url).subscribe((res)=>{
// this.data = res;
// console.log(res);
//     })
//   }
}
