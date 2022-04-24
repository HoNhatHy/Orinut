const blogs = [
  {
    name: "3 cách làm sữa hạt không cần máy chuyên dụng",
    link: "https://meta.vn/hotro/cach-lam-sua-hat-khong-can-may-4979",
    img: "https://blog.beemart.vn/wp-content/uploads/2020/09/cach-lam-sua-hat1-1024x576.jpg",
    description:
      "Cách phân loại và kết hợp các loại hạt trong cách làm sữa hạt · Các hạt cùng loại với nhau (các hạt không cần nấu kết...",
    day: "30",
    month: "Th3",
  },
  {
    name: "7 lợi ích của sữa hạt hạnh nhân",
    link: "https://buaanhoanhao.vn/7-loi-ich-cua-sua-hanh-nhan/",
    img: "https://cdn.buaanhoanhao.vn/wp-content/uploads/2017/05/almonds-and-almond-milk.webp",
    description:
      "7 lợi ích của sữa hạnh nhân · 1. Bổ dưỡng · 2. Chứa ít calo · 3. Sữa hạnh nhân không đường không làm tăng đường trong...",
    day: "25",
    month: "Th3",
  },
  {
    name: "Phân biệt sữa thực vật và sữa động vật",
    link: "https://suahatdinhduong.vn/phan-biet-sua-thuc-vat-va-sua-dong-vat/",
    img: "https://suahatdinhduong.vn/wp-content/uploads/2020/03/s%E1%BB%AFa-%C4%91%E1%BB%99ng-v%E1%BA%ADt-1-601x400.jpg",
    description:
      "Phân biệt sữa thực vật và sữa động vật · Sữa thực vật là nguồn sữa được chiết xuất từ các loại thực vật giàu chất dinh dưỡng. · Khác với sữa thực ...",
    day: "20",
    month: "Th3",
  },
  {
    name: "Raw Vegan: Ngoài giúp giảm cân còn mang lại vô vàn lợi ích cho sức khỏe",
    link: "https://thammyviennevada.com/che-do-an-thuan-chay-vegan-diet/",
    img: "https://images.everydayhealth.com/images/diet-nutrition/what-is-the-raw-vegan-diet-benefits-risks-sample-menu-and-food-list-722x406.jpg?sfvrsn=3639e593_0",
    description:
      "Chế độ ăn Raw Vegan Diet là gì? — Raw Vegan là chế độ ăn chay với các thực phẩm được sử dụng có nguồn gốc là ngũ cốc, trái cây, rau củ và hoàn ...",
    day: "15",
    month: "Th3",
  },
  {
    name: "Điều gì xảy ra nếu bạn chỉ thích ăn thịt?",
    link: "https://thanhnien.vn/dieu-gi-se-xay-ra-voi-co-the-neu-ban-chi-thich-an-thit-post1060003.html#:~:text=N%E1%BA%BFu%20b%E1%BA%A1n%20%C4%83n%20ch%E1%BB%A7%20y%E1%BA%BFu,cholesterol%20x%E1%BA%A5u%2C%20theo%20Bright%20Side.",
    img: "https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_04_23/sk220401anh1_ftbg.jpg",
    description:
      "Nếu bạn ăn chủ yếu là thịt, thì bạn không có nhiều chất xơ. Đặc biệt, thịt đỏ có thể gây hại cho tim. Nó có thể làm tăng gấp 3 lần nguy cơ mắc các vấn đề liên quan đến tim,...",
    day: "10",
    month: "Th3",
  },
  {
    name: "22 cách giảm cân dễ thực hiện, hiệu quả bất ngờ",
    link: "https://suckhoedoisong.vn/22-cach-giam-can-de-thuc-hien-hieu-qua-bat-ngo-169211020163317373.htm",
    img: "https://image-us.eva.vn/upload/1-2019/images/2019-03-20/cach-giam-can-nhanh-nhat-an-toan-hieu-qua-don-gian-tai-nha-35-1553068532-10-width598height447.png",
    description:
      "1. Uống nước trước bữa ăn · 2. Uống cafe · 3. Uống trà xanh · 4. Ăn sáng bằng trứng · 5. Cắt giảm lượng Carbs tinh tế · 6. Hạn chế hoặc không ăn thức ...",
    day: "05",
    month: "Th3",
  },
  {
    name: "Thực đơn ăn chay 7 ngày đầy đủ dinh dưỡng",
    link: "https://massageishealthy.com/thuc-don-an-chay-hang-ngay.html",
    img: "https://massageishealthy.com/wp-content/uploads/2017/11/thuc-don-an-chay-du-chat-dinh-duong-hang-ngay-10.jpg",
    description:
      "Thực đơn dinh dưỡng hàng ngày cho người ăn chay bận rộn — Người ăn chay phải có một thực đơn cho riêng mình để...",
    day: "28",
    month: "Th2",
  },
  {
    name: "[30 bài tập thể dục tại nhà] phòng chống dịch bệnh Covid-19",
    link: "https://ifitness.vn/blogs/kien-thuc-the-hinh/bai-tap-the-duc-tai-nha",
    img: "https://file.hstatic.net/1000185761/article/30-bai-tap-tai-nha-phong-dich-covid-19_c2585385dbf44437a508cf813847d0af.jpg",
    description:
      "1. Bridge · 2. Chair Squat · 3. Knee Pushup · 4. Stationary Lunge · 5. Plank to Downward Dog · 6. Straight-Leg Donkey Kick · 7. Bird Dog · 8. Forearm Plank.",
    day: "25",
    month: "Th2",
  },
  {
    name: "5 mẹo ăn uống lành mạnh cho người bận rộn",
    link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/5-meo-an-uong-lanh-manh-cho-nguoi-ban-ron/",
    img: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/song-khoe/2020/suc-khoe-the-chat/bai-viet-5-meo-an-uong-lanh-manh-cho-nguoi-ban-ron-01.png",
    description:
      "Sữa chua không chỉ là món ăn vặt bổ dưỡng, mà còn có tác dụng giúp cân bằng hệ tiêu hoá – điều mà các nhân viên bận rộn rất cần đến, vì áp lực công việc...",
    day: "20",
    month: "Th2",
  },
  {
    name: "15 mẹo chăm sóc sức khỏe chủ động không dùng thuốc",
    link: "https://vmcvietnam.org/cham-soc-suc-khoe-chu-dong-mang-den-hanh-phuc-cho-gia-dinh",
    img: "https://vmcvietnam.org/wp-content/uploads/2021/01/cham-soc-suc-khoe-1.jpg",
    description:
      "1. Trang bị kiến thức về sức khỏe · 2. Kiểm tra sức khỏe định kỳ · 3. Tập thể dục, vận động hợp lý · 4. Xây dựng chế độ ăn uống khoa học, lành mạnh.",
    day: "15",
    month: "Th2",
  },
  {
    name: "Lợi và hại của đường đối với sức khỏe",
    link: "https://suckhoedoisong.vn/loi-va-hai-cua-duong-doi-voi-suc-khoe-169188316.htm",
    img: "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2021/03/17/Loi%20va%20hai%20cua%20duong.jpg",
    description:
      " Đã từ lâu, người ta cho rằng chỉ có mỡ mới gây ra những tác dụng độc hại. Thực ra không hẳn như vậy, bởi vì hấp thu đường quá nhiều thì ...",
    day: "10",
    month: "Th2",
  },
  {
    name: "10 thực phẩm thà chết cũng không nên ăn",
    link: "https://vietnamnet.vn/10-thuc-pham-tha-chet-cung-khong-nen-an-273730.html",
    img: "http://imgs.vietnamnet.vn/Images/2015/11/17/15/20151117155413-noodle.jpg",
    description:
      "Việc hiểu rõ những loại thực phẩm nào nên tránh xa cũng quan trọng chẳng kém so với việc bạn biết mình nên ăn gì. Dưới đây là danh sách những món...",
    day: "05",
    month: "Th2",
  },
  {
    name: "Phòng tránh đột quỵ bằng những thói quen đơn giản",
    link: "https://laodong.vn/suc-khoe/phong-tranh-dot-quy-bang-nhung-thoi-quen-don-gian-919913.ldo",
    img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/13/919913/Image-49.jpg",
    description:
      "Đột quỵ là căn bệnh nguy hiểm tiềm ẩn nguy cơ tử vong cao. Đặc biệt, tỉ lệ người trẻ trong độ tuổi 20-30 bị đột quỵ đang ngày càng gia tăng...",
    day: "30",
    month: "Th1",
  },
  {
    name: "7 cách giúp bạn tỉnh táo mà không cần cà phê!",
    link: "https://www.luu.vn/7-cach-giup-ban-tinh-tao-ma-khong-can-ca-phe.htm",
    img: "https://vinmec-prod.s3.amazonaws.com/images/20200305_180719_772730_caffe.max-1800x1800.jpg",
    description:
      "Tuy nhiên ai cũng biết phụ thuộc quá vào caffeine cũng mang đến nhiều tác dụng phụ. Theo Mayo Clinic, nếu bạn uống hơn 4 tách cà phê mỗi ngày có thể làm cho ...",
    day: "25",
    month: "Th1",
  },
  {
    name: "Những gì bạn nên biết về thịt đỏ: Tác dụng, tác hại tới sức khỏe",
    link: "https://giadinhmoi.vn/nhung-gi-ban-nen-biet-ve-thit-do-tac-dung-tac-hai-toi-suc-khoe-d27284.html",
    img: "https://i.ex-cdn.com/giadinhmoi.vn/files/content/2019/09/04/thit-do-1513.jpg",
    description:
      "Một số nghiên cứu gần đây cho thấy rằng ăn thịt đỏ thường xuyên có thể làm tăng nguy cơ ung thư hoặc tử vong. Cụ thể, những người ăn nhiều thịt ...",
    day: "20",
    month: "Th1",
  },
  {
    name: "Tiết lộ bí quyết trông như tuổi 30 của người phụ nữ 70 tuổi",
    link: "https://giaoduc.net.vn/suc-khoe-hoc-duong/tiet-lo-bi-quyet-trong-nhu-tuoi-30-cua-nguoi-phu-nu-70-tuoi-post155205.gd",
    img: "https://phunuvietnam.mediacdn.vn/zoom/660_412/media/news/a64bd53139f71961c5c31a9af03d775e/thumb/undefined-1-thumb43.jpg",
    description:
      "27 năm trước, Annette Larkins đã quyết định trở thành một người ăn chay hoàn toàn. Động cơ chính của bà khi ăn chay là để cải thiện và duy ...",
    day: "15",
    month: "Th1",
  },
  {
    name: "6 lợi ích tuyệt vời của việc ăn trái cây tươi hàng ngày",
    link: "https://zingnews.vn/6-loi-ich-tuyet-voi-cua-viec-an-trai-cay-tuoi-hang-ngay-post571306.html",
    img: "https://previews.123rf.com/images/liligraphie/liligraphie1407/liligraphie140700795/29758828-%EC%8B%A0%EC%84%A0%ED%95%9C-%EA%B3%BC%EC%9D%BC%EA%B3%BC-%EC%97%B4%EB%A7%A4-%EC%9B%90%EC%8B%9C-%EC%9D%8C%EC%8B%9D-%EC%9E%AC%EB%A3%8C%EC%9D%98-%EC%98%81%EC%96%91-%EB%B0%B0%EA%B2%BD%EC%9D%98-%ED%98%BC%ED%95%A9.jpg",
    description:
      "Tránh ung thư. Theo Tổ chức Y tế Thế giới, chế độ ăn uống bao gồm 5 phần trái cây mỗi ngày có thể giúp giảm sự phát triển của bệnh ung thư đi.",
    day: "10",
    month: "Th1",
  },
  {
    name: "6 Bộ phận của gà không nên ăn vì rất có hại cho sức khỏe",
    link: "https://benh.vn/6-bo-phan-cua-ga-khong-nen-an-42912/",
    img: "https://benh.vn/wp-content/uploads/2018/04/anh-1.jpg",
    description:
      "6 Bộ phận của gà không nên ăn vì rất có hại cho sức khỏe · 1. Phao câu. Phao câu hay còn gọi đuôi gà rất được ưa thích bởi hương vị đặc trưng của ...",
    day: "05",
    month: "Th1",
  },
];

export default blogs;
