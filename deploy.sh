#!/usr/bin/env sh

set -e

npm run build
cd docs/.vuepress/dist
yes | cp -r ./* ../../../../blog_build/blog

cd ../../../../blog_build/blog

#/Users/u/Desktop/my_blog/blog_build/blog
#/Users/u/Desktop/my_blog/blog

git add .
git commit -m "提交的产物"
git push -f

cd ../../blog
git add .
git commit -m "提交的md记录"
git push -f

cd -
