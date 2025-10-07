export default function AdmissionsPage() {
  const admissionMethods = [
    {
      id: 1,
      name: "Xét tuyển bằng điểm thi THPT",
      description: "Sử dụng kết quả kỳ thi tốt nghiệp THPT quốc gia",
      requirements: ["Điểm thi THPT", "Điểm trung bình lớp 12", "Hạnh kiểm"],
      deadline: "31/07/2024"
    },
    {
      id: 2,
      name: "Xét tuyển học bạ",
      description: "Xét tuyển dựa trên kết quả học tập THPT",
      requirements: ["Điểm trung bình 3 năm THPT", "Điểm môn chuyên ngành", "Hạnh kiểm"],
      deadline: "15/08/2024"
    },
    {
      id: 3,
      name: "Xét tuyển bằng chứng chỉ quốc tế",
      description: "Xét tuyển dựa trên các chứng chỉ tiếng Anh quốc tế",
      requirements: ["IELTS 6.0+", "TOEFL 80+", "SAT 1200+"],
      deadline: "30/08/2024"
    }
  ];

  const programs = [
    {
      id: 1,
      name: "Khoa học Máy tính",
      code: "CS",
      duration: "4 năm",
      tuition: "15,000,000 VNĐ/năm",
      seats: 200,
      requirements: "Toán, Lý, Hóa hoặc Toán, Lý, Anh"
    },
    {
      id: 2,
      name: "Quản trị Kinh doanh",
      code: "BA",
      duration: "4 năm",
      tuition: "12,000,000 VNĐ/năm",
      seats: 150,
      requirements: "Toán, Văn, Anh hoặc Toán, Lý, Anh"
    },
    {
      id: 3,
      name: "Y đa khoa",
      code: "MD",
      duration: "6 năm",
      tuition: "25,000,000 VNĐ/năm",
      seats: 100,
      requirements: "Toán, Lý, Hóa, Sinh"
    },
    {
      id: 4,
      name: "Kỹ thuật Điện",
      code: "EE",
      duration: "4 năm",
      tuition: "14,000,000 VNĐ/năm",
      seats: 120,
      requirements: "Toán, Lý, Hóa"
    },
    {
      id: 5,
      name: "Thiết kế Đồ họa",
      code: "GD",
      duration: "4 năm",
      tuition: "13,000,000 VNĐ/năm",
      seats: 80,
      requirements: "Văn, Anh, Năng khiếu"
    },
    {
      id: 6,
      name: "Toán học",
      code: "MATH",
      duration: "4 năm",
      tuition: "11,000,000 VNĐ/năm",
      seats: 100,
      requirements: "Toán, Lý, Hóa"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16"
        style={{ backgroundImage: "url('/harvard.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-6">Thông tin Tuyển sinh</h1>
          <p className="text-xl max-w-3xl mx-auto text-black ">
            Khám phá các chương trình đào tạo và phương thức tuyển sinh tại trường chúng tôi
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lịch trình tuyển sinh</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Đăng ký</h3>
              <p className="text-gray-600 text-sm">01/03 - 31/05/2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Thi tuyển</h3>
              <p className="text-gray-600 text-sm">15/06 - 30/06/2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Công bố kết quả</h3>
              <p className="text-gray-600 text-sm">15/07/2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nhập học</h3>
              <p className="text-gray-600 text-sm">01/09/2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Phương thức tuyển sinh</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {admissionMethods.map((method) => (
              <div key={method.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{method.name}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                  <ul className="space-y-1">
                    {method.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-600">
                    <strong>Hạn nộp hồ sơ:</strong> {method.deadline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chương trình đào tạo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{program.name}</h3>
                    <p className="text-gray-600 text-sm">Mã ngành: {program.code}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {program.seats} chỉ tiêu
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thời gian:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Học phí:</span>
                    <span className="font-medium text-green-600">{program.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tổ hợp:</span>
                    <span className="font-medium text-sm">{program.requirements}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Đăng ký ngay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chương trình học bổng</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Học bổng Xuất sắc</h3>
              <p className="text-gray-600 mb-4">Dành cho thí sinh có điểm thi cao nhất</p>
              <div className="text-2xl font-bold text-green-600 mb-2">100% học phí</div>
              <p className="text-sm text-gray-500">Áp dụng cho 4 năm học</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Học bổng Tài năng</h3>
              <p className="text-gray-600 mb-4">Dành cho thí sinh có thành tích đặc biệt</p>
              <div className="text-2xl font-bold text-green-600 mb-2">50% học phí</div>
              <p className="text-sm text-gray-500">Áp dụng cho 4 năm học</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Học bổng Khuyến khích</h3>
              <p className="text-gray-600 mb-4">Dành cho thí sinh có hoàn cảnh khó khăn</p>
              <div className="text-2xl font-bold text-green-600 mb-2">30% học phí</div>
              <p className="text-sm text-gray-500">Áp dụng cho 4 năm học</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Đăng ký tư vấn tuyển sinh</h2>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngành quan tâm</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Chọn ngành học</option>
                  <option>Khoa học Máy tính</option>
                  <option>Quản trị Kinh doanh</option>
                  <option>Y đa khoa</option>
                  <option>Kỹ thuật Điện</option>
                  <option>Thiết kế Đồ họa</option>
                  <option>Toán học</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Lời nhắn</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập câu hỏi hoặc yêu cầu tư vấn..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Gửi đăng ký tư vấn
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
