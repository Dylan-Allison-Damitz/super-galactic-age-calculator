import SpaceAge from "../src/SpaceAge";

describe("SpaceAge", () => {

    test('should correctly create an object that contains three parameters', () => {
        let ageSpace = new SpaceAge(32, 133, -48)
        expect(ageSpace.earthAge).toEqual(32);
        expect(ageSpace.planetAge).toEqual(133);
        expect(ageSpace.lifeExpectancy).toEqual(-48);
    });
    test('should correctly return the users current age on planet Earth', () => {
        let earthYear = new SpaceAge(32);
        expect(earthYear.earthAge).toEqual(32);
  });
});