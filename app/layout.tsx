import Header from "@/components/Header";
import "./globals.css";
import Prompt from "@/components/Prompt";

export const metadata = {
  title: "Imaginize",
  description: "Bring your imagination to reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER / NAVBAR */}
        <Header />
        {/* HEADER / NAVBAR ENDS */}

        {/* PROMPT FOR USER */}
        <Prompt />
        {/* PROMPT FOR USER ENDS */}

        {/* PAGE CONTENT */}
        {/* PAGE CONTENT ENDS */}
        {children}
      </body>
    </html>
  );
}
