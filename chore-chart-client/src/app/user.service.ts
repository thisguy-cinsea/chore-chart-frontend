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

  private usersUrl = 'api/users'; //URL to web api

  // getUsers(): Observable<User[]> {
  //   // TODO: send the message _after_ fetching the users
  //   this.messageService.add('UserService: fetched users');
  //   return of (USERS);
  // }

  // Get users from the Server
  getUsers(): Observable<User[]> {
    try{
      const url = "http://localhost:8080/api/v1/users";
    return this.http.get<User[]>(url);
    }
    catch(error){console.log(error)}
    
    // return this.http.get<User[]>(this.usersUrl)
      // .pipe(
      //   tap(_ => this.log('fetched users')),
      //   catchError(this.handleError<User[]>('getUsers', []))
      // );
  }

  // getUser(id: string): Observable<User> {
  //   // TODO: send the message _after_ fetching the user
  //   this.messageService.add(`UserService: fether user id${id}`);
  //   return of(USERS.find(user => user.id === id));
  // }

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

  // getUser(id: string): Observable<User> {
  //   // const url = `${this.usersUrl}/${id}`;
  //   const url = ""
  //   return this.http.get<User>(url);
  //   // return this.http.get<User>(url).pipe(
  //   //   tap(_ => this.log(`fetched hero id=${id}`)),
  //   //   catchError(this.handleError<User>(`getUser id=${id}`))
  //   // );
  // }

  getUser(id:String){
    // const url= "http://localhost:8080/{"+id+"}";
    const url= `http://localhost:8080/api/v1/user/${id}`;
    return this.http.get<User>(url);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  // PUT: update the user on the server
  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
      );
  }

  // POST: add a new user to the Server
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUSer'))
    );
  }

  // DELETE: delete the user from the Server
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
}
