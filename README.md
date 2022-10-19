## API routes

The following api routes have already been implemented for you (**Make sure to document all the routes that you have added.**):

#### `GET /`

This renders the `index.html` file that will be used to interact with the backend

#### `GET /api/freets` - Get all the freets

**Returns**

- An array of all freets sorted in descending order by date modified

#### `GET /api/freets?author=USERNAME` - Get freets by author

**Returns**

- An array of freets created by user with username `author`

**Throws**

- `400` if `author` is not given
- `404` if `author` is not a recognized username of any user

#### `POST /api/freets` - Create a new freet

**Body**

- `content` _{string}_ - The content of the freet

**Returns**

- A success message
- A object with the created freet

**Throws**

- `403` if the user is not logged in
- `400` If the freet content is empty or a stream of empty spaces
- `413` If the freet content is more than 140 characters long

#### `DELETE /api/freets/:freetId?` - Delete an existing freet

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `403` if the user is not the author of the freet
- `404` if the freetId is invalid

#### `PUT /api/freets/:freetId?` - Update an existing freet

**Body**

- `content` _{string}_ - The new content of the freet

**Returns**

- A success message
- An object with the updated freet

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `403` if the user is not the author of the freet
- `400` if the new freet content is empty or a stream of empty spaces
- `413` if the new freet content is more than 140 characters long

#### `POST /api/users/session` - Sign in user

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with user's details (without password)

**Throws**

- `403` if the user is already logged in
- `400` if username or password is not in correct format format or missing in the req
- `401` if the user login credentials are invalid

#### `DELETE /api/users/session` - Sign out user

**Returns**

- A success message

**Throws**

- `403` if user is not logged in

#### `POST /api/users` - Create an new user account

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the created user's details (without password)

**Throws**

- `403` if there is a user already logged in
- `400` if username or password is in the wrong format
- `409` if username is already in use

#### `PUT /api/users` - Update a user's profile

**Body** _(no need to add fields that are not being changed)_

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the update user details (without password)

**Throws**

- `403` if the user is not logged in
- `400` if username or password is in the wrong format
- `409` if the username is already in use

#### `DELETE /api/users` - Delete user

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in

#### `POST /api/reFreets` - Create a new reFreet

**Body**
- `id` _{string}_ - the id of the freet being reFreeted
- `content` _{string}_ - The additional comments for the reFreet

**Returns**

- A success message
- A object with the reFreet

**Throws**

- `403` if the user is not logged in
- `400` If the freet content is empty or a stream of empty spaces and there is no image
- `413` If the freet content is more than 140 characters long


#### `PUT /api/Likes` - Add a like

**Body**
- `id` _{string}_ - the id of the freet being liked
- `user` _{string}_ - the user who did the like

**Returns**

- A success message
- The Freet being liked

**Throws**

- `403` if the user is not logged in

#### `PUT /api/FritterFame` - Update Fritter Fame for user

**Body**
- `user` _{string}_ - the user to update Fritter Fame
- `new_fame` _{string}_ - new fame to assign to user

**Returns**

- A success message
- The user and its new Fritter Fame

**Throws**

- `403` if the user is not admin

#### `PUT /api/TieredVerifications` - Update Verification Tier for user

**Body**
- `user` _{string}_ - the user to update Fritter Fame
- `new_tier` _{string}_ - new tier to assign to user

**Returns**

- A success message
- The user with their new tier

**Throws**

- `403` if the user is not admin

#### `POST /api/PositivityBots` - Positivity Bot posts a reply

**Body**
- `id` _{string}_ - id of Freet to reply to

**Returns**

- A success message
- An object with the Freet and the reply

**Throws**

- `403` if the user is not admin
