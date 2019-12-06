/**
 * @author Daniel Comboni
 * 
 * a model / entity class UserAnswer.
 */

export class UserAnswer {

     id: number;
     userId: number;
     questionId: number;
     answer: number;
     timestamp: string

    constructor($id: number, $userId: number, $questionId: number, $answer: number, $timestamp: string) {
        this.id = $id;
        this.userId = $userId;
        this.questionId = $questionId;
        this.answer = $answer;
        this.timestamp = $timestamp;

    }


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getQuestionId(): number {
        return this.questionId;
    }

    public setQuestionId(questionId: number): void {
        this.questionId = questionId;
    }

    public getAnswer(): number {
        return this.answer;
    }

    public setAnswer(answer: number): void {
        this.answer = answer;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public setTimestamp(timestamp: string): void {
        this.timestamp = timestamp;
    }

}