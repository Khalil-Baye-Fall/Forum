import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortoForComponent } from './forto-for.component';

describe('FortoForComponent', () => {
  let component: FortoForComponent;
  let fixture: ComponentFixture<FortoForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortoForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
