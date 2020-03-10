import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_KEY = 'ab21e4ac49504ed5bdc75a43081fc182';
  public getNews(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ab21e4ac49504ed5bdc75a43081fc182');
  }
}
