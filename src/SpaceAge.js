export default class SpaceAge {
    constructor (earthAge, planet, lifeExpectancy) {
        this.earthAge = earthAge;
        this.planet = planet;
        this.lifeExpectancy = lifeExpectancy;
    }
    planetCalculator() {
        if(this.planet === "Mercury") {
          return this.earthAge * 4.14
        } else if (this.planet === "Venus") {
          return this.earthAge * 1.62
        } else if (this.planet === "Mars") {
          return this.earthAge * 0.53
        } else if (this.planet === "Jupiter") {
          return this.earthAge * 0.08
    }
    lifeSpan()
    }
}
