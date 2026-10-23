import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <Box
        sx={{
          minHeight: {
            xs: "600px",
            md: "650px",
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",

          color: "white",

          backgroundImage: `
            linear-gradient(
              rgba(5, 24, 55, 0.72),
              rgba(5, 24, 55, 0.72)
            ),
            url("/dypcetweb.jpg")
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative circle */}

        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            right: "-100px",
            top: "20%",
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          {/* SMALL LABEL */}

          <Chip
            label="DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING"
            sx={{
              mb: 3,
              px: 1,
              color: "white",
              backgroundColor: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.3)",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          />

          {/* COLLEGE NAME */}

          <Typography
            variant="h1"
            fontWeight="800"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
              },

              lineHeight: 1.1,

              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            D. Y. Patil College
          </Typography>

          <Typography
            variant="h3"
            fontWeight="400"
            sx={{
              mt: 1,

              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
            }}
          >
            of Engineering and Technology
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              mt: 3,
              maxWidth: 700,
              mx: "auto",

              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },

              lineHeight: 1.8,
              opacity: 0.92,
            }}
          >
            Empowering future engineers through technology,
            innovation, practical learning and research.
          </Typography>

          {/* BUTTONS */}

          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                backgroundColor: "#1976d2",
                fontWeight: "bold",

                "&:hover": {
                  backgroundColor: "#1565c0",
                  transform: "translateY(-2px)",
                },

                transition: "0.3s",
              }}
            >
              Explore Department
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                color: "white",
                borderColor: "rgba(255,255,255,0.7)",

                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          STATS SECTION
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          mt: -6,
          position: "relative",
          zIndex: 5,
        }}
      >
        <Card
          elevation={6}
          sx={{
            borderRadius: 4,
          }}
        >
          <Grid container>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  py: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                >
                  500+
                </Typography>

                <Typography color="text.secondary">
                  Students
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  py: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                >
                  30+
                </Typography>

                <Typography color="text.secondary">
                  Faculty
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  py: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                >
                  15+
                </Typography>

                <Typography color="text.secondary">
                  Years of Excellence
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  py: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                >
                  95%
                </Typography>

                <Typography color="text.secondary">
                  Placement Support
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 850,
            mx: "auto",
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            letterSpacing={2}
          >
            ABOUT THE DEPARTMENT
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Welcome to Computer Science & Engineering
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 3,
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            The Department of Computer Science and Engineering
            provides a strong foundation in computer science,
            software development and emerging technologies.
            We combine classroom learning with practical
            experience, projects, research and industry
            exposure to prepare students for the future.
          </Typography>
        </Box>

        {/* FEATURE CARDS */}

        <Grid
          container
          spacing={3}
          sx={{
            mt: 6,
          }}
        >
          {/* CARD 1 */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e5e7eb",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    backgroundColor: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SchoolIcon
                    sx={{
                      fontSize: 32,
                    }}
                    color="primary"
                  />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 3 }}
                >
                  Quality Academics
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Strong theoretical knowledge combined
                  with practical implementation and
                  hands-on learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* CARD 2 */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e5e7eb",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    backgroundColor: "#e8eaf6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ScienceIcon
                    sx={{
                      fontSize: 32,
                    }}
                    color="primary"
                  />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 3 }}
                >
                  Research & Innovation
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Encouraging students and faculty to explore
                  emerging technologies and innovative ideas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* CARD 3 */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e5e7eb",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    backgroundColor: "#e8f5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CodeIcon
                    sx={{
                      fontSize: 32,
                    }}
                    color="primary"
                  />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 3 }}
                >
                  Industry Ready Skills
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Building programming, development,
                  communication and problem-solving skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* =====================================================
          WHY CSE SECTION
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#f5f8fc",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                color="primary"
                fontWeight="bold"
                letterSpacing={2}
              >
                WHY CHOOSE CSE?
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                }}
              >
                Learn. Build. Innovate.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 3,
                  lineHeight: 1.8,
                }}
              >
                Our department encourages students to move
                beyond textbooks and create real-world
                solutions using technology.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 4,
                  borderRadius: 3,
                  px: 3,
                }}
              >
                Discover More
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                    }}
                  >
                    <TrendingUpIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                    />

                    <Typography
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      Innovation
                    </Typography>
                  </Card>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                    }}
                  >
                    <CodeIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                    />

                    <Typography
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      Technology
                    </Typography>
                  </Card>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                    }}
                  >
                    <GroupsIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                    />

                    <Typography
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      Teamwork
                    </Typography>
                  </Card>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                    }}
                  >
                    <SchoolIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                    />

                    <Typography
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      Learning
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          NEWS SECTION
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            letterSpacing={2}
          >
            LATEST UPDATES
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            News & Announcements
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ mt: 5 }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Chip
                  label="ADMISSIONS"
                  size="small"
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  Admissions Open
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Explore academic opportunities and
                  admission information for aspiring students.
                </Typography>

                <Button
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Chip
                  label="EVENTS"
                  size="small"
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  Technical Events
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Workshops, seminars, hackathons and
                  technical activities for students.
                </Typography>

                <Button
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Chip
                  label="PLACEMENTS"
                  size="small"
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  Career Opportunities
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Industry interaction, internships and
                  placement opportunities for students.
                </Typography>

                <Button
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <Box
        sx={{
          py: 9,
          color: "white",
          textAlign: "center",

          background:
            "linear-gradient(135deg, #0d47a1, #1976d2)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Build Your Future With Technology
          </Typography>

          <Typography
            sx={{
              mt: 2,
              opacity: 0.9,
              fontSize: "1.05rem",
            }}
          >
            Explore learning opportunities, research,
            projects and career pathways in Computer Science.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: "white",
              color: "#0d47a1",

              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Explore CSE
          </Button>
        </Container>
      </Box>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#071a36",
          color: "white",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src="/clglogo.png"
                alt="College Logo"
                sx={{
                  height: 70,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  opacity: 0.75,
                  lineHeight: 1.8,
                }}
              >
                Department of Computer Science &
                Engineering
              </Typography>

              <Typography
                sx={{
                  opacity: 0.65,
                  mt: 1,
                }}
              >
                D. Y. Patil College of Engineering and
                Technology, Kolhapur
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Quick Links
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.7 }}>
                Academics
              </Typography>

              <Typography sx={{ mt: 1, opacity: 0.7 }}>
                Faculty
              </Typography>

              <Typography sx={{ mt: 1, opacity: 0.7 }}>
                Research
              </Typography>

              <Typography sx={{ mt: 1, opacity: 0.7 }}>
                Admissions
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Contact
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  opacity: 0.7,
                  lineHeight: 1.8,
                }}
              >
                D. Y. Patil College of Engineering and
                Technology
                <br />
                Kolhapur, Maharashtra
                <br />
                India
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop:
                "1px solid rgba(255,255,255,0.12)",
              mt: 5,
              pt: 3,
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                opacity: 0.55,
                fontSize: "0.9rem",
              }}
            >
              © 2026 Department of Computer Science &
              Engineering. All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;