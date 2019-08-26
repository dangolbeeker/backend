# Conjugator App Endpoints

Base URL: https://sp-conjugator-be.herokuapp.com

## Endpoints

---

** POST (Register) **
** /api/auth/register **

_Send:_

{
"name": "Dave",
"email": "email@email.com",
"password": "password"
}

_Get Back:_

{
"id": 8,
"name": "Dave",
"email": "email@email.com",
"password": "$2a$12\$2HANPA7JmIUNr72fs4JrouPw0sut42mErDLYPMTA/jqUrcnunMgf2"
}

_Save the id as needed for later use._
