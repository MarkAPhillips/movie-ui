#!/bin/bash
mkdir -p ./dist
rm -rf ./dist/env.js
touch ./dist/env.js

echo "window._env_ = {" >> ./dist/env.js

while read -r line || [[ -n "$line" ]];
do
    if printf '%s\n' "$line" | grep -q -e '='; then
        varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
        varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    fi
# Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo -e "\t$varname: \"$value\"," >> ./dist/env.js
done < ./.env

PACKAGE_VERSION=$(npm run --loglevel silent version)
echo -e "\tVERSION: \"${PACKAGE_VERSION}\"," >> ./dist/env.js
echo -e "};\n" >> ./dist/env.js
