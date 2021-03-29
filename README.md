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

User stories:

As a user...,

* I would like to use a website that is intuitive and easy to navigate
* I would enjoy being on a website that is aesthetic 
* I would like to play a game that improves my memory
* I would like to play a game that is fun
* I would like to see my results at the end of the game
* I would like to compare my results with others
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
* Cards for the game in the main area in the middle
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

The skeleton of the website is available in the below wireframes, for both desktop and mobile view:

**Desktop wireframes**



**Mobile wireframes**



### Surface

* **Theme:**
xxxx

* **Colours:**
xxx


The colours in a pallette can be seen here:

Colour palette 



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

### Version control

* Github: is used to store all codes and host the website 
* Gitpod: is used as a IDE and to push code to Github

---

## Testing

xxx

### Testing user stories

1. As a user, I ...

### Validation

* Jigsaw 
* W3C for HTML

---

## Deployment

The website was deployed to *GitHub* that is hosting the site, and is available to view at https://kerekmarci.github.io/ms2/ \
To create a local clone, open Git Bash, type: *git clone https://github.com/kerekmarci/ms2.git* 

