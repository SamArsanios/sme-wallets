/**
 * @author Daniel Comboni
 * 
 * a model / entity class Invite.
 */

import { User } from '../../../shared/model/user/user-model';


export class Invite {

         id: number;
         user: User;
         inviteCode: string;
         name: string;
         email: string;
         timestamp: string;


	constructor($id: number, $user: User, $inviteCode: string, $name: string, $email: string, $timestamp: string) {
		this.id = $id;
		this.user = $user;
		this.inviteCode = $inviteCode;
		this.name = $name;
		this.email = $email;
		this.timestamp = $timestamp;
	}
      
	static createInstance(): Invite {
		return new Invite(null, null, null, null, null, null);
	  }      
}

