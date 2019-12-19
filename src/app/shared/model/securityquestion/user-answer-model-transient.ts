import { UserAnswer } from './UserAnswer';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class UserAnswerTransient.
 */

export class UserAnswerTransient extends UserAnswer {

    timestampStr: string

    constructor($id: number, $userId: number, $questionId: number, $answer: number, $timestamp: string, $timestampStr: string) {
        super($id, $userId, $questionId, $answer, $timestamp);
        this.timestampStr = $timestampStr;
    }

}