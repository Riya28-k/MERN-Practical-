import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Autocomplete,
  Breadcrumbs,
  Chip,
  TextField,
  Typography,
  Stack,
  Paper,
  Button,
  Divider,
} from "@mui/material";

import "./App.css";

function App() {
  const courseData = {
    "React JS": {
      description:
        "Learn how to build modern and interactive user interfaces using React.",
      level: "Beginner",
      duration: "6 Weeks",
      questions: [
        {
          question: "What is React JS?",
          answer:
            "React JS is a JavaScript library used to build interactive and reusable user interfaces."
        },
        {
          question: "What are React Components?",
          answer:
            "Components are reusable building blocks of a React application. They can contain their own structure and logic."
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript."
        }
      ],
      technologies: [
        "React",
        "JavaScript",
        "JSX",
        "HTML",
        "CSS"
      ]
    },

    "Java": {
      description:
        "Learn Java programming, object-oriented concepts and application development.",
      level: "Intermediate",
      duration: "8 Weeks",
      questions: [
        {
          question: "What is Java?",
          answer:
            "Java is a popular object-oriented programming language used to develop desktop, web and enterprise applications."
        },
        {
          question: "What is OOP?",
          answer:
            "Object-Oriented Programming is a programming approach based on objects and concepts such as inheritance, encapsulation, polymorphism and abstraction."
        },
        {
          question: "What is a class in Java?",
          answer:
            "A class is a blueprint used to create objects. It defines properties and behaviors of objects."
        }
      ],
      technologies: [
        "Java",
        "OOP",
        "Classes",
        "Inheritance",
        "Collections"
      ]
    },

    "Python": {
      description:
        "Learn Python programming with simple syntax, functions and data structures.",
      level: "Beginner",
      duration: "6 Weeks",
      questions: [
        {
          question: "What is Python?",
          answer:
            "Python is a high-level programming language known for its simple syntax and wide range of applications."
        },
        {
          question: "What are Python Lists?",
          answer:
            "A list is a collection in Python that can store multiple values and can be modified after creation."
        },
        {
          question: "What is a function?",
          answer:
            "A function is a reusable block of code designed to perform a specific task."
        }
      ],
      technologies: [
        "Python",
        "Functions",
        "Lists",
        "Dictionaries",
        "OOP"
      ]
    },

    "MongoDB": {
      description:
        "Learn MongoDB, a NoSQL database used to store data in flexible document format.",
      level: "Intermediate",
      duration: "5 Weeks",
      questions: [
        {
          question: "What is MongoDB?",
          answer:
            "MongoDB is a NoSQL database that stores data in flexible JSON-like documents."
        },
        {
          question: "What is a MongoDB Collection?",
          answer:
            "A collection is a group of MongoDB documents and is similar to a table in a relational database."
        },
        {
          question: "What is a MongoDB Document?",
          answer:
            "A document is a record stored in MongoDB using a JSON-like BSON format."
        }
      ],
      technologies: [
        "MongoDB",
        "NoSQL",
        "Database",
        "Documents",
        "CRUD"
      ]
    },

    "Node JS": {
      description:
        "Learn server-side JavaScript and build backend applications using Node JS.",
      level: "Intermediate",
      duration: "7 Weeks",
      questions: [
        {
          question: "What is Node JS?",
          answer:
            "Node JS is a JavaScript runtime environment that allows JavaScript to run outside the browser."
        },
        {
          question: "What is npm?",
          answer:
            "npm is the Node Package Manager used to install and manage JavaScript packages."
        },
        {
          question: "What is Express JS?",
          answer:
            "Express JS is a lightweight Node JS framework used for creating web servers and APIs."
        }
      ],
      technologies: [
        "Node JS",
        "JavaScript",
        "npm",
        "Express",
        "API"
      ]
    }
  };

  const courses = Object.keys(courseData);

  const [selectedCourse, setSelectedCourse] = useState(
  "React JS"
);

  const currentCourse = courseData[selectedCourse];

  return (
    <div className="page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          📚 LearnHub
        </div>

        <div className="nav-links">
          <span>Home</span>
          <span>Courses</span>
          <span>About</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">

        {/* HERO SECTION */}
        <section className="hero">

          <div className="hero-content">

            <Typography
              variant="h2"
              className="hero-title"
            >
              Student Learning Portal
            </Typography>

            <Typography
              variant="h6"
              className="hero-subtitle"
            >
              Learn. Practice. Improve.
            </Typography>

            <Typography className="hero-text">
              Choose a course and explore important
              concepts through simple questions and answers.
            </Typography>

            <Button
              variant="contained"
              className="hero-button"
              onClick={() =>
                document
                  .getElementById("course-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Courses
            </Button>

          </div>

          <div className="hero-icon">
            🎓
          </div>

        </section>

        {/* BREADCRUMBS */}
        <div className="breadcrumb-container">

          <Breadcrumbs>
            <Typography color="inherit">
              Home
            </Typography>

            <Typography color="inherit">
              Courses
            </Typography>

            <Typography color="text.primary">
              {selectedCourse}
            </Typography>
          </Breadcrumbs>

        </div>

        {/* ALERT */}
        <Alert
          severity="info"
          className="course-alert"
        >
          You are currently learning{" "}
          <strong>{selectedCourse}</strong>
        </Alert>

        {/* COURSE SECTION */}
        <section
          id="course-section"
          className="course-section"
        >

          <Paper
            className="course-card"
            elevation={3}
          >

            <Typography
              variant="h4"
              className="section-heading"
            >
              Choose Your Course
            </Typography>

            <Typography className="section-description">
              Select a course from the list to explore
              its concepts and questions.
            </Typography>

            <Autocomplete
              options={courses}
              value={selectedCourse}
              onChange={(event, newValue) => {
                if (newValue) {
                  setSelectedCourse(newValue);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search or Select Course"
                />
              )}
            />

          </Paper>

        </section>

        {/* COURSE INFORMATION */}
        <section className="info-grid">

          <Paper className="info-card">
            <div className="info-icon">
              📖
            </div>

            <Typography variant="h6">
              Course
            </Typography>

            <Typography>
              {selectedCourse}
            </Typography>
          </Paper>

          <Paper className="info-card">
            <div className="info-icon">
              ⭐
            </div>

            <Typography variant="h6">
              Level
            </Typography>

            <Typography>
              {currentCourse.level}
            </Typography>
          </Paper>

          <Paper className="info-card">
            <div className="info-icon">
              ⏱️
            </div>

            <Typography variant="h6">
              Duration
            </Typography>

            <Typography>
              {currentCourse.duration}
            </Typography>
          </Paper>

        </section>

        {/* COURSE DESCRIPTION */}
        <section className="description-section">

          <Paper className="description-card">

            <Typography
              variant="h4"
              className="section-heading"
            >
              About {selectedCourse}
            </Typography>

            <Typography className="description-text">
              {currentCourse.description}
            </Typography>

          </Paper>

        </section>

        {/* QUESTIONS */}
        <section className="questions-section">

          <Typography
            variant="h4"
            className="section-heading"
          >
            {selectedCourse} Questions
          </Typography>

          <Typography className="section-description">
            Click on a question to view the answer.
          </Typography>

          <div className="accordion-container">

            {currentCourse.questions.map(
              (item, index) => (
                <Accordion key={index}>

                  <AccordionSummary>
                    <Typography variant="h6">
                      {index + 1}. {item.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>

                </Accordion>
              )
            )}

          </div>

        </section>

        {/* TECHNOLOGIES */}
        <section className="technology-section">

          <Paper className="technology-card">

            <Typography
              variant="h4"
              className="section-heading"
            >
              Technologies Covered
            </Typography>

            <Typography className="section-description">
              Skills and technologies included in this course.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              className="chips"
            >

              {currentCourse.technologies.map(
                (technology, index) => (
                  <Chip
                    key={index}
                    label={technology}
                    className="technology-chip"
                  />
                )
              )}

            </Stack>

          </Paper>

        </section>

        <Divider />

        {/* FOOTER */}
        <footer className="footer">

          <Typography>
            📚 LearnHub — Student Learning Portal
          </Typography>

          <Typography variant="body2">
            Learn new skills and build your future.
          </Typography>

        </footer>

      </main>
    </div>
  );
}

export default App;