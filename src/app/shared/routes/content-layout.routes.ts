import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
 
    { path: '', loadChildren: () => import('src/app/pages/content-pages/content-pages.module').then(m => m.ContentPagesModule) },
    { path: 'content-layout', loadChildren: () => import('src/app/pages/content-layout-page/content-pages.module').then(m => m.ContentPagesModule) },
    { path: 'content-pages', loadChildren: () => import('src/app/pages/content-pages/content-pages.module').then(m => m.ContentPagesModule) },
    { path: '**', redirectTo: '/error' }
];
 