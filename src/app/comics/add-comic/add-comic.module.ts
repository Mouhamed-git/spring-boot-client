import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddComicComponent } from './add-comic.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: 'add-comic', component: AddComicComponent}
]

@NgModule({
  declarations: [AddComicComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddComicModule { }
