#!/bin/bash
rm -rf ./env.js
touch ./env.js

echo "window._env_ = {" >> ./env.js

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
  echo -e "\t$varname: \"$value\"," >> ./env.js
done < ./.env

echo -e "};\n" >> ./env.js