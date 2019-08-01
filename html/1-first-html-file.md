In this folder create a file called index.html and modify it with your preferred IDE or notepad. If you did not pick anything yet, you can begin with [notepad++](https://notepad-plus-plus.org/).

The file will be interpreted as its using any web browser. Even if the browser will try to display a badly formated page, it is important to understand that a well formed document will be easier to access, to maintain and to be adapted. The structure of a document has to be like the following.

    <!DOCTYPE html> 
    <html>
        <head>
        ....
        </head>
        <body>
        ....
        </body>
    </html>    
    
Except for ```<!DOCTYPE html>```, each part looking like ```<``` and ```>``` is called a tag. We will see that there are many different ones but for this exercice we will concentrate on the three used here.

```<!DOCTYPE html> ``` permits to tell the web browser to know what type of content will be following. It is called the document type declaration. If not completely necessary, it is strongly recommended. As we have seen, the browser will try to interpret it anyway.

html tag permits to tell where the document begins and end. You might have noticed or not but in this example, all tags are opened and closed. ```<html>``` is called an opening tag while ```</html>``` is a closing one. 'head' tag will contain everything that is necessary to the use of the webpage but is not compulsory. 'body' will contain the content of the webpage, 

You can now copy or write the tags in your document omitting ```....```, save it. If you open the document with the web browser of your choice, you should have a full blank page. Add now some text between the body tags, save, refresh the page. The text should be now be displayed on your browser. If not, check the cache of your browser. If you click right and select in contextual menu "display source" or similar, you should see your html source.