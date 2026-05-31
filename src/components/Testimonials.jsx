import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Precision Ed gave my daughter a Global Advantage we didn't know existed. The long-term strategy, the clarity on global admissions, and the mentorship from Ivy League students transformed her confidence.",
      by: "Parent of Grade 11 Student",
    },
    {
      id: 2,
      quote:
        "I discovered a level of Future Mastery I never imagined. AI, innovation, Olympiad prep suddenly made sense. Talking to students already studying abroad opened my eyes to what's possible.",
      by: "Grade 10 Student",
    },
    {
      id: 3,
      quote:
        "Precision Ed gave my son the Elite Readiness needed for NASA-level opportunities. The mentors showed him how top students build profiles for global research programs.",
      by: "Parent of Grade 12 Student",
    },
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 6, md: 8 },
        background: `
          radial-gradient(circle at 10% 20%,
          rgba(246,196,83,0.12) 0%,
          transparent 30%),

          radial-gradient(circle at 90% 80%,
          rgba(246,196,83,0.08) 0%,
          transparent 30%),

          #FCFAF5
        `,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Chip
            label="TESTIMONIALS"
            size="small"
            sx={{
              bgcolor: "#FFF7E3",
              color: "#B7791F",
              border: "1px solid #F6C453",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: 1,
            }}
          />

          <Typography
            sx={{
              mt: 2,
              fontWeight: 800,
              color: "#1F2937",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              lineHeight: 1.1,
            }}
          >
            Success Stories That Matter
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 600,
              mx: "auto",
              color: "#6B7280",
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.7,
            }}
          >
            Hear from students and parents who transformed
            their academic journey through mentorship,
            strategic guidance, and global opportunities.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: {
              xs: "wrap",
              lg: "nowrap",
            },
          }}
        >
          {testimonials.map((item, index) => (
            <Card
              key={item.id}
              elevation={0}
              sx={{
                flex: 1,
                minWidth: {
                  xs: "100%",
                  md: 300,
                },
                maxWidth: 360,
                background: "#FBF8F1",
                border: "1px solid rgba(246,196,83,0.25)",
                borderRadius: "24px",
                transition: "all .3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#F6C453",
                  boxShadow:
                    "0 16px 32px rgba(246,196,83,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  height: 4,
                  background:
                    "linear-gradient(90deg,#F6C453,#FFD87A,#F6C453)",
                }}
              />

              <CardContent
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{
                    fontSize: 36,
                    color: "#F6C453",
                    mb: 1.5,
                  }}
                />

                <Typography
                  sx={{
                    color: "#4B5563",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    flexGrow: 1,
                    mb: 3,
                  }}
                >
                  {item.quote}
                </Typography>

                <Divider sx={{ mb: 2.5 }} />

                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      fontSize: "0.85rem",
                      background:
                        "linear-gradient(135deg,#F6C453,#FFD87A)",
                      color: "#1F2937",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Avatar>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#1F2937",
                      }}
                    >
                      {item.by}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6B7280",
                        fontSize: "0.75rem",
                      }}
                    >
                      Precision Ed Community
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}