import { NasaPhotosObject } from './nasa-photos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaPhotos } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }


  getPhotos(user_id: string,
    api_key: string,
    page: number,
    per_page: number,
    method = 'flickr.people.getPhotos',
    format = 'json',
    extras = 'url_l',
    nojsoncallback = '1'): Observable<NasaPhotos> {
    var params = {
      user_id: String(user_id),
      api_key: String(api_key),
      page: String(page),
      per_page: String(per_page),
      extras,
      format,
      method,
      nojsoncallback,
    }
    console.log(params);
    return this.http.get<NasaPhotosObject>(`https://api.flickr.com/services/rest`, {
      params: params, headers: {
        Accept: 'application/json'
      }
    }).pipe(
      map((photos) => {
        console.log(photos);
        return new NasaPhotos(photos)
      })
    );
  }

}
