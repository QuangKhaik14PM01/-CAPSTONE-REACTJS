import React from 'react'

export default function News() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-2xl w-full">
          <h2 className="text-3xl font-semibold mb-6">Tin Tức</h2>
          <div className="mb-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Khuyến mãi vé xem phim</h3>
              <p className="text-gray-700">
                Đừng bỏ lỡ cơ hội nhận vé xem phim miễn phí khi mua combo đồ ăn và thức uống tại
                rạp chiếu phim của chúng tôi!
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Bí mật đằng sau phim bom tấn</h3>
              <p className="text-gray-700">
                Chúng tôi sẽ chia sẻ những bí mật hậu trường và những câu chuyện thú vị từ đội ngũ
                làm phim.
              </p>
            </div>
            {/* Thêm các bài viết khác tương tự */}
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Tin tức nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded overflow-hidden">
                <img
                  src="https://banner2.cleanpng.com/20180208/esw/kisspng-logo-film-clapperboard-this-cartoon-brand-popcorn-movie-tickets-5a7be73c731d53.0927722515180695644715.jpg"
                  alt="Thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Bắt đầu mùa phim mới</h3>
                  <p className="text-gray-700">
                   Sắp khởi chiếu
                  </p>
                </div>
              </div>
              {/* Thêm các tin tức mới khác tương tự */}
            </div>
          </div>
        </div>
      </div>
    )
}
