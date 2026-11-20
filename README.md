# Task Board
Kanban-style task board where users can create tasks, drag them across board sections, and manage work visually

**Approximate time to finish**: 11 hours


## Tech Stack
- Supabase
- React
- TypeScript

## Columns
- To Do
- In Progress
- In Review
- Done

## Hosting
Vercel: https://kanban-task-board-eta-rouge.vercel.app/

## Screenshots
<img width="1458" height="716" alt="Screenshot 2026-11-19 at 4 16 01 PM" src="https://github.com/user-attachments/assets/c3dd5599-64de-46de-a2ca-5337ab41c504" />

<img width="1455" height="710" alt="Screenshot 2026-11-19 at 4 16 38 PM" src="https://github.com/user-attachments/assets/0c54261c-810f-43b4-aa45-9bd5ec54f609" />


## Database Schema

<img width="345" height="312" alt="Screenshot 2026-11-18 at 3 32 20 PM" src="https://github.com/user-attachments/assets/56bf0879-dde9-4c96-95cb-53a8c6024c89" />


## Tradeoffs and Improvements
- After every insert, tasks are re-loaded from Supabase to keep UI always synced but causing extra work to database
- Include user-facing error/success messages
- Let users edit and delete tasks
- Support ordering tasks within the same column


