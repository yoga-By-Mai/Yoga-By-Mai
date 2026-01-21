export const metadata = {
  title: "Yoga By Mai",
  description: "Nền tảng yoga giúp cân bằng thể chất và tinh thần",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
