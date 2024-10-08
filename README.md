# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Team members`
Philip Ugbede Ojo Onuche - Project Manager/ Environmental Chemist

Onuche Paul - Software Engineer

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Firebase Installation Guide

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add Project".
3. Follow the prompts to create a new project.

## Step 2: Register Your App with Firebase

1. In the Firebase Console, click on the project you created.
2. Click on the web icon (`</>`) to register a web app.
3. Follow the instructions and note down the Firebase configuration details (API key, Auth domain, etc.).

## Step 3: Install Firebase SDK

Open a terminal and navigate to your project directory. Run the following command to install Firebase:

### Usage Guidelines

### Sign up

# Form Fields
- Name: Collect user's full name.
- Email: Collect user's email address.
- Password: Collect a secure password 
- Fields: Address, phase numbe amd house number.

### Login Component

# Form Fields
- Email: Collect user's email address.
- Password: Collect user's password.

### Request Pickup

- Navigate to the Request Pickup page.
- Fill out the form with your details and preferred pickup date and time.
- Submit the form to request a pickup.
-  Earn bonus for a requesting pickup.

### View Pickup History

- Navigate to the Pickup History page.
- View the list of all your previous pickups.

### Manage Account Settings

- Navigate to the Account Settings page.
- Update your name, address, phase number, and house number as needed.
- Save changes or delete your account if desired.

### Overview of the project

This is a web application for a recycling platform where users can manage their recycling activities. Users can request pickups and earn bonus, view their  request pickups history, manage their account settings.

## Architecture

- Frontend: React For building the user interface.
- Backend/Database:Firebase For managing the database and user   authentication.
- Development Tools:VS Code For writing and managing your code and Git For version control.

##  Data Flow:
- User sign-up data -> Firebase Authentication -> Firestore.
- User login data -> Firebase Authentication -> Fetch user profile from  Firestore -> Display on dashboard.
- Waste data (in Lbs) -> Firestore -> Calculate bonus points -> Update user profile in Firestore.
- Fetch profile details and bonus -> Display on user dashboard.
- Redeem points for products -> Update points balance in Firestore


## Features

- User authentication with Firebase
- Request and track recycling pickups
- View recycling history
- Earn bonus by requesting for pick-ups
- Manage account settings
