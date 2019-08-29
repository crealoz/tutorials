---
title: First HTML file
---

In the html folder of your project, create a file called index.html and modify it with your preferred IDE or notepad. 
If you did not pick anything yet, you can begin with [notepad++](https://notepad-plus-plus.org/).

The file will be interpreted as its using any web browser. Even if the browser will try to display a badly formated 
page, it is important to understand that a well formed document will be easier to access, to maintain and to be adapted. 
The structure of a document has to be like the following.

# Main structure

    <!DOCTYPE html> 
    <html>
        <head>
            <title>The title of the page</title>
        ...
        </head>
        <body>
        ...
        </body>
    </html>    

## Tags
    
Except for `<!DOCTYPE html>`, each part looking like `<` and `>` is called a tag. We will see that there are many 
different ones but for this exercise we will concentrate on the three used here.

## Document type declaration

`<!DOCTYPE html> ` permits to tell the web browser to know what type of content will be following. It is called the 
document type declaration. If not completely necessary, it is strongly recommended. As we have seen, the browser will 
try to interpret it anyway.

## Document

html tag permits to tell where the document begins and end. You might have noticed or not but in this example, all tags 
are opened and closed. `<html>` is called an opening tag while `</html>` is a closing one. `<head>` tag will contain 
everything that is necessary to the use of the web page, including the `<title>` tag that tells the browser what is the 
actual title. `<body>` will contain the content of the web page, 

You can now copy or write the tags in your document omitting `...`, save it under `/exercises/html/first-page.html`. If 
you open the document with the web browser of your choice, you should have a full blank page. Add now some text between 
the body tags, save, refresh the page. The text should be now be displayed on your browser. If not, check the cache of 
your browser. If you click right and select in contextual menu "display source" or similar, you should see your html 
source.

An example can be found in `/sources/pure-html/first-page.html`.

# Additional information

## HTML entities

The sign `<` will be interpreted as a tag opening. To avoid that `&lt;` or `&#60;` are implemented to be able to display
this special character.

Some characters cannot be written with the keyboard and entities can help you for example : &copy; does not exist on your
keyboard but must be written from time to time. You can use `&copy;` or `&#169;` to display it. 

As you probably noticed, you can use entity name like *lt* (lower than) or *copy* but also a number preceded by #. A
full list of html enties can be found [here](https://www.freeformatter.com/html-entities.html).

## Comments

A good code is a commented one. If the comments in HTML are not really useful at the first sight, it can be nice to add
some comment when the html content will be aggregated on the server side. We will not go to deep for a while but it is 
nice to know that comment is written this way `<!-- this is a comment -->`