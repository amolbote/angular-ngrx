import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"]
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  incrementClicked() {
    this.increment.emit();
  }

  decrementClicked() {
    this.decrement.emit();
  }

  resetClicked() {
    this.reset.emit();
  }
}
