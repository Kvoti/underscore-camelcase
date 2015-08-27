# underscore-camelcase

Convert strings and object properties to and from camelCase and underscores.

## Examples

```js
import * as convert from 'underscore-camelcase';

console.log(convert.strToCamelCase('some_name_here')); // someNameHere
console.log(convert.strToUnderscore('someNameHere')); // some_name_here

let myObj = {
    first_prop: 'a',
    second_prop: 'b'
};

convert.objToCamelCase(myObj);

// myObj is
// {
//     firstProp: 'a',
//     secondProp: 'b'
// }

let myObj = {
    firstProp: 'a',
    secondProp: 'b'
};

convert.objToUnderscore(myObj);

// myObj is
// {
//     first_prop: 'a',
//     second_prop: 'b'
// }
```
