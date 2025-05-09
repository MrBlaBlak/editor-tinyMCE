import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherComponent } from './ether.component';

describe('EtherComponent', () => {
  let component: EtherComponent;
  let fixture: ComponentFixture<EtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
