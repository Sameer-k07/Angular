import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor( 
    private myRoute: Router){ 
    } 
    canActivate( 
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    if(localStorage.getItem('user_cred')== "true"){ 
    return true; 
    }
    else{ 
    //this.myRoute.navigate(["/register"]); 
    //alert('Please register yourself');
    return false; 
    } 
    } 
}
