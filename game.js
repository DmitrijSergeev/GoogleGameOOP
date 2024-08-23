export class Game {
    #state = GAME_STATUSES.PENDING
    #jumpGoogle(){}

    async getStatus(){
        return this.#state
    }
    async start(){
        this.#state = GAME_STATUSES.IN_PROGRESS
    }
    async getGooglePosition (){
        setInterval(this.#jumpGoogle, 2000)
        return {x: 1, y: 1}
    }
}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'iN-PROGRESS',
    FINISHED: 'FINISHED'
}

