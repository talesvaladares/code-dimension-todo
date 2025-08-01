import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/shared/types/task';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule, 
    NoItemsComponent, 
    ListItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  protected tasks = signal<Task[]>([]);

  private taskService = inject(TasksService);

  protected completedTasks = computed(() => this.tasks().filter(task => task.completed));
  protected pendingTasks = computed(() => this.tasks().filter(task => !task.completed));

  public ngOnInit(): void {
    this.taskService.getAll().subscribe(tasks => this.tasks.set(tasks));
  }

  protected onCompleted(task: Task) {
    this.taskService.patch(task.id, {completed: true}).subscribe(task => this.updateTask(task))
  }

  private updateTask(task: Task) {
    this.tasks.update(tasks => tasks.map(t => t.id === task.id ? task : t));
  }
}
