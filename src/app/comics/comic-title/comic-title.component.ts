import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Comic } from 'src/app/helpers/Comic';
import { BackendService } from 'src/app/service/backendService';


@Component({
  selector: 'app-comic-title',
  templateUrl: './comic-title.component.html',
  styleUrls: ['./comic-title.component.scss']
})
export class ComicTitleComponent implements OnInit {

  slug : String;
  comic: Comic[];
  searchComic = false;
  
  constructor(private backendService: BackendService, private router: Router) {}

  onSubmit(form: NgForm){
    this.searchComic = true;
    const value =  form.value['slug'];
    this.backendService.onGetByTitle('comics', value)
    .subscribe((data: Comic[]) => {
      this.comic = data.filter(elm => elm.title.includes(value));
    }),
    error => {console.log(error)}
  }

   ngOnInit(): void {

   }
}
