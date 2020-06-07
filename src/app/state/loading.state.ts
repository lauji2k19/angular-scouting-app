import { State, Action, StateContext, Selector } from '@ngxs/store';
import { StartLoading, StopLoading } from '@app/actions/loading.actions';
import { Injectable } from '@angular/core';

export class LoadingStateModel {
  loading: boolean;
}

@State<LoadingStateModel>({
  name: 'loading',
  defaults: {
      loading: false
  }
})

@Injectable()
export class LoadingState {

  // Section 4
  @Selector()
  static getLoadingState(state: LoadingStateModel) {
      return state.loading;
  }

  // Section 5
  @Action(StopLoading)
  add({getState, patchState }: StateContext<LoadingStateModel>, {}:StopLoading) {
      patchState({
          loading: false
      })
  }

  @Action(StartLoading)
  remove({getState, patchState }: StateContext<LoadingStateModel>, {}:StartLoading) {
    patchState({
          loading: true
      })
  }

}
