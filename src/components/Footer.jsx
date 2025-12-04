import { Typography, Button, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "primary.main",
        color: "white",
        position: "relative",
      }}
    >
      <Typography variant="h7" gutterBottom>
        Copyright © 2025 Kalle Koivuniemi WP2025K. All rights reserved.
      </Typography>
      <Button
        variant="text"
        onClick={scrollToTop}
        className="scroll-to-top"
        startIcon={<ArrowUpwardIcon />}
        sx={{ position: "absolute", right: 16, color: "white" }}
      >
        Back to Top
      </Button>
    </Box>
  );
}
