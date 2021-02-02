// IMPORT MODULES under test here:

import { renderDinosaur } from '../incubation/incubation-utils.js';

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

test('when given user, return div with dino images and description', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="dino-container"><p>Your Dinosaur is an angry fellow. They are a scavenger. They can reach speeds up to 12 mph.</p><img src="../assets/tRexHeadImg.png"><img src="../assets/pterodactylBodyImg.png"><img src="../assets/triceratopsFeetImg.png"></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDinosaur(userTest.dinoArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
