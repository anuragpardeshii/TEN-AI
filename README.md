
# 🚀 AI Enterprise Landing Page


A sleek, responsive landing page showcasing the capabilities of an AI-powered enterprise using React.js, Framer Motion, and Tailwind CSS. The page features dynamic animations, insightful content cards, and a rotating carousel to demonstrate business impact, insights, and offerings.

## 🌟 Features

- **Impact Section**  
  Engaging animated SVGs and motion-based transitions that highlight key sales metrics such as conversions, reach, and cost efficiency, bringing data to life.

- **Insights Section**  
  A fully responsive, card-based layout that presents the latest AI articles and updates—designed for clarity, engagement, and a seamless reading experience.

- **Offerings Section**  
  An auto-rotating carousel that elegantly showcases your core services or product offerings, ensuring visitors quickly grasp the value you provide.

- **Framer Motion Animations**  
  Smooth entry and hover animations powered by Framer Motion, enhancing visual appeal and boosting user engagement with subtle yet effective motion effects.
## 📦 Tech Stack

- **React.js** – Frontend framework for building dynamic and responsive user interfaces  
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development and consistent design  
- **Framer Motion** – Powerful library for declarative animations and interactive motion effects  
- **JavaScript (ES6+)** – Modern JavaScript features for cleaner, more efficient code
- **Node.js + Express** – Backend server setup for handling email sending and API integration  
- **Nodemailer** – (Optional) Library to send emails via SMTP 
## ⚙️Setup for Frontend 

 #### Clone the repo and navigate to frontend folder

```bash
  git clone https://github.com/your-username/TEN-AI
  cd frontend
```
#### Install the Dependencies
  ```bash
    npm install
```
#### Start development server
  ```bash
    npm run dev
```
#### Visit
  ```bash
    http://localhost:5173 to view the site in your browser.
  ```

## ⚙️Setup for Backend

  #### Navigate to the backend folder

  ```bash
    cd ../backend
  ```
  #### Install dependencies
  ```bash
    npm install
  ```
  #### Create a .env file
  ```bash
    PORT=5000
    MAIL_USER=your_email@example.com
    MAIL_PASS=your_password_or_app_password
  ```
  #### Start the backend server
   ```bash
    npm run dev
   ```



## 📡 API Reference

###  Insights API

####  Add New Insight
`POST /api/insights/create`

#### Get All Insights
`GET /api/insights/getAll`

####  Update Insight
`PUT /api/insights/update/:id`

####  Delete Insight
`DELETE /api/insights/delete/:id`


###  Contact API

#### Submit Contact Form
`POST /api/contact/mail`

## 🤝 Contributing

Contributions to the TEN-AI are welcome!

Feel free to fork the repository, make improvements, and submit pull requests for new features or bug fixes.
