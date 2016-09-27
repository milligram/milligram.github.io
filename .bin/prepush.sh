#!/bin/bash
# set -e # Exit with nonzero exit code if anything fails

# Compile
npm install
npm run build

# Statement
BRANCH="master"
REPO=`git config remote.origin.url`
SHA=`git rev-parse --verify HEAD`

# Prepare
git clone -b $BRANCH --single-branch $REPO $BRANCH
cd $BRANCH
rm -rf *
cp -rf ../dist/* ./

# Diff
if [ -z `git diff --exit-code` ]; then
	cd ..
	rm -rf $BRANCH
	echo "No changes on this push, exiting."
	exit 0
fi

# Commit
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Push
git push origin $BRANCH

# Clean
cd ..
rm -rf $BRANCH
echo "Deployed successfully on this push, congrats!"
exit 0
