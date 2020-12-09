import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicTitleComponent } from './comic-title.component';

describe('ComicTitleComponent', () => {
  let component: ComicTitleComponent;
  let fixture: ComponentFixture<ComicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
