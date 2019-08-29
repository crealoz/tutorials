---
title: Translating CSS to Sassy CSS
---

# Sassy CSS (SCSS)

In the previous exercise, we got a style like this to display the table :

    .work-xp {
        border: none;
        border-collapse: collapse;
        margin: 20px 1px;
        width: 100%;
    }
    
    .work-xp thead {
        font-weight: bold;
        background-color: #398751;
    }
    
    .work-xp tr:nth-child(1n) {
        font-weight: bolder;
    }
    
    .work-xp tr:nth-child(2n) {
        background-color: #c9ff89;
        color: #000000;
    }
    
    .work-xp tr {
        height: 30px;
    }
    
    .work-xp tr td {
        text-align: center;
    }
    
This syntax is good but can be made to be more convenient for further updates. In the case of CSS, every entry is on one
line and does not completely correspond to the hierarchy we have in html. SCSS will permit us to keep this hierarchy.

The idea would be to have all the children of `.work-xp` inside the same brackets, this would permit to see at once 
everything regarding this class and its children. The use of SASS will allow us to have an incorrect css but more 
readable syntax converted to proper css. Let's see how we can write in SCSS.

# Syntax

Any parent tag can contain children. As in CSS, we need to keep in mind that a child styles defined under a parent will 
be available only in that context. For example, when in CSS we write `.work-xp tr td`, the style of this `td` will only
be applied when the `<td>` tag is situated in a `<table>` that has class `.work-xp` class or if one of the parent of the 
`<table>` has this class. If none of the parent of the `<td>` has this class, the style will not apply.

As the processed CSS will look like a normal CSS, we need to keep in mind this hierarchy. In our case, we will have a 
SCSS like that :

    .work-xp {
        border: none;
        border-collapse: collapse;
        margin: 20px 1px;
        width: 100%;
        thead {
            font-weight: bold;
            background-color: #398751;
        }
        tr {
            height: 30px;
            &:nth-child(1n) {
                font-weight: bolder;
            }
            &:nth-child(2n) {
                background-color: #c9ff89;
                color: #000000;
            }
            td {
                text-align: center;
            }
        }
    }
    
As you can see, all the rules are children of `.work-xp` and children can have children. Another noticeable thing is the
use of `&`. In case the rule does not concern a child but a pseudo-class (e.g. `:nth-child(1n)`), we will make the use of 
ampersand (&amp;). It can be `:hover`, `:focus`, `:visited` or any of [this list](https://www.w3schools.com/css/css_pseudo_classes.asp).


