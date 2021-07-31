export default class SpaceAge {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
  }
  planetCalculator() {
    if (this.planet === "Mercury") {
      return this.earthAge * 4.14
    } else if (this.planet === "Venus") {
      return this.earthAge * 1.62
    } else if (this.planet === "Mars") {
      return this.earthAge * 0.53
    } else if (this.planet === "Jupiter") {
      return this.earthAge * 0.08
    }
  }
  lifeSpan() {
    if (this.planet === "Mercury") {
      let lifeExpectancy = (this.earthAge * -1.48)
      return lifeExpectancy
    } else if (this.planet === "Venus") {
      let lifeExpectancy = (85 - (this.earthAge * 1.62));
      return lifeExpectancy
    } else if (this.planet === "Mars") {
      let lifeExpectancy = (85 - (this.earthAge * 0.52));
      return lifeExpectancy
    } else if (this.planet === "Jupiter") {
      let lifeExpectancy = (85 - (this.earthAge * 0.08));
      return lifeExpectancy
    }
  }
  yearsPast() {
  
  }
}
