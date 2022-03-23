import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyCard from "../UI/MyCard";

export default function MediaCard() {
  return (
    <MyCard>
      <CardMedia component="img" height="140" alt="profile cover photo" />
      <CardContent
        sx={{
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Profile Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Work in progress...
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <span>Hyperlinks</span>
      </CardContent>
      <CardContent
        sx={{
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Button size="small">My Items</Button>
      </CardContent>
    </MyCard>
  );
}
