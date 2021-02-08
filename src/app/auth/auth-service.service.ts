import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user;
  token: string;
  constructor(public  afAuth: AngularFireAuth, public  router: Router) { }
  async SignUpUser(email: string, password: string)
  {
    await this.afAuth.createUserWithEmailAndPassword(email, password).catch((err) => {console.log(err)});
    // this.sendEmailVerification();
  }

  SignInUser(email: string, password: string)
  {
     this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          this.router.navigate(['./']);
          localStorage.setItem('user', JSON.stringify(this.user));
          this.getToken();
        } else {
          localStorage.setItem('user', null);
        }
      });

    }).catch((err) => {console.log(err)});

  }

getToken()
{
 var tk = JSON.parse(localStorage.getItem('user'));
 this.token = tk.stsTokenManager.accessToken;
 return this.token;
}
IsAuth()
{
 return this.token != null;
}
LogOut()
{
   this.afAuth.signOut();
   localStorage.removeItem('user');
   this.token = null;
}
}
