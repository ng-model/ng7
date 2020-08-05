import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl;

  // TI service calls
  getCoronaData() {
    const headers = new HttpHeaders({ 
      // 'Content-Type': 'application/json',
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "3fefad7034msh8ce8b367b00c4cbp14a508jsn9471d93807e4"
    });
    return this.http.get(`${this.url}/country/all`, { headers: headers });
  }

}
