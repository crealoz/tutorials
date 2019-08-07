# Creating a link

Link is the base of the web. Each page links to another page and a page can contain a table with the different sections
to achieve that the tag is `<a>` like anchor. To link to another page, the anchor will look like :

    <a href="https://blog.crealoz.fr">The crealoz blog</a>
    
Result will be <a href="https://blog.crealoz.fr">The crealoz blog</a>. 

    <a href="#creating-a-list">internal link</a>
    
A link can be made inside a page <a href="#creating-a-list">internal link to creating list</a>.It is possible to define 
a link to a specific place in the page. 

    <a href="https://crealoz.fr/#resume-card">The resume of Christophe</a>
    
This is an external link but as a specific anchor is defined, it will go at once to this specific part of the page. The 
result will be : <a href="https://crealoz.fr/#resume-card">The resume of Christophe</a>

# Display an image

To display an image, the tag `<img>` is the basic one. It will display the image that is available at the link defined 
with the attribute **src** like source.

    <img src="/assets/images/uzmas-ezers-with-fog.jpg">
    
The image that is situated in the folder /assets/images with the name uzmas-ezers-with-fog.jpg will be displayed without
any cropping or resizing.

<img src="/assets/images/uzmas-ezers-with-fog.jpg">

# Creating a table

## Basic usage

To create a table and only in this case, the tag `<table>` will be used to display a table. It will
permit to display data in rows and cells.

    <table>
        <tr>
            <td>first cell</td>
            <td>second cell</td>
            <td>third cell</td>
        <tr>
        <tr>
            <td>first cell - second row</td>
            <td>second cell</td>
            <td>third cell</td>
        <tr>
    </table>
    
In this example, `<tr>` stands for table row and `<td>` for table data. The result will be that :
    
<table>
    <tr>
        <td>first cell</td>
        <td>second cell</td>
        <td>third cell</td>
    <tr>
    <tr>
        <td>first cell - second row</td>
        <td>second cell</td>
        <td>third cell</td>
    <tr>
</table>

Historically, the table can have be used to align element on a web page. That type of behaviour is deprecated and should
be reserved to email integration if no other way is possible.

## Advanced usage

Table can have header, footer and a body. `<thead>` will help to have different presentation for the head columns of the table. The `<td>` element is replaced by `<th>` to help browser to know that this cell is a special one. In term of accessibility, it will help people with special needs to have a better transcription of the table. `<tfoot>` will permit to have a different style for the footer of the table. The content in that case will be included in `<tbody>` tag. 

    <table>
        <thead>
            <tr>
                <th>Article</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Computer</td>
                <td>750€</td>
            </tr>
            <tr>
                <td>Keyboard</td>
                <td>150€</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>900€</td>
            </tr>
        </tfoot>
    </table> 
    
Some browsers attach a different display for the headers and footers of table so it can be that the following
table has already a bold font for the header.
    
<table>
    <thead>
        <tr>
            <th>Article</th>
            <th>Cost</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Computer</td>
            <td>750€</td>
        </tr>
        <tr>
            <td>Keyboard</td>
            <td>150€</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>900€</td>
        </tr>
    </tfoot>
</table>

# Creating a list

## Ordered

To display data, it can be useful to make it with a list. To have a list with number at the beginning of 
each line, we will use the tag `<ol>` while each line will be defined by the tag `<ul>`.

    <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Five</li>
    </ol>
    
Result will be :

<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Five</li>
</ol>

## Unordered

If there is not need to have marker with number, an unordered list is enough.

    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Five</li>
    </ul>
    
Result will be :

<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Five</li>
</ul>

## Nested

A list can contain another list.

    <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Five</li>
        </ul>
    </ol>
    
Result will be :

<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Five</li>
    </ul>
</ol>

