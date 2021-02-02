
import { grabSum, findById } from '../utils.js';

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
    const numOne = userTest.dinoArray[0].tRexPercent;
    const numTwo = userTest.dinoArray[0].triceratopsPercent;
    const numThree = userTest.dinoArray[0].pterodactylPercent;

    // Set up your arguments and expectations
    const expected = 100;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = grabSum(numOne, numTwo, numThree);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('this fuction takes in an id and an array and returns the corresponding object with that id in the array', (expect) => {
    //Arrange
    const headOptions = [

        {
            id: 'tRexHead',
            description: 'angry',
            img: 'tRexHeadImg.png',
        },

        {
            id: 'triceratopsHead',
            description: 'peaceful',
            img: 'triceratopsHeadImg.png',
        },

        {
            id: 'pterodactylHead',
            description: 'whimsical',
            img: 'pterodactylHeadImg.png',
        }
    ];

    // Set up your arguments and expectations
    const expected = {
        id: 'tRexHead',
        description: 'angry',
        img: 'tRexHeadImg.png',
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById('tRexHead', headOptions);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

