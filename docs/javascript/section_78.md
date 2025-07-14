---
title: Role-Based Access Control
description: Slim notes.
order: 78
---

Learn the principles of Role-Based Access Control, a powerful and useful way of handling privileges.

### What We’ll Be Learning

Role-Based Access Control (RBAC) is a way of managing permissions using roles. It is very widely used, showing up in applications, operating systems, and even physical security. In this lesson, we’ll learn how RBAC works and why it’s so widely used, and design our own example system.

### RBAC Fundamentals

#### What Are Roles?

As the name suggests, roles are a core part of Role-Based Access Control. A _role_ serves as an layer between permissions and users; rather than permissions being granted directly to users, permissions are granted to roles, and then users are assigned roles as appropriate.

For example, let’s say that employees should be able to view their own information within an HR database. Assuming all employees are assigned an `employee` role, we can add that specific permission to the `employee` role, and all members of that role will then have that permission. If we want members of the HR department to be able to view the full database, we can grant that permission to the `HR` role specifically. Users can have more than one role, so people working in the HR department have the `employee` and `HR` roles.

![An image showing a venn diagram. HR contractors have the hr role, Employees have the employee role, and HR Employees are in the middle of the venn diagram, showing they have the hr and employee roles.](https://static-assets.codecademy.com/content/paths/web-security/rbac/RBAC-HR-Employee-Venn-Diagram-light-v2.svg)

#### Why Do We Use RBAC?

Roles are great for keeping permissions organized, especially in large organizations. Rather than trying to manually track and update permissions for every user, you can just manage permissions for roles. For example, if an organization gets a new piece of software that all employees will need to use, they can just add permission to run that software to their `employee` role. If only the accounting department needs to use it, then permission can just be granted to the `accounting` role.

Without RBAC, updating permissions can be a tedious and error-prone process, opening the door to issues like Broken Access Control.

![An image showing a long list of over seventy employees that need privileges updated on the left side. On the right side, we see that, using Role-Based Acess Control, we only need to update four roles: Employees, HR, Contractors, Managers.](https://static-assets.codecademy.com/content/paths/web-security/rbac/RBAC-Makes-Things-Easier.svg)

Multiple choice

Which of the following is NOT a reason we might _specifically_ choose RBAC over another type of access control?

Roles are a good tool to organize user accounts.

It makes it easy to update permissions for lots of users.

It helps prevent human error when updating permissions for lots of users.

It stops users from having dangerous levels of access.

#### The Principle of Least Privilege

The Principle of Least Privilege is another important principle for RBAC, and access control in general! Essentially, the principle says that users should have only the permissions necessary to accomplish their tasks, and no more. For example, most users within an organization won’t need access to their computer’s terminal and therefore should not be able to access it.

The principle of least privilege often goes hand-in-hand with _default-deny_ schemas, where privileges are denied by default and must be explicitly granted to be used.

Multiple choice

Which of these statements would be true in an organization that follows the principle of least privilege?

The least commonly assigned privilege is always the most important.

Privileges should be granted to the fewest users possible.

High-ranking members of an organization should have more privileges.

The least privileged user should have no privileges.

### Designing RBAC

While the specific permissions available can vary wildly depending on what a RBAC scheme is applied to, the basic idea is the same, whether applied to an operating system, database, website, etc.

Let’s imagine we’re designing RBAC for a school computer lab. What would that look like?

#### The Roles

We need to consider the types of roles we will want. First, we need to make a list of the types of users and groups that exist.

Types of Users:

- Students
- Teachers

The first and most obvious role we’ll want is for `students`. We’ll also probably want a role for `teachers`.

Depending on what classes the lab will be used for, we may also want class-specific roles. In this case, let’s say that in addition to general use, the lab will also be used by a programming class.

Types of Groups:

- General Classwork
- Programming Classwork

We’ll add a `programming` role since the students and teacher will need additional permissions to carry out programming-specific lessons.

Are we missing anything? Don’t forget less obvious tasks and roles: finally, we’ll want an `admin` role, for the school’s IT department.

### The Permissions

Assuming we implement default-deny, users won’t be able to do much once they login. We’ll need to think carefully about what we want to allow users to do. From a security perspective, computer labs are dangerous, so we’ll want to keep things fairly locked down.

- `student`s will need access to word-processing software for writing and taking notes, and a web browser for conducting research. Students may need to transfer files to or from the computer, and the school has decided to support this using thumb drives, so we’ll enable USB ports, making sure to prevent any programs from being autorun.
- `teacher`s will need access to word processing software and a web browser like students. They’ll also need access to presentation/slideshow software and image-editing software.
- The `programming` role will grant access to the virtual environment used by the programming course. Letting people write and run programs directly on the computer is risky, and can allow access control to be circumvented, so sandboxed environments are the way to go.
- The `admin` role will enable various permissions required for maintaining the lab, installing and updating software, fixing computer problems, etc. They need access to everything so can manage permissions for all software as well as diagnose and fix issues students and teacher might be having.

![An image with a table showing the privileges we gave each role in the RBAC system designed in the article.](https://static-assets.codecademy.com/content/paths/web-security/rbac/RBAC-School-Checklist-light-v2.svg)

#### Finishing Touches

RBAC isn’t usually a static system. As new needs arise and old needs are phased out, roles may be added or removed, and permissions may be granted or revoked. It may be discovered that students need permission to use image-editing software for class projects, or teachers need permission to view the screen of students’ computers.

It’s almost impossible to get everything right the first time, but having a solid foundation and sticking to the concepts of RBAC and the principle of least privilege will help ensure that the system remains effective and maintainable well into the future.

### Creating a RBAC System in a Small Business

In this exercise, you’ll plan out a Role-Based Access Control (RBAC) system.

#### Creating a RBAC System in a Small Business

You’ve been contracted by a small auto-repair shop to help modernize the access control system for their computers. The previous system worked by assigning permissions directly, but the shop has grown and has a new location opening soon, so the current system is no longer scalable.

![An image showing an auto repair shop with tools and a car inside as well as friendly inflatable, flailing tube people in the front.](https://static-assets.codecademy.com/content/paths/web-security/rbac/RBAC-Project-Car-Shop.svg)

Ali, the shop IT tech, has compiled some lists of relevant information for you regarding employees and permissions currently in use. He isn’t familiar with Role-Based Access Control, so the owners want you to show him the basics so that he can maintain the system once it’s created.

##### Creating Roles

The first list Ali has for you is a list of employees, and the work they do for the shop.

**Mechanics**: Josue, Rory, and Jackie

- Complete work on vehicles based on work orders and update work orders.

**Inventory Manager**: Paola

- Manages inventory database.
- Orders new parts when stock runs low or a special part is required.

**Cashiers**: Dahlia and Ria

- Check out customers, both for in-store purchases and vehicle repair bills.
- Answer questions about which parts the store has in stock and whether or not work on a car is finished.

**HR**, **Payroll**, and **Billing**: Gladys

- Manages time-tracking and payroll software.
- Makes sure invoices are sent and received invoices are paid on time.
- Makes sure that supply orders are paid for.

**IT**: Ali

- Updates shop computers.
- Handles software installation and troubleshooting.

Free response

Based on this list of employees, create a list of roles you would add to your RBAC system.

Include a 1-2 sentence explanation for each role you are choosing to create.

Submit Response

Stuck? Get a Hint

##### Assigning Permissions

The second list Ali gives you is a list of all the permissions that are currently in use in the shop. Some of the permissions have sub-permissions, like reading vs writing or personal vs administrative access.

- **Work Orders**: Access to the work orders for vehicles.
    - View Access: View the work orders.
    - Edit Access: Create and edit work orders.
- **Point-Of-Sale (POS) Terminal Access**: Access to the cash registers.
- **Inventory Database**: Access to the inventory database for parts, tools, etc.
    - Read Access: View the database.
    - Write Access: Edit the database.
- **Supply Orders**: Access to the supply order system.
    - View Access: See what supply orders have been placed, and their statuses.
    - Create Access: Create new supply orders, and send them to the supplier.
- **Time Tracking Software**: Software used by the employees to clock in and out.
    - Personal Access: Used to clock in and out.
    - Administrative Access: View and edit information for all employees.
- **Payroll Software**: Software used to handle payroll for the employees.
    - Personal Access: Access to personal information like bank account details.
    - Administrative Access: Access to information and salary for all employees.
- **Administrative Computer Access**: Administrative access to the computers throughout the shop.
- **Invoice Software**: Access to the software used to create and pay invoices.

Free response

For each of the roles you created, assign that role the relevant permissions.

Submit Response

Stuck? Get a Hint

Free response

Assign each employee the role(s) they would have in the finished system.

Remember, the employees are:

- Ali
- Dahlia
- Gladys
- Jackie
- Josue
- Paola
- Ria
- Rory

Submit Response

Stuck? Get a Hint

##### Testing

Now that you’ve created your roles and assigned them to users, it’s time to make sure your system will work. Below is a checklist you can use to evaluate your system, making changes as necessary.

In your RBAC system, does everyone have personal access to the time-tracking and payroll software? (Click to Toggle Correct Answer)

  
In your RBAC system, do Josue, Rory, and Jackie have the ability to view and edit work orders? (Click to Toggle Correct Answer)

  
In your RBAC system, does Paola have Read/Write permissions for the inventory databases as well as the ability to view and create supply orders? (Click to Toggle Correct Answer)

  
In your RBAC system, do Dahlia and Ria have POS access, and the ability to read the inventory database and view work orders? (Click to Toggle Correct Answer)

  
In your RBAC system, do Josue, Rory, and Jackie have access to the Invoice Software? (Click to Toggle Correct Answer)

  
In your RBAC system, does Ali have administrative computer access? (Click to Toggle Correct Answer)

  
Would your system allow a new HR employee to have administrative access to the time tracking software, without granting them administrative access to the billing or payroll software? (Click to Toggle Correct Answer)


### Autentification and authorization in Postgres


Authentication and authorization are fundamental aspects of database security and user management in PostgreSQL. Let's break down these concepts:

#### Authentication

Authentication is the process of verifying the identity of a user or process. In PostgreSQL, authentication is handled primarily through the `pg_hba.conf` file, which stands for "PostgreSQL Host-Based Authentication."

**Host-Based Authentication (HBA):**

- PostgreSQL uses this file to determine the authentication methods that must be used when a connection request is received.
- The `pg_hba.conf` file contains records, each specifying a connection type, a client IP address range, a database, a user, and the authentication method.
- Authentication methods include trust, reject, md5, password, gss, sspi, krb5, ident, peer, pam, ldap, radius, cert, and others.

**Example of a pg_hba.conf entry:**

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             192.168.1.0/24          md5
```

This entry specifies that any user from the IP range `192.168.1.0/24` must authenticate using md5 when trying to access any database.

#### Authorization

Authorization in PostgreSQL is about granting permissions to a database user to access or manipulate certain database objects.

**User and Role Management:**

- PostgreSQL manages database access permissions using the concept of roles. A role can be thought of as either a user or a group.
- Users are roles with login privileges. Roles without login privileges are similar to groups.
- Roles can own database objects (like tables and functions) and can assign privileges on those objects to other roles.

**Creating a Role:**

```sql
CREATE ROLE username WITH LOGIN PASSWORD 'password';
```

**Granting Privileges:**

```sql
GRANT SELECT ON my_table TO username;
```

This command allows the `username` role to perform SELECT operations on `my_table`.

#### Server Configuration

The main server configuration file for PostgreSQL is `postgresql.conf`. This file includes settings that affect the behavior of all aspects of the PostgreSQL server, including authentication and authorization mechanisms.

For instance, you might need to configure:

- Connection settings such as `listen_addresses` and `port`.
- SSL settings if you want to use SSL connections.
- Password encryption settings (`password_encryption`).

**Example: Enabling SSL connections**

```plaintext
ssl = on
ssl_cert_file = '/path/to/server.crt'
ssl_key_file = '/path/to/server.key'
```

When you change configurations in `postgresql.conf`, you typically need to reload or restart the PostgreSQL server for changes to take effect.

#### Security Best Practices

- Always encrypt passwords using strong cryptographic functions (e.g., SCRAM-SHA-256 in newer versions of PostgreSQL).
- Limit access by IP address and use SSL for connections to ensure data is encrypted in transit.
- Regularly update privileges and remove unnecessary permissions.
- Use roles and group membership effectively to manage permissions across multiple users.

Remember to secure both `pg_hba.conf` and `postgresql.conf` files by restricting access to them using file system permissions and keeping backups of these critical configuration files.

### Managing env var and API keys, files

In a Node.js Express project, managing environment variables (env vars) and API keys is crucial for security and configuration. Environment variables allow you to keep sensitive information, like API keys and database passwords, out of your source code. This is important for preventing sensitive data from being exposed, especially if your code is stored in a public repository.

Here's how to manage environment variables and API keys in a Node.js Express project:

#### Environment Variables

Environment variables are often defined outside of the application in a system or process level. In a development environment, you might set environment variables in your shell before running your application:

```bash
export DATABASE_PASSWORD=yourpassword
```

In a production environment, these would likely be set in the configuration for whatever deployment solution you are using.

#### `.env` Files

For local development, it's common to use a `.env` file in the root of your project. This file can be loaded at the start of your application to set environment variables.

First, install the `dotenv` package:

```bash
npm install dotenv
```

Then, at the top of your main `app.js` or `server.js` file, require and configure `dotenv`:

```javascript
require('dotenv').config();
```

Now you can create a `.env` file in the root of your project with your environment variables:

```
DATABASE_PASSWORD=yourpassword
API_KEY=someapikeyvalue
```

In your application code, you can then access these variables using `process.env`:

```javascript
const dbPassword = process.env.DATABASE_PASSWORD;
const apiKey = process.env.API_KEY;
```

#### API Keys

API keys are sensitive and should never be hard-coded into your application's source code. Instead, they should be stored as environment variables as shown above.

#### Security Considerations

- **Never commit `.env` files or any sensitive credentials to source control.** You should add `.env` to your `.gitignore` file to ensure it doesn't get committed to Git.
- Use different keys for development, testing, and production.
- Regularly rotate your keys to minimize the impact of a key getting compromised.
- Use environment-specific configuration files or mechanisms provided by your hosting provider or CI/CD pipeline to set environment variables in production.

#### Example Usage

Here is how you might use an API key stored as an environment variable in an Express route:

```javascript
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

In this example, an API key is used to authorize a request to an external API. The key is read from the environment variables which `dotenv` has loaded from the `.env` file.

By managing your environment variables and API keys this way, you can keep your configuration and sensitive information secure while maintaining the flexibility to change these settings without code changes.


