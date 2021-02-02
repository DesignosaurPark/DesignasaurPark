// IMPORT MODULES under test here:

import { renderDinosaur, stackRankTotals } from '../incubation/incubation-utils.js';

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

test('the renderDinosaur function, when given user, return div with dino images and description', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><img src="../assets/tRexHeadImg.png"><img src="../assets/triceratopsTorsoImg.png"><img src="../assets/pterodactylLegsImg.png"><p>Your Dinosaur is an an angry fellow. They are an herbivore. They can reach speeds up to 48 mph.</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const stackedRankArr = stackRankTotals(userTest);
    const actual = renderDinosaur(stackedRankArr);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('the stackRankTotals function, when given user, return the head, torso and legs ids', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        'tRexHead',
        'triceratopsTorso',
        'pterodactylLegs'
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = stackRankTotals(userTest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

