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

## Vscode settings

Compatible version of esbenp.prettier-vscode:

```sh
# edit: in 2026 you need to disable signature verification since 9.1.0 was before they had that

# dont let local package.json etc confuse pnpm
cd ~/
# install prettier package
pnpm i -g prettier-no-jsx-parens

# get global install path
PRETTIERPATH="$(pnpm root -g)/prettier-no-jsx-parens"

# global settings file
SETTINGSJSON="$HOME/Library/Application Support/Code/User/settings.json"
# if you are connected to server over ssh:
# SETTINGSJSON=$HOME/.vscode-server/data/Machine/settings.json

# remove closing curly bracket
perl -i -pe 's/^\s*}$//' "$SETTINGSJSON"

# append settings
echo '
  "editor.formatOnSave": true,

  // allow installing older version of prettier extension. vscode added signature requirement after 9.1.0 was published
  "extensions.verifySignature": false,

  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "prettier.prettierPath": "'$PRETTIERPATH'",
}' >> $SETTINGSJSON

# install extension now that extensions.verifySignature is set.
code --install-extension esbenp.prettier-vscode@9.1.0
```


```

In your settings.json add

```json
"prettier.prettierPath": "global-or-local-folder/node_modules/prettier-no-jsx-parens/"
```
