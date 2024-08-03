import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

  
  constructor(private shared: SharedService){}

  data:any
  ngOnInit(): void {

    const result:any = document.getElementById('result')


    // result.innerHTML = `POINTS: ${localStorage.getItem('points')}`
  
    this.data = this.shared.getData()
    result.innerHTML = `POINTS: ${this.data}`

  }

  back() {

    window.location.href = "/"
    localStorage.clear()
    

  }

}
