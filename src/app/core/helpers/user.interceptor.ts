import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    // if (currentUser) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser}`,
    //     },
    //   });
    // }

    return next.handle(request);
  }
}
