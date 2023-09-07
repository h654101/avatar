#!/usr/bin/env sh
set -e
quasar build
cd dist/spa
git init
git add -A
git commit -m'deploy'
git push -f https://github.com/h654101/avatar.git master:gh-pages
cd -
rm dist/spa -fr
