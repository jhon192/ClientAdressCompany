import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // public forecasts: WeatherForecast[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getForecasts();
  // }

  // getForecasts() {
  //   this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //     (result) => {
  //       this.forecasts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  title = 'clientadresscompany.client';
}
