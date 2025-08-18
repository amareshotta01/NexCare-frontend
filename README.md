# NexCare Frontend

This is the frontend for NexCare, a modern healthcare platform designed to connect patients with doctors seamlessly. It provides a comprehensive solution for booking appointments, managing user and doctor profiles, and real-time communication.

**Live Application**: [https://nex-care.vercel.app/](https://nex-care.vercel.app/)

**Backend Repository**: [amareshotta01/NexCare-backend](https://github.com/amareshotta01/NexCare-backend)

## Key Features

*   **User & Doctor Authentication**: Secure registration and login for both patients and doctors.
*   **Dual Dashboards**: Separate, feature-rich dashboards for patients and doctors.
    *   **Patient Dashboard**: View booking history, manage profile settings.
    *   **Doctor Dashboard**: Manage appointments, update profile information, set availability (qualifications, experiences, time slots).
*   **Doctor Discovery**: Search and filter doctors by name or specialization.
*   **Appointment Booking**: Intuitive appointment booking system with integrated Stripe for payments.
*   **Real-time Chat**: Integrated chat powered by Stream for instant communication between patients and their doctors.
*   **Feedback System**: Patients can leave reviews and ratings for doctors.
*   **Responsive Design**: A clean, modern, and fully responsive user interface built with Tailwind CSS.

## Tech Stack

*   **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **State Management**: [React Context API](https://react.dev/reference/react/useContext)
*   **Real-time Chat**: [Stream Chat](https://getstream.io/chat/)
*   **Payment Gateway**: [Stripe](https://stripe.com/)
*   **HTTP Client**: [Axios](https://axios-http.com/)
*   **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
*   **Image Management**: [Cloudinary](https://cloudinary.com/)
*   **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

The codebase is organized into a modular structure to ensure maintainability and scalability.

```
src/
├── App.jsx             # Main application component
├── ChatApp/            # Components for the Stream Chat implementation
├── assets/             # Static assets like images and data files
├── components/         # Reusable UI components (Header, Footer, Cards, etc.)
├── context/            # Global state management (AuthContext)
├── dashboard/          # Doctor and User dashboard components
├── hooks/              # Custom hooks (e.g., useFetchData)
├── layout/             # Main layout component
├── pages/              # Top-level page components (Home, Login, Doctors, etc.)
├── routes/             # Application routing logic (ProtectedRoute, Routers)
└── utils/              # Utility functions (date formatting, API calls)
```

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/amareshotta01/NexCare-frontend.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd NexCare-frontend
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. You will need to obtain these from their respective services.

```env
VITE_UPLOAD_PRESET="your_cloudinary_upload_preset"
VITE_CLOUD_NAME="your_cloudinary_cloud_name"
VITE_STREAM_API_KEY="your_stream_api_key"
```

The backend API endpoint is configured in `src/config.js`. By default, it points to the deployed backend. You may change this to your local backend instance if needed.

### Running the Application

Once the dependencies are installed and the environment variables are set, you can run the development server:

```sh
npm run dev
```

This will start the application on `http://localhost:5173`.
