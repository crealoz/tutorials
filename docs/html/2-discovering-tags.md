# Sections

There are many tags to improve the presentation of a document so the focus will be put on the main ones. For
 a good presentation, it is important to divide your document into sections. 

## Div

The `<div>` tag will permit to define different sections of your document. Each section can contain 
other sections. This tag needs to be opened and closed.

## Paragraph

Text should be included between `<p>` opening and closing tags to be well presented. This should not include 
anything than text, links and text presentation tags that will be presented later.

## Specific sections

Specific sections can be defined.

    <html>
        <head>
            <title>The title of the page</title>
        ...
        </head>
        <body>
            <header>
                will contain the main elements of the page like title and logo
            </header>
            <nav>
                will contain the links to other pages (we will see later how to create link)
            </nav>
            <address>
                can be used to present an address
            </address>
            <p>some main text</p>
            <aside>some information attached to the previous paragraph</p>
            <footer>
                will contain what finishes the page like copyright
            </footer>
        </body>
    </html>
    
Every tag can be used several times. Just note that `<header>` tag should not be used in `<footer>` or 
`<footer>` not in `<header>`. In any case, a logic must be followed even if the browser will try to interpret.
    
# Text presentation tags

These tags will help to present the text of the document. 

## Headings

To define a title, different types of heading can be used. Unlike other presentation tags, these ones should not be 
included in `<p>` tag.

    <h1>This is for the main title</h1>
    
Even if you can use `<h1>` tag as many times as you want, it is considered that it should be use only once per page 
to define the main title and therefore, it should be placed in between the header tag.

Other headings are ordered from `<h2>` to `<h6>`. Always to keep some logic, a well-formed document will have
something like that (`<html>` and `<body>` tags must be used and are replaced by `...`) :

    ...
    <header>
        <h1>This is my main title>
    </header>
    <div>
        <h2>Title of the section</h2>
        <div>
            <h3>Title of the subsection</h3>
            <p>You can write some text</p>
            <h4>Another subtitle</h4>
            <p>Some more text</p>
        </div>
    </div>
    ...

## `<strong>`, `<em>` and `<mark>`

Words that need to be highlighted can be put between `<strong>` tags as browsers will put them on bold font by 
default. ***Note*** that a bold tag exists, it is supposed to be used in the last resort. `<mark>` will not change 
font but will change the background color to highlight the text.

The words on which you want to put emphasis need to be included in the according `<em>` tag.

## `<span>`

This tag will not change the text but is widely used along css to be able to change the style of a part of the text. 

## Others

You can use `<small>` to have a smaller text.

`<s>` stripes.

`<sup>` to put text above line or its pendent `<sub>` for text under the line. The text can be automatically put
in a smaller font. These tags are often use for mathematics *2<sup>3</sup>* and chemistry *H<sub>2</sub>O*

There are many other that can be discovered on [w3schoools website](https://www.w3schools.com/tags/default.asp).
