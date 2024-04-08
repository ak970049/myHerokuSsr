import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserStorageService } from './browser-storage.service';
import { BrowserStorageServerService } from './browser-storage-server.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: BrowserStorageService,
      useClass: BrowserStorageServerService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

