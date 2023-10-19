import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddComponentComponent } from './client-add-component.component';

describe('ClientAddComponentComponent', () => {
  let component: ClientAddComponentComponent;
  let fixture: ComponentFixture<ClientAddComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAddComponentComponent]
    });
    fixture = TestBed.createComponent(ClientAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
