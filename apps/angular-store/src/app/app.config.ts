import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
};
