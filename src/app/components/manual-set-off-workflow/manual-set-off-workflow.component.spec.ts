import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSetOffWorkflowComponent } from './manual-set-off-workflow.component';

describe('ManualSetOffWorkflowComponent', () => {
  let component: ManualSetOffWorkflowComponent;
  let fixture: ComponentFixture<ManualSetOffWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualSetOffWorkflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualSetOffWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
