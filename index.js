// Write your code in this file!

// const sets the currentUser to Grace Hopper
const currentUser = 'Grace Hopper';

// const sets the welcome message to 'Welcome to Flatbook, ${currentUser} is the string to get the value of current user.
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; 
// .toUpperCase is telling to uppercase the welcome message. 
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// .slice is grabbing a copy of the original value and selecting what we want, 0 being the first letter and having it stop at 1.
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;


