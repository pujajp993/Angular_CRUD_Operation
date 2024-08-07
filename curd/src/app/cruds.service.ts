import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {
  save(params:any){
    return this.h.get('http://beyont.in/angularapi/registration.php',{params})
  }
  login(params:any){
    return this.h.get('http://beyont.in/angularapi/login.php',{params})
  }
  view(){
    return this.h.get('http://beyont.in/angularapi/getuser.php')
  }
  email:any=""
  setemail(data:any){
    this.email=data;
  }
  getbyid(params:any)
  {
    return this.h.get('http://beyont.in/angularapi/getuserbyid.php?email='+params)

  }
  update(params:any){
    return this.h.get('http://beyont.in/angularapi/updateuser.php',{params})
  }
  deletedata(params:any){
    return this.h.delete('http://beyont.in/angularapi/deleteuser.php?id='+params)
  }
  constructor(public h:HttpClient) { }
}
