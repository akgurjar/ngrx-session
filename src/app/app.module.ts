import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresenterModule } from 'ng-presenter';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { MatButtonModule, MatIconModule, MatRippleModule, MatTooltipModule } from '@angular/material';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { WorkingDiagramComponent } from './pages/working-diagram/working-diagram.component';
import { UsefullTermsComponent } from './pages/usefull-terms/usefull-terms.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';
import { NgrxDemoComponent } from './pages/ngrx-demo/ngrx-demo.component';
import { NgrxDevtoolsComponent } from './pages/ngrx-devtools/ngrx-devtools.component';
import { NgrxDevtoolsDemoComponent } from './pages/ngrx-devtools-demo/ngrx-devtools-demo.component';
import { NgrxEffectsComponent } from './pages/ngrx-effects/ngrx-effects.component';
import { NgrxEffectsWorkingComponent } from './pages/ngrx-effects-working/ngrx-effects-working.component';
import { NgrxEffectsDemoComponent } from './pages/ngrx-effects-demo/ngrx-effects-demo.component';
import { ListModule } from './common/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroductionComponent,
    WorkingDiagramComponent,
    UsefullTermsComponent,
    NgrxComponent,
    NgrxDemoComponent,
    NgrxDevtoolsComponent,
    NgrxDevtoolsDemoComponent,
    NgrxEffectsComponent,
    NgrxEffectsWorkingComponent,
    NgrxEffectsDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PresenterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    ListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
