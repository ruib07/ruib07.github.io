import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { AboutmeComponent } from 'src/components/aboutme/aboutme.component';
import { ExperienceeducationComponent } from 'src/components/experienceeducation/experienceeducation.component';
import { ScrollToTopComponent } from 'src/components/scroll-to-top/scroll-to-top.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { FooterComponent } from 'src/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    ExperienceeducationComponent,
    ScrollToTopComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
