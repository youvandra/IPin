"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../header/Header";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "#111010", // Black background color
}));

interface Props {
  children: React.ReactNode;
}

export default function BlackLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainWrapper className="mainwrapper">
      <PageWrapper className="page-wrapper">
        <Header isDarkBackground={true} />
        <Container sx={{ paddingTop: "20px", maxWidth: "1200px" }}>
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}