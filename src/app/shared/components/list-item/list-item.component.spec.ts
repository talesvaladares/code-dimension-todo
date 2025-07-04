import { TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { Task } from '../../types/task';
import { TestHelper } from '@testing/helpers/test-helper'
import { Component } from '@angular/core';

async function setup(fakeTask: Task) {
  @Component({
    standalone: true,
    imports: [ListItemComponent],
    template: `<app-list-item [task]="task" (complete)="onCompleteTask($event)"></app-list-item>`  
  })
  class HostComponent {
    public task = fakeTask

    public onCompleteTask() {}
  }

  await TestBed.configureTestingModule({
    imports: [HostComponent],
  }).compileComponents();

  const fixture = TestBed.createComponent(HostComponent);
  const testHelper = new TestHelper(fixture);

  return {fixture, testHelper};
}

describe('ListItemComponent', () => {
  it('deve renderizar o título da tarefa', async () => {
    const fakeTask: Task = {
      title: 'Nome da tarefa',
      completed: false
    }

    const {fixture, testHelper} = await setup(fakeTask);
    
    fixture.detectChanges();
    
    const text = testHelper.getTextContentByTestId('list-item-task-title');

    expect(text).toBe(fakeTask.title);
  });

  it('deve emitir um evento ao completar a tarefa', async() => {
    const fakeTask: Task = {
      title: 'Nome da Tarefa',
      completed: false
    }
    
    const { fixture, testHelper } = await setup(fakeTask);

    const onCompletedTaskSpy = jest.spyOn(fixture.componentInstance, 'onCompleteTask');

    fixture.detectChanges();

    const completeBtnDebugEl = testHelper.queryByTestId('list-item-complete-action');
    
    completeBtnDebugEl.triggerEventHandler('click', null);

    expect(onCompletedTaskSpy).toHaveBeenCalled();
  })
});
