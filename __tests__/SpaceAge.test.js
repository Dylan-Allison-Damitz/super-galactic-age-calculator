import SpaceAge from "../src/SpaceAge";

describe("SpaceAge", () => {

    test('should correctly create an object that contains three parameters', () => {
        let ageSpace = new SpaceAge(32, "Mercury", -48)
        expect(ageSpace.earthAge).toEqual(32);
        expect(ageSpace.planet).toEqual("Mercury");
        expect(ageSpace.lifeExpectancy).toEqual(-48);
    });
    test('should correctly return the users current age on planet Earth', () => {
        let earthYear = new SpaceAge(32);
        expect(earthYear.earthAge).toEqual(32);
    });
    test('should correctly return the users earth age in Mercury years', () => {
      let mercuryYear = new SpaceAge(32, "Mercury");
      expect(mercuryYear.planetCalculator()).toEqual(132.48);
    });
    test('should correctly return the users earth age in Venus years', () => {
      let venusYear = new SpaceAge(32, "Venus");
      expect(venusYear.planetCalculator()).toEqual(51.84);
    });
    test('should correctly return the users earth age in Mars years', () => {
      let marsYear = new SpaceAge(32, "Mars");
      expect(marsYear.planetCalculator()).toEqual(16.96);
    });
});