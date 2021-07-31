import SpaceAge from "../src/SpaceAge";

describe("SpaceAge", () => {

    test('should correctly return the users current age on planet Earth', () => {
        let earthyears = new SpaceAge(32);
        expect(earthyears.earthAge).toEqual(32);
    });
    test('should correctly return the users current age on Mercury', () => {
      let mercuryyears = new SpaceAge(133, "Mercury");
      expect(mercuryyears.earthAge).toEqual(133);
    });
    
});