THE LAWYEREW WEBSITE
========================

OVERVIEW
---------
This website was built using git, grunt, yeoman, angular, heroku and bootstrap. Its meant to be developed locally on a laptop, then deployed using heroku. Everything should work locally except the mail form. Everything should be testable, including the sendmail bits.

THE SHELL
-----------
This stuff runs from using the Git Bash shell (start -> all programs -> git -> bash shell)

THE SETUP
-----------------
This is how this site was setup. I recommend referring to the dropbox/web app starter/fullyTestAppSetup.txt if you are going to create another site. This was done before I figured out e2e and unit testing.

Create the lawyerew repo on github.
Create the lawyerew directory
cd lawyerew
npm install -g karma
npm install karma --save-dev  (installs karma locally)
npm install karma-junit-reporter --save-dev
npm install grunt-karma --save-dev
npm install gzippo express --save
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
In the heroku app page, add the github. Also, add the SendGrid add-on (starter plan is free)
https://github.com/sendgrid/sendgrid-nodejs)
npm install sendgrid --save
heroku config:get SENDGRID_USERNAME
app18524491@heroku.com
heroku config:get SENDGRID_PASSWORD

MODIFYING AND CHANGING
-----------------------
(make some code changes)
grunt
Add to github:
git commit -a -m "changed some stuff"
git push -u origin master

Now push to heroku:
cd dist
git init (dunno if needed)
git add .
git commit -m "message"
git push heroku master

Maybe add a controller:
yo angular:controller contact --minsafe
(This produces contact.js and test/contact.js)

TESTING
--------
Open 3 shells.
In one type “grunt server” and you should see a page open in your browser.
In the second type “karma start” and you should see 1 of 1 tests successful
In the third type “karma start karma-e2e.conf.js” and you should see 1 of 1 tests successful
Whenever you change a line, the tests should auto re-run.

Getting this on godaddy
-----------------------
In the heroku settings give the name of the godaddy url you want to use.
Go to godaddy:
    1. forward example.com to www.example.com.
    2. Make sure the nameservers are godaddy nameservers
    3. Then in the domain registry, set up a new CNAME entry: Replace "www" that has a value of "@" with youapp.herokuapp.com"


TODO
----
Change links anchors
put more pictures
add a favicon
