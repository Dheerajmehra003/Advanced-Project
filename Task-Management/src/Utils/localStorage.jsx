// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        acceptedTask: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a mockup for the new homepage layout.",
        category: "Design",
        date: "2024-10-01"
      },
      {
        acceptedTask: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix CSS Bugs",
        description: "Resolve CSS issues on the site.",
        category: "Web",
        date: "2024-10-02" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Audit",
        description: "Conduct a full SEO audit of the website.",
        category: "Other",
        date: "2024-09-15" 
      }
    ],
    taskCounts: {
      acceptedTask: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        acceptedTask: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "User Testing",
        description: "Conduct user testing sessions for the new feature.",
        category: "Other",
        date: "2024-10-03" 
      },
      {
        acceptedTask: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Documentation",
        description: "Update the user manual for the latest version.",
        category: "Web",
        date: "2024-10-04" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Create Logo Variations",
        description: "Design different variations of the new logo.",
        category: "Design",
        date: "2024-10-05" 
      }
    ],
    taskCounts: {
      acceptedTask: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Reyansh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        acceptedTask: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Website Maintenance",
        description: "Perform routine maintenance on the website.",
        category: "Web",
        date: "2024-10-06" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Social Media Graphics",
        description: "Design graphics for upcoming social media campaigns.",
        category: "Design",
        date: "2024-09-20" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Analytics Review",
        description: "Review website analytics and prepare a report.",
        category: "Other",
        date: "2024-10-07" 
      }
    ],
    taskCounts: {
      acceptedTask: 2,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        acceptedTask: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop New Feature",
        description: "Implement the new feature as per the specifications.",
        category: "Web",
        date: "2024-10-08" 
      },
      {
        acceptedTask: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Debug Existing Code",
        description: "Fix bugs in the existing codebase.",
        category: "Web",
        date: "2024-10-09" 
      },
      {
        acceptedTask: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Create a presentation for the upcoming meeting.",
        category: "Other",
        date: "2024-10-10" 
      }
    ],
    taskCounts: {
      acceptedTask: 0,
      newTask: 3,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Saanvi",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        acceptedTask: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Research Trends",
        description: "Conduct research on current design trends.",
        category: "Design",
        date: "2024-09-30" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Website Content",
        description: "Revise the website content for accuracy.",
        category: "Web",
        date: "2024-09-29" 
      },
      {
        acceptedTask: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Newsletter",
        description: "Design and write the content for the monthly newsletter.",
        category: "Other",
        date: "2024-09-28" 
      }
    ],
    taskCounts: {
      acceptedTask: 3,
      newTask: 0,
      completed: 3,
      failed: 0
    }
  }
];

 
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": []
    }
  ];
   
  export const setLocalStroage = () => {
     localStorage.setItem('employees', JSON.stringify(employees))
     localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStroage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees, admin}
  }
  