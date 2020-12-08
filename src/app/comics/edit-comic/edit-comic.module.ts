import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditComicComponent} from './edit-comic.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'edit-comic/:id', component: EditComicComponent}
]

@NgModule({
  declarations: [EditComicComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EditComicModule { }
