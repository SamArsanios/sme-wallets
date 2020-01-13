/**
 * @author Daniel Comboni
 * 
 * It provides methods to `iterate` through properties of an `object` from elsewhere (possibly external e.g HTTP response). 
 * 
 */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ObjectsUtil<T> {

    /**
     * Compares the `length` or `number` of properties in the two `objects`.
     * @param fromObject
     * @param toObject 
     * @returns `boolean` : whether the numbers are equal or not
     */
    private comparePropertyLength(fromObject: Object, toObject: T): boolean {

        let lengthOfKeysOfReceivedObject: number = 0;

        for (let keyAsProperty in fromObject) {
            lengthOfKeysOfReceivedObject += 1;
        }

        let lengthOfKeysOfReceivingObject: number = 0;

        for (let keyAsProperty in fromObject) {
            lengthOfKeysOfReceivingObject += 1;
        }

        return lengthOfKeysOfReceivingObject === lengthOfKeysOfReceivedObject;
    }

    /**
     * Compares the `names` of the `properties` of the two `objects`.
     * 
     * NOTE: Checks if objects have got `matching property names` in matching `positions`.
     * 
     * Returns a boolean: 
     * @param fromObject 
     * @param toObject 
     * @returns `boolean` : if the two objects have the `same property names in the same postions`, it returns `true`
     */
    private comparePropertyNames(fromObject: Object, toObject: T) {

        let receivedObjectPropertyNames = [];
        for (let keyAsProperty in fromObject) {
            receivedObjectPropertyNames.push(keyAsProperty);
        }

        let receivingObjectPropertyNames = []
        for (let keyAsProperty in toObject) {
            receivingObjectPropertyNames.push(keyAsProperty);
        }

        let flag: boolean = false;
        for (let i = 0; i <= receivedObjectPropertyNames.length; i++) {

            if (receivedObjectPropertyNames[i] !== receivingObjectPropertyNames[i]) {
                flag = false;
                break;
            } else {
                flag = true;
            }

        }

        return flag;
    }

    /**
     * Copies values of `fromObject` into `toObject`.
     * 
     * Success is only if both the `comparePropertyNames(fromObject, toObject)` and `comparePropertyLength(fromObject, toObject)`
     * methods resolve to true.
     * 
     * @param fromObject 
     * @param toObject 
     */
    public iterateAndCopy(fromObject: Object, toObject: T): T {

        const namesComparisonFlag = this.comparePropertyNames(fromObject, toObject);
        const lengthComparisonFlag = this.comparePropertyLength(fromObject, toObject);

        if (namesComparisonFlag && lengthComparisonFlag) {

            for (let [keyAsProperty, valueOfProperty] of Object.entries(fromObject)) {

                if (toObject.hasOwnProperty(keyAsProperty)) {
                    toObject[keyAsProperty] = valueOfProperty;
                }

            }
        }

        return toObject;
    }

    /**
     * Converts the `data` object to `Array` of objects
     * @param data the object returned in the http response
     * @returns an Array of objects
     */
    public dataObjectToArray(data: Object): Array<T> {
        return Array.from(Object.keys(data), key => data[key]);
    }

}


