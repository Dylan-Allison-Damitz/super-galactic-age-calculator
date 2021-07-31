import SpaceAge from "../src/SpaceAge";

describe("SpaceAge", () => {

    test('should correctly return the users current age on planet Earth', () => {
        let spaceage = new SpaceAge(32);
        expect(spaceage.earthAge).toEqual(32);
    });
});