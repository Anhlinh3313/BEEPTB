import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorgeService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }

  singleClear(key: string){
    localStorage.removeItem(key);
  }
  
}
