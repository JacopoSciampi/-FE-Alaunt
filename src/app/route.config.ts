import { Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { LoginComponent } from './init/login/login.component';
import { MapComponent } from './game/main-pages/map/map.component';
import { ArmyComponent } from './game/main-pages/army/army.component';
import { HomeComponent } from './game/main-pages/home/home.component';
import { UnitsComponent } from './game/main-pages/units/units.component';
import { GuildsComponent } from './game/main-pages/guilds/guilds.component';
import { MarketComponent } from './game/main-pages/market/market.component';
import { ErrorPageComponent } from './init/error-page/error-page.component';
import { AccountComponent } from './game/main-pages/account/account.component';
import { BuildingComponent } from './game/main-pages/building/building.component';
import { ResearchComponent } from './game/main-pages/research/research.component';
import { ColonizeComponent } from './game/main-pages/colonize/colonize.component';
import { MessagesComponent } from './game/main-pages/messages/messages.component';
import { TutorialComponent } from './game/main-pages/tutorial/tutorial.component';
import { EspionageComponent } from './game/main-pages/espionage/espionage.component';
import { StatisticsComponent } from './game/main-pages/statistics/statistics.component';
import { CreateAccountComponent } from './init/create-account/create-account.component';
import { GuardService } from './game/core/service/auth.guard';

export const routeConfig: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'create-account',
        component: CreateAccountComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'game',
        component: GameComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                // canActivate: [GuardService]
            },
            {
                path: 'building',
                component: BuildingComponent
            },
            {
                path: 'army',
                component: ArmyComponent
            },
            {
                path: 'research',
                component: ResearchComponent
            },
            {
                path: 'market',
                component: MarketComponent
            },
            {
                path: 'unit',
                component: UnitsComponent
            },
            {
                path: 'guild',
                component: GuildsComponent
            },
            {
                path: 'espionage',
                component: EspionageComponent
            },
            {
                path: 'colonize',
                component: ColonizeComponent
            },
            {
                path: 'map',
                component: MapComponent
            },
            {
                path: 'statistic',
                component: StatisticsComponent
            },
            {
                path: 'message',
                component: MessagesComponent
            },
            {
                path: 'account',
                component: AccountComponent
            },
            {
                path: 'tutorial',
                component: TutorialComponent
            }
        ]
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];
