import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Interface/users';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  registerUser(user:Users): Observable<Users>
    {
     return this.http.post<Users>('https://localhost:7075/api/Authentication/RegisterUser',user);
     }
}
