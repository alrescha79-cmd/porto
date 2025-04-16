---
title: "Flask-TF-API: Corn Leaf Disease Prediction"
summary: "This project is a REST API developed using Flask that leverages a TensorFlow deep learning model to predict diseases in corn leaves."
date: "Oct 3 2024"
draft: false
tags:
- Backend

repoUrl: https://github.com/alrescha79-cmd/flask-tf-api
---

![Maizefriend](<../../../assets/projects/maizefriend-api.png>)

### **Flask-TF-API: Corn Leaf Disease Prediction**

**Description:**  
This project is a **REST API** developed using **Flask** that leverages a **TensorFlow** deep learning model to predict diseases in corn leaves. The API processes images of corn leaves uploaded by users and returns the predicted disease class along with a confidence score, making it a valuable tool for agricultural diagnostics and precision farming.

---

### **Key Features:**

- **Deep Learning-Powered Predictions:** Utilizes a pre-trained **TensorFlow** model to accurately classify corn leaf diseases.
- **RESTful API Architecture:** Built with **Flask**, ensuring scalability, modularity, and ease of integration with other systems.
- **Image Processing:** Accepts images through API requests, processes them efficiently, and returns precise predictions.
- **Confidence Scoring:** Provides a detailed confidence percentage for each prediction to enhance decision-making.
- **Dockerized Deployment:** Includes a **Dockerfile** to simplify deployment and ensure consistent runtime environments.

---

### **Tech Stack:**

- **Backend Framework:** Flask (Python)  
- **Machine Learning:** TensorFlow for deep learning-based classification.  
- **Containerization:** Docker for consistent and scalable deployment.  
- **Languages:**
  - **Python (91%)**: Core language for the API and machine learning model integration.  
  - **Dockerfile (9%)**: For containerization to streamline deployment.

---

### **API Workflow:**

1. **Image Upload:** Users send an image of a corn leaf via an HTTP POST request.
2. **Preprocessing:** The API preprocesses the image to match the input requirements of the TensorFlow model.
3. **Prediction:** The TensorFlow model predicts the class (e.g., healthy, diseased).
4. **Result:** The API returns the predicted disease class and the corresponding confidence score in JSON format.

---

### **Highlights of the Project:**

- **Advanced Machine Learning Integration:** Combines Flask's lightweight API functionality with TensorFlow's powerful deep learning capabilities.  
- **Scalable and Portable:** Fully containerized using Docker for consistent performance across environments.  
- **User-Friendly API Design:** Designed with simplicity and usability in mind, making it easy to integrate into larger agricultural systems.  
- **Real-World Application:** Provides a practical solution for farmers and researchers to identify corn leaf diseases quickly and accurately.  

---

### **Possible Use Cases:**

- **Precision Agriculture:** Helps farmers detect corn diseases early, improving crop health and yield.  
- **Research Tools:** Assists researchers in analyzing plant health and disease patterns.  
- **Educational Purposes:** Can be used to demonstrate the integration of deep learning models into production-ready APIs.  

---

### **Challenges Overcome:**

- **Model Integration:** Successfully integrated a TensorFlow model into a Flask API while maintaining high inference speed.  
- **Image Preprocessing:** Ensured robust preprocessing to handle a variety of input image formats and qualities.  
- **Deployment Automation:** Streamlined deployment using Docker to eliminate environment-specific issues.  

---

### **Achievements:**  

- Successfully developed and deployed a REST API capable of real-time disease prediction.  
- Delivered a scalable and efficient solution for integrating machine learning into agricultural diagnostics.  
- Gained expertise in combining Flask, TensorFlow, and Docker for production-ready applications.  

---

### **Repository Link**

- [GitHub - alrescha79-cmd/flask-tf-api](https://github.com/alrescha79-cmd/flask-tf-api)
