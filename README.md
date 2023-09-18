# Steps to Reproduce

## Preparation

1. Create some secret in 1Password.
2. Download the secret as a json file.

  ```sh
  op item --format=json get [ID OF MY ITEM] > template.json
  ```

## Working Example with Shell Script

```sh
# Run the script, which will create a new item from the template.json
./working.sh
```

## Failing Example with NodeJs

```sh
node ./main.js

# Failure Output
[ERROR] 2023/09/18 14:17:04 Provide the item category with '--category' flag
```

# Expected Behavior

The NodeJs script should create a new item from the template.json. There is also an example that pipes the
template json to `cat` using stdin, which works. Therefore, I assume the error must be with 1Password CLI.
