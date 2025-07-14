import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/CountryLayout/CountryLayout.component";
import { ByCapitalComponent } from "./pages/by-capital/by-capital.component";
import { ByCountryComponent } from "./pages/by-country/by-country.component";
import { ByRegionComponent } from "./pages/by-region/by-region.component";
import { CountryComponent } from "./pages/country/country.component";

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalComponent,
      },
      {
        path: 'by-country',
        component: ByCountryComponent,
      },
      {
        path: 'by-region',
        component: ByRegionComponent,
      },
      {
        path: 'by/:code',
        component: CountryComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  }
]

export default countryRoutes;
