export default class PySet<T> extends Set<T>{

    public discard(val: T){

    }

    public copy(val: T){
        return new Set();
    }

    public pop(val: T): T{
        return null;
    }

    public isDisjoint(other: Set<T>): boolean{
        return false;
    }
    
    public isSubset(other: Set<T>): boolean{
        return false;
    }
    
    public isSuperset(other: Set<T>): boolean{
        return false;
    }
    
    public union(...others: Array<Set<T>>){
        return new Set();
    }
    
    public intersection(...others: Array<Set<T>>): Set<T>{
        return new Set();
    }
    
    public difference(...others: Array<Set<T>>){
        return new Set();
    }
    
    public symmetricDifference(other: Set<T>){
        return new Set();
    }
    
    public update(...others: Array<Set<T>>){
        return new Set();
    }
    
    public intersectionUpdate(...others: Array<Set<T>>){
        return new Set();
    }
    
    public differenceUpdate(...others: Array<Set<T>>){
        return new Set();
    }
    
    public symmetricDifferenceUpdate(...others: Array<Set<T>>){
        return new Set();
    }
}