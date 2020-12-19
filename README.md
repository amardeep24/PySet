# Port of the Python set API to JavaScript

## API docs

 - ```isDisjoint(other)```
Return ```true``` if the set has no elements in common with other. Sets are disjoint if and only if their intersection is the empty set.

 - ```isSubset(other)```
Test whether every element in the set is in other.

 - ```isSuperset(other)```
Test whether every element in other is in the set.

 - ```union(...others)```
Return a new set with elements from the set and all others.

 - ```intersection(...others)```
Return a new set with elements common to the set and all others.

 - ```difference(...others)```
Return a new set with elements in the set that are not in the others.

 - ```symmetricDifference(other)```
Return a new set with elements in either the set or other but not both.

 - ```copy()```
Return a shallow copy of the set.

 - ```update(...others)```
Update the set, adding elements from all others.

- ```intersectionUpdate(...others)```
Update the set, keeping only elements found in it and all others.

 - ```differenceUpdate(...others)```
Update the set, removing elements found in others.

 - ```symmetricDifferenceUpdate(other)```
Update the set, keeping only elements found in either set, but not in both.

 - ```add(elem)```
Add element elem to the set.

 - ```remove(elem)```
Remove element elem from the set. Raises `TypeError` if elem is not contained in the set.

 - ```discard(elem)```
Remove element elem from the set if it is present.

 - ```pop()```
Remove and return an arbitrary element from the set. Raises `TypeError` if the set is empty.

 - ```clear()```
Remove all elements from the set.

All APIs returning the set will be an instance of PySet, so that operations can be chained. To get a Set instance call the `set()` method.

# Usage

```
import PySet from "pyset";

let pySet1 = new PySet([1, 2, 3]);

let pySet2 = new PySet([2, 4, 5, 6]);

let pySet3 = pySet1.union(pySet2);

// [1, 2, 3, 4, 5, 6]
console.log([...pySet3]);

pySet3 = pySet1.intersection(pySet2);

// [2]
console.log([...pySet3]);

pySet3 = pySet1.difference(pySet2);

//[1, 3]
console.log([...pySet3]);

pySet3 = pySet1.symmetricDifference(pySet2);

//[1, 3, 4, 5, 6]
console.log([...pySet3]);

pySet3 = pySet1.symmetricDifference(pySet2);

pySet1 = new PySet([1, 2, 3]);
pySet2 = new PySet([1, 2, 3, 4]);

let isSubset = pySet1.isSubset(pySet2);

//true
console.log(isSubset);

let isSuperset = pySet2.isSuperset(pySet1);

//true
console.log(isSuperset);

pySet1 = new PySet([0]);
pySet2 = new PySet([1, 2, 3, 4]);

let isDisjoint = pySet1.isDisjoint(pySet2);

//true
console.log(isDisjoint);

pySet3 = pySet2.copy();

//[1, 2, 3, 4], false
console.log([...pySet3], pySet2 === pySet3);

pySet2.remove(2);

//[1, 3, 4]
console.log([...pySet2]);


pySet2.discard(1);

//[3, 4]
console.log([...pySet2]);


let res = pySet2.pop();

//3 [4]
console.log(res, [...pySet2]);


pySet2.clear();

//[]
console.log([...pySet2]);

pySet2.update(pySet1, pySet3);

//[0, 1, 2, 3, 4]
console.log([...pySet2]);

pySet2.differenceUpdate(pySet1, pySet3);
//[]
console.log([...pySet2]);

pySet2 = new PySet([1, 2]);
pySet1 = new PySet([0, 1]);
pySet2.symmetricDifferenceUpdate(pySet1);

//[2, 0]
console.log([...pySet2]);

pySet2 = new PySet([1, 2]);
pySet1 = new PySet([0, 1]);
pySet2.intersectionUpdate(pySet1);

//[1]
console.log([...pySet2]);
```