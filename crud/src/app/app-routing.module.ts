import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/users/components/user-list/user-list.component';
import { UserRegistrationComponent } from './modules/users/components/user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '',
    component: UserRegistrationComponent,
  },
  {
    path: "lista-de-usuarios",
    component: UserListComponent
  },
  {
    path: 'editar-usuario/:id',
    component: UserRegistrationComponent,
   
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
