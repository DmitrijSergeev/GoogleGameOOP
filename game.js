export class Game {
    #state;
    #googlePosition;
    #numberUtil;

    constructor(numberUtil) {
        this.#state = GAME_STATUSES.PENDING
        this.#googlePosition = {x: 1, y: 1}
        this.#numberUtil = numberUtil
    }

    #jumpGoogle(){
        this.#googlePosition = {
            x: this.#numberUtil.getRandomNumber(0, 5),
            y: this.#numberUtil.getRandomNumber(0, 5)
        }
    }

    async getStatus(){
        return this.#state
    }
    async start(){
        this.#state = GAME_STATUSES.IN_PROGRESS
    }
    async getGooglePosition (){
        setInterval(this.#jumpGoogle.bind(this), 2000)
        return this.#googlePosition
    }
}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'iN-PROGRESS',
    FINISHED: 'FINISHED'
}

