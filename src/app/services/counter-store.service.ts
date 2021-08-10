import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterStoreService {

  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor
  () {
  }

  getCurentCounter() {
    return this.counter
  }

  getSnapShotCounter() {
    return this.counter.getValue()
  }

  setNewCounter(newValue: number): void {
    this.counter.next(newValue)
  }
}
