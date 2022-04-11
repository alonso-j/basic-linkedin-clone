import Link from "@mui/material/Link";

const CardLink = ({ text, url }) => {
  return (
    <>
      <Link
        href={url}
        underline="none"
        color="text.secondary"
        sx={{
          padding: "14px 0",
          textAlign: "center",
          fontWeight: "600",
          borderTop: "1px solid #e0e0e0",
          "&:hover": {
            backgroundColor: "rgba(224, 224, 224, 0.506)",
          },
        }}
      >
        {text}
      </Link>
    </>
  );
};

export default CardLink;
