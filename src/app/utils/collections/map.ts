export class Mapp<K, V>  {

    private pair: Map<K, V>;

    constructor() {
        this.pair = new Map<K, V>();
    }

    put(key: K, value: V): void {
        this.pair.set(key, value);
    }

    putAll(map: Map<K, V>): void {
        map.forEach((v, k) => {
            this.put(k, v);
        });
    }

    remove(k: K): void {
        this.pair.delete(k);
    }

    clear(): void {
        this.pair.clear();
    }

    get(k: K): V {
        return this.pair.get(k);
    }

    size(): number {
        return this.pair.size;
    }

    isEmpty(): boolean {
        return this.size() === 0
    }

    containsKey(k: K): boolean {
        return this.pair.has(k);
    }

    replace(oldK: K, newV: V): V {

        if (this.containsKey(oldK)) {

            this.remove(oldK);
            this.put(oldK, newV);

        }

        return this.get(oldK);

    }

    getValues() {
        return Array.from(this.pair.values())
    }

    getKeys() {
        return Array.from(this.pair.keys());
    }

    getKeyValuePair() {
        return Array.from(this.pair);
    }

    makeIterable(): Map<K, V> {
        let newMap = new Map<K, V>();
        this.pair.forEach((v, k) => newMap);
        return newMap;
    }

    // @todo ...this shud be implemented in the lis
    static makeIterator(array) {
        let nextIndex = 0;

        return {
            next: function () {
                return nextIndex < array.length ?
                    { value: array[nextIndex++], done: false } :
                    { done: true };
            }
        };
    }

}