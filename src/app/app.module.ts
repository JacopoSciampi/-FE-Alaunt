import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './init/login/login.component';
import { MapComponent } from './game/main-pages/map/map.component';
import { HomeComponent } from './game/main-pages/home/home.component';
import { ArmyComponent } from './game/main-pages/army/army.component';
import { UnitsComponent } from './game/main-pages/units/units.component';
import { GuildsComponent } from './game/main-pages/guilds/guilds.component';
import { MarketComponent } from './game/main-pages/market/market.component';
import { ErrorPageComponent } from './init/error-page/error-page.component';
import { AccountComponent } from './game/main-pages/account/account.component';
import { NavbarComponent } from './game/core/component/navbar/navbar.component';
import { TutorialComponent } from './game/main-pages/tutorial/tutorial.component';
import { BuildingComponent } from './game/main-pages/building/building.component';
import { ColonizeComponent } from './game/main-pages/colonize/colonize.component';
import { ResearchComponent } from './game/main-pages/research/research.component';
import { MessagesComponent } from './game/main-pages/messages/messages.component';
import { NavMenuComponent } from './game/core/component/nav-menu/nav-menu.component';
import { EspionageComponent } from './game/main-pages/espionage/espionage.component';
import { StatisticsComponent } from './game/main-pages/statistics/statistics.component';
import { CreateAccountComponent } from './init/create-account/create-account.component';
import { LoadingBarComponent } from './game/core/component/loading-bar/loading-bar.component';
import { SingleBuildComponent } from './game/core/component/single-build/single-build.component';

import { routeConfig } from './route.config';
import { FloorPipe } from './game/core/pipe/floor-pipe';
import { OnlyNumber } from './game/core/directive/only-number.directive';

import { MapService } from './game/core/service/map.service';
import { GuardService } from './game/core/service/auth.guard';
import { HomeService } from './game/core/service/home.service';
import { ArmyService } from './game/core/service/army.service';
import { UnitService } from './game/core/service/unit.service';
import { GuildService } from './game/core/service/guild.service';
import { ConstService } from './game/core/service/const.service';
import { LoginService } from './game/core/service/login.service';
import { ToastService } from './game/core/service/toast.service';
import { BuildService } from './game/core/service/build.service';
import { NavbarService } from './game/core/service/navbar.service';
import { MarketService } from './game/core/service/market.service';
import { MessageService } from './game/core/service/message.service';
import { ColonizeService } from './game/core/service/colonize.service';
import { ResearchService } from './game/core/service/research.service';
import { EspionageService } from './game/core/service/espionage.service';
import { StatisticService } from './game/core/service/statistic.service';
import { NewAccountService } from './game/core/service/new-account.service';
import { LocalStorageService } from './game/core/service/local-storage.service';

@NgModule({
    declarations: [
        FloorPipe,
        OnlyNumber,
        AppComponent,
        MapComponent,
        GameComponent,
        HomeComponent,
        ArmyComponent,
        LoginComponent,
        UnitsComponent,
        NavbarComponent,
        MarketComponent,
        GuildsComponent,
        NavMenuComponent,
        AccountComponent,
        TutorialComponent,
        BuildingComponent,
        ResearchComponent,
        MessagesComponent,
        ColonizeComponent,
        EspionageComponent,
        ErrorPageComponent,
        StatisticsComponent,
        LoadingBarComponent,
        SingleBuildComponent,
        CreateAccountComponent,
    ],
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routeConfig)
    ],
    providers: [
        MapService,
        HomeService,
        UnitService,
        ArmyService,
        BuildService,
        ConstService,
        GuildService,
        ToastService,
        LoginService,
        GuardService,
        NavbarService,
        MarketService,
        MessageService,
        ResearchService,
        ColonizeService,
        StatisticService,
        EspionageService,
        NewAccountService,
        LocalStorageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
