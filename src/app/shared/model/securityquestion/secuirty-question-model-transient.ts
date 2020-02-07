import { SecurityQuestion } from './SecurityQuestion';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class SecurityQuestionTransient.
 */

export class SecurityQuestionTransient extends SecurityQuestion {

    timestampStr: string;

    constructor(id: number, question: string, timestamp: string, timestampStr: string) {
        super(id, question, timestamp);
        this.timestampStr = timestampStr;
    }

}