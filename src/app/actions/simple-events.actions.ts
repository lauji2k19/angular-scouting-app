import { SimpleEvent } from '@app/models/simple-event';

export class AddEventData {
  static readonly type = '[SIMPLE_EVENTS] Add'

  constructor(public payload: SimpleEvent[]) {}
}

export class ClearEventData {
  static readonly type = '[SIMPLE_EVENTS] Clear'
}
