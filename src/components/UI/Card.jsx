import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function BasicCard({ result }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {result.name} {bull} 2nd
        </Typography>
        <Typography color="text.secondary">{result.job_title}</Typography>
        <Typography color="text.secondary">{result.country}</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          obcaecati?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Connect</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;
