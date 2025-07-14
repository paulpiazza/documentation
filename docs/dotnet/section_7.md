---
title: Libraries
description: .NET framework
order: 7
---

Got it! I'll use only markdown headlines for structuring my responses. Here's a revised explanation:

# Class of Libraries in .NET

## Base Class Library (BCL)
The **Base Class Library (BCL)** provides the core functionality required for .NET applications. It includes fundamental types, utilities, and classes that are essential for any .NET program. These libraries are lightweight and cross-platform.

### Key Features
- Fundamental types like `String`, `Int32`, `DateTime`, and more.
- File I/O operations, threading, networking, and security support.
- Available across all .NET implementations.

### Common Namespaces
- `System`: Core types like `String`, `Int32`, and basic utilities.
- `System.IO`: Classes for file and stream handling.
- `System.Net`: Networking capabilities like `HttpClient` and `HttpWebRequest`.
- `System.Threading`: Support for multithreading and parallel programming.
- `System.Collections`: Collection types like `ArrayList`, `Hashtable`, etc.
- `System.Linq`: LINQ for querying collections.
- `System.Text`: Text manipulation classes like `StringBuilder`.

## Framework Class Library (FCL)
The **Framework Class Library (FCL)** builds on the BCL and provides additional functionality for specific types of applications. It includes libraries for database access, web development, desktop applications, and more.

### Key Features
- Advanced functionality for web, desktop, and other applications.
- Includes libraries for working with databases, graphics, and XML.

### Common Libraries
- `System.Data`: Classes for database interaction (e.g., ADO.NET).
- `System.Xml`: XML parsing and manipulation.
- `System.Drawing`: Graphics, images, and font handling.
- `System.Web`: Web application development (ASP.NET).
- `System.Windows.Forms`: Windows desktop applications.
- `System.ServiceModel`: Web services and WCF.

## Specialized Libraries in .NET
.NET also provides libraries for modern application development and specialized use cases.

### ASP.NET Core
A framework for building web applications and APIs. Common namespaces include:
- `Microsoft.AspNetCore.Http`
- `Microsoft.AspNetCore.Mvc`

### Entity Framework Core (EF Core)
An object-relational mapper (ORM) for working with databases. Namespace:
- `Microsoft.EntityFrameworkCore`

### Windows Presentation Foundation (WPF)
A library for building modern, visually rich desktop applications. Namespace:
- `System.Windows`

### Xamarin/MAUI
Libraries for cross-platform mobile and desktop applications. Namespace:
- `Microsoft.Maui`

### ML.NET
A machine learning framework for .NET applications. Namespace:
- `Microsoft.ML`

## Third-Party Libraries
In addition to built-in libraries, you can use third-party libraries via **NuGet**, the .NET package manager.

### Popular Libraries
- `Newtonsoft.Json`: JSON serialization and deserialization.
- `Serilog`: Logging framework.
- `Dapper`: Lightweight ORM for database access.
- `AutoMapper`: Simplifies object mapping.
- `Hangfire`: Background job scheduling.

## Classification by Application Type
.NET libraries can also be categorized based on the type of application you're building:

### Web Applications
- ASP.NET Core libraries (`Microsoft.AspNetCore.*`)

### Desktop Applications
- Windows Forms (`System.Windows.Forms`)
- WPF (`System.Windows`)

### Mobile Applications
- Xamarin/MAUI libraries (`Microsoft.Maui.*`)

### Cloud Applications
- Azure SDKs (`Microsoft.Azure.*`)

### Data Applications
- Entity Framework Core (`Microsoft.EntityFrameworkCore`)
- ADO.NET (`System.Data`)

### Game Development
- Unity libraries (third-party libraries for .NET).

## Using Libraries in .NET

### Built-In Libraries
You can use built-in libraries by importing the required namespace:
```csharp
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```

### Adding External Libraries
To use third-party libraries, install them via NuGet:
1. Add the package:
   ```bash
   dotnet add package Newtonsoft.Json
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Use the library in your code:
   ```csharp
   using Newtonsoft.Json;

   class Program
   {
       static void Main(string[] args)
       {
           var json = JsonConvert.SerializeObject(new { Name = "John", Age = 30 });
           Console.WriteLine(json);
       }
   }
   ```

## Summary
.NET libraries are categorized into:
- **Base Class Library (BCL):** Core functionality like `System`, `System.IO`, and `System.Text`.
- **Framework Class Library (FCL):** Advanced features like `System.Web`, `System.Data`, and `System.Drawing`.
- **Specialized Libraries:** Modern frameworks like ASP.NET Core, EF Core, and Xamarin/MAUI.
- **Third-Party Libraries:** Extend functionality via NuGet.

These libraries make .NET a versatile and powerful framework for building a wide range of applications. Let me know if you'd like to explore any specific library in more detail!