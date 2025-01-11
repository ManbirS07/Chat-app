Using Zustand instead of normal useState provides several advantages, especially when dealing with global state management in a React application. Here are some reasons why Zustand might be preferred in this context:

Global State Management: Zustand allows you to create a global store that can be accessed and updated from any component in your application. This is useful for managing state that needs to be shared across multiple components, such as a conversation between two users.

Simplified State Management: Zustand provides a simple and minimalistic API for state management. It avoids the boilerplate and complexity associated with other state management libraries like Redux.

Performance: Zustand is designed to be performant. It uses shallow comparison to minimize re-renders and provides a way to subscribe to specific parts of the state, reducing unnecessary updates.

Ease of Use: Zustand is easy to set up and use. It doesn't require a lot of configuration or setup, making it a good choice for small to medium-sized applications.

Decoupling State Logic: By using Zustand, you can decouple state logic from your components. This makes your components more focused on rendering and less on managing state, leading to cleaner and more maintainable code.