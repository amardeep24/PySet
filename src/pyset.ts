export default class PySet<T> extends Set<T>{

    /**
     *  Remove an element from a set if it is a member.
     *  If the element is not a member, do nothing.
     * @param val 
     */
    public discard(val: T) {
        if (this.has(val)) {
            this.delete(val);
        }
    }

    /**
     *  Return a shallow copy of a set.
     */
    public copy(): Set<T> {
        return new Set(this);
    }

    /**
     * Remove and return an arbitrary set element.
     * Raises KeyError if the set is empty.
     */
    public pop(): T {
        if (this.size === 0){
            throw new TypeError("pop from an empty set");
        }
        for(const e of this){
            return e;
        }
    }

    /**
     * Return True if two sets have a null intersection.
     * @param other 
     */
    public isDisjoint(other: Set<T>): boolean {
        for (const e of other) {
            if (this.has(e)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Report whether another set contains this set.
     * @param other 
     */
    public isSubset(other: Set<T>): boolean {
        for (const e of this) {
            if (!other.has(e)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Report whether this set contains another set.
     * @param other 
     */
    public isSuperset(other: Set<T>): boolean {
        for (const e of other) {
            if (!this.has(e)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Return the union of sets as a new set.
     * (i.e. all elements that are in either set.)
     * @param others 
     */
    public union(...others: Array<Set<T>>) {
        const result = new Set(this);
        for (const set of others) {
            for (const e of set) {
                result.add(e);
            }
        }
        return result;
    }

    /**
     *  Return the intersection of two sets as a new set.
     *  (i.e. all elements that are in both sets.)
     * @param others 
     */
    public intersection(...others: Array<Set<T>>): Set<T> {
        const result = new Set<T>();
        for (const set of others) {
            for (const e of set) {
                if (this.has(e)) {
                    result.add(e);
                }
            }
        }
        return result;
    }

    /**
     *  Return the difference of two or more sets as a new set.
     *  (i.e. all elements that are in this set but not the others.)
     * @param others 
     */
    public difference(...others: Array<Set<T>>) {
        const result = new Set<T>(this);
        for (const set of others) {
            for (const e of set) {
                if (this.has(e)) {
                    result.delete(e);
                }
            }
        }
        return result;
    }

    /**
     *  Return the symmetric difference of two sets as a new set.
     *  (i.e. all elements that are in exactly one of the sets.)
     * @param others 
     */
    public symmetricDifference(other: Set<T>) {
        const result = new Set<T>(this);
        for (const e of other) {
            if (this.has(e)) {
                result.delete(e);
            } else {
                result.add(e);
            }
        }
        return result;
    }

    /**
     * Update a set with the union of itself and others.
     * @param others 
     */
    public update(...others: Array<Set<T>>) {
        for (const set of others) {
            for (const e of set) {
                this.add(e);
            }
        }
    }

    /**
     * Update a set with the intersection of itself and another.
     * @param others 
     */
    public intersectionUpdate(...others: Array<Set<T>>) {
        for (const set of others) {
            for (const e of this) {
                if (!set.has(e)) {
                    this.delete(e);
                }
            }
        }
    }

    /**
     * Remove all elements of another set from this set.
     * @param others 
     */
    public differenceUpdate(...others: Array<Set<T>>) {
        for (const set of others) {
            for (const e of set) {
                if (this.has(e)) {
                    this.delete(e);
                }
            }
        }
    }

    /**
     * Update a set with the symmetric difference of itself and another.
     * @param others 
     */
    public symmetricDifferenceUpdate(other: Set<T>) {
        for (const e of other) {
            if (this.has(e)) {
                this.delete(e);
            } else {
                this.add(e);
            }
        }
    }
}