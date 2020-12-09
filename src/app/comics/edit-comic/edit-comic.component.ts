import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../../helpers/Comic';
import { BackendService } from '../../service/backendService';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {
  
  id: number;
  comic : Comic;

  constructor(private route: ActivatedRoute, private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {

    this.comic = new Comic();
    console.log(this.comic);
    this.id = this.route.snapshot.params['id'];
    this.backendService.onGetById("/comics/", this.id)
    .subscribe((data: Comic) => {
      this.comic = data;
    }),
    error => {
      console.log(error);
    }
  }

  editComic() {
    this.backendService.onPut('comics', this.comic)
    .subscribe((data: Comic) => {
      console.log(data);
      this.comic = new Comic();
      console.log(this.comic);
      Swal.fire('Your comic has been successful updated!', 'success');
      this.router.navigate(['/comics']);
    })
    error => {
      console.log(error);
    }
   
  }

  onSubmit() {
    this.editComic();
  }

  goBack() {
    this.router.navigate(['/comics'])
  }

}
