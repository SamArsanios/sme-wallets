import { Permission } from './Permission';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class PermissionTransient.
 */

export class PermissionTransient extends Permission {

    timestampStr: string;

    constructor($id: number, $name: string, $guardName: string, $timestamp: string, $timestampStr: string) {
        super($id, $name, $guardName, $timestamp);
        this.timestampStr = $timestampStr;
    }

}