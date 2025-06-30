import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar as tarefas', () => {
    const ulEl = fixture.debugElement.query(By.css('ul'));
    expect(ulEl).toBeTruthy();

    const liEls = ulEl.queryAll(By.css('li'));
    expect(liEls).toBe(3)
  });
});
