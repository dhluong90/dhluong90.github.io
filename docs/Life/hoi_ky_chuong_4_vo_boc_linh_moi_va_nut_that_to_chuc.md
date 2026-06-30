---
title: "Hồi Ký (Phần 4): Vỏ Bọc Lính Mới Và Nút Thắt Tổ Chức"
date: 2026-06-29
authors:
  - Luong Dinh
categories:
  - Life
tags:
  - Hồi Ký
  - Series
---

# Chương 4: Vỏ Bọc Lính Mới Và Nút Thắt Tổ Chức

Tôi kéo ghế ngồi xuống, ném chiếc balo sang một bên. Không mất quá nhiều thời gian để màn chào hỏi xã giao kết thúc, bởi phần lớn anh em trong cái "boongke" này đều đã nhẵn mặt nhau từ những dự án trước.

Căn phòng vẫn ồn ào và rôm rả. Nhưng điều khiến tôi cảm thấy ngột ngạt không phải là sự chật chội, mà là thứ không khí sực mùi toxic đang bao trùm lấy những câu chuyện. Khắp nơi chỉ toàn những tiếng thở dài, những lời than vãn, những câu chửi thề ngao ngán nhắm vào sự lươn lẹo của khách hàng, sự vô lý của đội ngũ "Thế giới cũ", và cả sự bế tắc của chính dự án này.

Họ vẫn coi tôi là một gã Kiến trúc sư giải pháp (SA) bình thường vừa được ném vào để tăng cường nhân sự. Chẳng ai trong căn phòng này mường tượng được nội dung cuộc gọi định mệnh tối qua giữa tôi và sếp, cũng không ai biết về một cuộc thay máu nhân sự lớn ở vị trí Kiến trúc sư trưởng sắp sửa diễn ra. Với họ, tôi đơn giản chỉ là gã lính mới được phân công vào để cày ải, vẽ vời cho xong cái luồng thiết kế đặt xe (booking flow).

Một cậu em đẩy bản thiết kế sang cho tôi, than thở:

"Anh xem giúp luồng này với, bên kia họ giấu requirement kỹ quá, em mò mẫm vẽ đại mà chẳng biết trúng trật thế nào."

Tôi gật đầu nhận lấy, mỉm cười nhẹ. Tôi hiểu rất rõ vai trò thực sự của mình lúc này, thế nên tôi hoàn toàn không vội vàng bật máy lên để bắt tay vào vẽ vời hay gõ code.

Ngồi tựa lưng vào ghế, tôi lặng lẽ quan sát những cái đầu đang cắm gằm vào màn hình, vật lộn với những dòng code và API vô hồn. Bằng kinh nghiệm thực chiến qua hàng loạt dự án hiện đại hóa hệ thống doanh nghiệp (Enterprise Modernization), tôi thừa hiểu một chân lý phũ phàng: Các vấn đề cốt lõi đánh sập một dự án hiếm khi nằm ở thiết kế hay kỹ thuật. Bản chất của việc hiện đại hóa là lấy những công nghệ đã thành công, áp dụng vào một doanh nghiệp truyền thống để ép họ thay đổi cách vận hành. Nút thắt sinh tử, vì thế, luôn nằm ở Con người và Quy trình.

Tôi bắt đầu chiến dịch rã đông cái "boongke" này bằng một thứ vũ khí cổ điển và hiệu quả nhất của đàn ông: những câu chuyện phiếm.

Ngồi cùng bàn với tôi lúc đó là ba ông Kiến trúc sư Giải pháp (SA). Ban đầu, tôi chủ động hùa theo vài câu bông đùa về mấy bóng hồng trong công ty. Khi những gã đàn ông bắt đầu hạ lớp giáp xuống và trở nên thân tình, đó chính là thời khắc hoàn hảo nhất để tôi thả mồi.

Tôi nhấp một ngụm cà phê, bâng quơ quăng ra một quả bom giữa bàn:

