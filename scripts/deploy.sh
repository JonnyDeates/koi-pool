current_version=$(node -p "require('./package.json').version")

IFS='.' read -ra VERSION <<< "$current_version"
major="${VERSION[0]}"
minor="${VERSION[1]}"
patch="${VERSION[2]}"

patch=$((patch + 1))

new_version="${major}.${minor}.${patch}"
echo "New version: $new_version"

sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "package.json"

echo "Updated package.json to version $new_version"

git fetch --prune --prune-tags -f;

git tag "v$new_version" -m "v$new_version";

npm run auto-changelog

git commit -am "[X] chore: Updates CHANGELOG for v$new_version."

git tag "v$new_version" -m "v$new_version" -f

git push --follow-tags
