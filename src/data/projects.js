const projects = [
  {
    id: "second-brain",

    title: "Second Brain",

    subtitle: "AI-Powered Knowledge Management Platform",

    description:
      "An AI-powered knowledge management application that allows users to create, organize, search, summarize, and ask questions about their personal notes.",

    longDescription:
      "Second Brain is a full-stack AI-powered note management platform built to help users organize their personal knowledge in one place. The application combines a React frontend with a FastAPI backend, MongoDB for data storage, JWT authentication for protected access, and AI-powered features for summarization and question answering.",

    category: "Full Stack • AI",

    featured: true,

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MongoDB",
      "JWT",
      "Axios",
    ],

    features: [
      "User Signup & Login",
      "JWT Authentication",
      "Protected Routes",
      "Create & Manage Notes",
      "Edit & Delete Notes",
      "Search Notes",
      "AI Note Summarization",
      "AI Question Answering",
    ],

    frontend: {
      name: "Frontend",
      github:
        "https://github.com/sheiknuman287/second-brain-frontend",
      live:
        "https://second-brain-frontend-five.vercel.app",
    },

    backend: {
      name: "Backend",
      github:
        "https://github.com/sheiknuman287/second-brain-backend",
      live:
        "https://second-brain-backend-jmp3.onrender.com",
    },

    screenshots: [
      "/images/projects/second-brain/landing.png",
      "/images/projects/second-brain/dashboard.png",
      "/images/projects/second-brain/summarize.png",
      "/images/projects/second-brain/ask-ai.png",
    ],
  },

  {
    id: "fake-news-detection",

    title: "Fake News Detection",

    subtitle: "Machine Learning • NLP Classification",

    category: "Machine Learning • NLP",

    description:
      "A machine-learning powered web application that classifies news text as REAL or FAKE using TF-IDF vectorization and Logistic Regression.",

    longDescription:
      "Fake News Detection is a full-stack machine learning application that analyzes news article text and predicts whether it resembles REAL or FAKE news based on patterns learned from the training data. The system uses TF-IDF text vectorization and a Logistic Regression classifier, with a Flask REST API serving predictions to a lightweight HTML, CSS, and JavaScript frontend.",

    featured: false,

    technologies: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "Flask",
      "TF-IDF",
      "Logistic Regression",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "News Article Text Input",
      "TF-IDF Text Vectorization",
      "Logistic Regression Classification",
      "REAL / FAKE Prediction",
      "Confidence Score",
      "Flask REST API",
      "Real-time Classification",
      "Simple Chatbot-style Interface",
    ],

    liveDemo:
      "https://sheiknuman287.github.io/fake-news-detection-frontend/",

    frontendGithub:
      "https://github.com/sheiknuman287/fake-news-detection-frontend",

    backendGithub:
      "https://github.com/sheiknuman287/Fake-News-Detection-Chatbot",

    screenshots: [
      {
        image: "/images/projects/fake-news/landing.png",
        title: "Fake News Detection Interface",
      },
      {
        image: "/images/projects/fake-news/fake-result.png",
        title: "FAKE Prediction",
      },
      {
        image: "/images/projects/fake-news/real-result.png",
        title: "REAL Prediction",
      },
    ],
  },

  {
    id: "sales-dashboard",

    title: "Sales & Profit Analysis Dashboard",

    subtitle: "Data Analytics • Interactive Dashboard",

    category: "Data Science • Business Analytics",

    description:
      "An interactive data analytics dashboard built with Python, Pandas, and Streamlit to analyze sales performance, profit trends, regional performance, and loss-making products.",

    longDescription:
      "Sales & Profit Analysis Dashboard is an interactive data analytics application designed to explore sales performance and profitability across different years, regions, categories, and products. The dashboard uses Python and Pandas for data processing, Streamlit for the interactive interface, and Plotly for dynamic visualizations. It provides KPI metrics, monthly sales trends, regional sales and profit comparisons, loss-making product analysis, and business insights.",

    featured: false,

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "Matplotlib",
      "Seaborn",
    ],

    features: [
      "Year Filtering",
      "Region Filtering",
      "Category Filtering",
      "Sales & Profit KPIs",
      "Monthly Sales Trend",
      "Region-wise Sales Analysis",
      "Loss-Making Product Analysis",
      "Business Insights",
    ],

    github:
      "https://github.com/sheiknuman287/sales-dashboard",

    screenshots: [
      {
        image:
          "/images/projects/sales-dashboard/dashboard-overview.png",
        title: "Dashboard Overview",
      },
      {
        image:
          "/images/projects/sales-dashboard/monthly-sales.png",
        title: "Monthly Sales Trend",
      },
      {
        image:
          "/images/projects/sales-dashboard/regional-analysis.png",
        title: "Region-wise Sales & Profit",
      },
      {
        image:
          "/images/projects/sales-dashboard/loss-products.png",
        title: "Loss-Making Products & Business Insights",
      },
    ],
  },

  {
    id: "ai-shop",

    title: "AI Shop",

    subtitle: "AI-Powered E-Commerce • Machine Learning",

    category: "AI • Machine Learning • Full Stack",

    description:
      "An AI-powered eCommerce web application built with Flask, Machine Learning, and Data Science, featuring product recommendations, customer behavior tracking, demand forecasting, and sales analytics.",

    longDescription:
      "AI Shop is a full-stack eCommerce web application that demonstrates how machine learning can be integrated into an online shopping platform. The application combines Flask for the backend, SQLite for data storage, TF-IDF and cosine similarity for product recommendations, customer behavior tracking, demand forecasting, and interactive analytics dashboards.",

    featured: false,

    technologies: [
      "Python",
      "Flask",
      "Flask-Login",
      "Flask-SQLAlchemy",
      "SQLite",
      "Scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
      "Pandas",
      "NumPy",
      "Chart.js",
      "Gunicorn",
      "Render",
    ],

    features: [
      "User Registration & Login",
      "Secure Password Hashing",
      "Product Listing",
      "Product Search",
      "Product Recommendations",
      "Customer Behavior Tracking",
      "Purchase Tracking",
      "7-Day Demand Forecasting",
      "Sales Analytics",
      "Product Demand Analytics",
      "Real-Time Dashboard",
      "Product Image Uploads",
    ],

    liveDemo:
      "https://ai-shop-ml.onrender.com",

    github:
      "https://github.com/sheiknuman287/AI-Shop-ML",

    screenshots: [
      {
        image:
          "/images/projects/ai-shop/analytics-overview.png",
        title: "Sales Analytics & Product Demand",
      },
      {
        image:
          "/images/projects/ai-shop/forecast.png",
        title: "7-Day Demand Forecast",
      },
      {
        image:
          "/images/projects/ai-shop/shop.png",
        title: "AI Shop Product Listing",
      },
      {
        image:
          "/images/projects/ai-shop/login.png",
        title: "User Login",
      },
      {
        image:
          "/images/projects/ai-shop/analytics.png",
        title: "Analytics Dashboard",
      },
      {
        image:
          "/images/projects/ai-shop/add-product.png",
        title: "Add Product",
      },
    ],
  },

  {
    id: "heart-disease",

    title: "Heart Disease Prediction System",

    subtitle: "Machine Learning • Healthcare Prediction",

    category: "Data Science • Machine Learning",

    description:
      "An end-to-end Data Science and Machine Learning web application that predicts the risk of heart disease based on clinical parameters.",

    longDescription:
      "Heart Disease Prediction System is an end-to-end machine learning application that analyzes clinical parameters and predicts the risk of heart disease. The system uses the UCI Heart Disease Dataset, StandardScaler for preprocessing, a classification model with probability output, and a Flask web interface. It also provides risk probability estimation and downloadable PDF medical reports.",

    featured: false,

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "StandardScaler",
      "Flask",
      "Gunicorn",
      "ReportLab",
      "Render",
    ],

    features: [
      "Heart Disease Prediction",
      "Risk Probability Estimation",
      "Clinical Parameter Input",
      "StandardScaler Preprocessing",
      "Machine Learning Classification",
      "Interactive Web Interface",
      "PDF Medical Report Generation",
      "Flask Web Application",
      "Render Deployment",
    ],

    liveDemo:
      "https://heart-disease-prediction-sys.onrender.com",

    github:
      "https://github.com/sheiknuman287/Heart-Disease-Prediction-System",

    screenshots: [
      {
        image:
          "/images/projects/heart-disease/prediction-form.png",
        title: "Heart Disease Prediction Interface",
      },
      {
        image:
          "/images/projects/heart-disease/prediction-result.png",
        title: "Prediction & Risk Probability",
      },
    ],
  },

  {
    id: "animal-detection",

    title: "Animal Detection Web App",

    subtitle: "Deep Learning • Computer Vision",

    category: "Deep Learning • Image Classification",

    description:
      "A TensorFlow and Flask-based image classification web application that detects Humans, Dogs, Cats, and Birds from uploaded images.",

    longDescription:
      "Animal Detection is a deep learning-based image classification web application built using TensorFlow and MobileNetV2. Users can upload an image and receive a prediction identifying whether the image contains a Human, Dog, Cat, or Bird through a lightweight Flask interface.",

    featured: false,

    technologies: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "Flask",
      "HTML",
      "CSS",
    ],

    features: [
      "Image Upload Detection",
      "Human Detection",
      "Dog Detection",
      "Cat Detection",
      "Bird Detection",
      "TensorFlow Image Classification",
      "MobileNetV2",
      "Flask Web Interface",
      "Real-time Prediction",
    ],

    liveDemo:
      "https://animal-detection-app-gwxl.onrender.com",

    github:
      "https://github.com/sheiknuman287/animal-detection-web-app",

    screenshots: [
      {
        image:
          "/images/projects/animal-detection/landing.png",
        title: "Animal Detection Interface",
      },
      {
        image:
          "/images/projects/animal-detection/detection-result.png",
        title: "Successful DOG Prediction",
      },
    ],
  },

  {
    id: "zanfa-bites",

    title: "Zanfa Bites",

    subtitle: "Full Stack • Restaurant Ordering",

    category: "Full Stack • E-Commerce",

    description:
      "A modern full-stack restaurant ordering application built with React, Node.js, Express, and Tailwind CSS, featuring dynamic menus, cart management, coupons, checkout, and PDF invoice generation.",

    longDescription:
      "Zanfa Bites is a full-stack restaurant ordering platform designed to demonstrate a complete e-commerce workflow. Customers can browse categorized food items, add products to a cart, manage quantities, apply coupon codes, complete checkout, and automatically download a professionally styled PDF invoice. The frontend uses React and Vite while the backend provides Express APIs for menu, coupon, and order operations.",

    featured: false,

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "jsPDF",
      "Node.js",
      "Express.js",
      "UUID",
      "CORS",
      "Netlify",
      "Render",
    ],

    features: [
      "Categorized Food Menu",
      "Dynamic Cart System",
      "Quantity Management",
      "Remove Items",
      "Coupon Code Support",
      "Live Order Calculations",
      "Checkout Flow",
      "Order Confirmation",
      "PDF Invoice Generation",
      "Backend API Integration",
      "Responsive React Interface",
      "Express.js Backend",
    ],

    liveDemo:
      "https://zanfa-bites.netlify.app",

    github:
      "https://github.com/sheiknuman287/Zanfa-Bites",

    screenshots: [
      {
        image:
          "/images/projects/zanfa-bites/home.png",
        title: "Restaurant Landing Page",
      },
      {
        image:
          "/images/projects/zanfa-bites/menu.png",
        title: "Dynamic Food Menu",
      },
      {
        image:
          "/images/projects/zanfa-bites/cart.png",
        title: "Shopping Cart",
      },
      {
        image:
          "/images/projects/zanfa-bites/checkout.png",
        title: "Cart & Checkout",
      },
    ],
  },
];

export default projects;