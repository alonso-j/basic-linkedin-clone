import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(() => ({
  height: "100%",
  width: "100%",
  padding: ".5rem",
  textTransform: "none",
  color: "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: "rgba(138, 138, 138, 0.08)",
  },
}));

const CardSocial = (props) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Item>
          <StyledButton variant="text">
            <ThumbUpOutlinedIcon sx={{ mr: 0.5 }} /> Like
          </StyledButton>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <StyledButton variant="text">
            <CommentOutlinedIcon sx={{ mr: 0.5 }} />
            Comment
          </StyledButton>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <StyledButton variant="text">
            <ShortcutOutlinedIcon sx={{ mr: 0.5 }} />
            Share
          </StyledButton>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <StyledButton variant="text">
            <NearMeIcon sx={{ mr: 0.5 }} />
            Send
          </StyledButton>
        </Item>
      </Grid>
    </Grid>
  );
};

export default CardSocial;
