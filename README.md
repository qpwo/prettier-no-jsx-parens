#  prettier-no-jsx-parens

Prettier without so many parenthesis in jsx/tsx. Not perfect but decent. Seems to work fine with a global or a local install in my testing.

## Example comparison

```jsx
// prettier-no-jsx-parens:
function User({ username }) {
  return <>
    <span>User:</span>
    <span>{username}</span>
  </>;
}

// regular prettier:
function User({ username }) {
  return (
    <>
      <span>User:</span>
      <span>{username}</span>
    </>
  );
}
```

## Installation

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

```bash
echo 'alias prettier="prettier-no-jsx-parens"' >> ~/.bashrc
# or
echo 'alias prettier="prettier-no-jsx-parens"' >> ~/.zshrc
```

## Vscode setting

In your settings.json add

```json
"prettier.prettierPath": "global-or-local-folder/node_modules/prettier-no-jsx-parens/"
```
