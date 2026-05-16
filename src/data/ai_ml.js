import { createSection, createTopic } from "./roadmapHelpers"

export const aiMlRoadmap = {
  slug: "ai-ml",
  title: "AI/ML Engineer",
  description:
    "A comprehensive journey from data fundamentals and mathematics to building advanced machine learning models, deep learning architectures, and modern generative AI systems.",
  icon: "BrainCircuit",
  estimatedTime: "8-12 months",
  salaryRange: "$110k - $220k",
  difficulty: "Advanced",
  sections: [
    createSection("Beginner", "Beginner", "Build the foundation in Python, mathematics, and data manipulation.", "8-10 weeks", [
      createTopic({
        title: "Python",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Master Python programming, data structures, OOP, functional programming, and standard libraries.",
        tags: ["python", "programming", "language"]
      }),
      createTopic({
        title: "NumPy",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn high-performance multi-dimensional arrays, matrix operations, and mathematical functions.",
        tags: ["numpy", "arrays", "math"]
      }),
      createTopic({
        title: "Pandas",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Manipulate, analyze, and filter structured data using DataFrames and Series.",
        tags: ["pandas", "data-manipulation", "dataframes"]
      }),
      createTopic({
        title: "Data Cleaning",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Handle missing values, outliers, duplicates, and prepare datasets for modeling.",
        tags: ["data-cleaning", "preprocessing", "eda"]
      }),
      createTopic({
        title: "Visualization",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Create plots and charts using Matplotlib and Seaborn to understand data distributions.",
        tags: ["visualization", "matplotlib", "seaborn"]
      }),
      createTopic({
        title: "Statistics",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Understand probability, distributions, hypothesis testing, and statistical significance.",
        tags: ["statistics", "probability", "math"]
      }),
      createTopic({
        title: "Linear Algebra",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn vectors, matrices, eigenvalues, eigenvectors, and transformations used in ML.",
        tags: ["linear-algebra", "math", "matrices"]
      })
    ]),
    createSection("Intermediate", "Intermediate", "Dive into classical machine learning algorithms and neural network basics.", "10-14 weeks", [
      createTopic({
        title: "Machine Learning",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Understand supervised vs unsupervised learning, bias-variance tradeoff, and evaluation metrics.",
        tags: ["ml", "concepts", "theory"]
      }),
      createTopic({
        title: "Scikit-learn",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Implement regression, classification, and clustering using the leading Python ML library.",
        tags: ["scikit-learn", "ml", "algorithms"]
      }),
      createTopic({
        title: "Deep Learning",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Learn the fundamentals of neural networks, backpropagation, activation functions, and PyTorch/TensorFlow.",
        tags: ["deep-learning", "neural-networks", "pytorch"]
      }),
      createTopic({
        title: "CNN",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Understand Convolutional Neural Networks for image recognition, object detection, and computer vision.",
        tags: ["cnn", "computer-vision", "images"]
      }),
      createTopic({
        title: "RNN",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Work with sequence data and time series using Recurrent Neural Networks and LSTMs.",
        tags: ["rnn", "lstm", "sequences"]
      })
    ]),
    createSection("Advanced", "Advanced", "Master modern NLP, generative AI, LLMs, and intelligent agents.", "12-16 weeks", [
      createTopic({
        title: "Transformers",
        difficulty: "Advanced",
        estimatedTime: "3 weeks",
        description: "Understand the self-attention mechanism and the architecture behind modern NLP models.",
        tags: ["transformers", "attention", "nlp"]
      }),
      createTopic({
        title: "LLMs",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Work with Large Language Models (GPT, Llama), understand prompt engineering and inference.",
        tags: ["llms", "generative-ai", "nlp"]
      }),
      createTopic({
        title: "RAG",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Implement Retrieval-Augmented Generation to allow LLMs to query external knowledge bases.",
        tags: ["rag", "information-retrieval", "context"]
      }),
      createTopic({
        title: "Vector Databases",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Store and query high-dimensional embeddings using Pinecone, Milvus, or pgvector.",
        tags: ["vector-db", "embeddings", "search"]
      }),
      createTopic({
        title: "Fine-tuning",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Adapt pre-trained models to domain-specific tasks using PEFT, LoRA, and QLoRA.",
        tags: ["fine-tuning", "lora", "training"]
      }),
      createTopic({
        title: "AI Agents",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Build autonomous agents using LangChain or AutoGen that can use tools and plan multi-step tasks.",
        tags: ["agents", "langchain", "automation"]
      })
    ])
  ]
}
