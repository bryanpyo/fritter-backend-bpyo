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




#### `POST /api/refreets` - Create a new refreet

**Body**

- `content` _{string}_ - The content of the refreet

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `400` If the refreet content is empty or a stream of empty spaces
- `413` If the refreet content is more than 140 characters long


#### `GET /api/refreets` - Get all refreets

**Returns**

- A success message
- All refreets

#### `DELETE /api/refreets/freetId` - Delete that refreet

**Returns**

- A success message

**Throws**

- `404` if freet doesn't exist
- `414` checks if user modifying is the user that created refreet
- `403` not logged in

#### `PUT /api/refreets/freetId` - Modify reFreet

**Returns**

- A success message

**Throws**

- `404` if freet doesn't exist
- `414` checks if user modifying is the user that created refreet
- `403` not logged in
- `400` content must be at least one char long
- `413` content must be no more thatn 140 chars



#### `PUT /api/tiers` - modify tier

**Body**
- `id` _{string}_ - the id of the freet being liked
- `user` _{string}_ - the user who did the like

**Returns**

- A success message
- The new tier

**Throws**

- `403` if the user is not logged in

#### `GET /api/tiers` - Get a tier

**Returns**

- A success message
- The current tier

**Throws**

- `404` if user doesn't exist

#### `POST /api/tiers` - Add a new tier

**Returns**

- A success message
- The initialized tier

**Throws**

- `403` if the user is not logged in
- `404` if is an invalid tier

#### `PUT /api/fame` - Update Fritter Fame for user

**Body**
- `user` _{string}_ - the user to update Fritter Fame
- `new_fame` _{string}_ - new fame to assign to user

**Returns**

- A success message
- The user and its new Fritter Fame

**Throws**

- `403` if the user is not admin

#### `PUT /api/tiers` - Update Verification Tier for user

**Body**
- `user` _{string}_ - the user to update Fritter Fame
- `new_tier` _{string}_ - new tier to assign to user

**Returns**

- A success message
- The user with their new tier

**Throws**

- `403` if the user is not admin
