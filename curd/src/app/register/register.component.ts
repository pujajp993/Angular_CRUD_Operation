import { Component } from '@angular/core';
import { CrudsService } from '../cruds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  savedata(data:any){
    console.log(data);
    this.c.save(data).subscribe(
      (res:any)=>{
        console.log(res);
        if(res['status']==1){
          alert("success");
          this.r.navigate(["login"])
        }else if(res['status']==2){
          alert("failed")
        }
        else{
          alert("already exist")
        }
      }
    )
  }
constructor(public c:CrudsService,public r:Router){}

}
