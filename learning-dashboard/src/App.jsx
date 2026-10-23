import { useState } from "react";

import {
  Avatar,
  Badge,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Switch,
  Typography,
} from "@mui/material";

import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const courses = [
    {
      name: "React JS",
      progress: 80,
      icon: "⚛️",
    },
    {
      name: "Java Programming",
      progress: 65,
      icon: "☕",
    },
    {
      name: "Database Management",
      progress: 50,
      icon: "🗄️",
    },
    {
      name: "Web Development",
      progress: 90,
      icon: "🌐",
    },
  ];

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="navbar-left">

          <IconButton
            className="menu-button"
            onClick={() => setDrawerOpen(true)}
          >
            ☰
          </IconButton>

          <Typography className="logo">
            🎓 StudentHub
          </Typography>

        </div>

        <div className="navbar-right">

          <Badge
            badgeContent={notifications ? 3 : 0}
            color="error"
          >
            <span className="notification-icon">
              🔔
            </span>
          </Badge>

          <Avatar className="navbar-avatar">
            RK
          </Avatar>

        </div>

      </header>

      {/* ================= DRAWER ================= */}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >

        <div className="drawer">

          <div className="drawer-profile">

            <Avatar className="large-avatar">
              RK
            </Avatar>

            <Typography variant="h6">
              Riya Kamble
            </Typography>

            <Typography variant="body2">
              Computer Science Student
            </Typography>

          </div>

          <Divider />

          <List>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary="🏠 Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary="📚 My Courses" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary="📝 Assignments" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary="📊 Progress" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary="⚙️ Settings" />
              </ListItemButton>
            </ListItem>

          </List>

        </div>

      </Drawer>

      {/* ================= MAIN ================= */}

      <main className="main">

        {/* Welcome Section */}

        <section className="welcome">

          <div>

            <Typography
              variant="h3"
              className="welcome-title"
            >
              Welcome Back, Riya! 👋
            </Typography>

            <Typography className="welcome-text">
              Continue learning and achieve your goals.
            </Typography>

          </div>

          <Avatar className="welcome-avatar">
            RK
          </Avatar>

        </section>

        {/* ================= STATS ================= */}

        <section className="stats">

          <Paper className="stat-card">

            <div className="stat-icon">📚</div>

            <Typography variant="h5">
              4
            </Typography>

            <Typography>
              Enrolled Courses
            </Typography>

          </Paper>

          <Paper className="stat-card">

            <div className="stat-icon">✅</div>

            <Typography variant="h5">
              18
            </Typography>

            <Typography>
              Completed Lessons
            </Typography>

          </Paper>

          <Paper className="stat-card">

            <div className="stat-icon">🏆</div>

            <Typography variant="h5">
              12
            </Typography>

            <Typography>
              Achievements
            </Typography>

          </Paper>

          <Paper className="stat-card">

            <div className="stat-icon">🔥</div>

            <Typography variant="h5">
              7
            </Typography>

            <Typography>
              Day Streak
            </Typography>

          </Paper>

        </section>

        {/* ================= COURSE + PROFILE ================= */}

        <section className="content-grid">

          {/* Course List */}

          <Paper className="courses-card">

            <Typography
              variant="h5"
              className="section-title"
            >
              My Courses
            </Typography>

            <Typography className="section-subtitle">
              Track your learning progress
            </Typography>

            <List>

              {courses.map((course) => (

                <ListItem
                  key={course.name}
                  className="course-item"
                  secondaryAction={
                    <CircularProgress
                      variant="determinate"
                      value={course.progress}
                    />
                  }
                >

                  <ListItemAvatar>

                    <Avatar className="course-avatar">
                      {course.icon}
                    </Avatar>

                  </ListItemAvatar>

                  <ListItemText
                    primary={course.name}
                    secondary={`${course.progress}% completed`}
                  />

                </ListItem>

              ))}

            </List>

          </Paper>

          {/* Profile */}

          <Paper className="profile-card">

            <Avatar className="profile-avatar">
              RK
            </Avatar>

            <Typography
              variant="h5"
              className="profile-name"
            >
              Riya Kamble
            </Typography>

            <Typography className="profile-role">
              Computer Science Student
            </Typography>

            <Divider className="profile-divider" />

            <div className="profile-info">

              <Typography>
                📧 riya@example.com
              </Typography>

              <Typography>
                🎓 Computer Science Engineering
              </Typography>

              <Typography>
                📍 Maharashtra, India
              </Typography>

            </div>

            <Button
              variant="contained"
              fullWidth
              className="profile-button"
            >
              View Profile
            </Button>

          </Paper>

        </section>

        {/* ================= SETTINGS ================= */}

        <Paper className="settings-card">

          <Typography
            variant="h5"
            className="section-title"
          >
            Settings
          </Typography>

          <Typography className="section-subtitle">
            Customize your learning dashboard
          </Typography>

          {/* Notification Switch */}

          <div className="setting-row">

            <div>

              <Typography variant="h6">
                🔔 Notifications
              </Typography>

              <Typography variant="body2">
                Receive updates about courses and assignments.
              </Typography>

            </div>

            <Switch
              checked={notifications}
              onChange={(event) =>
                setNotifications(event.target.checked)
              }
            />

          </div>

          {/* Theme Switch */}

          <div className="setting-row">

            <div>

              <Typography variant="h6">
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </Typography>

              <Typography variant="body2">
                Switch between light and dark themes.
              </Typography>

            </div>

            <Switch
              checked={darkMode}
              onChange={(event) =>
                setDarkMode(event.target.checked)
              }
            />

          </div>

        </Paper>

        {/* ================= OVERALL PROGRESS ================= */}

        <Paper className="progress-card">

          <div className="progress-content">

            <div>

              <Typography
                variant="h5"
                className="section-title"
              >
                Overall Learning Progress
              </Typography>

              <Typography className="section-subtitle">
                Keep learning to reach your target!
              </Typography>

              <Typography
                variant="h3"
                className="progress-number"
              >
                72%
              </Typography>

            </div>

            <CircularProgress
              variant="determinate"
              value={72}
              size={150}
              thickness={5}
            />

          </div>

        </Paper>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <Typography>
          🎓 StudentHub
        </Typography>

        <Typography variant="body2">
          Learn today. Grow tomorrow.
        </Typography>

      </footer>

    </div>
  );
}

export default App;