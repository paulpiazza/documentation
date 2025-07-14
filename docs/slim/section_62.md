---
title: Lesson 2.26 - Superglobals - $_FILES - File Uploads
description: Slim notes.
order: 62
---

Uploading files in PHP involves using the `$_FILES` superglobal to access and process the uploaded files. Here's a basic overview of how file uploads work in PHP:

1. **HTML Form Setup:**
   Create an HTML form with the `enctype` attribute set to `"multipart/form-data"`, which is required for file uploads.

   ```html
   <form action="upload.php" method="post" enctype="multipart/form-data">
       <input type="file" name="fileToUpload">
       <input type="submit" value="Upload File">
   </form>
   ```

2. **PHP Handling:**
   In the PHP script that receives the form submission, you can use the `$_FILES` superglobal to access the uploaded file's information.

   ```php
   <?php
   $targetDir = "uploads/"; // Specify the target directory to save the uploaded files
   $targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);

   if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
       echo "File uploaded successfully.";
   } else {
       echo "Error uploading file.";
   }
   ?>
   ```

   In this example, `$_FILES["fileToUpload"]` contains information about the uploaded file, such as its name, temporary location (`tmp_name`), type, and size.

3. **php.ini Directives:**
   PHP configuration settings related to file uploads can be found in the `php.ini` configuration file. Some relevant directives include:

   - `upload_max_filesize`: Specifies the maximum size of uploaded files.
   - `post_max_size`: Specifies the maximum size of POST data, including file uploads.
   - `max_file_uploads`: Specifies the maximum number of files that can be uploaded in a single request.
   - `upload_tmp_dir`: Specifies the directory where temporary files are stored during the upload process.

   Ensure these directives are appropriately configured to match your application's requirements.

Remember to validate and sanitize user input before processing any uploaded files to prevent security vulnerabilities. Also, consider implementing additional security measures such as file type checking, renaming uploaded files, and restricting file access to prevent unauthorized access or malicious actions.

The `readfile()` function in PHP is used to read and output the contents of a file to the browser. It's commonly used for serving files for download or displaying images, PDFs, or other types of files directly in the browser. The `readfile()` function reads the file content and sends it to the output buffer, which is then sent to the browser.

Here's how you can use `readfile()`:

```php
<?php
$file = 'example.pdf'; // Replace with the path to your file

// Set appropriate headers for the file type
header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="example.pdf"');

// Read and output the file contents
readfile($file);
?>
```

In this example, when the PHP script is executed, the `readfile()` function reads the contents of the specified file (`example.pdf` in this case) and outputs them to the browser. The `Content-Type` header specifies the MIME type of the file (in this case, a PDF file), and the `Content-Disposition` header indicates whether the file should be displayed inline or downloaded as an attachment.

Remember to set the appropriate headers based on the file type you're serving. Also, ensure that the file you're reading is accessible and located in the correct directory.

there are several other methods and functions in PHP that you can use for various purposes when dealing with file uploads. Here are a few commonly used methods and functions:

1. **move_uploaded_file():**
   This function is commonly used to move an uploaded file from the temporary directory to a specified destination. It's specifically designed for handling file uploads and ensures security by checking that the file was uploaded via HTTP POST. It's often used in combination with the `$_FILES` superglobal.

2. **copy():**
   The `copy()` function allows you to create a copy of a file from one location to another. While not specific to file uploads, it can be used to duplicate uploaded files for backup or other purposes.

3. **finfo_file():**
   This function, part of the File Information extension (finfo), is used to determine the MIME type of a file. It can be useful for verifying the type of an uploaded file to ensure that it matches the expected format.

4. **unlink():**
   The `unlink()` function is used to delete a file. It can be used to remove uploaded files after processing or to clean up temporary files.

5. **file_put_contents():**
   While not exclusively for file uploads, `file_put_contents()` can be used to write data to a file. It can be used to store uploaded files in specific locations.

6. **move_uploaded_file() with Validation:**
   When using `move_uploaded_file()`, it's common to perform validation checks on the uploaded file, such as checking its size, type, and other attributes, before actually moving it.

7. **Third-Party Libraries:**
   There are third-party libraries, like Symfony's FileUploader component or Laravel's Filesystem, that provide advanced features for handling file uploads, such as managing file storage, validation, and handling multiple files.

In many PHP applications, including those involving file uploads, developers often define a constant or variable to specify the storage path where uploaded files should be saved. This allows for easy management of where uploaded files are stored on the server.

Here's an example of how you might use a `STORE_PATH` constant:

```php
define('STORE_PATH', '/path/to/uploaded/files/');

if (isset($_FILES['uploaded_file'])) {
    $targetFile = STORE_PATH . $_FILES['uploaded_file']['name'];

    if (move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $targetFile)) {
        echo 'File uploaded successfully.';
    } else {
        echo 'Error uploading file.';
    }
}
```

In this example, the `STORE_PATH` constant specifies the directory where uploaded files should be stored. The uploaded file is moved to the target location using the `move_uploaded_file()` function.

By using a constant like `STORE_PATH`, you can easily manage and change the storage location for uploaded files across your application without needing to update the code in multiple places. Just make sure that the specified path has the necessary permissions to allow PHP to write files to it.