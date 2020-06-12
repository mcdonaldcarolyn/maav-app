import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'maavinfo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../maavinfo/maavinfo.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'yellowcard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../yellowcard/yellowcard.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'healthyrelationships',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../healthyrelationships/healthyrelationships.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/maavinfo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/maavinfo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
