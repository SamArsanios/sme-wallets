import { PermissionTransient } from './permissions-model-transient';

/**
 * @author Samson
 * 
 * a model / entity class Permission.
 */

 export class Permission {

        private id: number;
        private name: string;
        private guardName: string;
        private timestamp: string;


        constructor($id: number, $name: string, $guardName: string, $timestamp: string) {
                this.id = $id;
                this.name = $name;
                this.guardName = $guardName;
                this.timestamp = $timestamp;
        }

        static createInstance(): Permission{
                return new Permission(null, null, null, null);
              }

        public getId(): number {
                return this.id;
        }

        public setId(id: number): void {
                this.id = id;
        }

        public getName(): string {
                return this.name;
        }

        public setName(name: string): void {
                this.name = name;
        }

        public getGuardName(): string {
                return this.guardName;
        }

        public setGuardName(guardName: string): void {
                this.guardName = guardName;
        }

        public getTimestamp(): string {
                return this.timestamp;
        }

        public setTimestamp(timestamp: string): void {
                this.timestamp = timestamp;
        }



}