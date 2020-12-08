import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComicComponent } from './details-comic.component';

const routes: Routes = [
  {path: 'details-comic/:id', component: DetailsComicComponent}
]

@NgModule({
  declarations: [DetailsComicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsComicModule { }
