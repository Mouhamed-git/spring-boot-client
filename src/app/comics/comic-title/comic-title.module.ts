import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComicTitleComponent } from './comic-title.component';
import { FormsModule } from '@angular/forms';

const routes: Routes= [
  { path:'title-comic', component: ComicTitleComponent }
]


@NgModule({
  declarations: [ComicTitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComicTitleModule { }
