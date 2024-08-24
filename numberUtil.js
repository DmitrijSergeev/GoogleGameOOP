export class NumberUtil{
    getRandomNumber (minInclusive, maxInclusive){
        return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive)
    }
}