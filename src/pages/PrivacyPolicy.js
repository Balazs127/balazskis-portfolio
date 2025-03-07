import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DiamondIcon from "@mui/icons-material/Diamond";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
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
        Privacy Policy for ProgressionFit
      </Typography>

      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        Last updated: {currentDate}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          At ProgressionFit, we respect your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we collect, use, and safeguard your information
          when you use our application.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of data:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              <strong>Personal Information:</strong> Name, email, age, gender (optional).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <strong>Workout Data:</strong> Exercises performed, weights, reps, sets, and progress.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <strong>Device & Usage Data:</strong> Log files, IP addresses, and in-app
              interactions.
            </Typography>
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          2. How We Use Your Data
        </Typography>
        <Typography variant="body1" paragraph>
          We use your data to:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Provide personalized workout recommendations." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Track fitness progress and analyze trends." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Improve app functionality and user experience." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Ensure security and prevent fraudulent activity." />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          3. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement strict security measures to protect your personal information. Your data is
          encrypted and never shared without your consent.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          4. Your Rights
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="You can request access to your data and modify or delete it anytime." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="You can disable data collection by adjusting your app settings." />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          5. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions, email us at{" "}
          <a href="mailto:balazs@balazskis.com">balazs@balazskis.com</a>.
        </Typography>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy;
