"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid2";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I am Allen Spring</title>
        <meta
          name="description"
          content="👋 Passionate about coding, I thrive on bringing innovative ideas to life through programming"
        />
      </Head>
      <div className="container mx-auto p-4">
        <Grid container justifyContent="center" alignItems="center">
          <Grid>
            <Image
              src="/Tater.png"
              alt="Avatar of Tater eating a potato"
              width={200}
              height={200}
              className="rounded-full"
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid>
            <Typography
              variant="h4"
              align="center"
              className="text-3xl font-bold"
            >
              Hi, I am Allen Spring
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 8 }} className="mt-4">
            <List className="space-y-2">
              <ListItem>
                <ListItemText
                  primary="👋 Passionate about coding, I thrive on bringing innovative ideas to life through programming"
                  className="text-gray-700"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      🛠️ Currently making:{" "}
                      <Link
                        href="tw2024"
                        className="text-blue-500 hover:underline"
                      >
                        2024 Taiwan Election Polls: Accurate Aggregation &
                        Analysis
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
