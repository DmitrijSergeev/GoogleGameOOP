const { Game } = require('./game')

describe('game tests', () => {
    it('first test', () => {
        const game = new Game()
        expect(game.test()).toBe('game')
    })
})