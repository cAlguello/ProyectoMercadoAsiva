import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosAdminComponent } from './socios-admin.component';

describe('SociosAdminComponent', () => {
  let component: SociosAdminComponent;
  let fixture: ComponentFixture<SociosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
