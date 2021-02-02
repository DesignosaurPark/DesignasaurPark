
import { grabSum } from '../utils.js';

const test = QUnit.test;

const userTest = {

    userName: 'Alan',
    dinoArray: [
        {
            dinoId: 1,
            species: 'Raptor',
            tRexPercent: 70,
            triceratopsPercent: 20,
            pterodactylPercent: 10,
            name: 'Betty',
            description: 'This is an angry dinosaur.',
            img: 'headingImg.jpg',
            top: 35,
            left: 40,
        }
    ]
};

test('this fuction should take 3 numbers in and return their sum', (expect) => {
    //Arrange


    // Set up your arguments and expectations
    const expected = 100;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = grabSum(userTest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
