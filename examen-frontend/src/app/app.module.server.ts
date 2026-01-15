import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app-module';
import { App } from './app'; // <--- Cambia 'App' por 'AppComponent'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [App], // <--- Cambia 'App' por 'AppComponent'
})
export class AppServerModule {}
