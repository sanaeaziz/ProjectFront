import { Injectable } from '@angular/core';
import { Admin } from '../common/admin';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  // searchAdmin(searchTerm: string): Observable<Admin[]> {
  //   let params = new HttpParams();
  //   params = params.set('searchTerm', searchTerm);
  //   console.log(params);
  //   return this.httpClient.get<Admin[]>(`${this.baseUrl}/search`, { params });
  // }



  searchAdmin(LastName: string): Observable<Admin[]> {

    // need build URL based on the keyword
    // const params = new HttpParams().set('lastName', lastName);
    // return this.httpClient.get<Admin[]>(this.baseUrl, { params });
    const searchUrl = `http://localhost:8085/api/admins/search?lastName=${LastName}`;
    return this.httpClient.get<Admin[]>(searchUrl);



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

  getDepartementList(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8085/api/departements');
  }

}

interface GetResponse {
  _embedded: {
    admins: Admin[];
  }
}
