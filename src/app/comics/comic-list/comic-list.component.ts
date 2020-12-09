import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../../helpers/Comic';
import { BackendService } from '../../service/backendService';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  showAlert: boolean = false;
  comics : Comic[];
  id: number;

  constructor(private backendService: BackendService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadComic();
  }

  loadComic() {
    this.backendService.onGet('comics')
    .subscribe((data: Comic[]) => {
      this.comics = data;
    }),
    error => {
      console.log(error);
    }
  }

  detailsComic(id:number) {
    this.router.navigate(['details-comic',id]);
  }

  editComic(id: number) {
    this.router.navigate(['edit-comic', id]);
  }

  // Custom Buttons
  deleteComic(id:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: ' you will about to delete this comic',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.isConfirmed) {
        console.log('Clicked Yes, Comic deleted!');
        this.backendService.onDelete('comics',+id)
        .subscribe((data) => {
          this.showAlert = true;
          this.loadComic();
        }),
        error => {
          console.log(error);
        }
      } else if (result.isDismissed) {
        console.log('Clicked No, Comic is safe!');
      }
    })
  }

  detailsAlbum(id: number) {
    this.router.navigate(['details-album', id]);
  }

}
