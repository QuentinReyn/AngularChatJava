import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(){ }

  appVersion = "";
  lastBuildDate = new Date();

  ngOnInit() {
    this.appVersion = "0.01";
  }
}
