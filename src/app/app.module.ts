import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.components';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { NavigationComponent } from './left-side-bar/navigation/navigation.component';
import { AdvertisementComponent } from './left-side-bar/advertisement/advertisement.component';
import { FeaturedCompaniesComponent } from './left-side-bar/featured-companies/featured-companies.component';
import { MiddleBlockComponent } from './middle-block/middle-block.component';
import { ServiceDirectoryComponent } from './middle-block/service-directory/service-directory.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { PeopleYouMayKnowComponent } from './right-side-bar/people-you-may-know/people-you-may-know.component';
import { FeaturedProductsComponent } from './right-side-bar/featured-products/featured-products.component';
import { AdvertisementRightComponent } from './right-side-bar/advertisement-right/advertisement-right.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    LeftSideBarComponent,
    NavigationComponent,
    AdvertisementComponent,
    FeaturedCompaniesComponent,
    MiddleBlockComponent,
    ServiceDirectoryComponent,
    RightSideBarComponent,
    PeopleYouMayKnowComponent,
    FeaturedProductsComponent,
    AdvertisementRightComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
