---
title: Discovering tags attributes
---

## Introduction

In HTML, a tag can have attributes. These attributes will permit to have attach different information to
the tag that will be used by the browser to change the behaviour of the tag, in CSS to act as selectors or in 
JavaScript to be selector and to attach data to the tag.

## Most common attributes

### Id

Identifier is used mainly in JavaScript or CSS as a selector but also to create [anchor](/html/3-specific-tags.html#creating-a-link) 
to a specific part of the page. This must be **unique** on the document even if the browser will not emit any warning if
 two elements share the same ID. In real life, that will permit to attach a special behaviour or style on a page.

### Class

The **class** attribute permits to group elements and apply them a style. It is mainly used in CSS but can be
useful with JavaScript.

### Style

Before CSS was implemented and widely used, style contained the style information for each tag. Now, this method
to set a style to an element is often consider as a bad pattern and must be used caution.

### data-&lt;something&gt;

It is used to bind data to a tag and will be used with JavaScript.

## Global attributes

Some attributes as the previous ones are supposed to work with all the tags.

[List of global attributes](https://www.w3schools.com/tags/ref_standardattributes.asp)

Some attributes will permit to attach a special behaviour on user interaction. We will dig further this on
the JavaScript chapter.

[List of event attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)


## Specific attributes

### image attributes

Image have many optional attributes but even if some are considered like that, it is important to keep in mind that
every user on the web does not have a full use of eyes and in that case, it is important to describe the image the page
is displaying. This can be done with the help of **alt**.

    <img src="/assets/images/uzmas-ezers-with-fog.jpg" alt="a pier on uzmas ezers with the fog">
    
If the cursor is over the following image, the alternative text should be displayed.

<img src="/assets/images/uzmas-ezers-with-fog.jpg" alt="a pier on uzmas ezers with the fog">

This helps as well robot like "google" to store the image under the good query and improve the Search Engine Optimisation
or SEO. Along with this attribute, **height** and **width** permit to have the image set to an appropriate size but in 
a web that is browsed by different type of devices (phone, tablet, computers...), these attributes are most of the time
unappropriated and developers prefer CSS with mobile-first pattern to display images correctly. 

### anchor attributes

Still in a the purpose to make the web accessible to as many people as possible and improve the navigation experience, a
set of attributes are available for the anchors.

    <a href="https://blog.crealoz.fr" title="blog about IT in French" target="_blank">The crealoz blog</a>  
    
The most common are title and target. Title will permit to define what the link is related to and the target will help 
the browser to understand in which tab to open a link. The common practice is to open internal link in the same tab while
an external link will be open in a new tab. The following anchor will open the link in a new page and provide some 
information on the hover.

<a href="https://blog.crealoz.fr" title="blog about IT in French" target="_blank">The crealoz blog</a>

The attribute **rel** is often use to tell robots to follow or index the link. It has some other use that will not be 
approached in this chapter.

Other attributes can be found at [w3school page regarding anchor](https://www.w3schools.com/tags/tag_a.asp)

### colspan and rowspan

These attributes will be used on tables. It will permit to define the fusion of the columns in the case of colspan
and the rows in the case of rowspan.

### reversed, start and type

For [ordered list](/html/3-specific-tags.html#ordered), the attribute **reverse** will permit to have a reversed order, 
**start** will permit to start with a different number than 1 and **type** will define the type of marker.  
