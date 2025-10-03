import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section 
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20"
        style={{ backgroundImage: "url('/harvard.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-black font-bold mb-6">Chào mừng đến với Đại học Harvard</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="bg-blue-600 text-w px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Tìm hiểu tuyển sinh
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Về chúng tôi
            </Link>
          </div>  
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tại sao chọn chúng tôi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Chương trình đào tạo đa dạng</h3>
              <p className="text-gray-600">Nhiều ngành học phong phú từ kỹ thuật, kinh tế đến nghệ thuật</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Đội ngũ giảng viên chất lượng</h3>
              <p className="text-gray-600">Giảng viên có trình độ cao, kinh nghiệm thực tế</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cơ sở vật chất hiện đại</h3>
              <p className="text-gray-600">Phòng học, thư viện, phòng thí nghiệm được trang bị đầy đủ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tin tức mới nhất</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: "url('/harvard-2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Thông báo tuyển sinh năm 2024</h3>
                <p className="text-gray-600 mb-4">Thông tin chi tiết về kỳ tuyển sinh đại học năm 2024...</p>
                <span className="text-sm text-blue-600">15/12/2024</span>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: "url('/harvard-3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hội thảo khoa học quốc tế</h3>
                <p className="text-gray-600 mb-4">Tham gia hội thảo khoa học với các chuyên gia hàng đầu...</p>
                <span className="text-sm text-blue-600">10/12/2024</span>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: "url('/harvard-4.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lễ tốt nghiệp khóa 2024</h3>
                <p className="text-gray-600 mb-4">Thông tin về lễ tốt nghiệp và trao bằng cho sinh viên...</p>
                <span className="text-sm text-blue-600">05/12/2024</span>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/news" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Xem tất cả tin tức
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg">Sinh viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Giảng viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Chuyên ngành</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
