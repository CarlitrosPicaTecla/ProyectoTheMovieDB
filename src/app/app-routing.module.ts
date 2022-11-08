import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";
import { MisFavoritasComponent } from "./views/mis-favoritas/mis-favoritas.component";
import { MisValoradasComponent } from "./views/mis-valoradas/mis-valoradas.component";
import { MovieInfoComponent } from "./views/movie-info/movie-info.component";
import { MoviesComponent } from "./views/movies/movies.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "actors", component:  MapExampleComponent},
      { path: "movies", component: MoviesComponent },
      { path: "movieinfo/:id", component : MovieInfoComponent},
      { path: "misvaloradas", component : MisValoradasComponent},
      { path: "misfavoritas", component : MisFavoritasComponent},
      { path: "", redirectTo: "actors", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile/:id", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
