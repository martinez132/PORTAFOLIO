export interface Task {
  id: number;
  title: string;
  type: "pdf" | "link";
  description: string;
  date: string;       
  size: string;       
  file?: string;     
  repo?: string;      
  site?: string;      
}

