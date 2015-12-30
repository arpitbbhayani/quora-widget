Unofficial Quora Widget
---------------------------------------
Quora widgets for your amazing [Quora profile](https://www.quora.com/).

With just two lines you can now add snippets of your complete Quora profile into your own personal websites. A little preview

![Quora Cards Preview](https://cloud.githubusercontent.com/assets/4745789/12001621/1ac512d2-ab12-11e5-802d-5bcdbb76e48a.png)

You can also see live version of this card here at [Arpit's Blog](http://arpitbbhayani.github.com/about-me)


Quick Use
------------------------------------------
Visit: http://codeville.org.in/quora to generate a Quora profile card for yourself.

Or you can copy-paste the lines below in your website.

```
<div type="card" quora-profile="https://www.quora.com/profile/Arpit-Bhayani"></div>
<script src="http://codeville.org.in/static/js/quora-widget.min.js"></script>
```


Ingredients
-----------------------------------------
The mastermind behind is widget is the [Quora-Widget API](https://github.com/arpitbbhayani/quora-widget-api). It does all data fetching from Quora server and generated the HTML code that renders as the widget on a website. Extensive documentation of the API can be found [here](https://github.com/arpitbbhayani/quora-widget-api#quora-widget-api)

Installation
-------------------------------------------
The first step that you should take is

1. Clone the repository
```
git clone --recursive https://github.com/arpitbbhayani/quora-widget.git
```

2. Execute the script `install.sh`
I have written a small script that setups virtual environment for Python and installs every package required for the execution. You simply need to execute the script from `quora-widget` folder
```
bash install.sh
```

Hello World!
------------------------------------------
Once you have installed everything, it is time to check if eveything is set or not. This is how you will you do that.

1. Start the server
Just like a comprehensive installation script, I have also written the `start.sh` script that starts the web server. All you need to do is run it from `quora-widget-api` folder

```
bash start.sh
```

2. From your favourite browser just hit the following URL
```
http://localhost:5000/quoracard/
```

You should see a response like this
```
{
    "message": "Hello world!"
}
```

If you see this message then ...

**Yay! you are now all set to contribute to this project.**

Sample Quora Card
---------------------------------------------
To see a sample Quora Widget you can hit this URL from your browser
```
http://localhost:5000/quoracard/process?url=https://www.quora.com/profile/Arpit-Bhayani
```

How to submit your patch
------------------------------------------------
1. Pick an issue
You should first pick an issue from existing [Github Issues](https://github.com/arpitbbhayani/quora-widget/issues) to work on.

2. Code!
Once you understand the issue,  create your own branch and code! In case you have any query feel free to drop me an email at [arpit.b.bhayani@gmail.com](mailto:arpit.b.bhayani@gmail.com)

3. Submit a Pull Request
Since you have made all changes in your code and you are sure that everything will work fine, simply create a pull request. Once you create a pull request, I will merge it to the master branch after a code review.


Contribute
--------------------------------------------------
If you want to contribute, checkout [Github Issues](https://github.com/arpitbbhayani/quora-widget/issues) and choose any task you want and start working on it and when you think you are done, create a Pull Request for your branch.

In case of any doubt drop me an email at [arpit.b.bhayani@gmail.com](mailto:arpit.b.bhayani@gmail.com)

Issues
-----------------------------------------------
If you find any issue or have any feature request, feel free to create an [Github Issue](https://github.com/arpitbbhayani/quora-widget-api/issues) for it.
