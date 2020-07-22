import { Component } from '@angular/core';

@Component({
  selector: 'app-healthyrelationships',
  templateUrl: 'healthyrelationships.page.html',
  styleUrls: ['healthyrelationships.page.scss']
})
export class Tab3Page {
  subTab = 'healthy';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  segmentChanged($event: any) {
    this.subTab = $event.target.value;
  }
}
