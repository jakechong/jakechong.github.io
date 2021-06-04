#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn dev

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jakechong/jakechong.github.io.git master

cd -