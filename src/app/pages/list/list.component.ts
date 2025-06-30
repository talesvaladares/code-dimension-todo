import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Task = {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  protected tasks = signal<Task[]>([
    {title: 'Item 1', completed: false},
    {title: 'Item 2', completed: false},
    {title: 'Item 3', completed: false},
    {title: 'Item 4', completed: true},
    {title: 'Item 5', completed: true},
    {title: 'Item 6', completed: true},
  ]);

  protected completedTasks = computed(() => this.tasks().filter(task => task.completed));
  protected pendingTasks = computed(() => this.tasks().filter(task => !task.completed));
}
