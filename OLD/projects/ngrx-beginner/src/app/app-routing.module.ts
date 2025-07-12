import { PostsModule } from './pages/posts/posts.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER_UTILS } from './@core/utils/router.utils';

import { NotFoundPage } from './ui/not-found/not-found.page';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.auth.root,
    loadChildren: async () =>
      (await import('./pages/auth/auth.module')).AuthModule
  },
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: async () =>
      (await import('./pages/home/home.module')).HomeModule,
  },
  {
    path: ROUTER_UTILS.config.posts.root,
    loadChildren: async () =>
      (await import('./pages/posts/posts.module')).PostsModule
  },
  {
    path: '**',
    component: NotFoundPage,
    // esta sendo carregado l com laze???
    loadChildren: async () =>
      (await import('./ui/not-found/not-found.module')).NotFoundModule,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
