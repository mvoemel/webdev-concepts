# Pushing to multiple git remotes simultaneously

You can push to multiple git remotes simultaneously by setting up a remote with multiple Push URLs.

Let’s say you have a repository on GitHub you’d like to switch over to GitLab. Currently, the local checkout of the repository has a remote named origin, which points to the repository on GitHub:

```
git remote get-url origin
https://github.com/hanspeter/test.git
```

First, rename the origin to github:

```
git remote rename origin github
```

Then, add the GitLab remote:

```
git remote add gitlab https://gitlab.com/hanspeter/test.git
```

Now, let’s set up the origin so it **fetches from the gitlab remote**, but **pushes to both gitlab and github**. First, set up the fetch URL for the origin remote to point to the codeberg remote:

```
git remote add origin https://gitlab.com/hanspeter/test.git
```

Then, add both Codeberg and GitHub as push URLs:

```
git remote set-url --add --push origin https://gitlab.com/hanspeter/test.git
git remote set-url --add --push origin https://github.com/hanspeter/test.git
```

Now, the origin remote fetches from Codeberg, and pushes to both the GitHub and GitLab repositories:

```
git remote show origin
* remote origin
  Fetch URL: https://codeberg.org/jkreeftmeijer/ox-md-title.el.git
  Push  URL: https://codeberg.org/jkreeftmeijer/ox-md-title.el.git
  Push  URL: https://github.com/jeffkreeftmeijer/ox-md-title.el
  HEAD branch: main
  Remote branch:
    main new (next fetch will store in remotes/origin)
  Local ref configured for 'git push':
    main pushes to main (up to date)
```
