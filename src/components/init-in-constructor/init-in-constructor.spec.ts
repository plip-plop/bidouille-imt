import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitInConstructor } from './init-in-constructor';

describe('InitInConstructor', () => {
  let component: InitInConstructor;
  let fixture: ComponentFixture<InitInConstructor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitInConstructor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitInConstructor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