"Mà mấy anh tính đề xuất Microservices cho cái hệ thống taxi này thật à? Em nói thật, Microservices giờ nó như một cái bong bóng xịt, một thứ kiến trúc sắp bị khai tử tới nơi rồi. Nó làm đội chi phí hạ tầng, khó kiểm soát. Nhìn thằng StackOverflow xem, hệ thống Monolith kinh điển phục vụ cả thế giới mà vẫn chạy phà phà đó thôi!"

Đúng như dự đoán, quả bom nổ tung. Một cuộc tranh luận nảy lửa nổ ra. Nhưng sự thú vị nhất nằm ở chỗ: Dù cãi rất hăng, bảo vệ quan điểm đến mức đỏ mặt tía tai, họ tuyệt nhiên không đưa ra nổi một ví dụ thực chiến nào để chứng minh hệ thống taxi này thực sự cần đến Microservices.

Trong suốt một tiếng đó, tôi vừa gật gù lắng nghe, vừa âm thầm ghi nhận. Thông qua cách họ phản ứng, tôi lờ mờ nhận ra một vấn đề cốt lõi: Đang có một khoảng cách không nhỏ giữa lý thuyết kiến trúc (Architecture) và khả năng thực thi (Engineering) ngay trong chính nội bộ team chúng tôi.

Giả thuyết này hoàn toàn được khẳng định khi tôi lướt lại một vài đoạn chat đầy mùi thuốc súng trong group chung của dự án, nơi SA Lead và Head of Engineering đang cãi nhau nảy lửa vì thiếu những guideline cụ thể. Những dòng tin nhắn đó chỉ ra một sự thật rõ rệt: Khoảng cách giữa SA và Engineering đã trở nên quá lớn.

Đưa mắt nhìn sang nửa kia của căn phòng, nơi đội ngũ BA (Phân tích nghiệp vụ) đang đóng quân, tôi lại thấy một thái cực hoàn toàn khác. Đội BA chìm trong một sự im lặng đáng sợ, tuyệt nhiên không hé răng tham gia vào cuộc tranh luận. Quan sát kỹ hơn, tôi nhận thấy họ đang được cử đi onsite nhưng lại chẳng có ai nhấc mông ra khỏi ghế để đi gặp Business Users. Họ chỉ cắm cúi gõ lạch cạch viết tài liệu.

Bức tranh tổ chức của dự án không chỉ có nhiều vấn đề từ bên ngoài, mà còn đang rạn nứt ngay từ bên trong.

Nhưng thời gian không cho phép tôi ngồi yên để suy diễn. Buổi chiều hôm đó, tôi nhờ một anh Engineering Manager dẫn sang khu vực văn phòng cánh trái – "Thế giới mới".

Bước vào không gian bên cánh trái, một nhịp độ năng động đập ngay vào mắt. Người đầu tiên tôi bước tới bắt tay là Zang, vị VP Kiến trúc mang phong thái điềm đạm, sắc sảo của một tay chơi cờ lão luyện. Đứng cách đó không xa là Ju – vị VP kỹ thuật thứ hai, toát ra thoang thoảng mùi rượu whisky và uy lực của một gã quen nắm quyền sinh sát.

Dưới trướng Ju là Tứ trụ Engineering Manager: An luôn mang vẻ lo âu; Zo kiêu kỳ nhưng năng lực thực chiến có vẻ không quá ấn tượng; Ri sống khép kín đúng chất nghiện game; và Bo – người đàn ông điềm đạm, vững chãi nhất. Cuối cùng là vị VP Business trẻ tuổi, nói nhanh như súng liên thanh và mang một khí thế cực kỳ hung hãn.

Chào hỏi xong, tôi trở về chỗ ngồi, cẩn thận đóng gói những ấn tượng ban đầu này lại. Tuy nhiên, có một thông tin cực kỳ thú vị và trớ trêu mà tôi thu thập được: Đa phần dàn lãnh đạo sừng sỏ bên "Thế giới mới" này đều là người mới nhậm chức, gánh trên vai KPI hiện đại hóa hệ thống. Thế nhưng, cái quyền lực thực tế mà họ đang nắm giữ lại chỉ quẩn quanh ở tầng Frontend hoặc Backend for Frontend (BFF) – tức là cái vỏ giao diện. Còn cái lõi hệ thống thực sự thì họ hoàn toàn không chạm tay tới được.

Chính cái nghịch lý trớ trêu đó đã dẫn tôi đến cuộc đụng độ trực diện đầu tiên với "Thế giới cũ" trong một buổi review thiết kế chiều hôm đó. Và đó cũng là khoảnh khắc tôi chạm mặt Tí.

Bề ngoài, đây chỉ là một buổi review cho một luồng logic cỏn con. Nhưng ngồi chễm chệ cạnh VP Ju lại là một gã đàn ông mang dáng vẻ dị biệt: tóc để dài ngoằng vuốt ngược ra sau, hàm răng xỉn màu vì nhai trầu lâu năm. Gã ngồi đó, vắt chéo chân, toát ra khí chất bất cần.

Trong suốt buổi họp, gã liên tục mổ xẻ bản thiết kế của bên tôi. Gã chỉ ra cái sai rất chuẩn xác, nhưng tuyệt nhiên lấp lửng, không đưa ra bất kỳ một manh mối nào để hướng dẫn chúng tôi làm cho đúng. Đầu tôi nảy số liên tục: Nếu chỉ một cái logic đơn giản xíu xiu mà đã cần chính gã xác nhận, lại còn phải kéo theo cả VP Ju ngồi kiểm chứng, thì hàng ngàn cái logic cốt lõi khác sẽ ra sao?

Tôi chọn cách khóa miệng quan sát. Sau cuộc họp, tôi chủ động bước tới mỉm cười làm quen, gã chỉ gật đầu lạnh tanh rồi quay lưng đi thẳng.

Dò hỏi ra mới biết, Tí chính là Kỹ sư trưởng, thống soái của "Thế giới cũ", kẻ duy nhất nắm giữ toàn bộ Knowledge Base trong đầu. Dù đang "rắn mất đầu", quyền lực ngầm của Tí vẫn bao trùm. Tí hoàn toàn không cần chúng tôi. Muốn lật ngược thế cờ, tôi buộc phải bước qua xác – hoặc thu phục – gã giữ cửa nhai trầu này.

Tôi quay trở lại bàn làm việc, tựa lưng vào ghế, khẽ thở phào. Cả một ngày trời chạy đôn chạy đáo, từ cái boongke ngột ngạt sang thế giới mới hào nhoáng, rồi lại đụng độ tay trùm thế giới cũ. Tôi chưa vẽ thêm được một cái luồng nào ra hồn, cũng chẳng gõ được một dòng code nào. Nếu có lão sếp ở đây, chắc lão sẽ càm ràm bảo tôi ngồi chơi cả ngày.

Nhưng kệ lão, tự bản thân tôi thấy hôm nay là một ngày làm việc quá đỗi hiệu quả rồi. Thế là đủ.

Trời chập choạng tối. Tôi dọn đồ, vác balo bước ra khỏi văn phòng. Tranh thủ thời gian, tôi thong thả dạo vài vòng quanh khu vực để thám thính xem đồ ăn thức uống quanh đây thế nào. Điểm kết thúc của ngày hôm nay là một quán quen thuộc. Tôi gọi một cốc bia lạnh, bọt sủi tăm mát rượi trôi tuột xuống cổ họng, xua đi cái nóng nực của Singapore và cả những căng thẳng rát não ban chiều.

Tí, Ju, Zang hay cái mớ bòng bong requirement kia... thôi thì, mọi chuyện cứ để mai tính tiếp! Khakhakha.

---

👉 **[Đọc tiếp Phần 5: Bản Đồ Trí Mạng Và Thế Trận "Vườn Không Nhà Trống"](hoi_ky_chuong_5_ban_do_tri_mang_va_the_tran_vuon_khong_nha_trong.md)**
