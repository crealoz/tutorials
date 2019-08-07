# Introduction

In HTML, a tag can have attributes. These attributes will permit to have attach different informations to
the tag that will be used by the browser to change the behaviour of the tag, in CSS to act as selectors or in 
JavaScript to be selector and to attach data to the tag.

# Most common attributes

## Id

Identifier is used mainly in JavaScript or CSS as a selector but also to create [anchor](/html/3-specific-tags.md#creating-a-link) 
to a specific part of the page. This must be **unique** on the document even if the browser will not emit any warning if
 two elements share the same ID. In real life, that will permit to attach a special behaviour or style on a page.

## Class

The **class** attribute permits to group elements and apply them a style. It is mainly used in CSS but can be
useful with JavaScript.

## Style

Before CSS was implemented and widely used, style contained the style information for each tag. Now, this method
to set a style to an element is often consider as a bad pattern and must be used caution.

## data-&lt;something&gt;

It is used to bind data to a tag and will be used with JavaScript.

# Global attributes

Some attributes as the previous ones are supposed to work with all the tags.

[List of global attributes](https://www.w3schools.com/tags/ref_standardattributes.asp)

Some attributes will permit to attach a special behaviour on user interaction. We will dig further this on
the JavaScript chapter.

[List of event attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)


# Specific attributes

## image attributes

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

## colspan and rowspan

These attributes will be used on tables. It will permit to define the fusion of the columns in the case of colspan
and the rows in the case of rowspan.

## reversed, start and type

For [ordered list](/html/3-specific-tags.md#ordered), the attribute **reverse** will permit to have a reversed order, 
**start** will permit to start with a different number than 1 and **type** will define the type of marker.  
