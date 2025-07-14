---
title: Lesson P.18 - How To Securely Implement Sorting & Filtering
description: Slim notes.
order: 122
---

See [P18_End](https://github.com/paulpiazza/gio-formation-expennies/commits/P18_End)


The video demonstrates how to implement secure sorting and filtering in a PHP 8 expense tracker app while avoiding SQL injection vulnerabilities. It covers retrieving sorting parameters, implementing safe sorting, handling search filtering, and improving code structure through refactoring.

Detailed Summary for [How To Securely Implement Sorting & Filtering - Build Expense Tracker App With PHP 8](https://www.youtube.com/watch?v=LqygRNhemRw) by [Monica](https://monica.im)

[00:00](https://www.youtube.com/watch?v=LqygRNhemRw&t=0.299) The video shows how to access and use sorting and filtering features in a PHP 8 expense tracker app.
- The order option in the response contains the column being sorted by and the direction of the sort.
- The column index can be used to access the proper column name.
- The code creates a variable called "order by" to access the column being sorted by and "order direction" to access the direction of the sort.
- These variables are then used to wire up the sorting feature in the app.
    
[02:43](https://www.youtube.com/watch?v=LqygRNhemRw&t=163.379) Sorting and filtering can be done securely in PHP 8 by using the "order by" method, but concatenating table alias and column with order by and order direction can be vulnerable to SQL injection.
- Sorting can be done on the query by using the "order by" method with table alias and column concatenated with order direction.
- Sorting and filtering done this way can be dangerous and vulnerable to SQL injection.
- Malicious input containing a well-composed SQL injection can be formed by injecting a quote into the query.
- Parameters or placeholders cannot be used in this method to prevent SQL injection.
    
[05:26](https://www.youtube.com/watch?v=LqygRNhemRw&t=326.4) The code for sorting and filtering is implemented safely and correctly.
- An exception can be thrown instead of setting to default for sorting direction.
- Order direction is compared to ascending and descending for safe implementation.
- Filtering option is added with wildcard search and empty search is handled correctly.
    
[08:09](https://www.youtube.com/watch?v=LqygRNhemRw&t=489.12) Escaping percent and underscore characters in search queries and refactoring to use a generic data table filters DTO class.
- To escape percent and underscore characters in search queries, we can use string replace or the addCslashes function.
- Refactoring the code to use a generic data table filters DTO class for cleaner code.
    
[10:51](https://www.youtube.com/watch?v=LqygRNhemRw&t=651.839) The code is modified to accept DataTables query params and a new method is created to format the response as a DataTable.
- DataTables query params are passed as arguments to the category service method.
- A new DTO class is created with public read-only properties.
- The response formatter class is refactored to have a new method to format the response as a DataTable.
    
[13:36](https://www.youtube.com/watch?v=LqygRNhemRw&t=816.72) The categories page is complete with filtering, sorting, pagination, and CRUD operations. The next step is to implement the same operations for the transactions page as an exercise.
- The transactions page will have more input fields than the categories page.
- The same CRUD operations will be implemented for transactions as for categories.
- The video creator will provide an already implemented solution in a future video.
    
