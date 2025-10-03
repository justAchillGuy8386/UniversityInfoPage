import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Đại học ABC - Cổng thông tin chính thức",
  description: "Trường đại học hàng đầu với hơn 25 năm kinh nghiệm đào tạo. Chương trình đào tạo đa dạng, đội ngũ giảng viên chất lượng cao, cơ sở vật chất hiện đại.",
  keywords: "đại học, tuyển sinh, đào tạo, khoa học, kỹ thuật, kinh tế, y khoa, nghệ thuật",
  authors: [{ name: "Đại học ABC" }],
  openGraph: {
    title: "Đại học ABC - Cổng thông tin chính thức",
    description: "Trường đại học hàng đầu với hơn 25 năm kinh nghiệm đào tạo",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
