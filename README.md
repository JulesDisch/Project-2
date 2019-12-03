# Project-2 -- Potluck Planner

* Purpose:
  The purpose of this application is to provide a centralized location for clients to manage a food potluck event.  

* Organization:
  The MVC method of file organization was used for the creation of this application. The application is organized in two pages:

  * Home Page -- This page allows the user to add their food item to the master list.

  * Display Page -- This page displays a master list of all the foods that have been added to the potluck list and provides space for a discussion board.

App Instructions:
* Home Page
    * 1. If the User knows what they want to bring:
        * The user enters their name, chooses a category from the food category drop down and food       item. Then clicks 'submit'.
    * 2. If the user doesn't know what to bring: 
        * The user selects a food category and clicks 'search'.
        * A random recipe is provided based on the category.  The returned data includes a youtube video, a picture and the recipe.
        * The user can either:
            * 1. Click 'print this recipe' to print the recipe or save the recipe.
            * 2. Click 'search again' and get automatically routed back to the form to start a new search.
            * 3. Click 'sign up for this recipe', which will pre-populate the food item and category into the form. The user then needs to click 'submit'.
    * 3. After clicking 'submit' the user should automatically be taken to the next page ("display   
         page").

<p><img src="/images/home1"/></p>
<p><img src="/images/home2"/></p>
<p><img src="/images/home3"/></p>
<p><img src="/images/home4"/></p>
<p><img src="/images/home4"/></p>

*  Display Page -- This page is divided into two tabs.  Either tab can be accessed by clicking on the tab buttons -- 'food' or 'discussion'.
    * 1. Food Tab -- this tab displays all the food items that have been entered.
        * The user can search the list by category.
        * The user can add to the food list by clicking 'add another food', which takes the user    
        back to the homepage to complete the form.
        * The user can also delete any item that they've added to the list.

    * 2. Discussion Tab -- this tab allows users to review and create discussion posts.
        *  As a first time user, the user should click 'manage posters'.  The user should add their       name, then click 'create poster'.
            * 1. On this screen, the user can delete a poster, create a post or go to posts by clicking on these links.
            * 2. The user can also return to the main discussion board by clicking the 'main board' button or create a post by clicking on the 'new post' button.
        *  After creating a poster profile, the use can click 'new post' or "create a post" and then      complete the form.  After the form has been completed, the user should click 'submit'.

<p><img src="/images/display1"/></p>
<p><img src="/images/display2"/></p>
<p><img src="/images/display3"/></p>
<p><img src="/images/display4"/></p>
<p><img src="/images/display5"/></p>


Github repo link:
https://github.com/JulesDisch/Project-2

Heroku link:
https://evening-stream-85249.herokuapp.com/


Technology Used:
* Express.js
* Sequelize CLI
* Meal DB API

Role:
*   Alex– front-end and back-end coding for the recipe randomizer and the discussion board.
*   BinBin – front-end and back-end coding for the food list and search capability.
*   Julie – provided starter code, created/administered github/Heroku repositories, front-end coding/      styling for all pages and page integration.
*   Tahnee – front-end coding for all pages and created the readme document.

