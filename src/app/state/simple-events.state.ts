import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SimpleEvent } from '@app/models/simple-event';
import { ClearEventData, AddEventData } from '@app/actions/simple-events.actions';
import { Injectable } from '@angular/core';

export class SimpleEventsStateModel {
  events: SimpleEvent[];
  test: boolean;
}

@State<SimpleEventsStateModel>({
  name: 'simple_events',
  defaults: {
      events: [],
      test: false
  }
})

@Injectable()
export class SimpleEventsState {

  @Selector()
  static getEvents(state: SimpleEventsStateModel) {
      return state.events;
  }

  @Action(AddEventData)
  add(ctx: StateContext<SimpleEventsStateModel>, { payload }:AddEventData) {
    const state = ctx.getState();
    ctx.patchState({
          events: [...state.events, ...payload]
      })
  }

  @Action(ClearEventData)
  remove(ctx: StateContext<SimpleEventsStateModel>, {}:ClearEventData) {
    ctx.patchState({
          events: []
      })
  }

}
