import {Game, GAME_STATUSES} from "./game.js";
import {NumberUtil} from "./numberUtil.js";

describe('Game', () => {
    it("let's start", async () => {
        const numberUtil = new NumberUtil
        const game = new Game(numberUtil)

        let status = await game.getStatus()

        expect(status).toBe(GAME_STATUSES.PENDING)

        await game.start();

        status = await game.getStatus()

        expect(status).toBe(GAME_STATUSES.IN_PROGRESS)

    })

    it('should return correct Google position ' +
        'that changed every second', async () => {

        const game = new Game()
        await game.start()

        let googlePosition = await game.getGooglePosition()
        expect(googlePosition).toBeDefined()

        await delay(3000)

        let googlePosition2 = await game.getGooglePosition()
        expect(googlePosition2).not.toEqual(googlePosition)
    })
})


export const delay = (ms) => new Promise((res) => {
    setTimeout(res, ms)
})