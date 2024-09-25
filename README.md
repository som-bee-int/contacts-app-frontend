# Contacts Management Application

## Overview

Hey there! This is a robust, user-friendly Angular-based frontend for our Contacts Management System. It offers a comprehensive interface for managing contact information, including features for creating, reading, updating, and deleting contacts, as well as searching through the contact list.

## Repository

[https://github.com/som-bee-int/contacts-app-frontend.git](https://github.com/som-bee-int/contacts-app-frontend.git)

## Prerequisites

Before diving in, make sure you've got these installed:
- Node.js (preferably the latest LTS version)
- npm (usually comes with Node.js)
- Angular CLI (install globally using `npm install -g @angular/cli`)

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/som-bee-int/contacts-app-frontend.git
   ```
   This will create a local copy of the project on your machine.

2. Navigate to the project directory:
   ```
   cd contacts-app-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```
   This command reads the `package.json` file and installs all necessary dependencies for the project.

## Configuration

We've set up environment-specific configurations to make it easier to manage different settings between development and production. Here's how it works:

1. Navigate to the `src/environments` directory.
2. You'll find two files: `environment.ts` and `environment.prod.ts`.
3. The `environment.ts` file is used for development. It should look something like this:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://localhost:7162/api'
   };
   ```

4. Update the `apiUrl` to match the endpoint where your .NET Core backend is running. For example, if your backend is running on a different port, you might change it to:

   ```typescript
   apiUrl: 'https://localhost:7206/api'
   ```

5. The `environment.prod.ts` file is used for production builds. Make sure to set the correct production API URL in this file when you're ready to deploy.

By using these environment files, we can easily switch between development and production settings without changing our code.

## Running the Application

1. Start the development server:
   ```
   ng serve
   ```
   This command compiles the application and starts a development server.

2. Open your browser and navigate to `http://localhost:4200/`.
   The application will be running here. Any changes you make to the source files will automatically reload the application.

## Building for Production

To create a production build, run:
```
ng build --configuration production
```
This command compiles the application with production settings (using `environment.prod.ts`) and outputs the build artifacts to the `dist/` directory. These files can be deployed to a web server for production use.


## Application Structure and Design Decisions

### Component Structure

1. **ContactListComponent**: 
   - Purpose: Serves as the main component of the application.
   - Functionality: 
     - Displays the list of contacts
     - Handles search functionality
     - Manages the overall CRUD operations by interacting with other components and services

2. **ContactFormComponent**: 
   - Purpose: A reusable form component for contact information.
   - Functionality:
     - Used for both creating new contacts and editing existing ones
     - Implements form validation to ensure data integrity

### Services

**ContactService**: 
- Purpose: Acts as an intermediary between the frontend and the backend API.
- Functionality:
  - Manages HTTP requests for all contact operations (Create, Read, Update, Delete)
  - Implements error handling for API requests
  - Utilizes RxJS observables for efficient data management and real-time updates

### Models

**Contact**: 
- Purpose: Defines the data structure for a contact.
- Structure: Includes properties such as id, firstName, lastName, email, and isActive.

### Pipes

**CapitalizePipe**: 
- Purpose: A custom pipe for text formatting.
- Functionality: Capitalizes the first letter of names, ensuring consistent display throughout the application.

### Design Decisions

1. **Modular Structure**: 
   - The application is built with a modular approach, separating concerns between components, services, and models.
   - Benefits: Improves code maintainability, scalability, and allows for easier testing and future enhancements.

2. **Reactive Forms**: 
   - Angular's Reactive Forms are used for handling form inputs.
   - Benefits: Provides better control over form validation, dynamic form fields, and complex data manipulations.

3. **Observable Pattern**: 
   - RxJS Observables are extensively used, especially in the ContactService.
   - Benefits: Enables efficient handling of asynchronous operations and real-time data updates.

4. **Modal for Forms**: 
   - Contact creation and editing are handled through modal dialogs.
   - Benefits: Provides a clean user interface and eliminates the need for separate pages for these operations.

5. **Standalone Components**: 
   - Utilizes Angular's standalone components feature.
   - Benefits: Reduces the need for NgModules, simplifying the overall application structure and improving performance.

6. **Bootstrap Integration**: 
   - Bootstrap is integrated for styling and layout.
   - Benefits: Ensures responsive design, provides pre-styled components, and speeds up development.

7. **Error Handling**: 
   - Implements basic error handling in the service layer.
   - Current Implementation: Errors are logged to the console.
   - Future Enhancement: Can be extended to provide user-friendly error messages in the UI.

8. **Search Functionality**: 
   - Implements a dynamic search feature for filtering contacts.
   - Functionality: Allows users to quickly find contacts based on name or email.




## Further Help

For more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Happy coding! If you run into any issues or have questions, feel free to reach out.