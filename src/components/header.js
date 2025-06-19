import logo from "../img/logo.jpg";
import Menu from "./menu";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-6 py-4">
        {/* Logo + Tên */}
        <div className="grid grid-cols-1 items-center gap-3 cursor-pointer">
          <div
            className="flex items-center gap-2"
            id="menuheader"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <h1 className="text-2xl font-bold tracking-wide">Telecomic</h1>
          </div>
        </div>
        {/* Menu */}
        <div className="hidden md:block">
          <Menu />
        </div>
        {/* Setting */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-end">
          <div className="hidden md:block"></div>
          <div></div>
          <div className="grid grid-cols-4 gap-2 items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mô tả */}
      <div className="bg-black bg-opacity-20 ">
        <p className="max-w-7xl mx-auto text-center text-sm md:text-base text-yellow-100 italic py-2 px-4 hidden md:block">
          Nơi lưu trữ và chia sẻ những bộ truyện tranh đặc sắc, miễn phí cho
          cộng đồng yêu truyện Việt
        </p>
        <div className="block md:hidden">
          <Menu />
        </div>
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
