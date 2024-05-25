Model
## User
```json
{
    "_id":ObjectId(),
    "email":string,
    "name":string,
    "password":string,
    "createdAt":DateTime
}
```
## Content
```json
{
    "_id":ObjectId(),
    "author":string,
    "authorId":ObjectId(),
    "content":{
        "title":string,
        "content":string
    },
    "tags":Array(string),
    "createdAt":Datetime,
    "updatedAt":Datetime,
}
```

# API

### /api/register
POST:
> Request
```json
{
    "email":string,
    "name":string,
    "password":string,
}
```
> Response
```json
{
    "message":"user registration success"
}
```

### /api/login
POST:
> Request
```json
{
    "email"|"username":string,
    "password":string
}
```
> Response:
```json
cookies
{
    Authorization:token
}
```

### /api/content
GET:
> Response
```json
10 *
{
    "_id":ObjectId(),
    "author":string,
    "authorId":ObjectId(),
    "content":{
        "title":string,
        "content":string
    },
    "tags":Array(string),
    "createdAt":Datetime,
    "updatedAt":Datetime,
}
```
POST:
> Request
```json
{
    "title":string,
    "content":string
}
```
> Response
```json
{
    "message":"Successfully created"
}
```

### /api/cms
GET:
> Response
```json
   [,
   ...
    {
    "_id":ObjectId(),
    "author":"",
    "authorId":ObjectId(),
    "content":{
        "title":"",
        "content":""
    },
    "tags":[],
    "createdAt":"",
    "updatedAt":"",
    },
    ...
   ]
```
POST:
> Request
```json
{
    "author":"",
    "authorId":ObjectId(),
    "content":{
        "title":"",
        "content":""
    },
    "tags":[],
}
````
> Response
```json
{
    "message":"Content was successfully created"
}
```

### /api/cms/:id
PUT:
> Request
```json
{
    "author":"",
    "authorId":ObjectId(),
    "content":{
        "title":"",
        "content":""
    },
    "tags":[],
}
```
> Response
```json
{
    "message":"Content was successfully updated"
}
```
DELETE:
> Response
```json
{
    "message":"Content was successfully updated"
}
```