
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LocalStorgeService } from './local-storge.service';
import { MsgService } from './msg-message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from '../../infrastructure/constant';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private localStorgeService: LocalStorgeService,
    private alertService: MsgService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = this.localStorgeService.get(Constant.auths.token);
    var modReq = null;

    if (token) {
      const authHeader = "Bearer " + token;
      var updUrl = { url: req.url, headers: req.headers.set('Authorization', authHeader) };
      modReq = req.clone(updUrl);
    } else {
      var url = { url: req.url };
      modReq = req.clone(url);
    }

    return next.handle(modReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401) {
          this.localStorgeService.clear();
          this.router.navigate([""], { skipLocationChange: true });
          this.alertService.error("Hết phiên làm việc");
        }
        if (err.status == 403) {
          this.router.navigate(["403"]);
        }
        else if (err.status == 0) {

        }
        else {
          this.alertService.error("Lỗi bất ngờ, vui lòng thử lại sau");
        }
      }
    }));
  }
}
