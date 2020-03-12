import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from './../environments/environment';
import { ConfigService } from './state/config/config.service';
import { ConfigState } from './state/config/config.state';
import { LayoutState } from './state/layout/layout.state';
import { NotificationState } from './state/notification/notification.state';
import { ProgressService } from './state/progress/progress.service';
import { ProgressState } from './state/progress/progress.state';
import { RoutingHandler } from './state/routing/routing.handler';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      ConfigState,
      LayoutState,
      NotificationState,
      ProgressState
    ], {
      developmentMode: !environment.production
    })
  ],
  providers: [
    ConfigService,
    ProgressService,
    RoutingHandler
  ]
})
export class AppStateModule {}
