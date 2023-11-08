const userEvents = require('./eventEmitter');

userEvents.on('userLoggedIn', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
});

userEvents.on('userLoggedOut', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged out`);
});

function simulateUserLogin() {
  const userId = Math.floor(Math.random() * 1000);
  userEvents.emit('userLoggedIn', userId);

  setTimeout(() => {
    userEvents.emit('userLoggedOut', userId);
  }, Math.random() * 2000 + 100);
}

setInterval(simulateUserLogin, Math.random() * 1900 + 100);
