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
        * a. The user enters their name, chooses a category from the food category drop down and food       item. Then clicks 'submit'.
    * 2. If the user doesn't know what to bring: 
        * a. The user selects a food category and clicks 'search'.
        * b. A random recipe is provided based on the category.
        * c. If the user wants to use this recipe, they go back to the top of the page and enter     
             their name, a category and the food item.  Then click 'submit'.

            <p><img src="/images/scrnprnt1"/></p>
            <p><img src="/images/scrnprnt2"/></p>

    * 3. After clicking 'submit' the user should automatically be taken to the next page ("display   
         page").


*  Display Page -- This page is divided into two tabs:
    * 1. Food Tab -- this tab displays all the food items that have been entered.
        * a. The user can search the list by category.
        * b. The user can add to the food list by clicking 'add another food', which takes the user    
             back to the homepage to complete the form.
        * c. The user can also delete any item that they've added to the list.

            <p><img src="/images/scrnprnt3"/></p>

    * 2. Discussion Tab -- this tab allows users to review and create discussion posts.
        * a. As a first time user, the user should click 'manage posters'.  The user should add their       name, then click 'create poster'.
            * 1. On this screen, the user can delete a poster, create a post or go to posts by clicking on these links.
            * 2. The user can also return to the main discussion board by clicking the 'main board' button or create a post by clicking on the 'new post' button.
        * b. After creating a poster profile, the use can click 'new post' or "create a post" and then      complete the form.  After the form has been completed, the user should click 'submit'.

            <p><img src="/images/scrnprnt4"/></p>
            <p><img src="/images/scrnprnt5"/></p>
            <p><img src="/images/scrnprnt6"/></p>
            <p><img src="/images/scrnprnt7"/></p>


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

