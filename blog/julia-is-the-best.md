---
path: /creating-a-modern-cta/
date: 2019-03-15T04:00:00.000Z
title: Creating a modern 'Call to action' to display on your portfolio site
image: /assets/cta-modern.png
---
With many portfolio sites on the internet, sometimes it is great to add something that helps drive people to your content, specifically your projects.

Today I'm going to show you how to apply subtle gradient styles to text to create an outstanding effect that is under-utilized.

**Step 1**

We need some html to get started. Either copy this or apply it to your project.

```
<div class="cta">
       <div class="cta-letter-container">
         <p class="cta-letter">J</p>
         <p class="cta-letter-shadow">J</p>
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

If you have any doubts of using this in production please check: 

* [background-clip browsers](https://caniuse.com/#search=background-clip)
* [text-fill browsers](https://caniuse.com/#search=text-fill)
