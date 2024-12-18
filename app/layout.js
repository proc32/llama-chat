import { Analytics } from "@vercel/analytics/react";
import "../src/styles/globals.css";

export const metadata = {
  title: "Chat with Meta Llama 3.1 on Replicate",
  openGraph: {
    title: "Chat with Meta Llama 3.1 on Replicate",
    description: "Llama 3.1 is the latest language model from Meta.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Omer | ChatBot </title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
