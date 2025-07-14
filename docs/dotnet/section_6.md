---
title: Install DotNet on your Debian
description: .NET framework
order: 6
---

## Install .NET SDK on Debian

### Add Microsoft Package Repository
1. Open a terminal on your Debian system.
2. Add the Microsoft package signing key:
   ```bash
   wget https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
   sudo dpkg -i packages-microsoft-prod.deb
   ```
   Replace `11` with your Debian version if you're using a different one (e.g., `10` for Buster).

3. Update the package index:
   ```bash
   sudo apt update
   ```

### Install .NET SDK
Install the .NET SDK, which includes tools to build and run .NET applications:
```bash
sudo apt install -y dotnet-sdk-7.0
```
Replace `7.0` with the version you need (e.g., `6.0` for LTS).

### **c) Verify Installation**
Run the following command to check the installed .NET version:
```bash
dotnet --version
```

## Install Visual Studio Code

### Download VS Code
1. Go to the [VS Code Download Page](https://code.visualstudio.com/Download).
2. Select the `.deb` package for Debian-based distributions.

### Install VS Code
Once downloaded, install the `.deb` package:
```bash
sudo dpkg -i code_*.deb
sudo apt --fix-broken install
```

Alternatively, you can install VS Code from the repository:
```bash
sudo apt update
sudo apt install -y software-properties-common apt-transport-https
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install -y code
```

### Install the C# Extension
1. Open VS Code.
2. Go to the Extensions View (`Ctrl+Shift+X`).
3. Search for **C#** (provided by Microsoft) and install it.

## Create and Run a C# Project

### Create a New Project
1. Open a terminal and create a new project using the `dotnet` CLI:
   - Console App:
     ```bash
     dotnet new console -o MyConsoleApp
     ```
   - Web API:
     ```bash
     dotnet new webapi -o MyWebAPI
     ```
   - MVC Web App:
     ```bash
     dotnet new mvc -o MyMvcApp
     ```

2. Navigate to the project directory:
   ```bash
   cd MyConsoleApp
   ```

### Open the Project in VS Code
1. Open the project folder in VS Code:
   ```bash
   code .
   ```
2. When prompted by VS Code, click **Yes** to add required assets for building and debugging.

### Run the Application
1. Build the project:
   ```bash
   dotnet build
   ```
2. Run the project:
   ```bash
   dotnet run
   ```

## Debugging in VS Code

1. Open the **Run and Debug** view (`Ctrl+Shift+D`).
2. Click **Create a launch.json file** if it hasn’t been created yet.
3. Select `.NET Core` as the environment.
4. Press `F5` to start debugging your application.


## Installing NuGet Packages

To add external libraries to your project:
1. Use the `dotnet add package` command. For example:
   ```bash
   dotnet add package Newtonsoft.Json
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```

## Common Commands for .NET Development

Here are some useful commands you'll use frequently:
- **Create a New Project**:
  ```bash
  dotnet new <template> -o <project-name>
  ```
  Replace `<template>` with `console`, `webapi`, `mvc`, etc.
  
- **Build the Project**:
  ```bash
  dotnet build
  ```

- **Run the Project**:
  ```bash
  dotnet run
  ```

- **Add a NuGet Package**:
  ```bash
  dotnet add package <package-name>
  ```

- **Restore Dependencies**:
  ```bash
  dotnet restore
  ```

- **Run Unit Tests** (if you have a test project):
  ```bash
  dotnet test
  ```

## Tips for Debian

- **Ensure Permissions**: If you encounter permission issues, use `sudo` where necessary.
- **Install Dependencies**: If you face missing dependency errors, run:
  ```bash
  sudo apt --fix-broken install
  ```
- **Use Terminal for Efficiency**: The `dotnet` CLI is very powerful and allows you to manage projects, build, run, and test applications directly from the terminal.
