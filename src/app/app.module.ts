import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { ProduitService,  } from './services/produit.service';
import { RefProduitService,  } from './services/ref-produit.service';
import { AuthService } from './services/auth.service'
import { AuthComponent } from './auth/auth.component';
import { CambuseViewComponent } from './cambuse-view/cambuse-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleProduitComponentComponent } from './single-produit-component/single-produit-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { RefProduitComponent } from './ref-produit/ref-produit.component';
import { EditRefProduitComponent } from './edit-ref-produit/edit-ref-produit.component';

const appRoutes: Routes = [
  { path: 'cambuse', canActivate: [AuthGuard], component: CambuseViewComponent },
  { path: 'cambuse/:id', canActivate: [AuthGuard], component: SingleProduitComponentComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditProduitComponent },
  { path: 'ref-produits', canActivate: [AuthGuard], component: RefProduitComponent },
  { path: 'ref-produits/edit-ref-produit', canActivate: [AuthGuard], component: EditRefProduitComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuard],  component: CambuseViewComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SingleProduitComponentComponent,
    AuthComponent,
    CambuseViewComponent,
    PageNotFoundComponent,
    EditProduitComponent,
    RefProduitComponent,
    EditRefProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProduitService,
    RefProduitService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
