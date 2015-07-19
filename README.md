# OR13h 

## A Twitter Bot powered by OpenShift and Github


Build Your Own Bot Guide
=======

## 0. Clone Find Replace "OR13h" with "MyCoolAppName"...

## 1. OpenShift RHC Setup

Signup for an openshift account: https://www.openshift.com/app/account/new

Intall RHC: https://developers.openshift.com/en/managing-client-tools.html

## 2. Create Your Hubot App

```
rhc app create OR13h nodejs-0.10 http://cartreflect-claytondev.rhcloud.com/reflect?github=smarterclayton/openshift-redis-cart --from-code=https://github.com/codemiller/hubot-openshift
```

## 3. Testing locally

Install hubot:

```
npm install -g hubot coffee-script
```

Run locally:

```
$ ./bin/hubot --name OR13h
```

There are several included scripts that will be loaded. Try running a few commands, such as the following:

```
OR13h> OR13h help
OR13h> OR13h ping
OR13h> OR13h the rules
OR13h> OR13h map me sydney
OR13h> OR13h pug me
OR13h> OR13h ship it
```

## 4. Install Twitter Adapter

Install the hubot twitter adapter.

```
npm install hubot-twitter --save
```

## 5. Setup Your Twitter Account

Create a new twitter account named OR13h. 
Add a mobile number so you can create an app. Consider using google voice if you need a new number.
Create a new app named OR13h here: https://apps.twitter.com/app/new
Use  ``` rhc app show ``` to find your app url, mine looks like: http://or13h-<OpenShiftAccount>.rhcloud.com/
Enter this app url for website and callback fields, add description, agree to TOS (after reading) and save.
Go ahead and create an Access Token.

## 6. Set Your Environment Variables

Export some variables for local testing (all these fields are visible from the Access Token view in twitter).

```
export HUBOT_TWITTER_KEY=XXX
export HUBOT_TWITTER_SECRET=XXX
export HUBOT_TWITTER_TOKEN=XXX
export HUBOT_TWITTER_TOKEN_SECRET=XXX
```

You must run this command to make the variables available in openshift.

```
rhc env set HUBOT_TWITTER_KEY=XXX HUBOT_TWITTER_SECRET=XXX HUBOT_TWITTER_TOKEN=XXX HUBOT_TWITTER_TOKEN_SECRET=XXX -a OR13h
```

## 7. Testing Twitter Locally

You can test the twitter adapter locally (assuming environment variables have been exported).

```
$ ./bin/hubot --name OR13h --adapter twitter
```

## 8. Update package.json

Make these changes so OpenShift knows to use the twitter adapter: 

```
"start": "PORT=$OPENSHIFT_NODEJS_PORT BIND_ADDRESS=$OPENSHIFT_NODEJS_IP HEROKU_URL=$OPENSHIFT_APP_DNS REDIS_URL=redis://:$REDIS_PASSWORD@$OPENSHIFT_REDIS_HOST:$OPENSHIFT_REDIS_PORT bin/hubot -n OR13h -a twitter"
```

## 9. Deploying to OpenShift

Deploy via git as usual:

```
git add -A
git commit -m "Adding Twitter adapter and other changes..."
git push
```

## 10. Deploying to Github

Create a new repo on github with the same name.

```
git remote add origin git@github.com:OR13/OR13h.git
git push -u origin master
```

## Credits

These instructions were adopted from this wonderful blog post:

https://blog.openshift.com/hitchhikers-guide-to-tweetbots-hosting-a-hubot-on-openshift/

