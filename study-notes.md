Prepare a concise study note in your own words. The note should show understanding rather than copied definitions.
•
•
•
•
•
•
•
•

# Clean-code and readability principles.

### What makes code clean and maintainable?

Writing code that is easily maintainable, by anyone in a team. Readable & Understandable. The goal of a clean codebase ensures that the human resources required to maintain the code is constantly at the barest minimum.

### Why is working code not automatically good code? Give at least three reasons.

Good code is characterized by the following:

1. Readability
2. Understandability
3. Maintainability

Working code that doesn't meet with these more or less don't qualify as good code. Good code are written to meet with standards that ensure maintainability and scalability.

### Why do meaningful names reduce maintenance cost?

It reduces maintenance cost in that it reduces the amount of time required to understand the code and the implemented application of the names throughout the code. This in turn reduces the amount of time required for a dev. to read and understand the code, reduces amount of time needed to complete a job and hence reduces the cost of maintenance.

### Explain the Single Responsibility Principle with a simple example.

SRP - is simply a principle that suggests that functions and classes should only have one reason for a change. Also logic should be separated categorically to avoid side effects.

```
const userData = localStorage.getItem(data)
const getName = (data) => {
    return data.userName; // solely to fetch user's name.
}
```

### Why is readable code important in a team environment?

It is important in a team env. because it greatly improves the maintenance of the code by the entire team, and keeps productivity @ max.

### Why should developers avoid unnecessarily large functions?

Functions that do too much are prone to bugs and harder to maintain.
E.g:

````
function user () {
    let user = fetchUser();

    if (user.data !== {} || []) {
        let isActive = true
        if (isActive) populateUserData();
    }

    setUserTier();
}```

Too many things to handle at once.

````

Functions should be boken down to smaller modules in order to ensure proper separation of concerns, and a modular and componentized codebase.

### Why do meaningful names reduce maintenance cost?

Approaching this by examples first:

#### Example 1

```
let ji = ui();
let i = 0;
for (; i < ji.length; ji++){
    // Display dynamic user data content
}
```

#### Example 2

```
let user = fetchUserData();
let count = 0;
for (; count < user.length; user++){
    // Display dynamic user data content
}
```

Looking at he two examples above, there is a clear adantage of one over the other. At on glance the second example is easily understaood by any programmer and is easily modifiable, compaed to he first, uing abstract names which do not have a usage definition, there is simply no way of understand what the code is exactly achieving.

This demonstrates the importance and need for using meaningful names. It makes the readability & understanding of the codebase easier reduces the time cost of maintainability is greatly reduced.

### Explain the Single Responsibility Principle with a simple example.

The Single Responsibility Principle, is the first principle of the SOLID, an acronym, for the standard principles guiding OOP in the software development world.

In My understanding, it is a proper segregation of the the duties of a function, class or module in a program or throughout a codebase. It means every function, class or module should have only one responsible kind of task that it is responsible for. Like if a function is built to both fetch userdata and also determine how it will be displayed, it is built wrongly. Instead one fn. should fetch, another should normalize it, then another should be responsible for displaying the data.

This is the Single Responsibility Principle. The fn., class, or module should only have one responsibility in the codebase, and then a change in it cannot be dependent on another or affect another.

### Why should developers avoid unnecessarily large functions?

Most importantly, large funtions violate the SRP principle. It makes code harder to maintain, understand and to read. It can reduce team collaboation on a project. It also makes it difficult, to define of the dependencies of on the said function and it's influence on other components.

### What does separation of concerns mean?

It simply means keeping the job of a single function tied to a specific task or job.

From the previous example:

```
function user () {
    let user = fetchUser();

    return user
}

function populateUserData (data, status) {
    if (status) {
        // data population logic
    }
}

function setUserTier () {
    // set user tier logic
};

function fetchUser () {
    // fetch user data

    let userTier = setUserTier();
};

Each fn. performs one specific thing!

```
