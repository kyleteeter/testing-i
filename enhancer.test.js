const enhancer = require('./enhancer');
const { hammer } = require('./weapons');

const repairedWeapon = {
    name: 'Hammer',
    type: 'weapon',
    durability: 100,
    enhancement: 12
}

const successWeapon = {
    name: 'Hammer',
    type: 'weapon',
    durability: 15,
    enhancement: 'PRI'
}
describe ('the enhance object', () => {
        describe('weapon repair', () => {
            test('restore durability to 100', () => {
                expect(enhancer.repair(hammer)).toEqual(repairedWeapon)
            })
        })

        describe('the fail function', () => {
            const failAttelpt1 = () => {
                    enhancer.fail(item)
                }

            const failAttelpt2 = () => {
                    enhancer.fail(item)
                }
                
                expect(failAttelpt1).toThrow();
                expect(failAttelpt2).toThrow();
        })

        describe('enhance by one', () => {
            test('increace level by one', () => {
                expect(enhancer.success(hammer)).toEqual(successWeapon)
            })
        })

})