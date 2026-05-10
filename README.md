# My Portfolio Website

This is my personal portfolio website built to showcase my projects, skills and experience

It includes:
- React frontend (Vite)
- Express backend API
- Nodemailer (Gmail SMTP) for sending emails
- Emailable API for email verification
- GitHub contribution graph integration

---

## Frontend Setup  

### Environment variables  
Create a .env file in the portfolio folder and fill the following:  

```bash
VITE_API_URL=your_backend_API
VITE_TOKEN=your_github_token
```
### Install dependencies and run server  
Run these from the root folder  

``` bash
cd portfolio
npm install
npm run dev
```
---

## Backend Setup  
### Environment variables  

Create a .env file in the backend folder and fill the following:  

```bash
PORT=port
EMAIL_USER=your_email_address
EMAIL_PASS=your_app_password_(create_one_in_Gmail)
EMAILABLE_API_KEY=an_api_key_from_emailable
FRONTEND_URL=your_frontend_url
```
### Install dependencies and run server  
Run these from the root folder  

``` bash
cd backend
npm install
nodemon server.js
```
