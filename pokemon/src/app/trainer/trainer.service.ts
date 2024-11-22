import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { TrainerDetail } from './trainer-detail';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl: string = environment.baseUrl + 'trainers';

constructor(private http: HttpClient) { }

getTrainers(): Observable<TrainerDetail[]> {
  return this.http.get<TrainerDetail[]>(this.apiUrl);
  }

getTrainer(id:string): Observable<TrainerDetail>{
    return this.http.get<TrainerDetail>(this.apiUrl+"/"+id)
  }

}
