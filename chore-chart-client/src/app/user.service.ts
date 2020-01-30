import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
// import { Server } from 'http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    // Log a UserService message with the Message Service
    private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private baseUrl = 'http://localhost:8080/api/v1'; //URL to web api
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  // Get users from the Server
  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`
    return this.http.get<User[]>(url)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(userId:String){
    const url= `${this.baseUrl}/user/${userId}`;
    return this.http.get<User>(url);
  }

  
  // PUT: update the user on the server
  updateUser (user: User): Observable<any> {
    console.log("userService.updateUser", user);

    const url = `${this.baseUrl}/user/${user.userId}`;
    return this.http.put(url, user, this.httpOptions)
      .pipe(tap(_ => this.log(`updated user id=${user.userId}`)),
      catchError(this.handleError<any>('updateUser'))
      );
  }

  // POST: add a new user to the Server
  addUser(user) {
    const url = `${this.baseUrl}/users`;
    console.log("user in service",user)
    console.log(this.http.post(url, JSON.stringify(user), this.httpOptions));
    return this.http.post(url, JSON.stringify(user), this.httpOptions)
      .pipe(tap((newUser) => console.log(newUser)),
      catchError(this.handleError<User>('addUSer'))
    );
  }

  // DELETE: delete the user from the Server
  deleteUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/user/${user.userId}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${user.userId}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
