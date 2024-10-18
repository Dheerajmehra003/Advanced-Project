const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design Homepage",
          "description": "Create a mockup for the new homepage layout.",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix CSS Bugs",
          "description": "Resolve CSS issues on the site.",
          "category": "Web"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "SEO Audit",
          "description": "Conduct a full SEO audit of the website.",
          "category": "Other"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "User Testing",
          "description": "Conduct user testing sessions for the new feature.",
          "category": "Other"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update Documentation",
          "description": "Update the user manual for the latest version.",
          "category": "Web"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create Logo Variations",
          "description": "Design different variations of the new logo.",
          "category": "Design"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Website Maintenance",
          "description": "Perform routine maintenance on the website.",
          "category": "Web"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Create Social Media Graphics",
          "description": "Design graphics for upcoming social media campaigns.",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Analytics Review",
          "description": "Review website analytics and prepare a report.",
          "category": "Other"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Develop New Feature",
          "description": "Implement the new feature as per the specifications.",
          "category": "Web"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Debug Existing Code",
          "description": "Fix bugs in the existing codebase.",
          "category": "Web"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Prepare Presentation",
          "description": "Create a presentation for the upcoming meeting.",
          "category": "Other"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Research Trends",
          "description": "Conduct research on current design trends.",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update Website Content",
          "description": "Revise the website content for accuracy.",
          "category": "Web"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create Newsletter",
          "description": "Design and write the content for the monthly newsletter.",
          "category": "Other"
        }
      ]
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
  }
  