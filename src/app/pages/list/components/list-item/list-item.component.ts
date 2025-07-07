import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../../../shared/types/task';

@Component({
  selector: 'app-list-item',
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  public task = input.required<Task>();
  public complete = output<Task>();
  
  protected onComplete() {
    this.complete.emit(this.task());
  }
}
