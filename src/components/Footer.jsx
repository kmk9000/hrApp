import { Typography, Button, Box } from "@mui/material";

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
      }}
    >
      <Typography variant="h6" gutterBottom>
        Copyright © 2025 Kalle Koivuniemi WP2025K. All rights reserved.
      </Typography>
      <Button
        variant="contained"
        onClick={scrollToTop}
        className="scroll-to-top"
      >
        ↑ Back to Top
      </Button>
    </Box>
  );
}
