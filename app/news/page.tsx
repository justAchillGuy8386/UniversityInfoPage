export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Thông báo tuyển sinh năm 2024",
      excerpt: "Thông tin chi tiết về kỳ tuyển sinh đại học năm 2024, bao gồm các ngành học, chỉ tiêu tuyển sinh và phương thức xét tuyển.",
      date: "15/12/2024",
      category: "Tuyển sinh",
      image: "bg-gradient-to-r from-blue-400 to-purple-500"
    },
    {
      id: 2,
      title: "Hội thảo khoa học quốc tế về AI",
      excerpt: "Tham gia hội thảo khoa học với các chuyên gia hàng đầu thế giới về trí tuệ nhân tạo và machine learning.",
      date: "10/12/2024",
      category: "Khoa học",
      image: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Lễ tốt nghiệp khóa 2024",
      excerpt: "Thông tin về lễ tốt nghiệp và trao bằng cho sinh viên tốt nghiệp khóa 2024.",
      date: "05/12/2024",
      category: "Sự kiện",
      image: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Chương trình học bổng mới",
      excerpt: "Nhà trường công bố chương trình học bổng mới dành cho sinh viên có thành tích xuất sắc.",
      date: "01/12/2024",
      category: "Học bổng",
      image: "bg-gradient-to-r from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Hợp tác với trường đại học Nhật Bản",
      excerpt: "Ký kết thỏa thuận hợp tác với Đại học Tokyo về chương trình trao đổi sinh viên.",
      date: "28/11/2024",
      category: "Hợp tác",
      image: "bg-gradient-to-r from-indigo-400 to-purple-500"
    },
    {
      id: 6,
      title: "Cuộc thi lập trình sinh viên",
      excerpt: "Cuộc thi lập trình ACM-ICPC dành cho sinh viên với giải thưởng hấp dẫn.",
      date: "25/11/2024",
      category: "Cuộc thi",
      image: "bg-gradient-to-r from-teal-400 to-green-500"
    }
  ];

  const categories = ["Tất cả", "Tuyển sinh", "Khoa học", "Sự kiện", "Học bổng", "Hợp tác", "Cuộc thi"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Tin tức & Thông báo</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Cập nhật những thông tin mới nhất về trường, sự kiện và hoạt động của sinh viên
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  category === "Tất cả"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className={`h-48 ${article.image}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition">
                    Đọc thêm →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Xem thêm tin tức
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin tức</h2>
            <p className="text-gray-600 mb-8">
              Nhận thông tin mới nhất về trường, sự kiện và cơ hội học tập qua email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
