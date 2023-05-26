import { Injectable } from '@angular/core';
import { Admin } from '../common/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8085/api/admins';
  constructor(private httpClient: HttpClient) { }

  getAdminList(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.baseUrl);

  }
  searchAdmin(theKeyword: string): Observable<Admin[]> {
    // need build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByFirstNameContaining?firstName=${theKeyword}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(reponse => reponse._embedded.admins)
    );
  }


  addAdmin(admin: any): Observable<any> {
    // console.log(theAdmin);
    return this.httpClient.post<any>(`http://localhost:8085/api/admins`, admin);
  }

  updateAdmin(id: number, theAdmin: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8085/api/admins/${id}`, theAdmin);
  }

  deleteAdmin(id: number): Observable<any> {
    // need build URL based on the id
    const deleteUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(deleteUrl);
  }

}

interface GetResponse {
  _embedded: {
    admins: Admin[];
  }
}
