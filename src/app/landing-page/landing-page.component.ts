import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  options!: string;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.options = data['name'];
      console.log(this.options);
    }
    )
  }
}
