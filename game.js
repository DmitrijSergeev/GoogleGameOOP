export class Game {
    #state = GAME_STATUSES.PENDING

    async getStatus(){
        return this.#state
    }
    async start(){
        this.#state = GAME_STATUSES.IN_PROGRESS
    }
}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'iN-PROGRESS',
    FINISHED: 'FINISHED'
}

