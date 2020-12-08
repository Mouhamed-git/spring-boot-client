import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAlbumComponent } from './details-album.component';

  const routes: Routes = [
    { path:'details-album/:id', component: DetailsAlbumComponent }
  ]

@NgModule({
  declarations: [DetailsAlbumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsAlbumModule { }
