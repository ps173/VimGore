# API Routes

Current Routes provided by the api for various methods are these:- 

- **Method:Get**

| Routes | Description |
|--------| ------------|
| "/api/v1/" | lists all the question|
| "/api/v1/random" | Provides a random question|
| "/api/:id" | Get a snippet by provided id|

- **Method : Post** 

| Routes | Description |
|--------| ------------|
| "/api/v1/" | Post/adds a question to the database(local)|

- **Method : Delete** 

| Routes | Description |
|--------| ------------|
| "/api/v1/:id" | deletes a question from the database(local)|

- **Method : Patch** 

| Routes | Description |
|--------| ------------|
| "/api/v1/:id" | updates a question in the database(local)|


## Schema of snippets

All the snippets look like this 
```json
{
 "id":"_somerandomid",
 "code":" some code here",
 "answer": " answer for the code",
 "minKeyStrokes" : "minimum key strokes required to complete",
 "language": "language of the snippet (possible values : python | javascript | rust | clojure| golang| css)"
}
```
