import { Component, OnInit, Output, EventEmiter } from "@angular/core";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"]
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment = new EventEmiter();
  @Output() decrement = new EventEmiter();
  @Output() reset = new EventEmiter();

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
