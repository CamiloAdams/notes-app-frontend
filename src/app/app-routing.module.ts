import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", component:HomeComponent },
  { path: 'pages/app', loadChildren: () => import('./pages/app/app.module').then(m => m.AppModule) },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/app/app.module").then(
        (x) => x.AppModule,
      ),
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
