import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'a';
  constructor(private cs: CoronaService) { }

  ngOnInit() {
    this.cs.getCoronaData().subscribe(
      (results) => {
      console.log(results);
    },
    (error) => {
      console.log(error);
    })
  }

}
