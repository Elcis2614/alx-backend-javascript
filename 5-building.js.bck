export default class Building {
  constructor(sqft, method) {
    if (this.constructor !== Building && !method) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else if (this.constructor === Building && method) {
      this.evacuationWarningMessage = method;
    }
    this._sqft = sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
