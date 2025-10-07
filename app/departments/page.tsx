export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Khoa Công nghệ Thông tin",
      description: "Đào tạo chuyên gia về lập trình, phát triển phần mềm và công nghệ số",
      programs: ["Khoa học Máy tính", "Công nghệ Thông tin", "An toàn Thông tin"],
      students: 2500,
      faculty: 45,
      image: "bg-gradient-to-r from-blue-400 to-purple-500"
    },
    {
      id: 2,
      name: "Khoa Kinh tế",
      description: "Đào tạo chuyên gia về quản lý kinh doanh, tài chính và marketing",
      programs: ["Quản trị Kinh doanh", "Tài chính Ngân hàng", "Marketing"],
      students: 1800,
      faculty: 35,
      image: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      id: 3,
      name: "Khoa Y khoa",
      description: "Đào tạo bác sĩ và chuyên gia y tế có trình độ cao",
      programs: ["Y đa khoa", "Dược học", "Điều dưỡng"],
      students: 1200,
      faculty: 60,
      image: "bg-gradient-to-r from-red-400 to-pink-500"
    },
    {
      id: 4,
      name: "Khoa Kỹ thuật",
      description: "Đào tạo kỹ sư trong các lĩnh vực kỹ thuật và công nghệ",
      programs: ["Kỹ thuật Điện", "Kỹ thuật Cơ khí", "Kỹ thuật Xây dựng"],
      students: 2000,
      faculty: 50,
      image: "bg-gradient-to-r from-orange-400 to-red-500"
    },
    {
      id: 5,
      name: "Khoa Nghệ thuật",
      description: "Đào tạo nghệ sĩ và chuyên gia trong lĩnh vực nghệ thuật",
      programs: ["Thiết kế Đồ họa", "Âm nhạc", "Hội họa"],
      students: 800,
      faculty: 25,
      image: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      id: 6,
      name: "Khoa Khoa học Tự nhiên",
      description: "Đào tạo chuyên gia về toán học, vật lý và hóa học",
      programs: ["Toán học", "Vật lý", "Hóa học"],
      students: 1500,
      faculty: 40,
      image: "bg-gradient-to-r from-teal-400 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Khoa & Chuyên ngành</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Khám phá các khoa và chuyên ngành đào tạo đa dạng tại trường chúng tôi
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-lg font-semibold">Khoa</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">18+</div>
              <div className="text-lg font-semibold">Chuyên ngành</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">9,800+</div>
              <div className="text-lg font-semibold">Sinh viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">255</div>
              <div className="text-lg font-semibold">Giảng viên</div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className={`h-48 ${dept.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{dept.students.toLocaleString()}</div>
                    <div className="text-lg">Sinh viên</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Chuyên ngành:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.programs.map((program, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{dept.faculty} giảng viên</span>
                    <span>{dept.students.toLocaleString()} sinh viên</span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chương trình đào tạo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cử nhân</h3>
              <p className="text-gray-600 text-sm">Chương trình đại học 4 năm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Thạc sĩ</h3>
              <p className="text-gray-600 text-sm">Chương trình sau đại học 2 năm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tiến sĩ</h3>
              <p className="text-gray-600 text-sm">Chương trình nghiên cứu sinh</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Chứng chỉ</h3>
              <p className="text-gray-600 text-sm">Chương trình ngắn hạn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lĩnh vực nghiên cứu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Trí tuệ Nhân tạo</h3>
              <p className="text-gray-600 mb-4">
                Nghiên cứu về machine learning, deep learning và ứng dụng AI trong thực tế
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Computer Vision</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Kinh tế Số</h3>
              <p className="text-gray-600 mb-4">
                Nghiên cứu về fintech, blockchain và ứng dụng công nghệ trong kinh tế
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Fintech</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Blockchain</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Digital Banking</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Y học Hiện đại</h3>
              <p className="text-gray-600 mb-4">
                Nghiên cứu về y học cá thể hóa, telemedicine và công nghệ y tế
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Telemedicine</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Precision Medicine</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Medical AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
