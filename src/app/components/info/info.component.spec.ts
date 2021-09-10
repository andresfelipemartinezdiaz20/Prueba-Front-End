import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAlignExample } from './info.component';

describe('InfoComponent', () => {
  let component: TabGroupAlignExample;
  let fixture: ComponentFixture<TabGroupAlignExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupAlignExample ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAlignExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});