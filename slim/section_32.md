---
title: Lesson 1.30 - Work With FileSystem
description: Slim notes.
order: 32
---

See [all directories functions](https://www.php.net/manual/en/ref.dir.php)
See [FileSystem](https://www.php.net/manual/en/ref.filesystem.php)

[00:00](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=0s) - List of all files & directories - scandir

The `scandir` function in PHP is used to retrieve a list of all files and directories in a given directory. It returns an array containing the names of the files and directories.

```php
$directory = '/path/to/directory';

// Get the list of files and directories
$contents = scandir($directory);

// Remove "." and ".." entries
$contents = array_diff($contents, array('.', '..'));

// Print the list
foreach ($contents as $item) {
    echo $item . PHP_EOL;
}
```

 `.` (current directory) 
 `..` (parent directory). 
 
 We use `array_diff` to remove those special entries from the list before printing.

Remember to handle errors and ensure that you have the necessary permissions to access the directory you're trying to scan.

Keep in mind that the `scandir` function retrieves the list of entries without sorting. 


[00:44](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=44s) - Check if file is a directory or a file - is_dir / is_file

In PHP, you can use the `is_dir` and `is_file` functions to check whether a given path refers to a directory or a file, respectively. These functions return `true` if the path corresponds to the specified type and `false` otherwise.

[00:58](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=58s) - Create & delete directories - mkdir / rmdir

In PHP, you can use the `mkdir` function to create directories and the `rmdir` function to delete directories. Here's how you can use these functions:

1. **Create a Directory (`mkdir`):**

The `mkdir` function is used to create a new directory. You need to provide the directory path and, optionally, specify permissions and whether to create nested directories if they don't exist.

```php
$directory = '/path/to/new/directory';

if (!is_dir($directory)) { // Check if the directory doesn't already exist
    if (mkdir($directory, 0777, true)) { // Create the directory with permissions and nested directories
        echo "Directory created successfully.";
    } else {
        echo "Failed to create directory.";
    }
} else {
    echo "Directory already exists.";
}
```

The `0777` permission value grants full read, write, and execute permissions to the directory.

2. **Delete a Directory (`rmdir`):**

The `rmdir` function is used to remove an empty directory. 

If the directory is not empty, you should use other methods like `unlink` or recursive functions to remove its contents before using `rmdir`.

```php
$directory = '/path/to/directory_to_delete';

if (is_dir($directory)) {
    if (rmdir($directory)) {
        echo "Directory deleted successfully.";
    } else {
        echo "Failed to delete directory.";
    }
} else {
    echo "Directory does not exist.";
}
```


[02:02](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=122s) - Check if file or directory exists & print filesize - file_exists / filesize

1. **Check if File or Directory Exists (`file_exists`):**

The `file_exists` function checks if a file or directory exists at the specified path.

```php
$path = '/path/to/some/file_or_directory';

if (file_exists($path)) {
    echo "$path exists.";
} else {
    echo "$path does not exist.";
}
```

2. **Get File Size (`filesize`):**

The `filesize` function returns the size of a file in bytes. It requires the path to the file as an argument.

```php
$file = '/path/to/some/file.txt';

if (file_exists($file)) {
    $size = filesize($file);
    echo "Size of $file is $size bytes.";
} else {
    echo "$file does not exist.";
}
```


[02:28](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=148s) - Clear cached values of functions like filesize - clearstatcache

In PHP, the `clearstatcache` function is used to clear the file status cache, which includes information about file-related functions such as `filesize`, `filemtime`, `filectime`, and others. When you call these functions, PHP caches the file information to avoid unnecessary disk I/O operations. However, in some cases, you might need to clear this cache to ensure you're getting the most up-to-date information.

Here's how you can use the `clearstatcache` function to clear the file status cache:

```php
$file = '/path/to/some/file.txt';

// Get the size of the file before clearing the cache
$sizeBefore = filesize($file);

// Clear the file status cache
clearstatcache();

// Get the size of the file after clearing the cache
$sizeAfter = filesize($file);

echo "Size of $file before clearing cache: $sizeBefore bytes" . PHP_EOL;
echo "Size of $file after clearing cache: $sizeAfter bytes" . PHP_EOL;
```

Keep in mind that calling `clearstatcache` might have a slight performance impact, especially if you're using it frequently. 

[03:30](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=210s) - Open files & resource data type - fopen

In PHP, the `fopen` function is used to open files and create a file handle, which is a resource data type that allows you to read from or write to the file. 

The `fopen` function returns a file handle that you can use with other file-related functions to perform operations on the opened file.

Here's the basic syntax of the `fopen` function:

```php
resource fopen ( string $filename , string $mode [, bool $use_include_path = FALSE [, resource $context ]] )
```

- `$filename`: The name of the file to open, including its path.
- `$mode`: The mode in which to open the file. This can be `'r'` for reading, `'w'` for writing (and creating if the file doesn't exist), `'a'` for appending, and more. See the PHP documentation for the full list of modes.
- `$use_include_path`: Optional. If set to `true`, PHP will search for the file in the include path as well.
- `$context`: Optional. A context resource created using the `stream_context_create` function.

Here's an example of how to use `fopen` to open a file for reading and read its contents:

```php
$filename = '/path/to/some/file.txt';
$mode = 'r';

// Open the file
$fileHandle = fopen($filename, $mode);

if ($fileHandle) {
    // Read and output the file contents
    while (!feof($fileHandle)) {
        $line = fgets($fileHandle);
        echo $line;
    }
    
    // Close the file handle
    fclose($fileHandle);
} else {
    echo "Failed to open the file.";
}
```

The `feof` function in PHP is used to check if the "end of file" (EOF) has been reached in a file that is currently being read using a file handle. It returns `true` if the end of the file has been reached, and `false` otherwise.

Note that the `fopen` function and working with file handles involve file I/O operations, which can have performance implications, especially when dealing with large files or frequent file operations. 

This method of reading files line by line is memory-efficient, as it only reads one line at a time, which is useful for processing large files without loading the entire file into memory.

[04:25](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=265s) - Using error control operator to suppress warnings

```php
$file = @fopen('foobar.txt', 'r');
// it will not stop the execution of the code and will not throw an error.
```

>[!warning]
>This is a bad practice. Test before errors that can be generated. Use `file_exits` instead.


[05:25](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=325s) - Read files line by line - fgets / fclose

The `fgets` function reads a single line from an open file handle and advances the file pointer to the next line. You can use it in a loop to read each line of a file sequentially.

After reading all lines, we close the file handle using `fclose`.

[06:25](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=385s) - Read csv files - fgetcsv

In PHP, you can use the `fgetcsv` function to read CSV (Comma-Separated Values) files line by line and automatically parse the data into an array. This function is specifically designed for reading CSV files, and it handles parsing the comma-separated values and handling various delimiters.

Here's an example of how to use `fgetcsv` to read and process a CSV file:

Suppose you have a CSV file named `data.csv` with the following content:

```
Name,Age,Location
John,30,New York
Jane,25,Los Angeles
Michael,35,Chicago
```

```php
$filename = 'data.csv';
$mode = 'r';

$fileHandle = fopen($filename, $mode);

if ($fileHandle) {
    while (($row = fgetcsv($fileHandle)) !== false) {
        // $row is an array containing the CSV data for the current line
        $name = $row[0];
        $age = $row[1];
        $location = $row[2];
        
        echo "Name: $name, Age: $age, Location: $location" . PHP_EOL;
    }
    
    fclose($fileHandle);
} else {
    echo "Failed to open the file.";
}
```

The `fgetcsv` function automatically handles different delimiters, so it can read CSV files that use semicolons, tabs, or other delimiters instead of just commas.

Remember to handle errors and close the file handle properly when you're done reading the CSV file.

[07:02](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=422s) - Get file contents & store in a variable - file_get_contents

In PHP, the `file_get_contents` function is used to read the entire contents of a file and store it in a variable as a string. This function is commonly used to retrieve the contents of a file and process it in various ways.

```php
$filename = '/path/to/some/file.txt';

// Read the contents of the file into a variable
$fileContents = file_get_contents($filename);

if ($fileContents !== false) {
    // Process or manipulate the contents
    echo $fileContents;
} else {
    echo "Failed to read the file.";
}
```

Remember to handle errors appropriately, and keep in mind that using `file_get_contents` to read large files might not be memory-efficient, as it loads the entire file into memory. For large files, consider reading the file line by line or in chunks using other methods.

[07:57](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=477s) - Write content to a file - file_put_contents

In PHP, the `file_put_contents` function is used to write data to a file. It allows you to write a string or an array of strings to a file, either overwriting the existing content or appending to it.

**Overwrite Existing Content:**

```php
$filename = '/path/to/some/file.txt';

$data = "This is the new content that will overwrite the existing content.";

if (file_put_contents($filename, $data) !== false) {
    echo "Content written successfully.";
} else {
    echo "Failed to write content to the file.";
}
```

**Append to Existing Content:**

```php
$filename = '/path/to/some/file.txt';

$data = "This is the additional content that will be appended.";

if (file_put_contents($filename, $data, FILE_APPEND) !== false) {
    echo "Content appended successfully.";
} else {
    echo "Failed to append content to the file.";
}
```

Keep in mind that the `file_put_contents` function creates the file if it doesn't exist, so it can be used for both writing and creating files.

Remember to handle errors properly and ensure that you have the necessary permissions to write to the specified file.

[08:50](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=530s) - Delete, copy, rename & move files - unlink / copy / rename

1. **Delete a File (`unlink`):**

The `unlink` function is used to delete a file.

```php
$filename = '/path/to/some/file.txt';

if (unlink($filename)) {
    echo "File deleted successfully.";
} else {
    echo "Failed to delete the file.";
}
```

2. **Copy a File (`copy`):**

The `copy` function is used to copy a file from one location to another.

```php
$sourceFile = '/path/to/source/file.txt';
$destinationFile = '/path/to/destination/file.txt';

if (copy($sourceFile, $destinationFile)) {
    echo "File copied successfully.";
} else {
    echo "Failed to copy the file.";
}
```

3. **Rename a File (`rename`):**

The `rename` function is used to rename a file.

```php
$oldName = '/path/to/old/file.txt';
$newName = '/path/to/new/file.txt';

if (rename($oldName, $newName)) {
    echo "File renamed successfully.";
} else {
    echo "Failed to rename the file.";
}
```

These functions provide basic file management capabilities. Remember to handle errors properly and ensure that you have the necessary permissions to perform these operations on the specified files.

[09:34](https://www.youtube.com/watch?v=p7F2GgVxHc0&t=574s) - Get information about a file - pathinfo

In PHP, the `pathinfo` function is used to extract information about a file path, such as the directory, filename, extension, and basename. This function returns an associative array containing these components.

```php
$filename = '/path/to/some/file.txt';

$pathInfo = pathinfo($filename);

echo "Directory: " . $pathInfo['dirname'] . PHP_EOL;
echo "File Name: " . $pathInfo['filename'] . PHP_EOL;
echo "File Extension: " . $pathInfo['extension'] . PHP_EOL;
echo "File Basename: " . $pathInfo['basename'] . PHP_EOL;
```

The `pathinfo` function returns an array with the following keys:

- `dirname`: The directory name of the file path.
- `basename`: The complete file name including the extension.
- `extension`: The file extension (without the dot).
- `filename`: The file name without the extension.
