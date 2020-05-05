import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }


public login(email, password){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
}

public signup(email, password){
  return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
}

public isAuthenticated(): boolean {
  const token = localStorage.getItem('uid');
  if(token){
    return true;
  }
  else
  {
    return false;
  }
}

}
