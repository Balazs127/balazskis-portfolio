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
  Link as MuiLink,
  Divider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DiamondIcon from "@mui/icons-material/Diamond";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function ProgressionFit() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        ProgressionFit
      </Typography>

      <Typography variant="h6" paragraph align="center" sx={{ mb: 5 }}>
        Welcome to ProgressionFit, your smart fitness companion! 🚀
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          What is ProgressionFit?
        </Typography>
        <Typography variant="body1" paragraph>
          ProgressionFit is an intelligent workout tracking and recommendation app designed to help
          you progress efficiently in your fitness journey. Whether you're lifting weights, doing
          cardio, or training with a coach, ProgressionFit analyzes your performance and provides
          personalized workout adjustments.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="AI-Powered Suggestions"
              secondary="Adjusts weights, reps, and sets based on your progress."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Exercise Tracking"
              secondary="Log workouts easily and track improvements over time."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Trainer Support"
              secondary="Coaches can provide input and optimize your workout plans."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Equipment-Based Recommendations"
              secondary="Get suggestions based on available gym equipment."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Performance Analytics"
              secondary="View progress charts and get insights on your training."
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Who Can Use ProgressionFit?
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Gym Members"
              secondary="Track progress and receive adaptive workouts."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Trainers/Coaches"
              secondary="Manage clients' programs and monitor progress."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Fitness Enthusiasts"
              secondary="Optimize workouts and stay consistent with data-driven training."
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Get Started
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <RocketLaunchIcon color="primary" sx={{ mr: 2 }} />
          <Typography variant="body1">
            Stay ahead in your fitness journey! ProgressionFit is currently under development, but
            stay tuned for updates!
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <EmailIcon color="primary" sx={{ mr: 2 }} />
          <Typography variant="body1">
            For inquiries, reach out at{" "}
            <a href="mailto:balazs@balazskis.com">balazs@balazskis.com</a>.
          </Typography>
        </Box>
      </Paper>

      <Box textAlign="center" mt={4} sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        <Link to="/progressionfit/privacy-policy" style={{ textDecoration: "none" }}>
          <MuiLink component="span" color="primary">
            Privacy Policy
          </MuiLink>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link to="/progressionfit/terms-of-service" style={{ textDecoration: "none" }}>
          <MuiLink component="span" color="primary">
            Terms of Service
          </MuiLink>
        </Link>
      </Box>
    </Container>
  );
}

export default ProgressionFit;
