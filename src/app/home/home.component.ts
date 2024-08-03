import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SharedService } from '../shared.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private shared: SharedService, private router: Router){}

  points = 0

  submit() {

    const answer1yes:any = document.getElementById('answer1yes')
    const answer1no:any = document.getElementById('answer1no')

    const answer2yes:any = document.getElementById('answer2yes')
    const answer2no:any = document.getElementById('answer2no')

    const answer3yes:any = document.getElementById('answer3yes')
    const answer3no:any = document.getElementById('answer3no')

    const answer4yes:any = document.getElementById('answer4yes')
    const answer4no:any = document.getElementById('answer4no')

    const answer5yes:any = document.getElementById('answer5yes')
    const answer5no:any = document.getElementById('answer5no')

    const answer6yes:any = document.getElementById('answer6yes')
    const answer6no:any = document.getElementById('answer6no')


    if(answer1yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    if(answer2yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    if(answer3yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    if(answer4yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    if(answer5yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    if(answer6yes.checked) {

      this.points++

    } else {

      this.points += 0

    }

    // localStorage.setItem('points',`${this.points}`)

    this.shared.setData(this.points)

   this.router.navigate(['/result'])
    
  }

}
