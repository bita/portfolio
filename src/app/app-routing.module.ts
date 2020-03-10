import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './admin/project/project.component';
import { ProjectListComponent } from './admin/project-list/project-list.component';
import { ProjectCreateComponent } from './admin/project-create/project-create.component';
import { ProjectUpdateComponent } from './admin/project-update/project-update.component';
import { AdminGuard } from './admin/admin.guard';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
