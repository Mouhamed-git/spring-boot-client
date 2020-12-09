import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/helpers/Album';
import { BackendService } from 'src/app/service/backendService';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.scss']
})
export class DetailsAlbumComponent implements OnInit {

  id: number;
  album: Album;
  constructor(private backendService: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.backendService.onGetById('albums', this.id)
    .subscribe((data: Album) => {
      this.album = data;
      console.log(data);
    }), 
    error => {
      console.log(error);
    }
  }

  goBack(){
    this.router.navigate(['/'])
  }

  deleteAlbum(id:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: ' you will about to delete this album for list',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.isConfirmed) {
        console.log('Clicked Yes, Album deleted!');
        this.backendService.onDelete('albums',+id)
        .subscribe((data) => {
          this.router.navigate(['/'])
        }),
        error => {
          console.log(error);
        }
      } else if (result.isDismissed) {
        console.log('Clicked No, Album is safe!');
      }
    })
  }

}
