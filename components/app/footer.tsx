import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-36">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            className="font-medium text-gray-900"
          >
            About Allen Spring
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am an engineering student who is interested in social issues. I
            like programming and creating some interesting things. I think
            programming is an art that can express one&aposs thoughts and
            emotions. I hope to be able to express myself through My skills can
            bring positive impact to society.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            className="font-medium text-gray-900"
          >
            Donate to save poor students
          </Typography>
          <List>
            <ListItem>
              <Link
                href="https://revolut.me/shaohey22h"
                aria-label="Donate via Revolut"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Revolut (credit card donation)
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Box className="text-center mt-4">
        <Typography variant="body2" color="text.secondary">
          Made with ❤️ in Finland 🇫🇮
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
