# Conjugator App Endpoints

Base URL: https://sp-conjugator-be.herokuapp.com

## Register New User

**POST to /api/auth/register**

_Send:_

```
{
	"name": "Dave",
	"email": "email@email.com",
	"password": "password"
}
```

_Get Back:_

```
{
	"id": 8,
	"name": "Dave",
	"email": "email@email.com"
}
```

_Save the id as needed for later use._

## Login

**POST to /api/auth/login**

_Send:_

```
{
	"email": "email@email.com",
	"password": "password"
}
```

_Get Back:_

```
{
  "message": "Welcome, Dave.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Save the token to local storage and send in header of all requests that need the user to be authenticated._

## Get User Profile

**GET to /api/user/:id**

_Send user id as part of the url._

_Get Back:_

```
{
  "id": 8,
  "name": "Dave",
  "email": "dave@email.com"
}
```

## Get list of all users - (for testing only, will be removed in product)

**GET to /api/users/**

_Send token in request header._

```
{
	"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Get Back:_

```
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@email.com"
  },
  {
    "id": 2,
    "name": "Dave",
    "email": "dave@email.com"
  }
]
```
