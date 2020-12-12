import PySet from "../pyset";

describe('PySet Operations with one set', () => {
    let pyset: PySet<string>;

    beforeEach(() => {
        pyset = new PySet<string>();
    });

    test("discard", () => {
        pyset.add("foo");
        pyset.discard("foo");
        expect(pyset.has("foo")).toBe(false);
    });

    test("testCopy", () => {
        pyset.add("foo");
        const copiedSet = pyset.copy();
        expect(Array.from(copiedSet).every(s => pyset.has(s))).toEqual(true);
    });

    test("pop", () => {
        pyset.add("foo");
        const val = pyset.pop();
        expect(val).toEqual("foo");
    });
});

describe('PySet Operations with two sets', () => {

    let pysetOne: PySet<string>;
    let pysetTwo: PySet<string>;
    let pysetThree: PySet<string>;
    let pysetFour: PySet<string>;

    beforeEach(() => {
        pysetOne = new PySet<string>();
        pysetTwo = new PySet<string>();

        pysetThree = new PySet<string>();
        pysetFour = new PySet<string>();
    });

    test("testIsDisjoint", () => {
        pysetOne.add("foo").add("fuu");
        pysetTwo.add("baz").add("bar");

        const resOne = pysetOne.isDisjoint(pysetTwo);
        expect(resOne).toEqual(true);

        pysetThree.add("foo").add("bar");
        pysetFour.add("baz").add("bar");

        const resTwo = pysetThree.isDisjoint(pysetFour);
        expect(resTwo).toEqual(false);
    });

    test("testIsSubset", () => {
        pysetOne.add("foo").add("bar").add("baz");
        pysetTwo.add("bar").add("foo");

        const resOne = pysetTwo.isSubset(pysetOne);
        expect(resOne).toEqual(true);

        pysetThree.add("fuu");

        const resTwo = pysetThree.isSubset(pysetOne);
        expect(resTwo).toEqual(false);
    });

    test("testIsSuperset", () => {
        pysetOne.add("foo").add("bar").add("baz");
        pysetTwo.add("bar").add("foo");

        const resOne = pysetOne.isSuperset(pysetTwo);
        expect(resOne).toEqual(true);

        pysetThree.add("fuu");

        const resTwo = pysetOne.isSuperset(pysetThree);
        expect(resTwo).toEqual(false);
    });

    test("testUnion", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("baz");

        const resOne = pysetOne.union(pysetTwo);
        expect([...resOne]).toEqual(["foo", "bar", "baz"]);

        pysetThree.add("fuu");
        const resTwo = pysetOne.union(pysetTwo, pysetThree);
        expect([...resTwo]).toEqual(["foo", "bar", "baz", "fuu"]);
    });

    test("testIntersection", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("bar");

        const resOne = pysetOne.intersection(pysetTwo);
        expect([...resOne]).toEqual(["bar"]);

        pysetThree.add("foo")
        const resTwo = pysetOne.intersection(pysetTwo, pysetThree);
        expect([...resTwo]).toEqual(["bar", "foo"]);
    });

    test("testDifference", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("bar");

        const resOne = pysetOne.difference(pysetTwo);
        pysetThree.add("foo")
        expect(resOne).toEqual(pysetThree);
    });

    test("testSymmetricDifference", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("bar").add("baz");

        const resOne = pysetOne.symmetricDifference(pysetTwo);
        pysetThree.add("foo").add("baz");
        expect(resOne).toEqual(pysetThree);
    });

    test("testUpdate", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("baz");

        const resOne = pysetOne.update(pysetTwo);
        pysetThree.add("foo").add("bar").add("baz");
        expect(resOne).toEqual(pysetThree);
    });

    test("testIntersectionUpdate", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("bar");

        const resOne = pysetOne.intersectionUpdate(pysetTwo);
        pysetThree.add("bar");
        expect(resOne).toEqual(pysetThree);
    });

    test("testDifferenceUpdate", () => {
        pysetOne.add("foo").add("bar").add("baz");
        pysetTwo.add("bar");

        const resOne = pysetOne.differenceUpdate(pysetTwo);
        pysetThree.add("baz").add("foo");;
        expect(resOne).toEqual(pysetThree);
    });

    test("testSymmetricDifferenceUpdate", () => {
        pysetOne.add("foo").add("bar");
        pysetTwo.add("baz").add("bar");

        const resOne = pysetOne.symmetricDifferenceUpdate(pysetTwo);
        pysetThree.add("baz").add("foo");;
        expect(resOne).toEqual(pysetThree);
    });
});
