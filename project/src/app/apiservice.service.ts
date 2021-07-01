import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }
  static getCurrentYear(){
    var curr_date = new Date();
    var year = curr_date.getFullYear();
    return year;
  }
  static getDMY(date = null){
    var curr_date = new Date();
    var mnth = ("0" + (curr_date.getMonth() + 1)).slice(-2)
    var dt = ("0" + (curr_date.getDate())).slice(-2)
    return dt = "/" + mnth + "/" + curr_date.getFullYear();
  }
  static convertDMYToYMD(dateStr:any){
    var dateSplit = dateStr.split("/")
    return  (dateSplit[2]+"-"+dateSplit[1]+"-"+dateSplit[0])
  }
}
