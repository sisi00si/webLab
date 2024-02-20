# Email Sender App

## Overview
This is a simple Node.js application that allows users to send emails using a web interface. It uses Nodemailer for email sending functionality and EJS for rendering email templates.

## Prerequisites
- Node.js installed on your machine
- An email account for sending emails (e.g., Gmail, Yahoo, etc.)

## Installation
1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.

## Usage
1. Set up environment variables for your email account credentials. Create a `.env` file in the project root directory and add your email address and password:

    ```plaintext
    EMAIL_USER=email@example.com
    EMAIL_PASS=email-password
    ```

2. Run the application using `npm start`.
3. Open a web browser and navigate to `http://localhost:3000` to access the email sender interface.
4. Fill out the form with the recipient's email address, subject, and message, then click "Send Email".

## Deployment
You can deploy this application to a cloud platform like Heroku following these steps:
1. Create a Heroku account if you don't have one.
2. Install the Heroku CLI.
3. Log in to Heroku using `heroku login` command in your terminal.
4. Create a new Heroku app using `heroku create`.
5. Push your code to Heroku using `git push heroku master`.
6. Set environment variables for your email account credentials using `heroku config:set` command.
7. Open your Heroku app in the browser and start sending emails.

## Credits
- This application uses [Nodemailer](https://nodemailer.com/) for email sending functionality.
- [EJS](https://ejs.co/) is used for rendering email templates.
