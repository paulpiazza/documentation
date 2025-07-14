---
title: Lesson 3.14 - Schedule Emails - CRON
description: Slim notes.
order: 85
---

Cron is a time-based job scheduler in Unix-like operating systems. It is used to automate the execution of tasks or processes at specified intervals, which are defined using a cron syntax. These tasks can be anything from running scripts, executing commands, or performing system maintenance.

Key components of cron include:

1. **Cron Jobs:** A cron job is a scheduled task that specifies what command or script should be run and when it should be executed. Each cron job is associated with a specific user account.

2. **Cron Syntax:** The scheduling information for a cron job is defined using a cron syntax. The syntax consists of five fields (sometimes six, with an optional year field) separated by spaces:

   ```
   * * * * * command_to_execute
   | | | | |
   | | | | +-- Day of the week (0 - 6) (Sunday = 0)
   | | | +---- Month (1 - 12)
   | | +------ Day of the month (1 - 31)
   | +-------- Hour (0 - 23)
   +---------- Minute (0 - 59)
   ```

   - Each field can contain a specific value or a wildcard (`*`) to match any value.
   - Multiple values can be specified using commas or ranges.
   - For example, `0 3 * * *` represents a cron job that runs a command at 3:00 AM every day.

3. **Cron Daemon:** The cron daemon, often called `cron`, is a background process that continuously checks the system's crontab files for scheduled tasks. It is responsible for executing these tasks at the specified times.

4. **Crontab Files:** Each user who wants to schedule cron jobs has a crontab file. These files are typically located in `/var/spool/cron/crontabs/` on many Unix-like systems. Users can use the `crontab` command to edit and manage their own cron jobs.

Common use cases for cron include:

- Running backup scripts at regular intervals.
- Cleaning up log files and temporary data.
- Automating system maintenance tasks.
- Sending scheduled reports or notifications.
- Updating database records periodically.

Cron is a powerful and flexible tool for automating recurring tasks on Unix-based systems. However, it's essential to be cautious when scheduling jobs to ensure they don't interfere with critical system operations or overload the system with too many concurrent tasks.

To manage cron jobs in PHP, you can use the `cron` functionality available on Unix-like operating systems (such as Linux) in combination with PHP scripts. Cron jobs are typically managed at the system level, and you can schedule PHP scripts to run periodically using cron. Here are the steps to manage cron jobs in PHP:

1. **Create a PHP Script:**
   
   First, create the PHP script that you want to run periodically. For example, let's say you have a PHP script named `my_script.php` that you want to run every day.

   ```php
   <?php
   // my_script.php

   echo "This is a PHP script running as a cron job.\n";
   // Add your PHP code here.
   ?>
   ```

2. **Open the Crontab Configuration:**
   
   To manage cron jobs, you need to edit the crontab configuration. You can do this for your user by running the following command in the terminal:

   ```bash
   crontab -e
   ```

   This command opens your user's crontab file in the default text editor.

3. **Schedule the Cron Job:**
   
   In your crontab file, add a line to schedule the execution of your PHP script. The syntax for scheduling a cron job is as follows:

   ```
   * * * * * command_to_execute
   ```

   - The five asterisks represent the schedule for the cron job (minute, hour, day of the month, month, day of the week).
   - `command_to_execute` is the command that runs your PHP script.

   To run your PHP script `my_script.php` every day at a specific time (e.g., 3:30 PM), you can add the following line:

   ```bash
   30 15 * * * php /path/to/my_script.php
   ```

   - `30` represents the minute (30).
   - `15` represents the hour (3:00 PM).
   - `*` for the day of the month and month means "every day."
   - `*` for the day of the week means "any day of the week."
   - `php` is the command to execute PHP.
   - `/path/to/my_script.php` is the absolute path to your PHP script.

4. **Save and Exit:**

   Save the changes in your crontab file and exit the text editor.

5. **Verify and Manage Cron Jobs:**
   
   You can list your scheduled cron jobs by running:

   ```bash
   crontab -l
   ```

   To remove a cron job, you can edit your crontab file (`crontab -e`) and remove the line corresponding to the job you want to delete.

That's it! Your PHP script will now run as a cron job according to the schedule you specified. You can adjust the scheduling and add more PHP scripts to your crontab file as needed for your specific use cases.

To add a cron job within a Docker container, you'll typically follow these steps:

1. **Create a Docker Container:**
   
   First, you need a Docker container where you want to add the cron job. You can either use an existing container or create a new one using a Dockerfile that defines your application environment.

2. **Install a Cron Daemon:**
   
   In the Dockerfile or within your container, install a cron daemon. The specific steps depend on the base image you are using. For example, if you are using a Debian-based image, you can install `cron` using `apt-get`. Here's an example Dockerfile snippet:

   ```Dockerfile
   # Use a base image (e.g., Debian)
   FROM debian:bullseye-slim

   # Install cron
   RUN apt-get update && apt-get install -y cron
   ```

3. **Create a Cron File:**
   
   Inside your container, create a cron file that contains the schedule and the command you want to run. This file typically goes in the `/etc/cron.d/` directory. For example, create a file named `my-cron-job`:

   ```bash
   # /etc/cron.d/my-cron-job

   # Schedule the cron job to run every day at 2:30 AM
   30 2 * * * root /path/to/your/script.sh
   ```

   In this example, the cron job runs a script located at `/path/to/your/script.sh` every day at 2:30 AM.

4. **Make the Script Executable:**
   
   If you are running a script, make sure it is executable within the container. You can do this using the `chmod` command:

   ```Dockerfile
   RUN chmod +x /path/to/your/script.sh
   ```

5. **Start the Cron Daemon:**
   
   In your Dockerfile or when starting the container, ensure that the cron daemon is started. This can typically be done using the `cron` command:

   ```Dockerfile
   CMD ["cron", "-f"]
   ```

   This keeps the cron daemon running as the main process in your container.

6. **Build and Run the Docker Container:**
   
   Build your Docker image and run a container based on that image:

   ```bash
   docker build -t my-cron-container .
   docker run -d my-cron-container
   ```

   Your cron job should now be scheduled within the Docker container and executed based on the specified schedule.

Remember that when working with Docker containers, it's important to consider persistence and data management for any files or data generated or used by your cron job. Depending on your use case, you may need to mount volumes, use a database, or configure data storage as needed.

Additionally, make sure to monitor your cron jobs and container logs to ensure they are running as expected.