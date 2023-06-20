# React Contact List App
### Netlify link - https://faceprefassignment.netlify.app/
This is a React-based contact list app that allows users to log in, view a list of contacts, implement infinite scroll functionality, and log out. The app fetches contact data from the Random User API and displays it in a visually appealing manner.

## Features

User authentication: Users can log in with a predefined username and password ("foo" and "bar" respectively) to access the contact list.

Protected routes: The main list UI ("/home" route) is only accessible to logged-in users. Non-logged-in users are redirected to the login page ("/").

Infinite scroll: The contact list is loaded in chunks, and when the user reaches the end of the page, more contacts are fetched and appended to the existing list.

Logout functionality: Logged-in users can log out by clicking the "Logout" button, which redirects them to the login page.

Responsive design: The UI is designed to be responsive and look correct on different viewports, including a 320x480 size.


