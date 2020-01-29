import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable, APP_INITIALIZER } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users =  [
      {
          id: "e3b99786-f9aa-4d0c-af9d-0bd3a8c06478",
          firstName: "Will",
          lastName: "Ancona",
          emailAddress: "w.ancona@gmail.com",
          userName: "w.ancona",
          passWord: "password123"
      },
      {
          id: "64a249c8-37ad-43ed-a440-2fc0d0f55f16",
          firstName: "Breanna",
          lastName: "Thompson",
          emailAddress: "b.thompson@gmail.com",
          userName: "b.thompson",
          passWord: "password123"
      },
      {
          id: "801e1189-df3d-47c4-b4a4-eb4e6cd6b876",
          firstName: "Nakayla",
          lastName: "Ancona",
          emailAddress: "k.ancona@gmail.com",
          userName: "k.ancona",
          passWord: "password123"
      },
      {
          id: "d51175e3-ac96-446d-8775-379791f99143",
          firstName: "Joshua",
          lastName: "James",
          emailAddress: "j.james@gmail.com",
          userName: "j.james",
          passWord: "password123"
      },
      {
          id: "bf94a6dd-da8e-41cc-bbfa-cda706398cea",
          firstName: "Nadya",
          lastName: "Ancona",
          emailAddress: "n.ancona@gmail.com",
          userName: "n.ancona",
          passWord: "password123"
      },
      {
          id: "789a0298-f30e-4bde-a33c-9d352df38365",
          firstName: "Kristen",
          lastName: "James",
          emailAddress: "k.james@gmail.com",
          userName: "k.james",
          passWord: "password123"
      },
      {
          id: "b246c2bb-5b54-4ac2-a8ea-b1f28a44dd37",
          firstName: "Bria",
          lastName: "Ancona",
          emailAddress: "b.ancona@gmail.com",
          userName: "b.ancona",
          passWord: "password123"
      },
      {
          id: "22bf21ad-08a2-4e91-917e-9e19fac65cf9",
          firstName: "Zoey",
          lastName: "James",
          emailAddress: "z.james@gmail.com",
          userName: "z.james",
          passWord: "password123"
      },
      {
          id: "e0e49d25-55fa-4aaf-b9f9-0d521c161f94",
          firstName: "Ava",
          lastName: "James",
          emailAddress: "a.james@gmail.com",
          userName: "a.james",
          passWord: "password123"
      },
      {
          id: "fba5fa0c-36a3-4fac-a793-e71edd7aae59",
          firstName: "William",
          lastName: "Ancona",
          emailAddress: "jr.ancona@gmail.com",
          userName: "jr.ancona",
          passWord: "password123"
      }
  ];
  return { users };
}

  // Overrides the genId method to ensure that a user has an id.
  // If the user array is empty, the method below runs the initial
  // number (11).  If the users array is not empty, the method 
  // below returns the highest user id + 1.
  // genId(users: User[]): number {
  //   return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1: 11;
  // }
}