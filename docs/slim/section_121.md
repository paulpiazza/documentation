---
title: Lesson P.17 - DataTables & Pagination
description: Slim notes.
order: 121
---

See [P17_End](https://github.com/paulpiazza/gio-formation-expennies/commits/P17_End)

See [datatables js](https://datatables.net/)

In this video, the presenter demonstrates how to add pagination functionality to a table using the DataTables library. They explain how to structure the response and customize options for each column. The pagination is successfully implemented, allowing users to navigate through multiple pages of data.

Detailed Summary for [DataTables & Pagination - Build Expense Tracker App With PHP 8](https://www.youtube.com/watch?v=KadKI3jQwzI) by [Monica](https://monica.im)

[00:00](https://www.youtube.com/watch?v=KadKI3jQwzI&t=0.299) Adding pagination and data table library to the expense tracker app.
- The UI on the categories page includes a search box, sorting indicators, a drop-down to select the number of entries displayed, and a pagination bar.
- The data table library used is called DataTables, which is free and can be used without directly adding jQuery as a dependency.
- The video will focus on building pagination and sorting filtering options into the queries on the backend side and structuring the response in the proper way for DataTables.
    
[03:09](https://www.youtube.com/watch?v=KadKI3jQwzI&t=189.36) Initializing the DataTable object in PHP 8 with server-side fetching, column options, and dynamically added edit/delete buttons.
- Server side is set to true to fetch data from the server using AJAX.
- The data attribute defines the key of the column returned in the JSON response.
- Edit and delete buttons are dynamically added to the DOM and a click event is added to the parent table element.
    
[06:17](https://www.youtube.com/watch?v=KadKI3jQwzI&t=377.039) The changes in the backend include a new route in web.php, a load method in the categories controller, and formatting of categories into an array that the data table can understand.
- The load method fetches all categories and formats them into an array.
- The keys in the array are mapped to the data table in JavaScript.
- The Json response includes data, draw, records total, and records filtered.
    
[09:26](https://www.youtube.com/watch?v=KadKI3jQwzI&t=566.82) The section discusses setting the same count for two totals, explaining the purpose of the draw parameter, and building pagination by using the limit and offset options in the query.
- A micro-optimization is suggested by storing the count in a variable instead of calling count twice.
- The draw parameter is a sequence number used by DataTables to draw the correct page.
- To build pagination, the limit and offset options need to be extracted from the query parameters and applied to the query using Doctrine ORM query builder methods.
- The method for selecting all categories is renamed to "get paginated categories" and the query builder is used to set the limit and offset.
    
[12:36](https://www.youtube.com/watch?v=KadKI3jQwzI&t=756.66) The video discusses how to implement pagination in the Expense Tracker app using DataTables and PHP 8.
- The start and length parameters are used to determine the number of records to display per page.
- The pagination is not working correctly because the count function only counts the number of categories returned from the query, not the total count.
- To fix this, the total count without the offset and limit needs to be added to the query.
- Doctrine ORM's built-in functionality can be used to handle this.
    
[15:46](https://www.youtube.com/watch?v=KadKI3jQwzI&t=946.62) The video discusses using DataTables and pagination in building an expense tracker app with PHP 8.
- The count query is used to get the count of records without applying the limit and offset to the query.
- The iterator aggregate interface allows iterating over the object as if it were an array.
- The array map function is used to transform the categories object into an array.
- Pagination is shown to be working correctly, with the ability to switch between pages and adjust the number of entries displayed.
    