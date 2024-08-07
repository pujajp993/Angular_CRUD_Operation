import { Component } from '@angular/core';
import { CrudsService } from '../cruds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  ary:any=[];


  editdata(data:any){
    console.log(data)
    this.c.setemail(data)
    this.r.navigate(['edit'])
  }
  delete1(data:any){
    this.c.deletedata(data).subscribe(
      (res:any)=>{
        if(res['status']==1){
          alert("success")
          this.c.view().subscribe(
            (res:any)=>{
              console.log(res['data'])
              this.ary=res['data']
            }
          )
        }
        else if(res['status']==2){
          alert("failed")
        }
        else{
          alert("variable not set")
        }
      }
    )
  }


  ngOnInit():void{
    this.c.view().subscribe(
      (res:any)=>{
        console.log(res['data'])
        this.ary=res['data']
      }
    )
  }
  constructor(public c:CrudsService,public r:Router){}
}
