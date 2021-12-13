import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";

import { Device } from "../models/devices.model";
import { LogMessagesService } from "./log-messages.service";

@Injectable({
  providedIn: "root",
})
export class AppHttpService {
  private api = "api/devices";

  constructor(
    private http: HttpClient,
    private messageService: LogMessagesService
  ) {}

  getAllDevice(): Observable<Device[]> {
    return this.http
      .get<Device[]>(this.api)
      .pipe(catchError(this.handleError<Device[]>("getAllDevice", [])));
  }

  searchDevices(term: string): Observable<Device[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<Device[]>(`${this.api}/?name=${term}`)
      .pipe(catchError(this.handleError<Device[]>("searchDevices", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`DeviceService: ${message}`);
  }
}
