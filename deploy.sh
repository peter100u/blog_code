#!/usr/bin/env sh

set -e

npm run build
cd docs/.vuepress/dist
yes | cp -r ./* ../../../../blog_build/blog

cd ../../../../blog_build/blog

git add .
git commit -m "初始化1"
git push -f

cd -
