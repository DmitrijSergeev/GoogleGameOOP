import {NumberUtil} from "./numberUtil.js";

describe('NumberUtil', ()=>{
    let util;

    beforeEach( ()=>{
        util = new NumberUtil();
    } )
    it('should return a number within the specified range', ()=>{
        const from = 5;
        const to = 15;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBeGreaterThanOrEqual(from);
        expect(randomNumber).toBeLessThanOrEqual(to);
    } );

    it('', ()=>{
        const from = 10;
        const to = 10;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBe(from);
    })
} )