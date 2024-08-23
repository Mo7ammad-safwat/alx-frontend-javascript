import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // GETTERS
  get floors() {
    return this._floors;
  }

  // SETTERS
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    this._floors = value;
  }

  // METHODS
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
