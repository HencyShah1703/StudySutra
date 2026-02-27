export type Task = {
  subject: string;
  topic: string;
  time: string;
};

export type DayPlan = {
  day: number;
  tasks: Task[];
};

export const roadmap: DayPlan[] = [
  { day: 1, tasks: [
    { subject: "OS", topic: "OS Concepts", time: "9:00 - 11:00" },
    { subject: "DS", topic: "Intro to DS", time: "2:00 - 4:00" },
  ]},
  { day: 2, tasks: [
    { subject: "OS", topic: "Process Concepts", time: "9:00 - 11:00" },
    { subject: "DS", topic: "Linked List", time: "2:00 - 4:00" },
  ]},
  { day: 3, tasks: [
    { subject: "DS", topic: "Queue & Stack", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "Basic Constructs", time: "3:00 - 5:00" },
  ]},
  { day: 4, tasks: [
    { subject: "JAVA", topic: "Packages & Classes", time: "10:00 - 12:00" },
    { subject: "DBMS", topic: "Intro to DBMS", time: "3:00 - 5:00" },
  ]},
  { day: 5, tasks: [
    { subject: "DBMS", topic: "RDBMS", time: "9:00 - 11:00" },
    { subject: "OS", topic: "Revision", time: "2:00 - 4:00" },
  ]},
  { day: 6, tasks: [
    { subject: "DS", topic: "Practice", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "OOP", time: "3:00 - 5:00" },
  ]},
  { day: 7, tasks: [
    { subject: "DBMS", topic: "ER Model", time: "9:00 - 11:00" },
    { subject: "OS", topic: "Threads", time: "2:00 - 4:00" },
  ]},
  { day: 8, tasks: [
    { subject: "DS", topic: "Revision", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "Exceptions", time: "3:00 - 5:00" },
  ]},
  { day: 9, tasks: [
    { subject: "OS", topic: "Deadlocks", time: "9:00 - 11:00" },
    { subject: "DBMS", topic: "Normalization", time: "2:00 - 4:00" },
  ]},
  { day: 10, tasks: [
    { subject: "JAVA", topic: "Collections", time: "10:00 - 12:00" },
    { subject: "DS", topic: "Stacks Practice", time: "3:00 - 5:00" },
  ]},
  { day: 11, tasks: [
    { subject: "OS", topic: "Memory Mgmt", time: "9:00 - 11:00" },
    { subject: "DBMS", topic: "SQL Basics", time: "2:00 - 4:00" },
  ]},
  { day: 12, tasks: [
    { subject: "DS", topic: "Queue Practice", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "Multithreading", time: "3:00 - 5:00" },
  ]},
  { day: 13, tasks: [
    { subject: "DBMS", topic: "Joins", time: "9:00 - 11:00" },
    { subject: "OS", topic: "File Systems", time: "2:00 - 4:00" },
  ]},
  { day: 14, tasks: [
    { subject: "DS", topic: "Revision", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "Streams", time: "3:00 - 5:00" },
  ]},
  { day: 15, tasks: [
    { subject: "DBMS", topic: "Transactions", time: "9:00 - 11:00" },
    { subject: "OS", topic: "Disk Scheduling", time: "2:00 - 4:00" },
  ]},
  { day: 16, tasks: [
    { subject: "JAVA", topic: "Revision", time: "10:00 - 12:00" },
    { subject: "DS", topic: "Revision", time: "3:00 - 5:00" },
  ]},
  { day: 17, tasks: [
    { subject: "OS", topic: "Revision", time: "9:00 - 11:00" },
    { subject: "DBMS", topic: "Practice", time: "2:00 - 4:00" },
  ]},
  { day: 18, tasks: [
    { subject: "DS", topic: "Mock Test", time: "10:00 - 12:00" },
    { subject: "JAVA", topic: "Mock Test", time: "3:00 - 5:00" },
  ]},
  { day: 19, tasks: [
    { subject: "OS", topic: "Mock Test", time: "9:00 - 11:00" },
    { subject: "DBMS", topic: "Mock Test", time: "2:00 - 4:00" },
  ]},
  { day: 20, tasks: [
    { subject: "All", topic: "Final Revision", time: "10:00 - 1:00" },
  ]},
];