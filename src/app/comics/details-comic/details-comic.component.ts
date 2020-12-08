import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../../helpers/Comic';
import { BackendService } from '../../service/backendService';

@Component({
  selector: 'app-details-comic',
  templateUrl: './details-comic.component.html',
  styleUrls: ['./details-comic.component.scss']
})
export class DetailsComicComponent implements OnInit {
  
  id: number;
  comic : Comic;
  constructor(private router: Router, private route: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit(): void {
    this.comic = new Comic();
    this.id = this.route.snapshot.params['id'];
    this.backendService.onGetById('/comics', this.id)
    .subscribe((data: Comic) => {
      this.comic = data;
    }), 
    error => {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/comics'])
  }
}
