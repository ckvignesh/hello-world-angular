import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Home";
import { LoginComponent } from "./Login";
import { RegisterComponent } from "./Register";

const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path:'*', redirectTo:''}
];

export const AppRoutingModule = RouterModule.forRoot(routes)