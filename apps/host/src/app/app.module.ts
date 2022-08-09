import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './home/nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AuthModule, AuthService } from '@micro-app/auth';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'shop',
          loadChildren: () =>
            import('shop/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'cart',
          loadChildren: () =>
            import('cart/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
