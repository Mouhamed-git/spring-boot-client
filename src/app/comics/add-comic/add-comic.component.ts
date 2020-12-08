import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../../service/backendService';

import Swal from 'sweetalert2';
import { Album } from 'src/app/helpers/Album';


@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit {

  album : Album;
  addComicForm= this.formBuilder.group({
    title: ['', [Validators.required]],
    scriptWriter: ['', [Validators.required]],
    illustrator: ['', [Validators.required]],
    publisher: ['', [Validators.required]],
    favorite: [false, [Validators.required]],
    albums: this.formBuilder.array([])
     
  })

  constructor(private formBuilder: FormBuilder, private backendService: BackendService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getAlbum() {
    return this.addComicForm.get('albums') as FormArray;
  }

  addAlbum() {
    this.getAlbum().push(this.formBuilder.group({
      number: [0, Validators.required],
      title: ['', Validators.required],
      publicationDate: ['', Validators.required],
      coverName: ['', Validators.required],
    }))
  }

  onCheckedFavorite(e) {
    if(e.target.checked) {
      this.addComicForm.get('acceptTerms').setValue(true)
    }else 
    this.addComicForm.get('acceptTerms').setValue(false);
  } 

  addComic() {
    console.log(this.addComicForm.value);
    this.backendService.onPost('comics', this.addComicForm.value)
    .subscribe((data) => {
          console.log(data);
          Swal.fire('Your comic has been successful saved!', 'success');
          this.router.navigate(['/comics'])
        }),
      error => {
        console.log(error);
      }
  }
}
