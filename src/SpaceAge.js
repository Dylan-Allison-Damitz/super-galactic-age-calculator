export default class SpaceAge {
    constructor (earthAge, planet, lifeExpectancy) {
        this.earthAge = earthAge;
        this.planet = planet;
        this.lifeExpectancy = lifeExpectancy;
    }

    planetCalculator() {
        if(this.planet === "Mercury") {
            return this.earthAge * 4.14
        }
  }
}

