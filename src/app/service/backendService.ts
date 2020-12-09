import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  onGet(url:String) {
    return this.httpClient.get(environment.apiUrl+url).pipe(response=>response) 
  }


  onGetById(url:String, id:number) {
    return this.httpClient.get(environment.apiUrl+url+'/'+id).pipe(response=> response)
  }

  onGetByTitle(url: String, title: String) {
    return this.httpClient.get(environment.apiUrl+url+'/?slug='+title).pipe(response=> response)
  }

  onPost(url:String, data:any) {
    return this.httpClient.post(environment.apiUrl+url, data).pipe(response=>response) 
  }

  onPut(url:String, data:any) {
    return this.httpClient.put(environment.apiUrl+url+'/'+data.id, data).pipe(response=>response) ;
  }

  onDelete(url: String, id: number ) {
    return this.httpClient.delete(environment.apiUrl+url+'/'+id).pipe(response=>response)
  }
}
 