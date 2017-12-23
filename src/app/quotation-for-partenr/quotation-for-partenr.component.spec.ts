import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationForPartenrComponent } from './quotation-for-partenr.component';

describe('QuotationForPartenrComponent', () => {
  let component: QuotationForPartenrComponent;
  let fixture: ComponentFixture<QuotationForPartenrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationForPartenrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationForPartenrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
