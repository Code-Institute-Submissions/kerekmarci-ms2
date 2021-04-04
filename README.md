# Memory Game - Milestone Project 2

## View live project here: [Memory game](https://kerekmarci.github.io/ms2/)

This website for created as my 2nd Milestone Project at the Code Institute. 
The website will showcase the languages and tools learned so far, which are HTML5, CSS3 and JavaScript.

![Photo of the finished website](https://github.com/kerekmarci/ms2/blob/master/assets/docs/website_showcase.JPG)

---

## Description

The website presents a pattern-matching memory game, fun way of using our memory to find matching pairs of cards, written in JavaScript.

---

## User Experience

The website uses straightforward and intuitive navigation. After the introduction of the rules, the user can proceed to the game area by pressing the ‘Go to game’ button. 
At the game area the user can select among easy, medium and hard levels (by pressing the respective buttons). During the game, the time and number of steps are measured. 
At the end of the game, the user can add him/herself onto the leader board, and also able to leave a feedback if wishes.

### Strategy

The main goal of this 2nd Milestone project was to build an interactive website using JavaScript. Therefore, the strategy was to develop a game suitable for both children and adults:
 for children, this intuitive game is both a challenge and fun to find matching cars, for adults, this can be used as a brain-sharpener, but for many of us, 
 this type of game brings back childhood memories.

### User stories:

As a user...,

* I would like to use a website that is intuitive and easy to navigate
* I would enjoy being on a website that is aesthetic 
* I would like to play a game that improves my memory
* I would like to play a game that is fun
* I would like to see my results at the end of the game
* I would like to be able to leave feedback on the game


### Scope

The scope of this website and this milestone project was to learn the foundations of JavaScript and to create my first interactive website. 
At the same time, I wanted to add functionalities that are interesting for the user, therefore the scope of the website will be showcasing the following:

* Create a visually appealing website featuring a memory game
* Provide different difficulty levels for the user
* Offer statistics where the user can measure their performance, such as a timer and a counter on the number of steps
* Present the progress of the game with an interactive progress bar
* Offer the user the option to choose between two different colour themes
* Play sound during the game, with an option for the user to mute
* Offer the user to input his/her name and compare the results with other on a leader board
* Provide a feedback page for the user to send feedback to the developer (me)


### Structure

The website will feature the following:

#### Main page: 

* A welcome message to the game
* A description of the game how to play 
* A button to proceed to the game area
* Toggle to swap between dark and light colour themes 

#### Game area:

* Button to select level (easy, medium, hard)
* Timer to show the time elapsed
* Cards for the game placed in the main area in the middle
* Counter to show the number of moves and matches
* Interactive progress bar
* Option to restart game by pressing on the level button
* Toggle to swap between dark and light colour themes
* Button to mute sound
* Button to return to home page and to advance to a feedback page

#### Feedback page:

* Gather basic anonym information on the user such as gender and age
* Rating of the website on
    * Ease of Use
    * Game Experience
    * Site Layout
* Toggle to swap between dark and light colour themes

### Skeleton

The skeleton of the website is available in the below wireframes:

1. [Index page](https://github.com/kerekmarci/ms2/blob/master/wireframes/01Landing_page.png)
2. [Game area](https://github.com/kerekmarci/ms2/blob/master/wireframes/02Game_area.png)
3. [Victory modal](https://github.com/kerekmarci/ms2/blob/master/wireframes/03Victory.png)
3. [Leader Board modal](https://github.com/kerekmarci/ms2/blob/master/wireframes/04Leaderboard.png)
3. [Feedback page](https://github.com/kerekmarci/ms2/blob/master/wireframes/05Feedback.png)

Due to the simplicity of the layout, for mobile view, it will remain the same just the width will be adjusted and the number of coloumns in which the cards are displayed.
Therefore, there is no need to add a separate wireframe for mobile devices.

### Surface

* **Planning of layout:**

Although the website contains little information, it is always my goal to show content in a visually appealing way. To adapt to the wide desktop screens well, a smaller 
container is used to contain information to keep text aligned to the middle, to avoid the text being distributed too wide.\
\
A little challenge to overcome was the display of the cards. First, it needed to be responsive to various screen sizes, secondly, I did not want to leave an incomplete row at the 
bottom (when a row is not finished with cards). This would be easier if there was a fixed amount of cards, however, the user can choose among three levels which made responsiveness 
more complex.\
I wanted to avoid resizing the same screen to all sizes, otherwise the cards would have been too small on mobile devices which would have caused an issue with accessibility. 
Therefore the solution I applied is to adjust the number of columns based on screen width, starting with 4, then reducing to 3, 2 and 1.\
To avoid incomplete rows, the easy level displays 12 cards, the medium level 24 cards and the hard level 36 cards, and all of these numbers can be divided by 2, 3 and 4, 
so there will never be an incomplete row of cards.


* **Theme:**

A dark background can add a dynamic feel to the website, therefore I chose to have a dark landing page. Further idea was to select colours that compliment dark colours well, and the colours I selected are grey, white and a variant of red.

* **Colours:**

The colour palette can be seen here.\
\
Dark mode:\

![Colour palette for dark mode](https://github.com/kerekmarci/ms2/blob/master/assets/docs/color_palette_dark.JPG)

Light mode:\

![Colour palette for light mode](https://github.com/kerekmarci/ms2/blob/master/assets/docs/color_palette_light.JPG)


* **Typography:**

Since the website features the game and has very little number of pages (3) and text content, one main font was used throughout. 
Only the timer uses a different font to create the  feel of the classic 7-segment displays.
    * Main font is called *DM Sans*
    * Font of the time is called *Digital*

* **Icons:**

FontAwesome icons are used for the theme toggle between dark and light modes and for the mute button.

---

## Features

Below is the overview of the main features of the website:

### Levels

Player can choose among 3 levels and the number of cards will be displayed accordingly:
 * Easy: 12 cards
 * Medium: 24 cards 
 * Hard: 36 cards

The levels can be selected by pressing on the button respective to the level, and these buttons also allow user to restart the game.

### Aminated cards

To improve user experience, some interactive elements have been added to the game.

* When user hovers over the back of the card, the brightness increases by 10%
* When user clicks on the card, it gradually shrinks (by 3%), creating a *feel* of click for the user
* After clicking, the card flips with an animation

### Sound effects

There is a variety of short sound effects played during the game:

* A *flip sound* when the cards are flipped
* A *happy sound* when user finds a matching pair
* A sound of *error* when user does not find a match
* A sound of *victory* at the end of the game

During the game, a mute button is available in the top right corner for the user to be able to mute.

### Counter

The counter will count the time passed from the start of the game. This is displayed in a classic-styled timer that looks like the traditional 7-segment LCD displays.

### Progress bar

A colourful progress bar is shown to display the actual progress of the user within the game, displayed visually in the bar. When user gets closer to victory (finds a matching pair), 
the progress bar fills with a subtle animation.

### Option to restart the game 

User can start a new game anytime by pressing the respective level button.

### Pop-up modals: victory and leader board

In case of a victory (all pairs found), a window pops up congratulating the user. There is an option for the user to input username and see his/her position on the leader board.
*Note: the website does not have back-end functionality, and the user can compare the results achieved within the same session. By default, 4 users have been defined to 
compare user results with.*

### Theme toggle 

On every page, there is a toggle on the top left corner for the user to choose between dark and light themes. The site remembers the choice within the current session.

### Feedback form

User will be able to provide feedback on the game and the form is sent using EmailJS. 
User is asked for age and gender, and can rate the ease of use, game experience and site layout from 1 to 10 with a slider.

---

## Technologies used

### Languages

* HTML5
* CSS3
* JavaScript

### Libraries

* Balsamiq: an industry standard low-fidelity wireframing tool
* Google Fonts: for providing stylish fonts across the website

### Integration

* Email.JS: client-side Javascript code service on the feedback page to send email

### Version control

* Github: is used to store all codes and host the website 
* Gitpod: is used as a IDE and to push code to Github

---

## Testing

There has been a variety of testings carried out on the website. One of the most important part of testing was that it works on various platforms, and the 
JavaScript code written is understood by different browsers.
After that, I wanted the site to be responsive and that the design/layout loads aesthetically on various devices with different screen size. 
The wireframes show the plan how the site is intented to look an wider and smaller-screen devices.

### Testing cross-browser compatibility 

Other then testing with desktops, laptops and mobile phones available at myself and friends, a Cross Browser Testing Cloud called Lambdatest was used to simulate real-time testing. 
The website is available at https://www.lambdatest.com/ \
This website is able to simulate various types of browsers (Google Chrome, Firefox, Opera, etc.) in various versions and screen resolution real-time, so that I was able to ensure 
that all functionalities work in different environments. These tests mostly showed the desired result, except from one problem with the card flips in Firefox. This has been 
fixed, and is more detailed below in the bugs section.

### Testing responsiveness

A website called http://responsivetesttool.com/ provides a quick and easy way to display a website in mobile, desktop and tablet views in the most common resolutions, including 
landscape and portrait views. Due to the media queries added, the website was able to successfully resize to various screen sizes.

### Testing mobile-friendliness

For this test, Google's mobile friendly test was used: https://search.google.com/test/mobile-friendly \

The result shown was:\
*Page is mobile friendly*\
*This page is easy to use on a mobile device*

### Testing user stories

1. I would like to use a website that is intuitive and easy to navigate\
    *The website uses a straightforward design, and the buttons are placed at a visible place. All functionalities can be accessed within two clicks.*

2. I would enjoy being on a website that is aesthetic\
    *The font is easy to read and suitable for this amount of text. The colours used for the light and dark colour schemes have been selected carefully and put together 
    in a colour palette to see that they look nice and compliment each other well*

3. I would like to play a game that improves my memory\
    *To solve the game fast, it requires memory to remember the cards. In addition to that, there are 3 different levels available.*

4. I would like to play a game that is fun\
    *This type of game was played by most of us during childhood, therefore it brings back memories. The animation, timer, move counter and progress bar will help 
    make the game as much fun as possible.*

5. I would like to see my results at the end of the game\
    *At the end of the game, the player have the opportunity to see the result on a leaderboard in comparison with other players. (NOTE: this game only uses 
    front-end techniques, therefore the results are stored only for the current session, and by default, it is compared with fictional players.)*

6. I would like to be able to leave feedback on the game\
    *There is a designated feedback page available where user can submit their feedback and rate the ease of use, game experience and site layout.*

### Bugs discovered

There was an interesting bug discovered in Firefox browsers: when the user clicks on the card and it flips to front face, the card would return back immediately 
as soon as the user moves the mouse from the card, which distroyed the whole functionality.\
As a first step, I tried to locate which part of the code could cause the issue. To rotate the card, a class called *.card.flip* is added to the card (div element)
*transform: rotateY(180deg);* in CSS. I identified that the error would be coming from this tranformation, however, the logic seemed correct because it worked well in all other 
browsers.\
\
As a first step, I added the browser prefixes to all classes containing 'transform', such as 
- transform: rotateY(180deg);
- ms-transform: rotateY(180deg);
- o-transform: rotateY(180deg);
- moz-transform: rotateY(180deg);
- webkit-transform: rotateY(180deg);


however, it did not solve the problem.
\
After research, I discovered that I needed to set up an initial 0-degree transform on the original cards and added a line of *transform:rotateX(0deg);* to the base classes 
*.front-face, .back-face,* and this resolved the problem successfully.

### Note to functionality

It must be added to this documentation that some features have limited functionalities.\
This Milestone project only uses front-end techniques, therefore unable to store data beyond a session. Therefore, the leader board is initially filled with fictional players and results, 
however, the system is able to rank the user result among these hard-coded players. If the user plays another game within the same browser session, it will add to the leader board 
and will be able to compare the scores with the prevous game result, but the results will be lost at the end of the session. 

### Validation

* Jigsaw: validation passed with no error found.
* W3C for HTML: validation passed with no error found.

---

## Credits

During the development process, I used existing games to get inspiration from, read articles and forums, plus watched YouTube videos. 
In this section I would like to give credit to all these tools, sources and help that contributed to the success of my project:

* This video on YouTube was very inspiring to build to foundations of the JavaScript concept: https://www.youtube.com/watch?v=ZniVgo8U7ek&t=1099s 
    * The main functionalities I applied from the video: iterating through lists with forEach, adding and removig classes (flip), using backface-visibility in CSS, applying data-set on cards
    * Functions used with adoption to my project: flipCard(), checkForMatch(), disableCards(), unFlipCards(), resetBoard(), shuffle()
* Creating a timer: https://www.youtube.com/watch?v=oY8V6GuZrkM&t=534s
    * This is a complete stopwatch, but demonstrates the logic well, especially how to put 0 in front of the single-digit minute counter
* Stack overflow: https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array
    * The logic to pick random cards from an array
* Theme toggle: the below two YouTube videos were helpful in the concepts, and after that I had to merge some of the techniques
    * https://www.youtube.com/watch?v=xodD0nw2veQ
    * https://www.youtube.com/watch?v=PD89iMr50Mw&t=400s
* Email.JS 
    * I have applied the learnings from the relevant lessons at the Code Institue material, demonstrated by Matt Rudge 
* My mentor at Code Institute Nishant Kumar who encouraged me to implement all these features

---

## Deployment

The website was deployed to *GitHub* that is hosting the site, and is available to view at https://kerekmarci.github.io/ms2/ \
To create a local clone, open Git Bash, type: *git clone https://github.com/kerekmarci/ms2.git* 

