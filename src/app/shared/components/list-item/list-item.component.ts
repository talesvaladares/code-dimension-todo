import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task';

@Component({
  selector: 'app-list-item',
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  public task = input.required<Task>();
}
