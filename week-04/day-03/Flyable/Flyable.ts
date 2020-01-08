'use strict';

export interface Flyable {
  land(): boolean;
  fly(): boolean;
  takeOff(): boolean;
}