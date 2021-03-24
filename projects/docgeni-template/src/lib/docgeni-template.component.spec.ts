import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgeniTemplateComponent } from './docgeni-template.component';

describe('DocgeniTemplateComponent', () => {
  let component: DocgeniTemplateComponent;
  let fixture: ComponentFixture<DocgeniTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocgeniTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocgeniTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
