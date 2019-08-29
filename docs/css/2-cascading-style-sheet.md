---
title: Making Cascading Style Sheet
---

# CSS stands for Cascading Style Sheet

Any html document consists of parents, children, grand-children, grand-grand-children... The main node is `<html>`, 
`<body>` is already a child of it and any node/tag under it is its child and so on. To apply a style to only specific 
tr in one table, we can define a class on the table and then use the cascading selectors.

## Children

Children are all nodes under a specific one. To select them, we need to use parent children selectors. Let's imagine a 
table with the class `work-xp`, it will have `<tr>` and `<td>` to select them, we will use a syntax like that :

    .work-xp tr {
        /* rules that will apply only to tr in this table */
    }
    
    .work-xp tr td {
        /* styles for td in the table with class work-xp */
    }
    

The more specific is a style, the more weight it has. 

    td {
        background-color : #ff0000;
    }
    
    .work-xp tr td {
        background-color : #0000ff;
    }
    
That means that all `td` will have a red background except if they are children of table with the class `work-xp`. In that 
case, the style applied will be the most specific one so blue.

## Direct children

We have seen that list can include lists as much as table can include tables or div other divs that can contain other 
div ...etc... ! If we want to apply a style only to direct children, we have a selector for direct children.

    <ul id="first-list">
        <li>
            <ul>
                <li>element</li>
                <li>element</li>
                <li>element</li>
            </ul>
        </li>
    </ul>
    
To apply style only to the first level `<li>`, we will make rules like :

    #first-list>li {
        list-style-type: none;
    }
            
This will remove the bullets in front of `<li>` that are direct children of `<ul id="first-list">` but will not apply to
ones that are under the second `<ul>`.

A more complicated example :

    <div id="first-div">
        <div>
            <div>   <!-- the div we want to apply style to -->
                <div>
                    ...
                </div>
            </div>
        </div>
    </div>
    
To apply style only to the grand-child of `first-div`, we will use child selector.

    #first-div>div>div {
        background-color : #00ff00;
    }
    
Green color will be applied to the grand-children only of `<div id="first-div">`.

## Pseudo-class

These class are applied when an element have a special state. For example, their position e.g. `:nth-child(1n)`, the position
of the pointer e.g. `:hover` but many other exist. An extensive list is found [here](https://www.w3schools.com/css/css_pseudo_classes.asp).

At the bottom of the same page are listed pseudo-elements, these elements are not written in the html document but can be
used to add style whether around an element (before/after) or to a specific part of an element (first-letter/first-line/selection).