SimpleSlideShow

###################
About:
###################
SimpleSlideShow was created to be provide a no-thrills slideshow to your website. 



###################
How to Use:
###################
In it's simplest form you will need to include jQuery, slideshow.css, and slideshow.js

In your html you will create a <UL> and give it the class of "slideShow".

Then create <LI>'s for each image that you wish to display. 

Then in the Head of your html document add the following code.

    <script type="text/javascript">
        jQuery(function () {
            SimpleSlideShow.begin();
        });    
    </script>

That is it.



###################
API:
###################
SimpleSlideShow has been added to the window object of your browser. 
Meaning you do not have to create an instance of it.

SimpleSlideShow exposes two methods for use.


begin: Use begin to start your slide show
--- Example: SimpleSlideShow.begin();


setDuration: Use setDuration to increase or decrease the speed of the slideshow.
             The duration is kept in ms, so 1000 = 1 sec
--- Example slideShow.setDuration(10000); //10 seconds



###################
CSS:
###################
The style sheet provides two styles to attach to your slideshow. Both are minimalistic and easy to change.
It is important to not change the following properties on "ul.slideShow li":
- position
- list



###################
Examples:
###################
See:  /tests/example.usage.html
See:  /tests/index.html