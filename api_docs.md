Model
## User
```json
{
    "_id":ObjectId(),
    "email":"",
    "name":"",
    "password":"",
    "createdAt":""
}
```
## Content
```json
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
}
```

# API

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