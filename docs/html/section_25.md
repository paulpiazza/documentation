---
title: Tables
description: Slim notes.
order: 25
---

Here an example of Table with HTML.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Table Example</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table>
        <caption>Monthly Savings</caption>
        <thead>
            <tr>
                <th scope="col">Month</th>
                <th scope="col">Savings</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>January</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>February</td>
                <td>$80</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Sum</td>
                <td>$180</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

This example includes the following elements:

- `<table>`: Defines a table.
- `<caption>`: Defines a table caption.
- `<thead>`: Groups the header content in a table.
- `<tbody>`: Groups the body content in a table.
- `<tfoot>`: Groups the footer content in a table.
- `<tr>`: Defines a row in a table.
- `<th>`: Defines a header cell in a table. The `scope` attribute helps with accessibility by associating a header cell with all cells in the corresponding column or row.
- `<td>`: Defines a cell in a table.
- `scope`: Define the scope of the heading. It can be column head or row head. `col`, `row`.

The `<style>` element in the `<head>` section is used to add CSS styles to the table. In this case, it adds borders to the table and its cells, and ensures that the borders collapse into a single border.

The `colspan` attribute in HTML specifies the number of columns a cell should span in a table. It allows a single table cell to span the width of more than one cell or column. This attribute provides the same functionality as "merge cell" in a spreadsheet program like Excel.

The `rowspan` attribute in HTML specifies the number of rows a cell should span. That is, if a cell spans two rows, it means it will take up the space of two rows in that table3. It allows a single table cell to span the height of more than one cell or row3. It provides the same functionality as “merge cell” in a spreadsheet program like Excel3.

You can use the `colspan` attribute on the `<td>` (table data) and `<th>` (table header) elements. Here's an example:

```html
<table>
    <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td colspan="2">John Doe</td>
        <td>30</td>
    </tr>
</table>
```

In this example, the `colspan` attribute is used to make the first header cell ("Name") and the first data cell ("John Doe") span across two columns. As a result, "John Doe" will be displayed across two columns under "Name".


