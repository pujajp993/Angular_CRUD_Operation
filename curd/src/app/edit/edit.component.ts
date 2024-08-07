import { Component } from '@angular/core';
import { CrudsService } from '../cruds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updatedata(data:any){
    console.log(data);
    this.c.update(data).subscribe(
      (res:any)=>{
        if(res['status']==1){
          alert('updated')
          this.r.navigate(['viewall'])
        }
        else if(res['status']==2){
          alert('Falied')
          
        }
        else{
          alert("variable not set")
        }
      }
    )
  }

  email:any="";
  obj={id:0,name:"",email:"",password:""}
  ngOnInit():void{
    this.email=this.c.email
    this.c.getbyid(this.email).subscribe(
      (res:any)=>{
        console.log(res);
        this.obj.id=res['content']['id']
        this.obj.name=res['content']['name']
        this.obj.email=res['content']['email']
        this.obj.password=res['content']['password']
      }
    )
  }
  constructor(public c:CrudsService,public r:Router){}
}
