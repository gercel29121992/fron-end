import { Routes, RouterModule } from '@angular/router';

export const Full_ROUTES: Routes = [

  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'inicio', loadChildren: () => import('src/app/pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule) }

];
