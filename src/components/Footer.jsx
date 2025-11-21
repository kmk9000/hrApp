export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <h3>Copyright © 2025 Kalle Koivuniemi WP2025K. All rights reserved.</h3>
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑ Back to Top
      </button>
    </footer>
  );
}
