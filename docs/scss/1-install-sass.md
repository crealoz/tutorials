---
title: Installing SASS
---

## Introduction

The next step is to comprehend the scss. When you have just one page, it gets easy to make a stylesheet but on bigger 
projects, we need a faster and more efficient way to style the webpages. Moreover, it can be interesting to reduce the 
style of the stylesheet but keep readable css for frontend developers. 

To achieve these goals, we use css preprocessor. There are several but we will focus on the most used (and the one I use 
as well). This preprocessor is called [sass](https://sass-lang.com/). On the webpage, you will have two methods to 
install under the link "[install](https://sass-lang.com/install)". We will use the command line one. If it can look more 
difficult (and it is), it will permits you to introduce yourself with command line installation that is preferable once 
we will switch to Linux.

## Node.js
There are different ways to have your scss file preprocessed to a css file but we will use [node.js](https://nodejs.org/en/download/) 
for convenience. In addition to the basic processing functions, it permits to have the mapping simply done and compression
as well. We will discover the usages of it after.

To do so, you first need to install node.js. Node is a server-side javascript framework. That means that the js is 
executed on the server (in our case, server and client are on the same machine but in normal environment, it makes a 
difference). Then, you will be able to use npm in the git bash CLI. On the sass page install, read the chapter called 
"Install Anywhere (npm)". Once these step achieved, we can start to work with sass.