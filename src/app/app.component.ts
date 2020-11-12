import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './models';
import { loadUser } from './store/actions/user.actions';
import { userData } from './store/reducers/user.reducer';
import { AppState } from './store/store.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(userData);
  }

  ngOnInit() {
    this.store.dispatch(loadUser());
  }
}
