import { Component, input, output } from "@angular/core";
import { Task } from "src/app/shared/types/task";

@Component({
  selector: 'app-list-item',
  standalone: true,
  template: ''
})
export class FakeListItemComponent {
  public task = input.required<Task>();

  public complete = output<Task>();
  
  protected onComplete() {
    this.complete.emit(this.task());
  }

};