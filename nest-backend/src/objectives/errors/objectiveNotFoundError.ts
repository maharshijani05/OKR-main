export class ObjectiveNotFoundError extends Error {
    constructor(objectiveId: number) {
        super(`Objective with ID ${objectiveId} not found.`);
    }
}