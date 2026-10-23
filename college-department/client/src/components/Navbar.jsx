import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          minHeight: "550px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "white",

          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.55)
            ),
            url("/dypcetweb.jpg")
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          {/* COLLEGE NAME */}

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.2rem",
                md: "4rem",
              },
            }}
          >
            D. Y. Patil College of Engineering
            and Technology
          </Typography>

          {/* DEPARTMENT */}

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontSize: {
                xs: "1.2rem",
                md: "1.5rem",
              },
            }}
          >
            Department of Computer Science & Engineering
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              mt: 3,
              maxWidth: 650,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Empowering students with knowledge, innovation
            and industry-ready skills.
          </Typography>

          {/* BUTTON */}

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            Explore Department
          </Button>
        </Container>
      </Box>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          Welcome to the CSE Department
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          sx={{
            maxWidth: 800,
            mx: "auto",
            mt: 2,
            lineHeight: 1.8,
          }}
        >
          The Department of Computer Science and Engineering
          focuses on quality technical education, practical
          learning, research and innovation. Our goal is to
          prepare students for successful careers in the
          rapidly evolving technology industry.
        </Typography>

        {/* =====================================================
            THREE CARDS
        ===================================================== */}

        <Grid
          container
          spacing={3}
          sx={{
            mt: 5,
          }}
        >
          {/* ACADEMICS */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 4,
                }}
              >
                <SchoolIcon
                  sx={{
                    fontSize: 55,
                  }}
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                  }}
                >
                  Academics
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Quality education with strong theoretical
                  and practical foundations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* RESEARCH */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 4,
                }}
              >
                <ScienceIcon
                  sx={{
                    fontSize: 55,
                  }}
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                  }}
                >
                  Research
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Encouraging innovation, research and
                  exploration of emerging technologies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACULTY */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 4,
                }}
              >
                <GroupsIcon
                  sx={{
                    fontSize: 55,
                  }}
                  color="primary"
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                  }}
                >
                  Faculty
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Experienced faculty members supporting
                  student growth and development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* =====================================================
          NEWS & ANNOUNCEMENTS
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#f5f7fa",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
          >
            News & Announcements
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              mt: 4,
            }}
          >
            {/* NEWS 1 */}

            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
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
                    Applications are open for upcoming
                    academic programs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* NEWS 2 */}

            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    Department Activities
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    Workshops, seminars and technical events
                    for students.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* NEWS 3 */}

            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    Placements
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    Career opportunities and placement
                    activities for students.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#172554",
          color: "white",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            D. Y. Patil College of Engineering and Technology
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Department of Computer Science & Engineering
          </Typography>

          <Typography
            sx={{
              mt: 2,
              opacity: 0.8,
            }}
          >
            Kolhapur, Maharashtra, India
          </Typography>

          <Typography
            sx={{
              mt: 3,
              opacity: 0.7,
              fontSize: "0.9rem",
            }}
          >
            © 2026 Department of Computer Science &
            Engineering
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Home;