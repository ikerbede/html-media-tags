import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { provideRouter } from '@angular/router';
import { MEDIA_ROUTES } from './media-routes.constant';

bootstrapApplication(NavComponent, {
  providers: [provideRouter(MEDIA_ROUTES)],
});
