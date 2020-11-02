<img src=https://user-images.githubusercontent.com/21346239/91862876-7bf3f580-ec3c-11ea-94d6-5236f3867a9c.png width="168" height="168">
M. Chandonnet // GA - SEI // Project #2 // Calendar API

# Yahtzee API

A Yahtzee! API that includes Users, and Games  ( [Click HERE for Client](https://github.com/mchandonnet/yahtzee) )


## Installation and Setup
1. Fork and clone this repository. FAQ
2. Create a new branch, for your work.
3. Checkout to the training branch.
4. Install dependencies with npm install.

## Structure

Dependencies are stored in [`package.json`](package.json).

The `app` directory contains all models and route files:

+ ./app/models/event.js : Defines the schema for event creation and management
+ ./app/models/user.js : Defines the Schema for user creation and management

+ ./app/routes/event_routes.js : defines express routes for event creation and managment
+ ./app/routes/user_routes.js : defines express routes for user creation and management


The `curl-scripts` directory hold curl script used for CRUD actions against testing the API

+ ./curl-scripts/auth/change-password.sh : Test password changes
+ ./curl-scripts/auth/sign-in.sh : Test Sign-in action
+ ./curl-scripts/auth/sign-out.sh : Test sign-out action
+ ./curl-scripts/auth/sign-up.sh : Test Registration / sign-up action

+ ./curl-scripts/games/create.sh : Test event creation
+ ./curl-scripts/games/destroy.sh : Test event deletion
+ ./curl-scripts/games/index.sh : Test indexing for all users
+ ./curl-scripts/games/leaders.sh: Test for viewing leaderboard
+ ./curl-scripts/games/show.sh: Test for showing specific game (not used in prod)
+ ./curl-scripts/games/update.sh : Test Updates


The `lib` directory is for code that will be used in other places in the
application. The token authentication code is stored in `lib/auth.js`. The
other files in `lib` deal with error handling. `custom_errors.js` is where all
the different custom classes of errors are created. If you need some other kind
of error message, you can add it here. There are also some functions defined
here that are used elsewhere to check for errors. `lib/error_handler.js` is a
function that will be used in all your `.catch`es. It catches errors, and sets
the response status code based on what type of error got thrown.


## API

Scripts are included in [`curl-scripts`](curl-scripts) to test actions.
Add your own scripts to test your custom API.

## ERD

![Yahtzee-ERD](https://user-images.githubusercontent.com/21346239/97820834-fad9ce80-1c7d-11eb-9413-dc15ea9d31e3.png)


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Games
| Verb   | URI Pattern            | Controller#Action  |
|--------|------------------------|--------------------|
| GET    | `/games`               | `games#getByOwner` |
| GET    | `/games/:id`           | `games#getOne`     |
| GET    | `/leaders`             | `games#getTop25    |
| POST   | `/games`               | `games#create`     |
| PATCH  | `/games/:id`           | `games#update`     |

