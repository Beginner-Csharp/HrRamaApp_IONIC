import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'rama', loadChildren: './pages/rama/rama.module#RamaPageModule' },
  { path: 'officer', loadChildren: './pages/officer/officer.module#OfficerPageModule' },
  { path: 'welfare', loadChildren: './pages/welfare/welfare.module#WelfarePageModule' },
  { path: 'work-pa', loadChildren: './pages/work-pa/work-pa.module#WorkPAPageModule' },
  { path: 'benefit', loadChildren: './pages/benefit/benefit.module#BenefitPageModule' },
  { path: 'training', loadChildren: './pages/training/training.module#TrainingPageModule' },
  { path: 'retire', loadChildren: './pages/retire/retire.module#RetirePageModule' },
  { path: 'ticket', loadChildren: './pages/ticket/ticket.module#TicketPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'new-office', loadChildren: './pages/new-office/new-office.module#NewOfficePageModule' },
  { path: 'officer1', loadChildren: './subpages/officer1/officer1.module#Officer1PageModule' },
  { path: 'officer2', loadChildren: './subpages/officer2/officer2.module#Officer2PageModule' },
  { path: 'officer3', loadChildren: './subpages/officer3/officer3.module#Officer3PageModule' },
  { path: 'training1', loadChildren: './subpages/training1/training1.module#Training1PageModule' },
  { path: 'training2', loadChildren: './subpages/training2/training2.module#Training2PageModule' },
  { path: 'training3', loadChildren: './subpages/training3/training3.module#Training3PageModule' },
  { path: 'work-pa1', loadChildren: './subpages/work-pa1/work-pa1.module#WorkPa1PageModule' },
  { path: 'work-pa2', loadChildren: './subpages/work-pa2/work-pa2.module#WorkPa2PageModule' },
  { path: 'work-pa3', loadChildren: './subpages/work-pa3/work-pa3.module#WorkPa3PageModule' },
  { path: 'work-pa4', loadChildren: './subpages/work-pa4/work-pa4.module#WorkPa4PageModule' },
  { path: 'work-pa5', loadChildren: './subpages/work-pa5/work-pa5.module#WorkPa5PageModule' },
  { path: 'benefit1', loadChildren: './subpages/benefit1/benefit1.module#Benefit1PageModule' },
  { path: 'benefit2', loadChildren: './subpages/benefit2/benefit2.module#Benefit2PageModule' },
  { path: 'benefit3', loadChildren: './subpages/benefit3/benefit3.module#Benefit3PageModule' },
  { path: 'benefit4', loadChildren: './subpages/benefit4/benefit4.module#Benefit4PageModule' },
  { path: 'benefit5', loadChildren: './subpages/benefit5/benefit5.module#Benefit5PageModule' },
  { path: 'welfare1', loadChildren: './subpages/welfare1/welfare1.module#Welfare1PageModule' },
  { path: 'welfare2', loadChildren: './subpages/welfare2/welfare2.module#Welfare2PageModule' },
  { path: 'welfare3', loadChildren: './subpages/welfare3/welfare3.module#Welfare3PageModule' },
  { path: 'welfare4', loadChildren: './subpages/welfare4/welfare4.module#Welfare4PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
