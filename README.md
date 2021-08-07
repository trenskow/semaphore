@trenskow/semaphore
----

A small library for waiting in JavaScript.

# Usage

Create a new semaphore like below.

````JavaScript
const Semaphore = require('@trenskow/semaphore');

const mySemaphore = new Semaphore();
````

## Waiting

To wait do as below.

````javascript
await mySemaphore.wait();
````

## Signalling and broadcasting

To signal (from another place) that one of the waiters can continue, do as below.

````javascript
mySemaphore.signal();
````

– or to broadcast to all awaiters to conitnue.

````javascript
mySemaphore.broadcast();
````

## Errors

You can also reject all awaiters with an error.

````javascript
mySemphore.reject(myError);
````

# LICENSE

See license in LICENSE.

