import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/comics', pathMatch:'full' },
  {path: '', loadChildren: () => import('./comics/comic-list/comic-list.module').then(m =>m.ComicListModule)},
  {path: '', loadChildren: () => import('./comics/add-comic/add-comic.module').then(m =>m.AddComicModule)},
  {path: '', loadChildren: () => import('./comics/details-comic/details-comic.module').then(m =>m.DetailsComicModule)},
  {path: '', loadChildren: ()=> import('./comics/edit-comic/edit-comic.module').then(m => m.EditComicModule)},
  {path: '', loadChildren: ()=> import('./albums/details-album/details-album.module').then(m => m.DetailsAlbumModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
