# Working with development branch and merge with master

Sometimes you want to experiment with a code which you have on your master branch but not want to save it to master branch. In this case, you can create another branch where you can experiment with ease - and if you are satisfied, you can merge the experiment to the master branch later.

## Creating development branch

```
git branch development
git checkout development
git add .
git commit -m "Initial commit on development branch"
git push origin development
```

---

After experimentation

---

## Merging with master

### Method 01:

```
git checkout master
git merge development
git push origin master
```

### Method 02:

This method offers additional steps for safety.

```
git checkout development
git merge master (resolve any merge conflicts)

git checkout master
git merge development (there shouldn't be any conflicts left over)
```

or

```
git merge --no-ff development
```

... if you want to keep track of who did the merge and when.
