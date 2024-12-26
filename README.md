# concat-str

A simple function with zero dependencies to concatinate multiple strings together to form a proper sentence.

# Installation

```bash
$ npm install concat-str
# or
$ pnpm add concat-str
# or
$ bun add concat-str
```

# Usage
```ts
import { concat } from 'concat-str'
console.log(concat("hello", "there")) // # "hello there"
console.log(concat(["hello", "there"])) // # "hello there"
```
