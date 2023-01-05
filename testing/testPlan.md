# WHAT TESTS TO DO

## GET request to /X

### and there's data in the collection

    - should get all documents in the collection
    - the collection should be an array of objects
    - it should have the format JSON
    - it should have the correct keys
    - every value should be the right data type
    - every value should have the right format

    - *if this condition is not met, the server must return a 500*
    - *if this conditions are met, the server must return a 200*

### and there's no document in the collection / no collection in the database / the database is down

    - *should get a 404*

## GET request to /X/:id

### and there's X with that id in the database

    - should get the speciffic X
    - X should be an object
    - it should have the format JSON
    - it should have the correct keys
    - every value should be the right data type
    - every value should have the right format

    - *if this condition is not met, the server must return a 500*
    - *if this conditions are met, the server must return a 200*

### and there's no document in the collection / no collection in the database / the database is down

    - *should get a 404*

## POST request to /X

### but there's no document in the collection / no collection in the database / the database is down

    - *should get a 404*

### there's no other X already in the database that has the same value for this keys as another document in the collection

        - email
        - band.name
        - business.name
        - event.name + event.date
        - venue.name

    - *if another document matches this key.value pairs, it should return a 500*

### otherwise if

    - there's a req.body
    - req.body is in JSON format
    - it has the correct keys
    - every value has the right data type
    - every value has the right format

    - *if this condition are not met, the server must return a 500*

    - *if this conditions are met*

    - server must return a 200
    - creates a new document in the database
    - the new document has X information (req.body)

## PATCH request to /X/:id

### but there's no document in the collection / no collection in the database / the database is down

    - *should get a 404*

### otherwise if

    - there's a req.body
    - req.body is in JSON format
    - it has the correct keys
    - every value has the right data type
    - every value has the right format

    - *if this condition is not met, the server must return a 500*

    - *if this conditions are met*

    - server must return a 200
    - creates a new document in the database
    - the new document has X information (req.body)


## DELETE request to /X/:id

### but there's no document in the collection / no collection in the database / the database is down

    - *should get a 404*


### if this id is found
    
    - server must return a 500
    - the server must delete the document



{ - to get an X by...
id (default)
firstName
lastName
date
(email ?)
tag
price
}
