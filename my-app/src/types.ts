// shared task types

export type TaskStatus = "todo" | "in_progress" | "in_review" | "done";
export type TaskPriority = "low" | "normal" | "high";

// task data entered by the user (before it is saved)
export type NewTask = {
    title: string;
    description: string;
    due_date: string | null;
    priority: TaskPriority;
    status: TaskStatus;
};

// task row as stored in supabase
export type TaskData = NewTask & {
    id: number | string;
};
