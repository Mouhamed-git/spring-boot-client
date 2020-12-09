import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../../service/backendService';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit {


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

  getTitle() {
    return this.addComicForm.get('title');
  }

  getScriptWriter() {
    return this.addComicForm.get('scriptWriter');
  }

  getIllustrator() {
    return this.addComicForm.get('illustrator');
  }

  getPublisher() {
    return this.addComicForm.get('publisher');
  }

  getAlbum() {
    return this.addComicForm.get('albums') as FormArray;
  }

  addAlbum() {
    this.getAlbum().push(this.formBuilder.group({
      number: [],
      title: ['', [Validators.required]],
      publicationDate: [''],
      coverName: ['']
    }))
  }

  onCheckedFavorite(e) {
    if(e.target.checked) {
      this.addComicForm.get('favorite').setValue(true)
    }else 
    this.addComicForm.get('favorite').setValue(false);
  } 

  addComic() {
    console.log(this.addComicForm.value);
    this.backendService.onPost('comics', this.addComicForm.value)
    .subscribe((data) => {
          Swal.fire('Your comic has been successful saved!', 'success');
          this.router.navigate(['/comics'])
        }),
      error => {
        console.log(error);
      }
  }
}
