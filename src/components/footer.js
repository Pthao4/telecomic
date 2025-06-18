import logo from "../img/logo.jpg";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Cột 1: Logo + giới thiệu */}
        <div className="">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <h2 className="text-xl font-bold tracking-wide">Telecomic</h2>
          </div>
          <p className="text-sm text-yellow-100 italic">
            Website chia sẻ truyện tranh miễn phí, chất lượng cao dành cho cộng đồng yêu truyện.
          </p>
        </div>
        <div className="flex justify-between md:col-span-3">

            {/* Cột 2: Liên kết nhanh */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Liên Kết</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-yellow-300 cursor-pointer">Trang Chủ</li>
                <li className="hover:text-yellow-300 cursor-pointer">Danh Mục</li>
                <li className="hover:text-yellow-300 cursor-pointer">Truyện Mới</li>
                <li className="hover:text-yellow-300 cursor-pointer">Truyện Hot</li>
              </ul>
            </div>

            {/* Cột 3: Thông tin */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Thông Tin</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-yellow-300 cursor-pointer">Giới Thiệu</li>
                <li className="hover:text-yellow-300 cursor-pointer">Liên Hệ</li>
                <li className="hover:text-yellow-300 cursor-pointer">Chính Sách</li>
                <li className="hover:text-yellow-300 cursor-pointer">Điều Khoản</li>
              </ul>
            </div>

            {/* Cột 4: Mạng xã hội */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Kết nối</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-yellow-300 cursor-pointer">Facebook</li>
                <li className="hover:text-yellow-300 cursor-pointer">Instagram</li>
                <li className="hover:text-yellow-300 cursor-pointer">Twitter</li>
                <li className="hover:text-yellow-300 cursor-pointer">Youtube</li>
              </ul>
            </div>
          </div>
        </div>

      <div className="border-t border-white border-opacity-20 mt-6 py-4 text-center text-sm text-yellow-100 bg-black bg-opacity-10">
        © {new Date().getFullYear()} Telecomic. All rights reserved.
      </div>
    </footer>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Footer />);

export default Footer;