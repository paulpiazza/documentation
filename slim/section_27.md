---
title: Lesson 1.25 - Work With Date, Time & Time Zones
description: Slim notes.
order: 27
---

Working with Unix timestamps in PHP is straightforward and allows you to perform various operations with dates and times. 

[00:22](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=22s) - Working with Unix timestamp

A Unix timestamp represents the number of seconds since January 1, 1970 (the Unix epoch). PHP provides functions to convert between Unix timestamps and standard date formats, manipulate timestamps, and perform date-related calculations.

```php
$timestamp = time(); // Current Unix timestamp
echo $timestamp;
```

Convert Unix timestamp to a readable date and time format:

```php
$timestamp = 1626584899; // Replace with your Unix timestamp
$dateTime = date('Y-m-d H:i:s', $timestamp);
echo $dateTime; // Output: 2021-07-18 15:34:59
```

Convert a date and time string to a Unix timestamp:

```php
$dateTimeString = '2021-07-18 15:34:59'; // Replace with your date and time string
$timestamp = strtotime($dateTimeString);
echo $timestamp; // Output: 1626584899
```


Perform date calculations using Unix timestamps:

```php
$timestamp = time(); // Current Unix timestamp
$oneWeekLater = $timestamp + (7 * 24 * 60 * 60); // Add one week (7 days) to the timestamp
echo date('Y-m-d H:i:s', $oneWeekLater);
```

Compare dates using Unix timestamps:

```php
$timestamp1 = strtotime('2021-07-18 15:34:59');
$timestamp2 = strtotime('2021-07-19 12:00:00');

if ($timestamp1 < $timestamp2) {
    echo 'The first date is earlier than the second date.';
} else {
    echo 'The first date is later than or equal to the second date.';
}
```

[01:45](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=105s) - Formatting dates

Get individual components of a date from a Unix timestamp:

See [formats](https://www.php.net/manual/en/datetime.formats.date.php)

```php
$timestamp = time();
$year = date('Y', $timestamp);
$month = date('m', $timestamp);
$day = date('d', $timestamp);
$hour = date('H', $timestamp);
$minute = date('i', $timestamp);
$second = date('s', $timestamp);

echo date(); // current time
echo date('m/d/Y g:ia')
```


See [formats datetime](https://www.php.net/manual/en/datetime.format.php)

```php
$date = new DateTimeImmutable('2000-01-01');
$now = new DateTime(); // current time
echo $date->format('Y-m-d H:i:s');
```

[03:03](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=183s) - Working with time zones

See [timezone](https://www.php.net/manual/en/timezones.php)

Set the Default Time Zone:

```php
date_default_timezone_set('America/New_York');
```

Get the Current Date and Time with Time Zone:

```php
$timezone = new DateTimeZone('America/New_York');
$now = new DateTime('now', $timezone);

echo $now->format('Y-m-d H:i:s');
```

Convert Between Time Zones:

```php
$timezone1 = new DateTimeZone('America/New_York');
$timezone2 = new DateTimeZone('Europe/London');

$datetime = new DateTime('2023-07-18 15:00:00', $timezone1);
$datetime->setTimezone($timezone2);

echo $datetime->format('Y-m-d H:i:s'); // Output: 2023-07-18 20:00:00
```


List All Supported Time Zones:

```php
$timezones = DateTimeZone::listIdentifiers();

foreach ($timezones as $timezone) {
    echo $timezone . "\n";
}
```


Display User-Friendly Time Zone Names:

```php
$timezone = new DateTimeZone('America/New_York');
$transitions = $timezone->getTransitions();

foreach ($transitions as $transition) {
    echo $transition['abbr'] . ' - ' . $transition['name'] . "\n";
}
```

Handling Daylight Saving Time (DST):

PHP's `DateTime` class automatically adjusts for daylight saving time based on the specified time zone, so you don't need to worry about it explicitly.


[04:07](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=247s) - Using mktime function to get Unix timestamp value

The `mktime()` function in PHP allows you to create a Unix timestamp based on specific date and time components. It takes the individual components (hour, minute, second, month, day, year) as arguments and returns the corresponding Unix timestamp.

```php
mktime(int $hour, int $minute, int $second, int $month, int $day, int $year): int
```

- `$hour`: The hour (0 to 23).
- `$minute`: The minute (0 to 59).
- `$second`: The second (0 to 59).
- `$month`: The numeric representation of the month (1 to 12).
- `$day`: The day of the month (1 to 31).
- `$year`: The year (4-digit format, e.g., 2023).

```php
// Create a Unix timestamp for 17th July 2023, 15:30:45
$timestamp = mktime(15, 30, 45, 7, 17, 2023);

echo $timestamp;
```

In this example, the `mktime()` function is used to create a Unix timestamp for the date and time: 17th July 2023, 15:30:45. T


[04:31](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=271s) - Parsing dates using function strtotime

The `strtotime()` function takes a date and time string as its argument and returns a Unix timestamp representing that date and time. It can handle a wide range of date formats, including relative expressions like "tomorrow," "next Monday," "last week," etc.

See [relative formats](https://www.php.net/manual/en/datetime.formats.relative.php)

Parse a date and time string:
```php
$dateString = "2023-07-18 15:30:45";
$timestamp = strtotime($dateString);

echo $timestamp; // Output: 1679193045
```

Parse a date without the time:
```php
$dateString = "2023-07-18";
$timestamp = strtotime($dateString);

echo $timestamp; // Output: 1679193600 (corresponding to 2023-07-18 00:00:00)
```

Parse a relative date expression:
```php
$timestampTomorrow = strtotime("tomorrow");
$timestampNextMonday = strtotime("next Monday");

echo date('Y-m-d', $timestampTomorrow); // Output: 2023-07-19 (current date + 1 day)
echo date('Y-m-d', $timestampNextMonday); // Output: 2023-07-24 (date of the next Monday)
```

Parse a complex date expression:
```php
$timestamp = strtotime("first day of next month +1 week");

echo date('Y-m-d', $timestamp); // Output: 2023-08-08 (1st day of the next month + 1 week)
```

Handle invalid date strings:
```php
$dateString = "Invalid Date";
$timestamp = strtotime($dateString);

if ($timestamp === false) {
    echo "Invalid date string";
} else {
    echo $timestamp;
}
```

Keep in mind that `strtotime()` may not always produce the expected result if the date format is ambiguous or not well-defined. It is best to use `strtotime()` with standardized date formats or simple relative expressions for more predictable results. If you need to work with specific date formats, consider using the `DateTime` class or the `date_create_from_format()` function for more control over the parsing process.


[05:18](https://www.youtube.com/watch?v=Zf9MWSUKpVM&t=318s) - Parsing dates using function date_parse & date_parse_from_format to get more details about date

In PHP, the `date_parse()` function and `date_parse_from_format()` function are used to parse date and time strings and provide detailed information about the parsed date components. These functions allow you to extract various details such as the year, month, day, hour, minute, second, and more from the input date string.

1. date_parse():
The `date_parse()` function parses an input date and returns an associative array containing the parsed date components.

```php
$dateString = "2023-07-18 15:30:45";
$parsedDate = date_parse($dateString);

print_r($parsedDate);
```

Output:
```
Array
(
    [year] => 2023
    [month] => 7
    [day] => 18
    [hour] => 15
    [minute] => 30
    [second] => 45
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array()
    [error_count] => 0
    [errors] => Array()
    [is_localtime] => 
    [zone_type] => 3
    [zone] => -03:00
    [is_dst] => 
    [tz_abbr] => -03
)
```

The `date_parse()` function returns an array with the parsed date components, along with additional information such as warnings, errors, and time zone details.

2. date_parse_from_format():
The `date_parse_from_format()` function allows you to parse an input date string using a specified date format. It returns the parsed date components in an associative array.

```php
$dateString = "18/07/2023";
$format = "d/m/Y";
$parsedDate = date_parse_from_format($format, $dateString);

print_r($parsedDate);
```

Output:
```
Array
(
    [year] => 2023
    [month] => 7
    [day] => 18
    [hour] => 0
    [minute] => 0
    [second] => 0
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array()
    [error_count] => 0
    [errors] => Array()
    [is_localtime] => 
    [zone_type] => 1
    [zone] => 0
    [is_dst] => 
    [tz_abbr] => 
)
```

The `date_parse_from_format()` function allows you to specify the exact format of the input date string, making it more suitable when dealing with specific date formats that may not be recognizable by `strtotime()`.

Both `date_parse()` and `date_parse_from_format()` functions provide valuable details about the parsed date components, which can be used for further processing or validation in your PHP applications.


difference between DateTime and DateTimeImmutable

`DateTime` and `DateTimeImmutable` are two date and time classes in PHP that serve similar purposes but have some fundamental differences in terms of mutability and behavior. Both classes allow you to work with dates, times, and perform various date-related operations. Let's compare them:

1. Mutability:
- `DateTime`: The `DateTime` class is mutable, meaning you can modify its value after its creation. Methods like `modify()` can change the date and time of a `DateTime` object in place.

- `DateTimeImmutable`: The `DateTimeImmutable` class, as the name suggests, is immutable, meaning its value cannot be changed once it is created. Any modification to a `DateTimeImmutable` object will create a new object, leaving the original object unchanged.

2. Immutability and Safety:
- `DateTime`: Being mutable, `DateTime` can lead to potential issues when working with complex or multithreaded applications, as the original object can be accidentally modified, leading to unexpected behavior.

- `DateTimeImmutable`: Being immutable, `DateTimeImmutable` helps prevent unintended changes to the date and time data. It ensures that each operation returns a new object, making it more predictable and thread-safe.

3. Method Return Types:
- `DateTime`: Some `DateTime` methods return a modified object, which can be the same object with its value changed. This can be error-prone if you are not careful with handling the return values.

- `DateTimeImmutable`: All methods of `DateTimeImmutable` return a new object, ensuring that the original object remains unchanged. This makes it easier to reason about the code and helps prevent accidental modifications.

Here's a basic example to illustrate the differences:

```php
$dateTime = new DateTime('2023-07-18');
$dateTime->modify('+1 day');
echo $dateTime->format('Y-m-d'); // Output: 2023-07-19 (original object modified)

$dateTimeImmutable = new DateTimeImmutable('2023-07-18');
$dateTimeImmutableModified = $dateTimeImmutable->modify('+1 day');
echo $dateTimeImmutable->format('Y-m-d'); // Output: 2023-07-18 (original object unchanged)
echo $dateTimeImmutableModified->format('Y-m-d'); // Output: 2023-07-19 (new object with modification)
```

In this example, the `DateTime` object is modified in place, while the `DateTimeImmutable` object returns a new object with the modification.

When to Use Each:
- Use `DateTime` when you need to perform date/time calculations and modify the object in place.
- Use `DateTimeImmutable` when you want to ensure the integrity of your date/time data, avoid accidental modifications, and need a more predictable behavior, especially in complex or concurrent environments.

The choice between `DateTime` and `DateTimeImmutable` depends on the specific requirements of your application and how you want to handle date and time manipulation.

