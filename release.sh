#!/usr/bin/sh

git push origin main --follow-tags

version=$(node -p "require('./package.json').version")

gh release create "v$version" --generate-notes