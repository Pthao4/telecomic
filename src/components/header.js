import logo from "../img/logo.jpg";
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Tên */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold tracking-wide">Telecomic</h1>
        </div>

        {/* Menu */}
        <nav className="relative">
          {/* Button menu mobile */}
          <button
            id="menuheader"
            className="sm:flex md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              Trang Chủ
            </li>
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              Danh Mục
            </li>
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              Truyện Mới
            </li>
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              Truyện Hot
            </li>
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              Liên Hệ
            </li>
            <li className="hover:text-yellow-300 transition-colors cursor-pointer">
              <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              </button>
            </li>
          </ul>
          

          {/* Menu mobile (ẩn mặc định) */}
          <ul
            id="mobileMenu"
            className="absolute right-0 top-12 w-48 bg-indigo-700 text-white text-lg font-medium rounded-md shadow-lg flex-col space-y-2 px-4 py-3 hidden md:hidden"
          >
            <li className="hover:text-yellow-300 cursor-pointer">Trang Chủ</li>
            <li className="hover:text-yellow-300 cursor-pointer">Danh Mục</li>
            <li className="hover:text-yellow-300 cursor-pointer">Truyện Mới</li>
            <li className="hover:text-yellow-300 cursor-pointer">Truyện Hot</li>
            <li className="hover:text-yellow-300 cursor-pointer">Liên Hệ</li>
          </ul>

        </nav>
      </div>

      {/* Mô tả */}
      <div className="bg-black bg-opacity-20">
        <p className="max-w-7xl mx-auto text-center text-sm md:text-base text-yellow-100 italic py-2 px-4">
          Nơi lưu trữ và chia sẻ những bộ truyện tranh đặc sắc, miễn phí cho
          cộng đồng yêu truyện Việt
        </p>
      </div>
    </header>
  );
}

// // Render
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);

// Promise chờ phần tử xuất hiện
function waitForElement(id, timeout = 1000) {
  return new Promise((resolve, reject) => {
    const interval = 50;
    let elapsed = 0;

    const check = () => {
      const el = document.getElementById(id);
      if (el) {
        resolve(el);
      } else if (elapsed >= timeout) {
        reject(`Không tìm thấy phần tử với id="${id}" sau ${timeout}ms`);
      } else {
        elapsed += interval;
        setTimeout(check, interval);
      }
    };

    check();
  });
}

// Toggle menu
function openMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Kết nối sự kiện sau khi phần tử xuất hiện
waitForElement("menuheader")
  .then((el) => {
    el.addEventListener("click", openMenu);
  })
  .catch(console.error);

export default Header;