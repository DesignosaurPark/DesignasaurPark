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
    const expected = `<div style="display: flex; flex-direction: column;"><img src="../assets/tRexHeadImg.png" style="display: flex; flex-direction: column; place-content: center; width: 264px; margin-left: 20vw; margin-right: 20vw;"><img src="../assets/tRexTorsoImg.png" style="display: flex; flex-direction: column; place-content: center; width: 264px; margin-left: 20vw; margin-right: 20vw;"><img src="../assets/tRexLegsImg.png" style="display: flex; flex-direction: column; place-content: center; width: 264px; margin-left: 20vw; margin-right: 20vw;"><p style="width: 80vw; text-align: center; font-weight: bold;">Your Dinosaur is an angry fellow. They are a carnivore. They can reach speeds up to 35 mph.</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const stackedRankArr = stackRankTotals(userTest);
    const actual = renderDinosaur(stackedRankArr);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
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
    const actual = stackRankTotals(userTest.dinoArray[userTest.dinoArray.length - 1]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

