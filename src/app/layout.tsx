"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "@/settings/createMuiTheme";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: '#000' }}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Container>
              {children}
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

