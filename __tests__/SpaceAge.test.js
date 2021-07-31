import SpaceAge from "../src/SpaceAge";

describe("SpaceAge", () => {

    test('should correctly create an object that contains three parameters', () => {
        let ageSpace = new SpaceAge(earthAge, planetAge, lifeExpectancy)
        expect(ageSpace.earthAge).toEqual(earthAge);
        expect(ageSpace.planetAge).toEqual(planetAge);
        expect(ageSpace.lifeExpectancy).toEqual(lifeExpectancy);
    });
});