import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "terrashield-ai",
    title: "TerraShield AI",
    badge: "Featured Flagship",
    subtitle: "Disaster Intelligence & Early Warning",
    category: ["AI / ML", "Full Stack", "Data Science"],
    description: "Hyper-local Landslide and Flash-Flood Early Warning System for hilly regions, fusing multi-sensor telemetry, terrain slope, and predictive ML models for village-level safety.",
    featured: true,
    problem: "Hilly and mountainous terrains experience rapid-onset landslides and flash floods with dangerously brief warning windows. Traditional regional meteorological forecasts are too coarse and fail to provide village/ward-level precision before disaster strikes.",
    solution: "TerraShield AI integrates real-time rainfall data, soil moisture telemetry, elevation slope stability, historical disaster databases, and IoT sensor inputs into a unified predictive machine learning pipeline that computes hyper-localized risk scores down to specific coordinates and administrative wards.",
    technologies: {
      frontend: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Leaflet", "ECharts", "Zustand"],
      backend: ["Python", "FastAPI", "Uvicorn"],
      aiMl: ["Predictive Risk Modeling", "Historical Hazard Regression", "Geo-Spatial Mapping"],
      tools: ["Git", "VS Code", "REST APIs"]
    },
    keyFeatures: [
      "Hyper-local village and ward level risk zoning",
      "Real-time sensor telemetry integration (rainfall, soil saturation, slope angle)",
      "Multi-hazard predictive engine for concurrent landslides and flash-floods",
      "Interactive geo-spatial danger heatmaps with alert tier thresholding",
      "Dynamic emergency advisory dispatch system for disaster response teams"
    ],
    architecture: [
      { step: "01 Sensor Ingestion", detail: "IoT telemetry (rainfall gauge, soil moisture probe, tiltmeters) collected via high-speed ingestion API." },
      { step: "02 Preprocessing & Geo-Alignment", detail: "Data aligned with digital elevation models (DEM) and slope stability indexes." },
      { step: "03 Predictive Risk Engine", detail: "Machine learning hazard models evaluate threshold breaches against historical risk curves." },
      { step: "04 Spatial Mapping Layer", detail: "Leaflet & ECharts render live geo-spatial ward boundaries color-coded by hazard level." },
      { step: "05 Early Warning Dispatch", detail: "Automated early warning notifications generated for community response and rescue units." }
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Target Scope", value: "Hilly & Mountainous Wards" },
      { label: "Sensors Monitored", value: "Rainfall, Moisture, Slope" },
      { label: "Warning Resolution", value: "Hyper-local Village Level" },
      { label: "Architecture", value: "FastAPI + React SPA" }
    ],
    previewType: 'terrashield'
  },
  {
    id: "socialsense",
    title: "SocialSense",
    badge: "AI & Network Intelligence",
    subtitle: "AI Social Media Analysis & Network Graph Platform",
    category: ["AI / ML", "NLP", "Data Science"],
    description: "AI-powered social media analysis and intelligence platform analyzing sentiment, emotion spectrums, topic distribution, and influential community networks across Telegram and X/Twitter-style platforms.",
    featured: true,
    problem: "Large-scale communication platforms generate massive unstructured text streams, making it exceedingly difficult to detect coordinated narratives, emotional undercurrents, key influencers, and community polarization in real-time.",
    solution: "SocialSense combines modern NLP transformer models (DistilBERT) with graph theory algorithms (NetworkX) and statistical clustering to parse text semantics, classify emotions, discover latent topics, and map structural influencer networks.",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Interactive Canvas Graph"],
      aiMl: ["Hugging Face Transformers", "DistilBERT", "Scikit-learn", "NLP Pipelines"],
      backend: ["Python", "Pandas", "NetworkX"],
      tools: ["Git", "Jupyter / Colab"]
    },
    keyFeatures: [
      "Fine-grained sentiment classification (Positive / Neutral / Negative)",
      "Multi-label emotion detection (Joy, Anger, Fear, Optimism, Surprise)",
      "Network graph community detection and centrality scoring",
      "Key influencer ranking and node connectivity clustering",
      "Real-time social intelligence mission-control dashboard"
    ],
    architecture: [
      { step: "01 Feed Capture", detail: "Telegram and X/Twitter structured message stream extraction and token normalization." },
      { step: "02 DistilBERT Inference", detail: "Fine-tuned transformer encoder classifies sentiment polarity and nuanced emotional states." },
      { step: "03 Topic & Keyword Modeling", detail: "Vector space clustering identifies trending hashtags and narrative clusters." },
      { step: "04 NetworkX Graph Engine", detail: "Interaction edges construct community graphs with PageRank and degree centrality calculation." },
      { step: "05 Visual Intelligence", detail: "Interactive node graph dashboard allowing deep drilldown into specific accounts and threads." }
    ],
    githubUrl: "https://github.com/dvakshay/SocialSense",
    metricsOrHighlights: [
      { label: "Model Backbone", value: "DistilBERT Transformers" },
      { label: "Graph Analysis", value: "NetworkX Community Detection" },
      { label: "Data Sources", value: "Telegram & X Streams" },
      { label: "Analytics", value: "Sentiment & Emotion Vectors" }
    ],
    previewType: 'socialsense'
  },
  {
    id: "riraru-ai",
    title: "Riraru AI",
    badge: "Speech AI & Local LLM",
    subtitle: "Private Offline AI Voice Assistant",
    category: ["AI / ML", "Applications"],
    description: "Autonomous personal voice AI assistant engineered to run locally on device, pairing Whisper speech recognition with Qwen local language models via Ollama for zero-cloud latency and private reasoning.",
    featured: true,
    problem: "Most digital assistants mandate constant cloud dependency, send raw audio to third-party corporate servers, and suffer from high conversational latency and privacy leakage.",
    solution: "Riraru AI implements an end-to-end voice-to-voice processing pipeline running locally: audio capture with sounddevice, rapid offline transcription via Faster Whisper, contextual reasoning via Ollama/Qwen LLM, and real-time synthesized audio feedback.",
    technologies: {
      aiMl: ["Whisper / Faster Whisper", "Ollama", "Qwen Model Family", "NumPy"],
      backend: ["Python", "sounddevice", "Async Audio Pipelines"],
      tools: ["Git", "Local Hardware Acceleration"]
    },
    keyFeatures: [
      "Offline voice capture with real-time sounddevice stream buffers",
      "Sub-second speech-to-text decoding using Whisper / Faster Whisper",
      "Private local LLM orchestration powered by Ollama and Qwen",
      "Hands-free voice activity detection (VAD) and response generation",
      "Zero telemetry / 100% private on-device execution"
    ],
    architecture: [
      { step: "01 Audio Ingestion", detail: "Microphone input captured as raw audio waveforms using Python sounddevice and NumPy buffers." },
      { step: "02 Whisper STT", detail: "Local Faster Whisper model decodes acoustic audio frames into clean textual tokens." },
      { step: "03 Local LLM Inference", detail: "Prompt dispatched to Ollama serving quantized Qwen weights for immediate reasoning." },
      { step: "04 Response Synthesis", detail: "Generated answer synthesized through local speech audio engine to the speaker." }
    ],
    githubUrl: "https://github.com/dvakshay/Riraru_Ai",
    metricsOrHighlights: [
      { label: "Privacy", value: "100% On-Device / Offline" },
      { label: "Speech Engine", value: "Faster Whisper" },
      { label: "Local LLM", value: "Qwen via Ollama" },
      { label: "Latency", value: "Real-Time Pipeline" }
    ],
    previewType: 'riraru'
  },
  {
    id: "cloud-removal-satellite",
    title: "Cloud Removal from Satellite Images",
    badge: "Bharatiya Antariksh Hackathon",
    subtitle: "Deep Learning Imagery Reconstruction",
    category: ["Computer Vision", "AI / ML"],
    description: "Deep learning computer vision system utilizing U-Net architecture to reconstruct cloud-occluded satellite imagery, restoring ground visibility for geospatial and earth observation tasks.",
    featured: true,
    problem: "Optical satellite observation is chronically hampered by dense cloud cover and atmospheric shadows, obstructing crucial ground analytics for agriculture, urban planning, and emergency disaster reconnaissance.",
    solution: "Trained an end-to-end U-Net convolutional neural network that identifies cloud masks and reconstructs underlying terrain textures by learning spatial feature correlations across multi-temporal satellite image pairs.",
    technologies: {
      aiMl: ["PyTorch", "U-Net Architecture", "Computer Vision", "Convolutional Neural Networks"],
      backend: ["Python", "OpenCV", "NumPy"],
      frontend: ["Streamlit Interactive App"],
      tools: ["Google Colab", "Git"]
    },
    keyFeatures: [
      "Automatic cloud and cloud-shadow mask segmentation",
      "Pixel-level convolutional feature synthesis and spatial infilling",
      "Interactive Streamlit application for image upload and instant inference",
      "Side-by-side visual fidelity comparison with perceptual metrics",
      "Engineered during the prestigious Bharatiya Antariksh Hackathon"
    ],
    architecture: [
      { step: "01 Input Satellite Tile", detail: "Cloud-covered GeoTIFF / optical satellite tile preprocessed and normalized." },
      { step: "02 Feature Extraction", detail: "U-Net encoder extracts hierarchical multi-scale spatial representations." },
      { step: "03 Bottleneck & Skip Links", detail: "High-resolution spatial context preserved across skip connections." },
      { step: "04 Decoder Reconstruction", detail: "Transposed convolutions synthesize cloud-free ground surface textures." }
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Hackathon", value: "Bharatiya Antariksh" },
      { label: "Architecture", value: "U-Net (PyTorch)" },
      { label: "Interface", value: "Streamlit Web App" },
      { label: "Domain", value: "Earth Observation CV" }
    ],
    previewType: 'cloudremoval'
  },
  {
    id: "eeg-emotion-recognition",
    title: "EEG-Based Emotion Recognition",
    badge: "Neuro-Signal ML",
    subtitle: "DREAMER Signal Processing & Classification",
    category: ["AI / ML", "Data Science"],
    description: "Machine learning signal processing pipeline trained on the DREAMER dataset to extract frequency band powers and classify human emotional states from multi-channel EEG brainwave signals.",
    featured: false,
    problem: "Brain-computer interfaces and affective computing require decoding complex, noisy electroencephalogram (EEG) signals without relying on subjective self-reporting surveys.",
    solution: "Engineered a rigorous signal processing pipeline using SciPy bandpass filtering, Welch's method power spectral density (PSD) extraction across alpha, beta, and theta bands, feeding into Scikit-learn classifiers for emotional valence and arousal classification.",
    technologies: {
      aiMl: ["Scikit-learn", "Support Vector Machines", "Random Forests"],
      backend: ["Python", "NumPy", "Pandas", "SciPy Signal Processing"],
      tools: ["DREAMER Dataset", "Jupyter Notebooks"]
    },
    keyFeatures: [
      "Multi-channel EEG raw signal baseline removal and artifact filtering",
      "Spectral power band extraction (Theta, Alpha, Beta, Gamma)",
      "Valence and Arousal emotional dimension classification",
      "Comprehensive statistical evaluation across subject baselines"
    ],
    architecture: [
      { step: "01 Raw Signal Input", detail: "Multi-channel electrode voltages from DREAMER dataset." },
      { step: "02 Butterworth Filtering", detail: "Bandpass filtering (0.5Hz - 45Hz) to remove noise and DC drifts." },
      { step: "03 PSD Feature Extraction", detail: "Welch method to calculate relative band energies." },
      { step: "04 Classifier Prediction", detail: "Machine learning classifier predicts emotional quadrant." }
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Dataset", value: "DREAMER EEG" },
      { label: "Core Library", value: "SciPy + Scikit-learn" },
      { label: "Dimensions", value: "Valence & Arousal" },
      { label: "Focus", value: "Affective Computing" }
    ],
    previewType: 'eeg'
  },
  {
    id: "imdb-sentiment-analysis",
    title: "IMDb Sentiment Analysis",
    badge: "NLP Classification",
    subtitle: "TF-IDF & Logistic Regression Pipeline",
    category: ["NLP", "AI / ML"],
    description: "End-to-end NLP classification system trained on 50,000 IMDb movie reviews, featuring custom text preprocessing, TF-IDF n-gram vectorization, and an interactive Streamlit inference interface.",
    featured: false,
    problem: "Demonstrating how classical machine learning with well-engineered text tokenization can achieve ultra-fast, interpretable sentiment categorization on large document corpora.",
    solution: "Cleaned raw review strings (regex, stopword removal, lemmatization), generated sub-linear TF-IDF vectors with unigram and bigram features, and fitted an optimized Logistic Regression classifier deployed via Streamlit.",
    technologies: {
      aiMl: ["Scikit-learn", "TF-IDF Vectorizer", "Logistic Regression", "NLTK"],
      backend: ["Python", "Pandas"],
      frontend: ["Streamlit"],
      tools: ["Git", "VS Code"]
    },
    keyFeatures: [
      "Custom regex and token normalization pipeline",
      "Unigram + Bigram TF-IDF vector space projection",
      "Confidence calibration for sentiment probability score",
      "Interactive Streamlit web test bench for ad-hoc reviews"
    ],
    architecture: [
      { step: "01 Raw Text", detail: "User input string or IMDb dataset sample." },
      { step: "02 Preprocessing", detail: "Lowercasing, punctuation stripping, tokenization." },
      { step: "03 Vectorization", detail: "TF-IDF vocabulary mapping." },
      { step: "04 Logistic Prediction", detail: "Probability output (Positive vs. Negative sentiment)." }
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Corpus Size", value: "50,000 Reviews" },
      { label: "Vector Space", value: "TF-IDF (1,2-grams)" },
      { label: "Deployment", value: "Streamlit UI" },
      { label: "Model", value: "Logistic Regression" }
    ],
    previewType: 'sentiment'
  },
  {
    id: "student-data-manager",
    title: "Student Data Manager",
    badge: "Python CLI Application",
    subtitle: "Structured Academic Data & CRUD Operations",
    category: ["Applications"],
    description: "Robust Python application for structured academic record tracking, student data validation, persistent file storage, and command-line management workflows.",
    featured: false,
    problem: "Managing student academic records, marks, and attendance requires clean data structures, robust input sanitization, and structured persistent records.",
    solution: "Implemented an object-oriented Python management architecture supporting complete CRUD operations, schema validation, and CSV/JSON serialization.",
    technologies: {
      backend: ["Python", "Object-Oriented Programming"],
      tools: ["VS Code", "Git", "JSON/CSV Storage"]
    },
    keyFeatures: [
      "Full Create, Read, Update, Delete (CRUD) lifecycle",
      "Input validation and integrity checks for student grades and IDs",
      "Formatted CLI report generation and search filtering",
      "Lightweight structured data persistence"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Language", value: "Python 3.x" },
      { label: "Architecture", value: "Modular OOP" },
      { label: "Storage", value: "Structured Data / JSON" },
      { label: "Paradigm", value: "CRUD Operations" }
    ],
    previewType: 'generic'
  },
  {
    id: "netflix-dashboard",
    title: "Netflix Content Intelligence Dashboard",
    badge: "Data Visualization",
    subtitle: "Catalog EDA & Global Distribution Insights",
    category: ["Data Science"],
    description: "Exploratory data analysis and visualization dashboard analyzing global Netflix catalog distributions, genre migrations, and release trends.",
    featured: false,
    problem: "Understanding content distribution dynamics, rating spreads, and international production growth from raw catalog data.",
    solution: "Conducted data wrangling with Pandas and produced clear multi-variate visualizations highlighting catalog evolution across decades.",
    technologies: {
      aiMl: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      tools: ["Power BI", "Jupyter Notebook"]
    },
    keyFeatures: [
      "Country-wise production volume analysis",
      "Genre correlation heatmaps and maturity rating distributions",
      "Multi-year timeline trends of movie vs. TV show releases"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Category", value: "Data Science" },
      { label: "Tools", value: "Pandas & Matplotlib" },
      { label: "Focus", value: "Exploratory Analysis" },
      { label: "Visuals", value: "Heatmaps & Trends" }
    ],
    previewType: 'generic'
  },
  {
    id: "youtube-dashboard",
    title: "YouTube Analytics & Engagement Explorer",
    badge: "Data Visualization",
    subtitle: "Metrics Tracking & Performance Correlations",
    category: ["Data Science"],
    description: "Data analysis pipeline parsing creator engagement metrics, view-to-like conversion ratios, and upload frequency patterns.",
    featured: false,
    problem: "Extracting actionable insights from creator analytics data to determine what factors drive viewer engagement.",
    solution: "Parsed multi-metric CSV datasets, normalized skewed view counts, and generated insightful statistical visualizations.",
    technologies: {
      aiMl: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      tools: ["Google Colab", "Excel"]
    },
    keyFeatures: [
      "Viewer engagement ratio correlations",
      "Upload time vs. 48-hour velocity comparison",
      "Statistical distribution summaries"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Category", value: "Data Analysis" },
      { label: "Focus", value: "Engagement Metrics" },
      { label: "Pipeline", value: "Python + Seaborn" },
      { label: "Dataset", value: "Creator Statistics" }
    ],
    previewType: 'generic'
  },
  {
    id: "student-performance-prediction",
    title: "Student Performance Prediction",
    badge: "Supervised ML",
    subtitle: "Predictive Regression on Academic Outcomes",
    category: ["AI / ML", "Data Science"],
    description: "Supervised machine learning model analyzing study habits, demographic factors, and attendance to predict academic performance outcomes.",
    featured: false,
    problem: "Identifying at-risk academic trajectories early using educational data mining.",
    solution: "Trained linear and tree-based regression algorithms on standardized educational datasets, performing feature importance analysis.",
    technologies: {
      aiMl: ["Scikit-learn", "Pandas", "Matplotlib"],
      backend: ["Python"]
    },
    keyFeatures: [
      "Feature importance evaluation of study hours vs. score",
      "Cross-validated regression models",
      "Residual distribution diagnostic plots"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Type", value: "Supervised Regression" },
      { label: "Library", value: "Scikit-learn" },
      { label: "Domain", value: "Educational Data Mining" },
      { label: "Output", value: "Score Prediction" }
    ],
    previewType: 'generic'
  },
  {
    id: "spam-sms-detection",
    title: "Spam SMS Detection System",
    badge: "Text Classification",
    subtitle: "Naïve Bayes & TF-IDF Filter",
    category: ["NLP", "AI / ML"],
    description: "Lightweight, highly effective text classification engine using Multinomial Naïve Bayes to classify incoming SMS messages as ham or spam.",
    featured: false,
    problem: "Real-time filtering of unsolicited or fraudulent SMS communications with minimal computational footprint.",
    solution: "Implemented text normalization, n-gram TF-IDF vectorization, and a probabilistic Multinomial Naïve Bayes classifier.",
    technologies: {
      aiMl: ["Scikit-learn", "NLTK", "TF-IDF"],
      backend: ["Python", "Flask / FastAPI"]
    },
    keyFeatures: [
      "Token cleaning and spam trigger keyword identification",
      "High precision classification with low false-positive rate",
      "Instantaneous CPU inference"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Model", value: "Multinomial Naïve Bayes" },
      { label: "Field", value: "NLP Text Classification" },
      { label: "Footprint", value: "Lightweight / CPU Fast" },
      { label: "Application", value: "Message Filtering" }
    ],
    previewType: 'generic'
  },
  {
    id: "movie-recommendation-system",
    title: "Content-Based Movie Recommender",
    badge: "Recommendation Engine",
    subtitle: "Cosine Similarity & Metadata Vectorization",
    category: ["AI / ML", "Data Science"],
    description: "Recommendation algorithm that computes pairwise cosine similarity across movie metadata, plot overviews, genres, and directors to recommend similar titles.",
    featured: false,
    problem: "Facilitating discovery across thousands of cinema titles without requiring cold-start user rating history.",
    solution: "Aggregated metadata soup into Bag-of-Words and TF-IDF representations, computing cosine distance matrices for instant nearest-neighbor retrieval.",
    technologies: {
      aiMl: ["Scikit-learn", "Pandas", "Cosine Similarity"],
      backend: ["Python"]
    },
    keyFeatures: [
      "Metadata soup concatenation (cast, director, keywords, plot)",
      "High-dimensional cosine distance similarity matrix",
      "Top-N ranked recommendation generation"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Algorithm", value: "Cosine Similarity" },
      { label: "Method", value: "Content-Based Filtering" },
      { label: "Framework", value: "Scikit-learn" },
      { label: "Domain", value: "Recommender Systems" }
    ],
    previewType: 'generic'
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    badge: "Python System",
    subtitle: "Inventory, Lending & Member Records",
    category: ["Applications"],
    description: "Modular Python system for tracking library books, catalog inventory, member borrow/return statuses, and automated fine calculation.",
    featured: false,
    problem: "Streamlining circulation desks and catalog indexing for institutional book collections.",
    solution: "Designed object-oriented inventory modules with clean search indexing and record updating.",
    technologies: {
      backend: ["Python", "OOP", "JSON / File I/O"],
      tools: ["VS Code", "Git"]
    },
    keyFeatures: [
      "Book catalog search by title, author, or ISBN",
      "Checkout and return tracking with timestamp logging",
      "Automated overdue duration calculation"
    ],
    githubUrl: "https://github.com/dvakshay",
    metricsOrHighlights: [
      { label: "Paradigm", value: "Object-Oriented Python" },
      { label: "Core Feature", value: "Borrow/Return Lifecycle" },
      { label: "Storage", value: "Structured Record Storage" },
      { label: "Interface", value: "CLI Console" }
    ],
    previewType: 'generic'
  }
];
