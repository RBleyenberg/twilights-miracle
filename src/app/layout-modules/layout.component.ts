import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { routeAnimations, TitleService, AuthGuardService } from '../core/index';
import { selectSettings, SettingsState } from '../settings/index';

import { State } from '../modules/modules.state';

@Component({
  selector: 'dare-modules',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeAnimations]
})
export class LayoutComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  modules = [
    { link: 'todos', label: 'dare.module.menu.todos' },
    { link: 'authenticated', label: 'dare.module.menu.auth' }
  ];

  constructor(
    private store: Store<State>,
    private router: Router,
    private titleService: TitleService,
    private translate: TranslateService,
    private auth: AuthGuardService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.subscribeToSettings();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToSettings() {
    this.store
      .pipe(select(selectSettings), takeUntil(this.unsubscribe$))
      .subscribe((settings: SettingsState) =>
        this.translate.use(settings.language)
      );
  }

  private subscribeToRouterEvents() {
    this.titleService.setTitle(
      this.router.routerState.snapshot.root,
      this.translate
    );
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        map((event: ActivationEnd) => event.snapshot),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(snapshot =>
        this.titleService.setTitle(snapshot, this.translate)
      );
  }
}
