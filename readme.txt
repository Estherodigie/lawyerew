Building lawyerew site
========================

The setup
-----------------
Create the lawyerew repo on github.
Create the lawyerew directory
cd lawyerew
Add this readme
yo angular --minsafe
yo heroku (yes/ copy)
grunt
git init
git add readme.txt
git add .
git commit -m "first commit"
git remote add origin https://github.com/brettwiesner1977/lawyerew.git
git push -u origin master
cd dist
git init
git add . 
git commit -m "my first remote commit"
heroku apps:create lawyerew
heroku keys:add ~/.ssh/id_rsa.pub
git push heroku master
In the heroku app page, add the github

Modifying and changing
-----------------------
(make some code changes)
grunt
Add to github:
git commit -a -m "changed some stuff"
git push -u origin master
(now push to heroku)
cd dist
git init (dunno if needed)
git add .
git push heroku master

