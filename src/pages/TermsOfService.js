import React from "react";
import { Container, Typography, Box, Paper, List, ListItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Link } from "react-router-dom";

function TermsOfService() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box mb={4} display="flex" alignItems="center">
        <Link
          to="/progressionfit"
          style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <ArrowBackIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" color="primary">
            Back to ProgressionFit
          </Typography>
        </Link>
      </Box>

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Terms of Service for ProgressionFit
      </Typography>

      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        Effective Date: {currentDate}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to ProgressionFit! By using our app, you agree to the following terms and
          conditions.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By using ProgressionFit, you confirm that you have read, understood, and agree to be bound
          by these Terms of Service.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          2. User Accounts & Responsibilities
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              • You must provide accurate information when registering.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • You are responsible for keeping your account secure.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • You agree to use the app responsibly and not engage in any misuse or hacking
              attempts.
            </Typography>
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          3. Health & Safety Disclaimer
        </Typography>
        <Box display="flex" sx={{ mb: 2 }}>
          <WarningAmberIcon color="warning" sx={{ mr: 2, fontSize: 30 }} />
          <Typography variant="body1">
            ProgressionFit provides fitness recommendations, but it is not a substitute for
            professional medical advice. Always consult a healthcare professional before making any
            significant changes to your workout routine.
          </Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          4. Data Usage & Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Your personal data is protected under our{" "}
          <Link to="/progressionfit/privacy-policy">Privacy Policy</Link>. We do not sell or share
          your personal information.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          5. Termination of Use
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to suspend or terminate your account if you violate any of these
          terms.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          6. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          ProgressionFit may update these terms at any time. You will be notified of major changes.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For questions or concerns, email us at{" "}
          <a href="mailto:balazs@balazskis.com">balazs@balazskis.com</a>.
        </Typography>
      </Paper>
    </Container>
  );
}

export default TermsOfService;
