import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  articles;
  ngOnInit() {
    this.apiService.getNews().subscribe(data => {
      console.log(data);
      this.articles = data['articles'];
    })
  }

}
