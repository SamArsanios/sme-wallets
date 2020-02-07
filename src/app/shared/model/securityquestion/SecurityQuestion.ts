/**
 * @author Daniel Comboni
 * 
 * a model / entity class SecurityQuestion.
 */

 export class SecurityQuestion {

     id: number;
     question: string;
     timestamp: string;


    constructor(id: number, question: string, timestamp: string) {
        this.id = id;
        this.question = question;
        this.timestamp = timestamp;
    }


}