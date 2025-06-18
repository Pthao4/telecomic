import Header from "../components/header";
import Footer from "../components/footer";
import ListItem from "../components/listitem";

function home(){
    const comics = [
    {
      id: 1,
      title: "Vụng Trộm Không Thể Giấu",
      image:
        "https://th.bing.com/th/id/OIP.bzMkTRG1GHqB0CoQHLP9XAHaKg?rs=1&pid=ImgDetMain",
      latestChapter: "Chương 10",
      category: "Hành Động",
      author: "Bạch Vũ Trích Điêu Cung",
    },
    {
      id: 2,
      title: "Sổ Tay Công Lược Của Hắc Liên Hoa",
      image:
        "https://i.pinimg.com/originals/ba/58/e7/ba58e79f2c3dd24b22f5571d156a4b7f.jpg",
      latestChapter: "Chương 5",
      category: "Manhua",
      author: "Bạch Vũ Trích Điêu Cung",
    },
    {
      id: 3,
      title: "Tiểu Sư Muội Rõ Ràng Rất Mạnh, Nhưng Lại Quá Tấu Hề",
      image:
        "https://thvnext.bing.com/th/id/OIP.UUuDJxaGNW0biq9B9G2oQgAAAA?cb=thvnext&rs=1&pid=ImgDetMain",
      latestChapter: "Chương 7",
      category: "Lãng Mạn",
      author: "Bạch Vũ Trích Điêu Cung",
    },
    {
      id: 4,
      title: "TẤT CẢ PHẢN DIỆN ĐỀU HẮC HOÁ , CHỈ MỖI SƯ MUỘI LÀ HÀI HƯỚC",
      image:
        "https://truyenmoiii.net/images/medium/tat-ca-phan-dien-deu-hac-hoa-chi-co-su-muoi-la-hai-huoc-1704702287.jpg",
      latestChapter: "Chương 25",
      category: "Huyền Huyễn",
      author: "Bạch Vũ Trích Điêu Cung",
    },
    {
      id: 5,
      title: "Kết Cục Của Nhân Vật Phản Diện Chỉ Có Thể Là Cái Chết",
      image: "https://i.redd.it/7bjm656unlf61.jpg",
      latestChapter: "Chương 25",
      category: "Huyền Huyễn",
      author: "Bạch Vũ Trích Điêu Cung",
    },
  ];

  return (
    <div>
      <Header />

      <main className="pt-[115px]">
        {/* Banner */}
        {/* <Banner /> */}
        {/* Nội dung chính */}
        <ListItem comics={comics} content="Truyện mới cập nhật" />
        <ListItem comics={comics} content="Truyện hot" />
        <ListItem comics={comics} content="Truyện full" />
      </main>
      <Footer />
    </div>
  );
}

export default home;