## Function Declaration
- example:
```js
function razzleDeclaration() {
  console.log("Razzled!"); 
}
```

- `razzle` is a POINTER to a function stored in global memory
- add `()` to call/invoke/execute the pointer, e.g.: `razzle();`
- you can write declarations AFTER a function has been called

### Hoisting
- JS's ability to call a functionm before its in the code is called *hoisting*
- hoisting only works with function declarations


## Function Expression
- example:
```js 
let razzleExpression = function() {
  console.log("Yet more razzle!");
}
```

- Chrome symbolizes *frozen* work with a special `f` character
- `razzleExpression` is a pointer to a stored block of work
- function expressions are not hoisted


## Weird Trick with Function Scopes
- example:
```js 
function outer(greeting, msg) {
  return function(name, lang) {
    return `${greeting}, ${name}! ${msg} ${lang}`
  }
}

outer("Hello", "It's a fine day to learn")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript!"
```

- could also store a function with a specific argument, and call it with another set of arguments passed to the inner Functions
- example:
```js 
let storedFunction = outer("Hello", "It's a fine day to learn");
storeFunction("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript!"
```

## Closure
- the inner function of that weird trick with scopes is called a *closure*
- a *closure* encloses the function-level execution context of its parent; like a backpack