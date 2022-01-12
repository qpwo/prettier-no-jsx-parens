#  prettier-no-jsx-parens

Prettier without so many parenthesis in jsx/tsx. Not perfect but decent. Seems to work fine with a global install in my testing.

```bash
npm i --save-dev prettier-no-jsx-parens
yarn add --dev prettier-no-jsx-parens
```

Then in your `package.json`:

```json
{
  "scripts": {
    "fmt": "prettier-no-jsx-parens -w -l ."
  }
}
```


Should use the same binary for CLI, `prettier`, but if it ends up as `prettier-no-jsx-parens` then just add this to your bashrc or zshrc:

```bash
alias prettier="prettier-no-jsx-parens"
```

## Vscode setting

In your settings.json add

```json
"prettier.prettierPath": "global-or-local-folder/node_modules/prettier-no-jsx-parens/"
```
