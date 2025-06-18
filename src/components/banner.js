function Banner() {
  return (
    <section className="pt-[120px] pb-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Chào mừng đến với Telecomic
        </h2>
        <p className="text-lg md:text-xl mb-8 italic drop-shadow-md">
          Nơi bạn có thể khám phá và thưởng thức những bộ truyện tranh đặc sắc, miễn phí dành cho cộng đồng yêu truyện Việt.
        </p>
        <a
          href="#danh-sach-truyen"
          className="inline-block bg-yellow-400 text-indigo-900 font-semibold rounded-md px-8 py-3 hover:bg-yellow-300 transition"
        >
          Khám phá ngay
        </a>
      </div>
    </section>
  );
}

export default Banner;
