const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  if(userText !== '') {
    // test that the user input is not blank
    // make HTTP call
    github.getUser(userText).
      then(data => {
        if(data.profile.message === 'Not Found') {
          // show alert using ui.js - user is not found
          ui.showAlert('User not found', 'alert alert-danger');

        } else {
          // Show profile in ui.js
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // if the user input has been typed, but text is deleted (backspace)
    // then clear user profile using ui.js 

    ui.clearProfile();
  }
});