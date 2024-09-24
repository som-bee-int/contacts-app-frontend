# Contacts Management Application

This project is an Angular-based frontend for a Contacts Management System. It provides a user-friendly interface for creating, reading, updating, and deleting contact information.

## Setup Instructions

1. Ensure you have Node.js and npm installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install all dependencies.

## Running the Application

1. Start the development server by running:
   ```
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.
3. The application will automatically reload if you change any of the source files.

## Building for Production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Application Structure and Design Decisions

### Component Structure

- **ContactListComponent**: The main component that displays the list of contacts and handles the overall CRUD operations.
- **ContactFormComponent**: A reusable form component for creating and editing contacts.

### Services

- **ContactService**: Manages HTTP requests to the backend API for contact operations.

### Models

- **Contact**: Defines the structure of a contact object.

### Pipes

- **CapitalizePipe**: A custom pipe for capitalizing the first letter of names.

### Design Decisions

1. **Modular Structure**: The application is built with a modular structure, separating concerns between components, services, and models. This improves maintainability and scalability.

2. **Reactive Forms**: We use Angular's Reactive Forms for handling form inputs, providing better control over form validation and data manipulation.

3. **Observable Pattern**: The application leverages RxJS Observables for handling asynchronous operations, particularly in the ContactService.

4. **Modal for Forms**: Contact creation and editing are handled through a modal, providing a clean user interface without navigating away from the main list.

5. **Standalone Components**: We've utilized Angular's standalone components feature, reducing the need for NgModules and simplifying the overall application structure.

6. **Custom Pipe**: A custom CapitalizePipe is used to ensure consistent formatting of names in the contact list.

7. **Bootstrap Integration**: Bootstrap is integrated for responsive design and pre-styled components, speeding up development and ensuring a consistent look and feel.

8. **Error Handling**: Basic error handling is implemented in the service layer, with errors logged to the console. In a production environment, this could be extended to provide user-friendly error messages.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.