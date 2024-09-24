import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";

const UserProfileCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px auto",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="Background"
        height="140"
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      />
      <CardContent>
        <Avatar
          sx={{ bgcolor: blue[500], width: 60, height: 60, margin: "0 auto" }}
        >
          U
        </Avatar>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ marginTop: 2 }}
        >
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Software Engineer
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, width: "100%" }}
        >
          Follow
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
