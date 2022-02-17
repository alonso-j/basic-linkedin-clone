import { Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ListItem from "./ListItem";

const List = ({ results }) => {
  return (
    <Card sx={{ minWidth: 275, borderRadius: "10px" }}>
      <CardContent sx={{ padding: "1rem 0 1rem 1rem" }}>
        <Box sx={{ paddingLeft: "1rem" }}>
          <Typography variant="h4" fontWeight="500">
            People
          </Typography>
        </Box>
        {results.map((result) => (
          <ListItem key={result.id} result={result} />
        ))}
      </CardContent>
    </Card>
  );
};

export default List;
