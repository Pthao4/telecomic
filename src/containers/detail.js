import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function DetailComic() {
  const { id } = useParams();

  const comics = [
    {
      id: 1,
      title: "Vụng Trộm Không Thể Giấu",
      otherNames: "Stealthily Hidden Love",
      image:
        "https://th.bing.com/th/id/OIP.bzMkTRG1GHqB0CoQHLP9XAHaKg?rs=1&pid=ImgDetMain",
      latestChapter: 1,
      category: "Hành Động",
      author: "Bạch Vũ Trích Điêu Cung",
      illustrator: "Đang cập nhật",
      translationGroup: "Ngọc Dao Quán",
      status: "Đang tiến hành",
      addedDate: "Đang cập nhật",
      views: "136.9K",
    },
    {
      id: 2,
      title: "Sổ Tay Công Lược Của Hắc Liên Hoa",
      otherNames: "Black Lotus Strategy Manual",
      image:
        "https://i.pinimg.com/originals/ba/58/e7/ba58e79f2c3dd24b22f5571d156a4b7f.jpg",
      latestChapter: 5,
      category: "Manhua",
      author: "Bạch Vũ Trích Điêu Cung",
      illustrator: "Đang cập nhật",
      translationGroup: "Ngọc Dao Quán",
      status: "Đang tiến hành",
      addedDate: "Đang cập nhật",
      views: "91.5K",
    },
    {
      id: 3,
      title: "Tiểu Sư Muội Rõ Ràng Rất Mạnh, Nhưng Lại Quá Tấu Hề",
      otherNames: "Junior Sister Is Strong But Funny",
      image:
        "https://thvnext.bing.com/th/id/OIP.UUuDJxaGNW0biq9B9G2oQgAAAA?cb=thvnext&rs=1&pid=ImgDetMain",
      latestChapter: 7,
      category: "Lãng Mạn",
      author: "Bạch Vũ Trích Điêu Cung",
      illustrator: "Đang cập nhật",
      translationGroup: "Ngọc Dao Quán",
      status: "Đang tiến hành",
      addedDate: "Đang cập nhật",
      views: "103.2K",
    },
    {
      id: 4,
      title: "TẤT CẢ PHẢN DIỆN ĐỀU HẮC HOÁ , CHỈ MỖI SƯ MUỘI LÀ HÀI HƯỚC",
      otherNames: "All Villains Are Dark, Only Junior Sister Is Funny",
      image:
        "https://truyenmoiii.net/images/medium/tat-ca-phan-dien-deu-hac-hoa-chi-co-su-muoi-la-hai-huoc-1704702287.jpg",
      latestChapter: 2,
      category: "Huyền Huyễn",
      author: "Bạch Vũ Trích Điêu Cung",
      illustrator: "Đang cập nhật",
      translationGroup: "Ngọc Dao Quán",
      status: "Đang tiến hành",
      addedDate: "Đang cập nhật",
      views: "88.6K",
    },
    {
      id: 5,
      title: "Kết Cục Của Nhân Vật Phản Diện Chỉ Có Thể Là Cái Chết",
      otherNames: "Villain's Ending Is Always Death",
      image: "https://i.redd.it/7bjm656unlf61.jpg",
      latestChapter: 2,
      category: "Huyền Huyễn",
      author: "Bạch Vũ Trích Điêu Cung",
      illustrator: "Đang cập nhật",
      translationGroup: "Ngọc Dao Quán",
      status: "Đang tiến hành",
      addedDate: "Đang cập nhật",
      views: "120.1K",
    },
  ];

  const comic = comics.find((comic) => comic.id === parseInt(id));

  if (!comic) {
    return (
      <div className="text-center text-red-500 pt-20">Truyện không tồn tại</div>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-[115px] px-4 pb-10">
        <div className="max-w-7xl mx-auto mt-4 bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8">
          {/* Ảnh bìa */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src={comic.image}
              alt={comic.title}
              className="w-80 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Thông tin truyện */}
          <div className="flex-grow space-y-3">
            <h2 className="text-2xl font-bold font-bold mb-6 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              {comic.title}
            </h2>

            <p>
              <span className="font-semibold text-gray-700">Tên khác:</span>{" "}
              {comic.otherNames || "Không có"}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Tác giả:</span>{" "}
              {comic.author}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Minh họa:</span>{" "}
              {comic.illustrator}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Nhóm dịch:</span>{" "}
              {comic.translationGroup}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Tình trạng:</span>{" "}
              {comic.status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Ngày thêm:</span>{" "}
              {comic.addedDate}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Tổng lượt xem:
              </span>{" "}
              {comic.views}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Thể loại:</span>{" "}
              {comic.category}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Chương mới nhất:
              </span>
              {" Chương "}
              {comic.latestChapter}
            </p>
          </div>
        </div>
        {/* Mô tả giới thiệu truyện */}
        <div className="max-w-7xl mx-auto mt-4 bg-white rounded-2xl shadow-md p-6 ">
          <h3 className="text-xl font-semibold mb-2">Giới thiệu:</h3>
          <p className="text-gray-700">
            Đây là một bộ truyện tranh hấp dẫn với cốt truyện độc đáo và hình
            ảnh đẹp mắt. Theo chân nhân vật chính trong hành trình đầy thử thách
            và khám phá những bí mật thú vị.
          </p>
          {/* Nút theo dõi truyện */}
          <div className="pt-4">
            <button
              className="bg-gradient-to-r from-indigo-500 to
            -pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition transform flex items-center gap-2 uppercase"
              onClick={() => alert("Chức năng theo dõi truyện sẽ sớm có mặt!")}
            >
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
              Theo dõi truyện
            </button>
          </div>
        </div>
        {/* Danh sách truyện */}
        <div className="mt-4 max-w-7xl mx-auto rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-2">
              <div className="h-full text-lg uppercase bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent font-bold flex items-center gap-2 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4f3ed2"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>Danh sách chương</span>
                
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4f3ed2"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4f3ed2"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4f3ed2"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailComic;
