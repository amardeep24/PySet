import PySet from "../pyset";

describe('PySet Operations should work as expected', () => {
    let pyset;

    beforeEach(() => {
        pyset = new PySet();
    });

    test("discard", () => {
        pyset.add("foo");
        pyset.discard("foo");
        expect(pyset.has("foo")).toBe(false);
    });

    test("testCopy", () => {

    });

    test("pop", () => {

    });

    test("testIsDisjoint", () => {

    });

    test("testIsSubset", () => {

    });

    test("testIsSuperset", () => {

    });

    test("testUnion", () => {

    });

    test("testIntersection", () => {

    });

    test("testDifference", () => {

    });

    test("testSymmetricDifference", () => {

    });

    test("testUpdate", () => {

    });

    test("testIntersectionUpdate", () => {

    });

    test("testDifferenceUpdate", () => {

    });

    test("testSymmetricDifferenceUpdate", () => {

    });
});
