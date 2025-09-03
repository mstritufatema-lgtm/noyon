export const metadata = {
  title: "FB Video Downloader",
  description: "Download Facebook videos easily with RapidAPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
