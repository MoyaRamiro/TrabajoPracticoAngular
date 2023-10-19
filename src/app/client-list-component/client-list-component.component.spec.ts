import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponentComponent } from './client-list-component.component';

describe('ClientListComponentComponent', () => {
  let component: ClientListComponentComponent;
  let fixture: ComponentFixture<ClientListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListComponentComponent]
    });
    fixture = TestBed.createComponent(ClientListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
