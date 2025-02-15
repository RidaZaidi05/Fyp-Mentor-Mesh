# Mentor Mesh
Mentor Mesh is a platform designed to bridge the gap between teachers and students within the same organization, making it easier for students to find suitable Final Year Project (FYP) ideas and supervisors. Teachers can showcase project ideas based on their expertise, and students can explore these ideas while also viewing the teachers' qualifications and research work. This platform streamlines the FYP selection process, ensuring students connect with the right mentors for their academic and research pursuits.
## Key Features
### 🔐 Login/Logout with Role-Based Access
Mentor Mesh provides a secure **role-based authentication system**:
- **Teacher Login:** If a teacher selects their role, they are directed to their profile dashboard, where they can propose project ideas and display their qualifications.
- **Student Login:** If a student selects their role, they can explore project ideas and find a suitable supervisor.
- **Logout Support:** Users can securely log out of their accounts at any time.

https://github.com/user-attachments/assets/d4ae98ac-7977-4235-b685-062f0748d7c1

### 🔑 Forgot Password & Password Reset  
Mentor Mesh provides a secure **password recovery system** for both teachers and students:  
- **Reset Password Request:** If a user forgets their password, they can request a reset.  
- **Email Verification:** A password reset link is sent to the registered email.  
- **Secure Reset Process:** After clicking the link, users can set a new password.  
- **Successful Login:** Once updated, users can log in with their new credentials.  

https://github.com/user-attachments/assets/fbe48026-54ee-4074-9e63-df91f2969643

### 👍 Like, Comment & FYP Idea Registration  

Mentor Mesh enhances student-teacher interaction with the following features:  

#### Like & Comment on Project Ideas  
- **Like/Unlike:** Students can like or unlike project ideas posted by teachers.  
- **Commenting:** Students can leave comments to ask questions or share thoughts about a project idea.  

#### Request to Register for an FYP Idea  
- **Group Formation:** Since an FYP group consists of 3 students, one student can request registration on behalf of their team.  
- **Detailed Submission:** The requesting student must provide:  
  - Names of all 3 students  
  - Roll numbers  
  - Transcripts  
  - Previous projects or relevant experience  
- **Teacher Review:** Once submitted, the request is sent to the respective teacher for approval.  


https://github.com/user-attachments/assets/2bd26572-be18-4503-b99f-7e770a39c7a7

### 🔔 Teacher Notifications & FYP Request Management  

Mentor Mesh provides a **notification system** to keep teachers informed about student interactions:  

#### Notification System  
Teachers receive real-time notifications for:  
- **Likes** on their posted project ideas.  
- **Comments** from students.  
- **FYP Registration Requests** submitted by student groups.  

The **Notifications Page** is divided into four sections:  
1. **All** – Displays all notifications.  
2. **Likes** – Shows notifications for likes.  
3. **Comments** – Lists notifications for new comments.  
4. **Requests** – Displays FYP registration requests.  

#### Reviewing & Managing FYP Requests  
- When a teacher clicks on a **request notification**, they can:  
  - View the project idea on which the request was made.  
  - See the details of the requesting student group, including names, roll numbers, transcripts, and previous projects.  
  - **Download student transcripts** for review.  
  - Accept or reject the request.  

#### Accepting or Rejecting Requests  
- **Accept Request:** The teacher provides a **group name**, and upon successful approval, students are notified.  
- **Reject Request:** If the request is denied, students are also notified.  



https://github.com/user-attachments/assets/a83a03a9-ae93-4a8e-890d-0c2348b1893b

### 📩 Group Chat System 

Once a teacher **accepts a student's FYP registration request**, all three students in the group are:  
- **Notified** about the acceptance.  
- **Granted access** to a group chat.  

#### Accessing the Group Chat  
- When students click on their **acceptance notification**, they are redirected to the chat system.  
- A **new group chat** is automatically created using the **group name** assigned by the teacher during acceptance.  
- Students can **communicate in real-time** with:  
  - **The supervising teacher**  
  - **Their FYP group members**  

#### Real-time Messaging with Socket.io  
- **Live Chat Updates:** Messages are sent and received instantly.  
- **Group Collaboration:** Students and teachers can discuss project details, share updates, and ask questions.  
- **Seamless Experience:** The chat system works without page reloads.  

https://github.com/user-attachments/assets/b95e1354-6dd3-4ba1-a9c2-46d973eff6bb

### 🔍 Advanced Search Functionality  

Mentor Mesh provides a **powerful search feature** to help students find relevant teachers and project ideas efficiently.  

#### 1. Search by Teacher Name  
- Students can **search for a teacher** by entering their name.  
- All teachers matching the search query will be displayed.  
- Clicking on a teacher’s profile allows students to:  
  - View all **FYP ideas** posted by the teacher.  
  - Check the teacher’s **education, experience, and research work**.  

#### 2. Search by Keyword  
- Students can search using **keywords** related to project domains (e.g., "Machine Learning").  
- The system will display:  
  - **Teachers whose areas of interest** match the keyword.  
  - **FYP ideas** where the title or description includes the keyword.  

This feature makes it easier for students to explore potential supervisors and relevant project ideas based on their interests.  



https://github.com/user-attachments/assets/9544bb61-2e9e-4386-a0f0-9a59c6f801c2

### 🌙 Dark Theme Support  

Mentor Mesh provides a **dark mode** for a better user experience, especially for those who prefer a low-light interface.  

#### How It Works  
- Users can **toggle between Light and Dark mode** by clicking the **theme icon** in the menu bar.  
- The selected theme preference is **saved** for a personalized experience.  
- Provides **better readability** and reduces eye strain in low-light environments.  

This feature ensures a **customizable user experience**, allowing users to switch to their preferred theme anytime.  

https://github.com/user-attachments/assets/015ff78c-22c8-44bf-a440-de860e032776

### 📱 Responsive Layout  

Mentor Mesh is designed with a **fully responsive layout**, ensuring a seamless experience across all screen sizes and devices.  

- **Optimized for all devices** – Works perfectly on **desktops, tablets, and mobile phones**.  
- **Adaptive UI components** – Automatically adjusts layouts, fonts, and buttons for different screen sizes.  
- **Smooth navigation** – Ensures a user-friendly experience regardless of the device being used.  

This feature enhances **usability and accessibility**, making Mentor Mesh available to everyone, everywhere!  


https://github.com/user-attachments/assets/3e23cc2f-f117-45bb-a9bd-e8b6a58c147d






