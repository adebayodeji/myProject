import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '707b495a028d9f89';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url ='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';
  }
   getWeather(city, state){

         return this.http.get<any>(this.url+'/'+state+ '/'+city+ '.json');
          


 }
}
