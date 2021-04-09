import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"]
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store : ) {}

  ngOnInit() {}

  incrementClicked() {}

  decrementClicked() {}

  resetClicked() {}
}
