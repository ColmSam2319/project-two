# ROCK PAPER SCISSORS LIZARD SPOCK



# The purpose with this projec

This website is the first of five projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.

Requirements for the project is that the website has to be static and responsive using HTML5 and CSS3.

A live version of the project can be found here - 
# Table of contents
+ [UX](#ux "UX")
    + [Users](#users)
    + [Requirements](#requirements)
    + [Design](#design)
     + [Fonts](#fonts)
     + [Icons](#icons)
    + [Colours](#colours)
 + [Features](#features)
    + [Existing Features](#existing-features)
    + [Future Feature](#future-features)
 + [Technologies Used](#technologies-used)
    + [Languages](#languages)
    + [Libraries and Frameworks](#libraries-and-frameworks)
    + [Tools](#tools)
 + [Testing](#testing)
    + [Additional Testing](#aditional-testing)
    + [Unfixed Bugs](#unfixed-bugs)
+ [Deployment](#deployment)
    + [GitHub Pages](#github-pages)
+ [Credits](#credits)
## UX

### Users
- player should find the game fun.
- The game should be easy to operate.
- The game should work without any faults.


### Requirements

This project requires me to build an interactive front-end site. The site will respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

Required technologies: HTML, CSS, JavaScript

### Design

As this is my first time using javascript I have based the design off the  ”Love Maths” - project. The code from some of that project has been used in my project and has been noted in the css additionaly I have used code from online sources and javascript & jquery by Jon Duckett when developing the design for this project.

My aim has been to create a website that allows users to simply play the game without alot of distraction.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

#### Font

The Google Font Amatic SC was chosen as the main font with a fallback of Sans-Serif. Font weights of bold 800 has been used on the body of website.

#### icons

The icons used for the player selection where taken from https://fontawesome.com/
 - Rock https://fontawesome.com/icons/hand-fist?s=solid
 - Paper https://fontawesome.com/icons/hand?s=solid
 - Scissors https://fontawesome.com/icons/hand-scissors?s=solid
 - Lizard https://fontawesome.com/icons/hand-lizard?s=solid
 - Spock https://fontawesome.com/icons/hand-spock?s=solid

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
#### colours
I drew inspiration from different youtube videos for the colour selection for the website the majoirty of the colours selected were primary colours that I then used the pop up color board in css to find appropiate colours to suit the different icons.

## Features 

The  website is a single page website that consists of the following sections:

 - Title
 - Rules Area
 - Score Area
 - Game Area

### Existing Features

#### Title

  - the title is a h1 element that has been centred and the text styled with a font of Amatic SC and the font size increased to 4.0rem to give a very simple but effective title.

![title](/assets/images/Title.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
#### Rules Section

  - The rules for the game are placed in a  inline block with a solid 2px border the font is set to Amatic SC.
  

![rules-section](/assets/images/rules-section.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
#### Score area

  - The score area provides the user with a visual results board that shows the result of each of the five rounds at the end of each round the score area will notify the player if it was a win loss or draw with the computer as seen in image 1,2,3 below. At the end of the game the player is notified of the winner or looser of the game as seen in image 4 and 5 below 

 Player wins round - Image 1

![Player wins round](/assets/images/result-round-player-win.png)

Computer wins round - Image 2

![Computer wins round](/assets/images/result-round-computer-win.png)

The round is a draw - Image 3

![The round is a draw](/assets/images/results-round-draw.png)

Game Winner Player - Image 4

![Game Winner Player](/assets/images/result-text-win.png)

Game Winner Computer - Image 5

![Game Winner Computer](/assets/images/result-text-loss.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
#### Game Area

![Game area](/assets/images/game-area.png)
- the Buttons for the game area were taken from font awesome https://fontawesome.com/
- to make the buttons stand out they will enlarge when hovered over.
- the colour of the icon will also change when hovered or clicked on.

### Features Left to Implement

- Later versions of this project will contain a improved method of displaying the results of the round as well as edditing the position and css styling of the page to make it more modern. The java script will be improved to include a pop up celebration notification when the player wins.

## Technologies used

### Language
- [HTML](https://en.wikipedia.org/wiki/HTML "html")
- [CSS](https://en.wikipedia.org/wiki/CSS "css")
- [JavaScript](http://en.wikipedia.org/wiki/JavaScript "JavaScript")

### Libraries & Framework

- [Google Fonts](https://fonts.google.com/ "Google Fonts")
- [Font Awesome library](https://fontawesome.com/ "Font Awesome")

### Tools

- [GitHub](https://github.com/ "GitHub")
- [Gitpod](https://www.gitpod.io/ "Gitpod")
- [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
## Testing 

Test of functionality and appearance of the website has have been dealt with thru out all stages of the development phase.

Test has been conducted using Google Chrome, Mozilla Firefox and Safari. Testing different devices and screen resolutions has been conducted using Google DevTools.

Listed is the main issues discovered.

1. Top menu disappears even though its fixed.
 - Solution: Had to use z-index to keep the menu on top of all sections and elements, value set to 20
2. Data sent from contact form was not correct when tested towards a form-dump site (https://jkorpela.fi/cgi-bin/echo.cgi).
 - Solution: The name attribute in the input tags were not correct.
3. Text alignment in input fields were not correct and it differed between Safari and Chrome.
 - Solution: Corrected by adding text-alignment in style.css.
4. Hero-Header image fades out in different resolutions and looks bad.
 - Solution: Created three versions of the Hero-Header image that changes depending on resolution.
5. When tested in Lighthouse the website received a low score on performance, 72. The reason for this was that some images did not contain proper attributes for width and height.
 - Solution: Added values for height and width to images and score increased to 98
6. Poor performance on smaller screens. About Us and 2022 Events sections did not place them selfs properly.
 - Solution: Solved this by using media queries and now the elements are displayed as they should.
7. Menu not properly aligned with header on small screens and it gets cropped and divided.
 - Solution: Added new values in the existing media queries.
8. Menu still gets cropped on screens with resolutions below 320px. It looks good using Google DevTools but not on a physical device
 - Solution: Solved 20220325 - Removed from Unfixed bugs. Changed View Port Width on fonts in menu.
9. Images in the 2022 Events section are slightly out of alignment on low resolution screens.
 - Solution: Solved 20220325 - Removed from Unfixed bugs. Changed View Port Width on fonts in menu. Changes to CSS under correct Media Query corrected this.

Apart from these issues there have been several minor issues. The majority of these has been due to miss spelled tags, attributes and other misstakes. The first test in the W3C Validator pointed on 8 different things. 6 of them were connected to the Iframe used to display the Map from Google in the Contact section. The errors were easily corrected.



### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator]
![W3C HTML Validator](/assets/images/html-validation.png)

- CSS
  - No errors were returned when passing through the official [(Jigsaw validator)]


![Jigsaw validator](/assets/images/css-validator.png)



### Unfixed Bugs

All known bugs in this section has been moved to the section [Testing](#testing) with solution when they have been solved. Last known bug solved 2022-03-25. No more testing will be conducted now and the project will be submitted.

 [Back to top](#nacka-tomato-society)

## Development and Deployment

The development environment used for this project was GitPod. To track the development stage and handle version control regular commits and pushes to GitHub has been conducted. The GitPod environment was created using a template provided by Code Institute.

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The live link can be found here - https://pelikantapeten.github.io/p1-nacka-tomato-society/

## Content 

- All text content on this site has been produced by the author of the project and is fictional. Individuals mentioned do not exist in real life and there is no Nacka Tomato Society.
- The design of the project is inspired by Code Institutes ”Love Running” project. Code has been borrowed from that project, the Footer. It is commented in index.html and styles.css were the the borrowed code is applied. 
- The icons in the header, contact and registration and footer were taken from [Font Awesome](https://fontawesome.com/)

## Credits 

Martina Terlevic
 - My fantastic mentor at Code Institute
