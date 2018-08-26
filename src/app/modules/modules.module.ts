import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { FEATURE_NAME, reducers } from './modules.state';
import { ModulesRoutingModule } from './modules-routing.module';
import { LayoutComponent } from '../layout-modules/layout.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { TodosEffects } from './todos/todos.effects';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';

@NgModule({
  imports: [
    SharedModule,
    ModulesRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([TodosEffects])
  ],
  declarations: [
    LayoutComponent,
    TodosContainerComponent,
    AuthenticatedComponent
  ],
  providers: []
})
export class ModulesModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/modules/`,
    '.json'
  );
}
