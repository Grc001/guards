import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private role : string = 'ANONYMOUS';

login() {
  return this.role;

}
}