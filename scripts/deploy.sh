#!/bin/bash

npm run build

current_version=$(node -p "require('./package.json').version")

IFS='.' read -ra VERSION <<< "$current_version"
major="${VERSION[0]}"
minor="${VERSION[1]}"
patch="${VERSION[2]}"

patch=$((patch + 1))

new_version="${major}.${minor}.${patch}"
echo "New version: $new_version"

# Check OS and use appropriate sed command
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "package.json"
else
    # Assume Linux/Windows with Git Bash
    sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "package.json"
fi

echo "Updated package.json to version $new_version"

git fetch --prune --prune-tags -f

git tag "v$new_version" -m "v$new_version"

npm run auto-changelog

git commit -am "[X] chore: Updates CHANGELOG for v$new_version."

git tag "v$new_version" -m "v$new_version" -f

git push --follow-tags
