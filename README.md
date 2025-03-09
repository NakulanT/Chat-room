# Anonymous Chat Room README

## Overview
The Anonymous Chat Room is a web-based application designed for real-time, anonymous group chatting. Built with React JS, it uses Firebase Firestore to store and sync chat messages across users. The app allows users to either create a chat room with a unique room ID and password or join an existing room using the same credentials. Once inside a room, multiple users can exchange messages anonymously, identified only by auto-generated or temporary identifiers.

This project provides a simple and secure platform for group communication without requiring personal user authentication.

---

## Features
- **Room Creation:** Create a chat room with a unique room ID and password.
- **Room Joining:** Join an existing room by providing its room ID and password.
- **Real-Time Chat:** Enables multiple users to send and receive messages instantly within a room.
- **Anonymous Messaging:** No personal user authentication; users chat anonymously.
- **Responsive UI:** Built with React JS for a dynamic and intuitive interface.

---

## Prerequisites
To run this project, ensure you have the following installed:
1. **Node.js** (v14+ recommended)
2. **npm** (Node Package Manager, comes with Node.js)
3. **Firebase Account** (for Firestore setup)

### Installation
1. Clone or download this repository:
   ```
   git clone https://github.com/NakulanT/Chat-room.git
   cd Chat-room
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
   Dependencies (from package.json):
   - `firebase`: For Firestore integration.
   - `react`, `react-dom`: Core React libraries.
   - `react-router-dom`: For routing between pages (if applicable).

3. Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com/.
   - Enable Firestore in the Firebase console.
   - Copy your Firebase configuration into `src/firebase.js` (or equivalent file):
     ```javascript
     import { initializeApp } from "firebase/app";
     import { getFirestore } from "firebase/firestore";

     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-sender-id",
       appId: "your-app-id"
     };

     const app = initializeApp(firebaseConfig);
     export const db = getFirestore(app);
     ```

4. Start the development server:
   ```
   npm start
   ```
   The app will run at `http://localhost:3000`.

---

## Usage
1. **Create a Room:**
   - Navigate to the "Create Room" section.
   - Enter a unique Room ID and a Room Password.
   - Submit to create the room and enter the chat interface.

2. **Join a Room:**
   - Navigate to the "Join Room" section.
   - Enter the Room ID and Room Password of an existing room.
   - Submit to join and start chatting.

3. **Chat:**
   - Once inside a room, type messages in the input field and send them.
   - Messages appear in real-time for all users in the room.


## Methodology
The application operates with the following workflow:

1. **Room Management:**
   - **Creation:** Stores the Room ID and hashed password in Firestore as a document. Creates a sub-collection for chat messages.
   - **Joining:** Validates the Room ID and password against Firestore data before granting access.

2. **Chat System:**
   - Uses Firestore to store messages in a room-specific collection with timestamps and anonymous sender IDs.
   - Listens for real-time updates to display new messages as they are added.

3. **UI Rendering:**
   - React components handle the display of room entry forms and the chat interface.
   - State management (e.g., useState, useEffect) syncs the UI with Firebase data.

