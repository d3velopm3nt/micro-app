import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable(
    {providedIn: 'root'}
  )
export class AuthService {

    private _userName = '';
    public username$: Subject<string> = new Subject();

    public get userName(): string {
      return this._userName;
    }
  
    login(userName: string, password: string): void {
      this._userName = userName;
      this.username$.next(userName);
    }

    logout(): void {
        this._userName = '';
      }
}