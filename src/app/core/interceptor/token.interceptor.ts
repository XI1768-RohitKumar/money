import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    token = '7934f6e3cf5a70f67e211bc8ed86515ef88102605a742adb36ad256ff69d84b8';

    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        request = request.clone({
        setHeaders: {
                Authorization: `Bearer ${this.token}`
            }
        });
    return next.handle(request);
  }
}
