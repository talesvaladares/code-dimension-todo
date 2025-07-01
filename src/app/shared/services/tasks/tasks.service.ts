import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../types/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly httpCliente = inject(HttpClient);

  public getAll(): Observable<Task[]> {
    return this.httpCliente.get<Task[]>('/api/tasks');
  }

}
