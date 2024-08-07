import { Component } from '@angular/core';
import { CrudsService } from '../cruds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logdata(data:any){
    console.log(data);
    this.c.login(data).subscribe(
      (res:any)=>{
        if(res['status']==1){
          alert("success")
          this.r.navigate(['viewall'])
        }
        else if(res['status']==2)
        {
          alert("failed")
        }
        else{
          alert("not existing")
        }
      }
    )
  }
  constructor(public c:CrudsService,public r:Router){

  }
}
