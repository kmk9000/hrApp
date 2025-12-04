import { Typography, Card } from "@mui/material";

export default function About() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        p: "2rem",
        m: "1rem",
        maxWidth: 800,
      }}
    >
      <Typography variant="h3" sx={{ justifyContent: "center" }}>
        About hrApp
      </Typography>
      <Typography variant="h5" sx={{ marginTop: "1rem", textAlign: "justify" }}>
        This is a simple HR management application for tracking employees. What
        <i> about</i> it, huh?
      </Typography>
      <Typography variant="bodyJustified">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Donec auctor, lorem sed
        euismod euismod, mi ex fringilla sapien, vel molestie justo lectus eu
        turpis. Nam lobortis sapien non tempus pellentesque. Sed tincidunt
        tortor consequat mauris feugiat, non mattis quam dictum. Mauris suscipit
        dui vel maximus molestie. Aenean auctor semper congue.
      </Typography>
      <Typography variant="bodyJustified">
        Mauris sollicitudin risus at placerat suscipit. Donec in ullamcorper
        nibh, sit amet tincidunt lacus. Praesent aliquam leo scelerisque purus
        euismod, vitae facilisis justo commodo. Nulla erat erat, pulvinar quis
        ornare ultrices, sodales non turpis. Nam purus leo, hendrerit ut elit
        nec, ullamcorper luctus tortor. Curabitur sed sapien sit amet felis
        consectetur facilisis. Aenean eu sollicitudin purus.
      </Typography>
      <Typography variant="bodyJustified">
        Aliquam erat volutpat. Nunc semper diam ex, feugiat bibendum nulla
        bibendum id. Pellentesque et urna erat. Phasellus vehicula neque sit
        amet scelerisque ornare. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Donec nunc orci, scelerisque
        sed dui eget, pellentesque aliquam ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Proin non diam
        nunc.
      </Typography>
      <Typography variant="bodyJustified">
        Phasellus sed metus eu diam egestas convallis eu pulvinar nibh.
        Vestibulum diam ipsum, viverra ut congue sed, imperdiet nec nibh. Nullam
        tempor metus in consectetur ullamcorper. Sed varius orci vel felis
        dapibus imperdiet. Etiam rutrum ac turpis ac posuere. Etiam gravida,
        enim sed venenatis tristique, tortor leo condimentum libero, ultricies
        ornare nisi enim non urna. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Ut felis ex, pretium vitae
        magna quis, varius convallis nunc. In hac habitasse platea dictumst.
        Vivamus malesuada auctor eleifend. Phasellus malesuada rhoncus diam,
        quis posuere lacus dignissim mollis. Vivamus
      </Typography>
    </Card>
  );
}
