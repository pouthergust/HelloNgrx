import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { appReducer, todosReducer } from './store/app.state';
import { RemoveComponent } from './remove/remove.component';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffectService } from './store/todos-effect.service';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ListComponent,
    RemoveComponent,
    DetalhesUsuarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer, todos: todosReducer }, {}),
    EffectsModule.forRoot([TodosEffectService])
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
