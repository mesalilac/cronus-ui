#!/usr/bin/sh

version=$(node -p "require('./package.json').version")

gh release create "v$version" --generate-notes