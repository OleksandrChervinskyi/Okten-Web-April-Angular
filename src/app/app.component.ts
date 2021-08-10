import {Component} from '@angular/core';
import {CounterStoreService} from "./services/counter-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gCounter: number


  constructor(private counterStoreService: CounterStoreService) {
    this.counterStoreService.getCurentCounter().subscribe(value => this.gCounter = value)
  }

  setCounter() {
    const oldCountValue = this.counterStoreService.getSnapShotCounter()
    this.counterStoreService.setNewCounter(oldCountValue + 1)
  }
}



