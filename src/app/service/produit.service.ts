import { Injectable } from '@angular/core';
import { throwError, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { retry, catchError } from "rxjs/operators";
import { Rayon } from '../entities/rayon';
import { Produit } from '../entities/produit';

const API_URI = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  hostRayon: string = API_URI + "rayons/";
  hostProduit: string = API_URI + "produits/";
  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    //CRUD PRODUIT
    // CREATE
  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.hostProduit + "save", JSON.stringify(produit),this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // UPDATE
  updateProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.hostProduit + "update",JSON.stringify(produit),this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // DELETE
  deleteProduit(produit: Produit) {
    return this.http.put<Produit>(this.hostProduit + "delete/",JSON.stringify(produit), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.hostProduit + "list/")
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  getOneProduit(id): Observable<Produit> {
    return this.http.get<Produit>(this.hostProduit + "list/" + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }


  // CRUD RAYON
  // CREATE
  saveRayon(rayon: Rayon): Observable<Rayon> {
    return this.http.post<Rayon>(this.hostRayon + "save", JSON.stringify(rayon),this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // UPDATE
  updateRayon(rayon: Rayon): Observable<Rayon> {
    return this.http.put<Rayon>(this.hostRayon + "update",JSON.stringify(rayon),this.httpOptions )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // DELETE
  deleteRayon(rayon: Rayon) {
    return this.http.put<Rayon>(this.hostRayon + "delete/",JSON.stringify(rayon), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  listeRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(this.hostRayon + "list/")
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  getOneRayon(id): Observable<Rayon> {
    return this.http.get<Rayon>(this.hostRayon + "list/" + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
    // error handler
    errorHandl(error) {
      let errorMessage = "";
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
