import PySet from "../pyset";

describe("PySet Operations with one set", () => {
  let pyset: PySet<string>;

  beforeEach(() => {
    pyset = new PySet<string>();
  });

  test("testRemove", () => {
    pyset.add("foo");
    pyset.add("bar");
    pyset.remove("foo");
    expect(pyset.has("foo")).toBe(false);
    expect(pyset.has("bar")).toBe(true);
    expect(pyset.size).toEqual(1);

    expect(() =>{
      pyset.remove("baz");
    }).toThrowError(TypeError);

  });

  test("testDiscard", () => {
    pyset.add("foo");
    pyset.add("bar");
    pyset.discard("foo");
    expect(pyset.has("foo")).toBe(false);
    expect(pyset.size).toBe(1);
  });

  test("testCopy", () => {
    pyset.add("foo");
    pyset.add("bar");
    const copiedSet = pyset.copy();
    expect(Array.from(copiedSet).every((s) => pyset.has(s))).toEqual(true);
  });

  test("testPop", () => {
    pyset.add("foo");
    const val = pyset.pop();
    expect(val).toEqual("foo");
    expect(pyset.has("foo")).toEqual(false);
    expect(pyset.size).toEqual(0);

    pyset.clear();
    expect(pyset.pop).toThrowError(TypeError);
  });

  test("testSet", () => {
    pyset.add("foo");
    const set = pyset.set();
    expect(set.has("foo")).toEqual(true);
    expect(set instanceof Set).toEqual(true);
    expect(set.constructor).toEqual(Set);
  });

});

describe("PySet Operations with two sets", () => {
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

    pysetThree.add("foo");
    const resTwo = pysetOne.intersection(pysetTwo, pysetThree);
    expect([...resTwo]).toEqual(["bar", "foo"]);
  });

  test("testDifference", () => {
    pysetOne.add("foo").add("bar").add("baz");
    pysetTwo.add("bar");

    const resOne = pysetOne.difference(pysetTwo);
    expect([...resOne]).toEqual(["foo", "baz"]);

    pysetThree.add("baz");
    const resTwo = pysetOne.difference(pysetTwo, pysetThree);
    expect([...resTwo]).toEqual(["foo"]);
  });

  test("testSymmetricDifference", () => {
    pysetOne.add("foo").add("bar");
    pysetTwo.add("bar").add("baz");

    const resOne = pysetOne.symmetricDifference(pysetTwo);
    expect([...resOne]).toEqual(["foo", "baz"]);
  });

  test("testUpdate", () => {
    pysetOne.add("foo").add("bar");
    pysetTwo.add("baz");

    pysetOne.update(pysetTwo);
    expect([...pysetOne]).toEqual(["foo", "bar", "baz"]);
  });

  test("testIntersectionUpdate", () => {
    pysetOne.add("foo").add("bar");
    pysetTwo.add("bar");

    pysetOne.intersectionUpdate(pysetTwo);
    expect([...pysetOne]).toEqual(["bar"]);

    pysetThree.add("fuu").add("bar");
    pysetFour.add("bar");
    pysetFour.intersectionUpdate(pysetTwo, pysetThree);
    expect([...pysetFour]).toEqual(["bar"]);
  });

  test("testDifferenceUpdate", () => {
    pysetOne.add("foo").add("bar").add("baz");
    pysetTwo.add("bar");

    pysetOne.differenceUpdate(pysetTwo);
    expect([...pysetOne]).toEqual(["foo", "baz"]);

    pysetThree.add("fuu").add("bar");
    pysetFour.add("bar");
    pysetFour.differenceUpdate(pysetTwo, pysetThree);
    expect([...pysetFour]).toEqual([]);
  });

  test("testSymmetricDifferenceUpdate", () => {
    pysetOne.add("foo").add("bar");
    pysetTwo.add("baz").add("bar");

    pysetOne.symmetricDifferenceUpdate(pysetTwo);
    expect([...pysetOne]).toEqual(["foo", "baz"]);
  });
});
