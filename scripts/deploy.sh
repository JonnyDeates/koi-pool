VERSION=$(node -p "require('./package.json').version")

git fetch --prune --prune-tags -f;

npm version $VERSION

git tag v$VERSION -m v$VERSION;

npm run auto-changelog

git commit -am "[X] chore: Updates CHANGELOG for v$VERSION."

git tag v$VERSION -m v$1 -f

git push --follow-tags
