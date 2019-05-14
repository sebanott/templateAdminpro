import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Gragicas1Component } from "./gragicas1/gragicas1.component";

const pagesRoutes:Routes=[
    {
        path:'',
        component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'grafica1',component:Gragicas1Component},
            {path:'',redirectTo:'/dashboard',pathMatch:'full'}
        ]

    }

]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);