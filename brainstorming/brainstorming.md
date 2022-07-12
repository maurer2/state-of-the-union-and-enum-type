# Brainstorming

## History
Const assertion introduced in TS 3.4 (2019)
String enums in TS 2.4 (2017)
Const enums TS 1.4 (2015)
Union types TS 1.4 (2015)
Numeric enums TS 1.0 or earlier (2014)

## Regular enums
Easily change values of enums without changing implementation
Affect runtime bundle size
Predate current TS design goals (impose no runtime overhead on emitted programs)


## Const enum
Not affecting bundle size (removed during compilation)
Don't work with --isolatedModules (each module is compiled in isolation) -> Babel, esbuild, tsx
Babel requires a plugin (https://babeljs.io/docs/en/babel-preset-typescript#optimizeconstenums)
Esbuild does some magic (https://github.com/evanw/esbuild/issues/128)

## Union types with const assertion
Closer to vanilla JS
Doesn't affect runtime filesize
Changing values of union types requires implementation changes (change comparison etc.)

## Current recommendation
TS handbook recommends union type for "Modern TS" (https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
Const enums are problematic (https://github.com/Microsoft/TypeScript/issues/30590)
Easily change values of enums without changing implementation

## "Modern TS"
Extend new and existing Javascript features with Types
Don't add runtime behaviour changes
Remain compatible with Javascript and don't add new features that might clash with possible future JS updates (e.g. constructor parameters https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords etc.)

## "Oldschool TS"
Create a better version of Javascript with types and more language features
