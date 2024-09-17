import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { AboutmeComponent } from 'src/components/aboutme/aboutme.component';
import { ExperienceeducationComponent } from 'src/components/experienceeducation/experienceeducation.component';
import { ScrollToTopComponent } from 'src/components/scroll-to-top/scroll-to-top.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { WorkExperienceModalComponent } from 'src/components/work-experience-modal/work-experience-modal.component';

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
    FooterComponent,
    WorkExperienceModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbCollapseModule,
    MatIconModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
