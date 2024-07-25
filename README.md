# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student: Matt Myers

![Matt's Headshot](images/headshot.jpg)

# Project 1 - Frontend Web Development with a Professional Profile Website on github.io cloud service 

## Overview 

This project covered a wide array of frontend design concepts to put together a professional profile website. The result is a site built with HTML, CSS (custom + template), JavaScript (React + Vanilla), JQuery, 

## Learning outcomes

This project gave me experience working with JavaScript and JS frameworks. Prior to completing this project, I had never worked with a framework before, and it was a challenge to get it working.

## General Requirements

### GitHub.io Deployment

Deploying to GitHub.io was achieved by following these steps:
1. Create a repository on GitHub
2. Go to Settings
3. Go to Pages
4. Select "Deploy from a branch" under Source
5. Select "gh-pages" as the deployment branch

The branch "gh-pages" is created by the build process, and will be explained below.

### Web Applications Programming and Hacking (Course)
Check out the [course](https://www.myers3jm.github.io) this website is a project for.

## Non-technical Requirements

### CSS Template
I used [Simple.CSS](https://simplecss.org/) for my css template. I also created a custom css file to store my own modifications to the style of the site.

### Page Tracker
I used Google Analytics in my site, which presented no problems at all. The signup website has a very easy procedure for establishing analytics for your webpage.

## Technical Requirements

### jQuery and React
I selected React for my JS framework because I have heard good things about it. I struggled with understanding how to set up my project, and how to create and add components, but having learned those processes I feel more prepared to try other frameworks, such as Svelte.

### Public Web API Integrations
I integrated with the jokes API from lab 2, as well as an API that provides random images of dogs. It was simple enough to connect to them, but moving them to their own React components took some work.

### Cookies
Adding cookies was fairly straightforward. I set the username to 'myers3jm' if that key did not yet have any record attached to it. I set the date to the current date, using the client's locale to localize it. I then set the greeting message accordingly.