import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  loading: Observable<boolean>;
  @Input() target: string;

  constructor(private store: Store) { }

  ngOnInit() {
    this.loading = this.store.select(state => state[this.target]);
  }

}
