import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
