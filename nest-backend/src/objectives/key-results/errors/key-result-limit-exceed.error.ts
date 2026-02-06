export class KeyResultLimitExceedError extends Error {
    constructor(objectiveTitle: string) {
        super(`You cannot add more key Results to ${objectiveTitle}.`);
    }
}