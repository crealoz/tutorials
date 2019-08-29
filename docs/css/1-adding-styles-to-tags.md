---
title: Add styles to HTML pages
---

# Different ways to add styles to tags

## Using inline styles

A method that was used but should be avoid at crealoz is to do inline styling of web pages. In that case, we will use
the attribute `style` of any tag to define a style.

    <div style="text-align : center">some text</style>
    
## Using selectors

Selectors are patterns that will permit to select a tag or a set of tags. We will divide them in three category for a 
while :

* tags : like `html`, `div`... This selectors will apply to all tags that correspond to this pattern. 
* ID : every tag can have a unique identifier on a page `<div id="first-div">`. The selector in that case is `#first-div`
* class : maybe the most common and the most convenient as it permits to apply rules to all elements having this class 
not regarding the type of the tag. The html tag will make use of attribute `class` like `<div class="my-class">` and the
selector will be `.my-class`.

### Syntax

To apply a rules to tags matching the pattern, a format must be followed :

    body {
        margin : 20px auto;
    }
    
    #first-div {
        text-align : center;
    }
    
    .my-class {
        background-color : #FF0000;
    }
    
### Using the head tag `<style>`

Another method that can be used in the case of a standalone page, is to put the styles rules in the 
[head](/html/1-first-html-file.md) of the document. A `<style>` tag will be open in the head of the document and the 
rules will be written inside :

    <!DOCTYPE html> 
    <html>
        <head>
            <style>
               body {
                   margin : 20px auto;
               }
               
               #first-div {
                   text-align : center;
               }
               
               .my-class {
                   background-color : #FF0000;
               }         
            </style>
        ...
        </head>
        <body>
        ...
        </body>
    </html>  
    
### Using a specific file with a link

The best way is to create a file with all the rules that we can name for example : `styles.css`. This file will contain
all the rules and we will link it with any page where these rules are needed using the tag `<link>`.

    <link rel="stylesheet" href="/assets/css/style.css">
    
All styles will be loaded. Many files can be linked that way.