import {Game, GAME_STATUSES} from "./game.js";

describe('Game', () => {
    it("let's start",  async () => {
        const game = new Game()

        let status = await game.getStatus()

        expect(status).toBe(GAME_STATUSES.PENDING)

        await game.start();

        status = await game.getStatus()

        expect(status).toBe(GAME_STATUSES.IN_PROGRESS)

    })

    it('should return correct Google position ' +
        'that changed every second', async ()=>{

        const game = new Game()
        await game.start()

        let googlePosition = await game.getGooglePosition()
        expect(googlePosition).toBeDefined()

        setTimeout( async ()=>{
            let googlePosition2 = await game.getGooglePosition()
            expect(googlePosition).toBeDefined()
        }, 3000 )
    } )
})