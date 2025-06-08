const express = require('express');
    const cors = require('cors');
    const dotenv = require('dotenv');
    const connectDB = require('./config/database');
    const authRoutes = require('./routes/authRoutes');
    const postRoutes = require('./routes/postRoutes');
    const errorMiddleware = require('./middleware/errorMiddleware');

    dotenv.config();
    const app = express();

    // Middleware
    app.use(cors({ origin: 'http://localhost:3000' }));
    app.use(express.json());

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/posts', postRoutes);

    // Error Handling
    app.use(errorMiddleware);

    // Connect to Database
    connectDB();

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));