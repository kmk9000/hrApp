import { Typography, Button } from "@mui/material";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}
