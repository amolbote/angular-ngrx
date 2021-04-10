import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from "../store/counter.actions";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"]
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ myCounter: { counter: number } }>) {}

  ngOnInit() {}

  incrementClicked() {
    this.store.dispatch(increment());
  }

  decrementClicked() {
    this.store.dispatch(decrement());
  }

  resetClicked() {
    this.store.dispatch(reset());
  }
}
