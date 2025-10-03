export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16"
      style={{ backgroundImage: "url('/harvard.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-6">Giới thiệu về Đại học Harvard</h1>
          <p className="text-xl max-w-3xl text-black mx-auto">
            Hơn 25 năm xây dựng và phát triển, chúng tôi tự hào là một trong những trường đại học hàng đầu
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lịch sử hình thành</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Đại học ABC được thành lập vào năm 1998 với sứ mệnh đào tạo nguồn nhân lực chất lượng cao 
                  phục vụ sự phát triển của đất nước. Từ những ngày đầu với chỉ 3 khoa và 500 sinh viên, 
                  đến nay chúng tôi đã phát triển thành một trường đại học đa ngành với hơn 15,000 sinh viên.
                </p>
                <p>
                  Trong suốt quá trình phát triển, chúng tôi luôn chú trọng đến việc nâng cao chất lượng đào tạo, 
                  đầu tư cơ sở vật chất và xây dựng đội ngũ giảng viên có trình độ cao. Nhiều thế hệ sinh viên 
                  tốt nghiệp từ trường đã trở thành những chuyên gia, nhà lãnh đạo trong các lĩnh vực khác nhau.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-80 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">25+</div>
                <div className="text-xl">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
              <p className="text-gray-700">
                Đào tạo nguồn nhân lực chất lượng cao, có kiến thức chuyên môn vững vàng, 
                kỹ năng thực hành tốt và phẩm chất đạo đức cao. Nghiên cứu khoa học, 
                chuyển giao công nghệ phục vụ phát triển kinh tế - xã hội của đất nước.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
              <p className="text-gray-700">
                Trở thành trường đại học hàng đầu trong khu vực, được công nhận quốc tế về chất lượng đào tạo 
                và nghiên cứu khoa học. Là trung tâm đào tạo, nghiên cứu và chuyển giao công nghệ tiên tiến, 
                góp phần quan trọng vào sự phát triển bền vững của đất nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Thành tựu nổi bật</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Tỷ lệ sinh viên ra trường có việc làm</div>
              <div className="text-gray-600">Sinh viên tốt nghiệp có việc làm trong vòng 6 tháng</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Chương trình đào tạo</div>
              <div className="text-gray-600">Các ngành học đa dạng từ cử nhân đến tiến sĩ</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-lg font-semibold mb-2">Dự án nghiên cứu</div>
              <div className="text-gray-600">Nghiên cứu khoa học được tài trợ hàng năm</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-lg font-semibold mb-2">Giải thưởng quốc tế</div>
              <div className="text-gray-600">Giải thưởng về chất lượng đào tạo và nghiên cứu</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}