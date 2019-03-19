---
path: /creating-modern-cta/
date: 2019-03-15T04:00:00.000Z
title: Creating a modern 'call to action' to display on your portfolio site
image: /assets/letter-blog-thumbnail.png
---
With many portfolio sites on the internet, sometimes it is great to add something that helps drive people to your content, specifically your projects.

Today I'm going to show you how to apply subtle gradient styles to text to create an outstanding effect that is under-utilized.

**Step 1**

We need some html to get started. Either copy this or apply it to your project.

```
<div class="cta">
       <div class="cta-letter-container">
         <p class="cta-letter-shadow">J</p>
         <p class="cta-letter">J</p>
       </div>
       <p class="cta-text">
         <span class="cta-title">JavaScript</span>
         <span class="cta-title-sub">My favourite programming language.</span>
       </p>
       <a class="cta-link">My Work</a>
     </div>
```

**Step 2**

Once you have added the code from above to your project we will also need to add some basic css styling.

```
.cta { 
       font-family: Arial; 
       position: relative; 
       background-color: white; 
       box-shadow: 0px 5px 10px lightgrey; 
       padding: 25px; width: 500px; 
       margin: 0 auto; 
       display: flex; 
       align-items: center; 
       justify-content: 
       space-between;
     } 

     .cta-letter-container {
       width: 80px;
     } 

     .cta-letter, .cta-letter-shadow { 
       position: absolute; 
       font-size: 200px; 
       top: -60px; 
       left: -20px; 
       margin: 0; 
       font-weight: bold; 
     } 

     .cta-text { 
       display: flex; 
       flex-direction: column; 
       width: 200px;
     }

     .cta-title {
       margin-bottom: 10px; 
       font-weight: bold; 
       font-size: 20px; 
     } 

     .cta-link { 
       padding: 10px 20px; 
       background-color: gold; 
       border-radius: 5px; 
     }
```

This should leave you with the following: 

![Phase 1 image after html and css.](/assets/letter-phase-1.png "Phase 1 image")

**Step 3**

Once you have added the base styling and html we can focus on the letter styling. The CSS properties we will be using to achieve this effect are : 

* background-clip
* text-fill-color

These CSS properties work across your 'evergreen' browsers and sometimes even IE. If you are not using a preprocessor or automated prefixing tool then you will need to add them manually to make this effect work.

If you have any doubts of using this in production purposes please check: 

* [background-clip browsers](https://caniuse.com/#search=background-clip)
* [text-fill browsers](https://caniuse.com/#search=text-fill)

_Now lets quickly explain the prefix's we will be using and the properties._

**Webkit** is a rendering engine for browsers. You may have seen some prefixes used in css code before. These prefixes tell the browser how to process the code.

**Background-clip** or **webkit-background-clip** allows you to change what is set as the background. If you set this to text, then it will allow you to set a manipulate the colour of your foreground, using the same css background property. 

**Text-fill-color** or **webkit-text-fill-color** is also needed to set the color for the text fill. If it is left unset then the css color property will be applied. To allow the linear-gradient to be seen instead of the default text fill we need to set it to transparent.

> Lets start by adding a nice gradient as our background.

```
.cta-letter, .cta-letter-shadow { 
       position: absolute; 
       font-size: 200px; 
       top: -60px; 
       left: -20px; 
       margin: 0; 
       font-weight: bold; 
       background: linear-gradient(45deg, orange 0%, #f9d423 100%);
     } 
```

![Phase 2 of the effect.](/assets/letter-phase-2.png "Phase 2 effect image")

> Now let's use the the **background-clip** property to clip / remove the background that is not behind the letter. Remember to use webkit prefix or make sure your css processor is adding it for you. 
>
> After you apply this you will see the background disappear cause it has been clipped.
>
> Then we will also add the property of text-fill-color to remove the colour of the inside of the letter. Remember to add a -webkit prefix on this!

```
.cta-letter, .cta-letter-shadow { 
       position: absolute; 
       font-size: 200px; 
       top: -60px; 
       left: -20px; 
       margin: 0; 
       font-weight: bold; 
       background: linear-gradient(45deg, orange 0%, #f9d423 100%);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
     } 
```

Once this is done lets apply a shadow on the back letter.

```
.cta-letter-shadow { 
       text-shadow: 5px 5px 10px lightgrey;
     } 
```

This should give us a unique and modern CTA for your portfolio.

![Letter phase 3 styling.](/assets/letter-phase-3.png "Letter phase 3")

Thanks for reading! 

> _**p.s. -** This was mainly a way to test the connection of my new CMS to my Gatsby site. Let me know if you want me to write a tutorial on how I made and setup this blog._
>
> _Colin_
