import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private url: string = environment.url;
    private launchStatusEndPoint: string = '/assets/data/launchstatus.json';
    private launchesEndPoint: string = '/assets/data/launches.json';

    constructor(private http: HttpClient) { }

    public getLaunches$ = (): Observable<any[]> =>
        this.http.get(this.url + this.launchesEndPoint)
            .pipe(map((res: any) => res.launches));

    public getLaunchStatus$ = (): Observable<any[]> =>
        this.http.get(this.url + this.launchStatusEndPoint)
            .pipe(map((res: any) => res.types));
}