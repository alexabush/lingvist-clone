## development

```
npm i
npm run dev
```

## use with npm link

First link the package locally

```
$ npm link
```

This will tell npm where it should find a linked version of the package.  Then run:

```
$ npx babel src -d lib -w
```

To watch the `src/` directory and rebuild on changes.  If you just want to build the package a single time, you can omit the `-w` flag.
