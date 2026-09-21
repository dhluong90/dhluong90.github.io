---
title: "My Journey - 3D Book Experience"
hide:
  - navigation
  - toc
---

<script id="st-pageflip-cdn" src="https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js"></script>

<!-- ==========================================================================
     MODE 1: 3D ROTATABLE 360 SHOWCASE VIEW
     ========================================================================== -->
<div id="book-showcase-view" class="book-showcase-wrapper">
  <div style="text-align: center; margin-bottom: 24px;">
    <h1 style="font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 6px;">📖 HỒI KÝ: NHỮNG NĂM THÁNG TUỔI TRẺ</h1>
    <p style="color: #64748b; font-size: 0.9rem;">Kéo rê chuột hoặc ngón tay để xoay 360° khối sách 3D tương tác</p>
  </div>

  <div class="showcase-stage" id="showcase-stage">
    <div class="book-3d-object" id="book-3d-box">
      <!-- Front Cover -->
      <div class="b3d-face-front">
        <div>
          <div class="cover-gold-title">HỒI KÝ</div>
          <div class="cover-subtitle">Những Năm Tháng Tuổi Trẻ Làm IT</div>
        </div>
        <div class="cover-emblem">🏛️</div>
        <div class="cover-author">LUONG DINH • PRINCIPAL ARCHITECT</div>
      </div>
      <!-- Spine (Gáy sách) -->
      <div class="b3d-face-spine">HỒI KÝ • LUONG DINH</div>
      <!-- Pages thickness (Cạnh trang) -->
      <div class="b3d-face-right"></div>
      <!-- Back Cover -->
      <div class="b3d-face-back">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🌟</div>
        <h3 style="color: #fbbf24; margin-bottom: 8px;">NHỮNG NĂM THÁNG TUỔI TRẺ</h3>
        <p style="color: #cbd5e1; font-size: 0.8rem;">Series Hồi Ký - Luong Dinh</p>
      </div>
    </div>
  </div>

  <div class="showcase-action-group">
    <button class="open-reader-btn" onclick="switchToReaderMode()">📖 Mở Sách Đọc Hồi Ký</button>
    <button class="auto-rotate-btn" id="btn-auto-rotate" onclick="toggleAutoRotate()">🔄 Tự Động Xoay 3D</button>
    <a href="../" class="auto-rotate-btn" style="text-decoration: none;">⬅️ My Toys</a>
  </div>
</div>

<!-- ==========================================================================
     MODE 2: FULL CONTENT PAGEFLIP READER VIEW
     ========================================================================== -->
<div id="book-reader-view" class="book-reader-wrapper" style="display: none;">

  <!-- Sleek Single-Line Compact Floating HUD Toolbar -->
  <div class="book-hud-toolbar">
    <div class="hud-group">
      <button class="hud-btn" onclick="switchToShowcaseMode()">📦 Bìa 3D</button>
      <a href="../" class="hud-btn">⬅️ My Toys</a>
      <button class="hud-btn" id="btn-prev" onclick="flipBookPrev()">◄ Prev</button>
      <button class="hud-btn" id="btn-next" onclick="flipBookNext()">Next ►</button>
    </div>

    <div class="hud-page-indicator">
      Trang <span id="page-num">1</span> / <span id="page-total">107</span>
    </div>

    <div class="hud-group">
      <select class="hud-btn" id="chapter-select" onchange="jumpToChapter(this.value)">
        <option value="0">📘 Bìa Sách</option>
        <option value="1">Chương 1: Chiếc Áo Rộng Vừa Vặn & Bác ... (Trang 1)</option>
        <option value="17">Chương 2: Đêm Trắng, Tin Nhắn Nghỉ Việ... (Trang 17)</option>
        <option value="32">Chương 3: Chuyến Tàu Điện Ngầm & Cái B... (Trang 32)</option>
        <option value="51">Chương 4: Vỏ Bọc Lính Mới & Nút Thắt T... (Trang 51)</option>
        <option value="66">Chương 5: Bản Đồ Trí Mạng & Thế Trận V... (Trang 66)</option>
        <option value="90">Chương 6: Bàn Cờ Mới Ở Boat Quay & Cái... (Trang 90)</option>
        <option value="106">📕 Bìa Sau (Trang 106)</option>
      </select>
    </div>
  </div>

  <!-- 3D FlipBook Container -->
  <div class="flipbook-container" id="my-book-flipbook">
    <!-- PAGE 0: COVER -->
    <div class="page page-cover hard" data-density="hard">
      <div>
        <div class="cover-gold-title">HỒI KÝ</div>
        <div class="cover-subtitle">Những Năm Tháng Tuổi Trẻ & Cuộc Chinh Phạt Kiến Trúc</div>
      </div>
      <div class="cover-emblem">🏛️</div>
      <div class="cover-author">LUONG DINH • PRINCIPAL ARCHITECT</div>
    </div>

    <!-- PAGE 1: Chương 1 (P1/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 1/16</div>
        <h2 class="page-chapter-title">Chiếc Áo Rộng Vừa Vặn & Bác CIO Grand Seiko</h2>
        <div class="page-text-body">
          <p>Mọi chuyện thú vị nhất của tôi thật sự bắt đầu từ chuyến bay đáp xuống Singapore năm 2017. Như bao kỹ sư nuôi mộng lớn khác, tôi bắt đầu hành trình bằng những dòng code. Tôi vẫn còn nhớ rõ mình của những năm tháng đó – một developer cặm cụi trong một team nhỏ xíu, ngước nhìn một ông VP trong ngân hàng như một nhân vật vĩ đại nào đó ở thế giới khác.</p>
        </div>
        <div class="page-footer-num">- Trang 1 -</div>
      </div>
    </div>

    <!-- PAGE 2: Chương 1 (P2/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 2/16</div>
        <div class="page-text-body">
          <p>Thế mà hôm nay, định mệnh đưa cậu developer ấy trở thành người đứng thuyết trình trước mặt CIO của một ngân hàng đa quốc gia. Trong căn phòng họp lạnh toát đó là những cái đầu sừng sỏ nhất, những người nắm quyền sinh sát các khoản ngân sách lên đến hàng trăm triệu đô la. Còn tôi, một tay đút túi quần, tự tin trình bày bản thiết kế của mình.</p>
        </div>
        <div class="page-footer-num">- Trang 2 -</div>
      </div>
    </div>

    <!-- PAGE 3: Chương 1 (P3/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 3/16</div>
        <div class="page-text-body">
          <p>Mọi thứ diễn ra như một sự sắp đặt của số phận, một định mệnh luôn ép tôi phải khoác lên mình một chiếc áo quá khổ. Lúc nào tôi cũng thấy chiếc áo vị trí ấy rộng hơn năng lực của mình rất nhiều, và lúc nào cũng phải gồng mình, vắt kiệt sức lực để lớn lên cho vừa vặn với nó. Có những lúc áp lực bủa vây, tôi tự nhủ hay là buông xuống, chỉ làm những công việc đơn giản thôi cho nhẹ đầu. Nhưng rồi bản tính không cho phép tôi dừng lại. Cứ vài tháng, tôi lại bắt tay vào một cuộc chinh phạt mới – những hành trình với vai trò Kiến trúc sư trưởng, mang trên vai trọng trách hiện đại hóa các hệ thống cốt lõi già cỗi của những doanh nghiệp hàng đầu.</p>
        </div>
        <div class="page-footer-num">- Trang 3 -</div>
      </div>
    </div>

    <!-- PAGE 4: Chương 1 (P4/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 4/16</div>
        <div class="page-text-body">
          <p>Hôm nay, trong một khoảng lặng hiếm hoi để nghỉ ngơi, tôi quyết định viết lại những chặng đường này. Không chỉ để lưu giữ những trận đánh lớn, mà còn để nhìn lại chính mình – xem chiếc áo năm xưa giờ đã vừa vặn đến nhường nào.</p>
          <p>![Khoảng lặng ngồi viết lại chặng đường](../img/ngoi_viet_hoi_ky.jpg)</p>
          <h3 style='font-size: 1.02rem; font-weight: 700; color: #0f172a; margin: 8px 0 4px 0;'>Chương 1: Cuộc Chơi Định Mệnh Và Người Đàn Ông Đeo Grand Seiko</h3>
        </div>
        <div class="page-footer-num">- Trang 4 -</div>
      </div>
    </div>

    <!-- PAGE 5: Chương 1 (P5/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 5/16</div>
        <div class="page-text-body">
          <p>Tôi còn nhớ như in buổi họp đầu tiên với vị CIO của tập đoàn ngân hàng đó. Thật ra, ban đầu tôi không hề là nhân vật chính. Dẫn dắt thương vụ quan trọng này là một bác người Ấn Độ – từng là CA của một ngân hàng quốc tế, và hiện tại đang làm việc cho công ty chúng tôi. Người được chỉ định đứng ra bảo chứng chuyên môn trong mảng ngân hàng lúc bấy giờ cũng không phải là tôi. Trong căn phòng hôm ấy, tôi chỉ sắm vai một người phụ, mang theo nhiệm vụ trình bày về một trong những dự án mà đội ngũ chúng tôi từng hoàn thành.</p>
        </div>
        <div class="page-footer-num">- Trang 5 -</div>
      </div>
    </div>

    <!-- PAGE 6: Chương 1 (P6/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 6/16</div>
        <div class="page-text-body">
          <p>Đó là buổi họp hoành tráng nhất mà tôi từng được tham gia. Không gian vô cùng nghiêm túc, xung quanh bàn họp toàn những nhân vật ra quyết định của tập đoàn tài chính này trong mảng IT. Vị CIO là một nhân vật nổi tiếng ở Singapore, mang theo bản CV dày cộm bao gồm nhiều năm kinh nghiệm tại các tập đoàn tư vấn Big 4. Những người còn lại đều là các "trùm cuối" đứng đầu các mảng, tay nắm ngân sách tính bằng trăm triệu đô la. Nhìn họ, ký ức thời tôi còn làm trong ngân hàng bất chợt ùa về – vẫn là những gương mặt quản lý lạnh như tiền và cực kỳ khó đọc.</p>
        </div>
        <div class="page-footer-num">- Trang 6 -</div>
      </div>
    </div>

    <!-- PAGE 7: Chương 1 (P7/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 7/16</div>
        <div class="page-text-body">
          <p>Tôi vốn mắc chứng mất tập trung. Trong các cuộc họp, tôi thường khó mà nghe lọt tai toàn bộ nội dung. Khối lượng thông tin tôi đọng lại chắc chỉ khoảng 10-15%, và tôi cũng hiếm khi nhớ nổi tên những người tham gia. Thay vào đó, bộ não tôi lại chuyển hướng sự tập trung vào một thứ thú vị hơn rất nhiều: gương mặt và cảm xúc của con người. Đối với tôi, mỗi người ngồi trong phòng họp giống như một diễn viên vậy. Tôi thích quan sát cách họ thể hiện, thưởng thức nó và đôi khi tự mỉm cười một mình. Tôi biết có những biểu cảm là do họ cố ý diễn, có những thứ chỉ là phản xạ vô thức, nhưng chính những chi tiết có vẻ "vô tri" ấy lại nạp vào đầu tôi vô số thông tin vô giá.</p>
        </div>
        <div class="page-footer-num">- Trang 7 -</div>
      </div>
    </div>

    <!-- PAGE 8: Chương 1 (P8/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 8/16</div>
        <div class="page-text-body">
          <p>Trong phòng họp hôm đó, vị CIO là người đáng chú ý nhất, bởi lẽ mọi người đều nhìn sắc thái của bác ấy để hành xử. Bác ấy tinh tế, kỹ tính và vô cùng khó đoán. Nhưng não tôi "nhảy số" và báo ngay một dữ kiện: <i>Người đàn ông này đam mê văn hóa Nhật.</i>
Từ chiếc áo sơ mi được ủi phẳng phiu, ngay ngắn; gương mặt sáng; cách cười mỉm từ tốn nhưng toát lên vẻ nghiêm nghị tuyệt đối. Và đòn "chốt hạ" giúp tôi tự tin khẳng định bác không phải kiểu quản lý cục súc, mà là một người cực kỳ tinh tế, chính là chiếc đồng hồ <b>Grand Seiko</b> nằm yên vị trên cổ tay.</p>
        </div>
        <div class="page-footer-num">- Trang 8 -</div>
      </div>
    </div>

    <!-- PAGE 9: Chương 1 (P9/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 9/16</div>
        <div class="page-text-body">
          <p>(Mãi vài tháng sau, khi dự án bắt đầu và tôi được bước vào văn phòng của bác, tôi mới biết ấn tượng đầu tiên của mình chính xác đến mức nào – căn phòng ngập tràn sách và các tác phẩm nghệ thuật Nhật Bản).</p>
          <p>Không hiểu sao, giữa cái áp lực nghẹt thở đó, tôi lại có một sự thiện cảm mãnh liệt. Cảm giác như "quý nhân" của đời mình đã xuất hiện. Tôi nhìn bác bằng một sự ngưỡng mộ chân thành.</p>
        </div>
        <div class="page-footer-num">- Trang 9 -</div>
      </div>
    </div>

    <!-- PAGE 10: Chương 1 (P10/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 10/16</div>
        <div class="page-text-body">
          <p>Rồi cũng đến lượt tôi trình bày.
Như một thói quen cơ học để che đậy sự lo lắng, tôi mỉm cười. Nhưng tôi không chọn cách ngồi an toàn tại ghế. Tôi đứng hẳn dậy, tiến thẳng về phía màn hình. Theo một thói quen vô thức, tôi đút một tay vào túi quần – một hành động nhỏ giúp tôi tự nhiên hơn. Giọng tôi vang lên to, rõ ràng. Tôi tự biết phát âm tiếng Anh của mình không chuẩn mực đến mức hoàn hảo và đôi lúc làm người nghe hơi vất vả, nhưng sự tự tin đã lấn át hoàn toàn những lo lắng về các khiếm khuyết của bản thân. Chính cách nói chuyện tự nhiên đó của tôi dường như đã làm giảm bớt đi sự căng thẳng đặc quánh trong không khí của phòng họp.</p>
        </div>
        <div class="page-footer-num">- Trang 10 -</div>
      </div>
    </div>

    <!-- PAGE 11: Chương 1 (P11/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 11/16</div>
        <div class="page-text-body">
          <p>Tôi dõng dạc giới thiệu mình là một Kiến trúc sư trưởng. Tôi ném lên bàn một "trận đánh" thực tế: Quá trình hiện đại hóa toàn bộ hệ thống taxi booking của công ty vận tải lớn nhất Singapore – gã khổng lồ đang nắm giữ 60% lưu lượng taxi toàn đảo quốc.</p>
          <p>Câu chuyện của tôi không bắt đầu bằng những dòng code khô khan, mà bằng nỗi đau của doanh nghiệp. Nỗi đau của một hệ thống già cỗi, ì ạch đang phải gồng mình đứng trước làn sóng cạnh tranh khốc liệt từ các hãng xe công nghệ (ride-hailing). Để tồn tại, gã khổng lồ đó bắt buộc phải chuyển mình. Đó là một dự án "thay máu" tiêu tốn hai năm ròng rã cùng kinh phí hàng chục triệu đô.</p>
        </div>
        <div class="page-footer-num">- Trang 11 -</div>
      </div>
    </div>

    <!-- PAGE 12: Chương 1 (P12/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 12/16</div>
        <div class="page-text-body">
          <p>Tôi trình bày về những kiến trúc nguyên khối (monolith) truyền thống với các tích hợp (integration) ngoằn ngoèo. Thực tế, độ phức tạp để giải quyết bài toán của doanh nghiệp truyền thống này còn lớn hơn cả Grab, bởi họ cho phép nhiều lựa chọn chồng chéo trong việc vận hành taxi, cản trở trực tiếp quá trình đưa hệ thống lên Cloud. Tôi nhấn mạnh các khó khăn khi hiện đại hóa hệ thống core: không chỉ ở việc thiết kế một kiến trúc mới hiện đại, đạt tiêu chuẩn chất lượng, mà còn phải dọn dẹp các "tàn dư" của mấy chục năm trước. Và yêu cầu khắc nghiệt nhất: đưa hệ thống mới vào vận hành mà không làm ảnh hưởng tới chất lượng dịch vụ taxi đang cung cấp cho khách hàng (<b>Zero-downtime</b>).</p>
        </div>
        <div class="page-footer-num">- Trang 12 -</div>
      </div>
    </div>

    <!-- PAGE 13: Chương 1 (P13/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 13/16</div>
        <div class="page-text-body">
          <p>Ở đẳng cấp này, độ phức tạp của kỹ thuật luôn đan xen chặt chẽ với sự phức tạp của con người và tổ chức. Tôi cuốn họ đi từ slide này sang slide khác.</p>
        </div>
        <div class="page-footer-num">- Trang 13 -</div>
      </div>
    </div>

    <!-- PAGE 14: Chương 1 (P14/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 14/16</div>
        <div class="page-text-body">
          <p>Bác CIO cứ lặng lẽ tập trung nghe. Phần trình bày của tôi thông thường không chỉ nói đến việc "mình làm cái gì", mà tôi luôn lồng vào các câu chuyện ngụ ý để giải thích "tại sao" và nêu bật các yếu tố cốt lõi. Người nghe sẽ có cảm giác tôi đang nắm rất chắc vấn đề. Ví dụ, khi nhắc đến <i>Event-driven design</i> để dễ dàng mở rộng (easy to scale), tôi không chỉ nói chung chung về cách dùng message và queue. Tôi giải thích cho họ phân biệt rõ: <b>Message</b> và <b>Request</b> khác nhau ở chỗ nào? Nếu không phân biệt được thì việc A gọi B bằng request async và event là không có gì khác biệt. Phải hiểu rõ rằng <i>message</i> là một thông báo trạng thái hiện tại, ở đó A chỉ báo cáo tình hình của chính A.</p>
        </div>
        <div class="page-footer-num">- Trang 14 -</div>
      </div>
    </div>

    <!-- PAGE 15: Chương 1 (P15/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 15/16</div>
        <div class="page-text-body">
          <p>Trong khi đó, <i>A request B</i> có nghĩa là A đã biết được B sẽ phải xử lý điều gì tiếp theo. Đó chính là nền tảng cốt lõi của sự phụ thuộc (<b>Fundamental of Coupling</b>).</p>
          <p>Bác CIO không thể hiện cảm xúc thái quá ra mặt, nhưng thái độ đã cho thấy bác rất hài lòng. Đó là cảm giác của một người vừa tìm đúng chỗ cần tìm. Bác bắt đầu cất giọng, đặt ra vài câu hỏi và tiếp tục mở đường cho những vòng đàm phán tiếp theo (engagement).</p>
          <p>Và đó cũng chính là lần khởi đầu cho cuộc chơi định mệnh của tôi, khi bác CIO yêu cầu các buổi tiếp theo phải tập trung chi tiết vào đúng phần mà tôi vừa trình bày. Họ muốn tiếp tục được nghe câu chuyện từ gã kiến trúc sư này.</p>
          <p>---</p>
        </div>
        <div class="page-footer-num">- Trang 15 -</div>
      </div>
    </div>

    <!-- PAGE 16: Chương 1 (P16/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 16/16</div>
        <div class="page-text-body">
          <p>👉 <b>[Đọc tiếp Phần 2: Đêm Khủng Hoảng, Lời Khuyên Ở Spa Và Trạng Thái Siêu Tập Trung](hoi_ky_chuong_2_dem_trang_tin_nhan_nghi_viec_va_co_gai_o_tiem_spa.md)</b></p>
        </div>
        <div class="page-footer-num">- Trang 16 -</div>
      </div>
    </div>

    <!-- PAGE 17: Chương 2 (P1/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 1/15</div>
        <h2 class="page-chapter-title">Đêm Trắng, Tin Nhắn Nghỉ Việc & Cô Gái Ở Tiệm Spa</h2>
        <div class="page-text-body">
          <p>Trở về sau cuộc họp định mệnh đó, mọi thứ thật ra lại quay về nhịp độ quen thuộc của những trận ra quân săn deal. Lần nào cũng vậy, chúng tôi luôn bung hết sức mình, chuẩn bị những gì tinh túy nhất, phơi bày hết mọi "vũ khí" sắc bén nhất ngay trong ngày đầu tiên chỉ để hy vọng chộp được sự chú ý của khách hàng. Nhưng khi tấm màn nhung khép lại sau buổi thuyết trình, chẳng ai dám chắc kết quả sẽ đi về đâu. Thường thì, thứ chúng tôi nhận lại chỉ là một sự im lặng không bao giờ có hồi đáp.</p>
        </div>
        <div class="page-footer-num">- Trang 17 -</div>
      </div>
    </div>

    <!-- PAGE 18: Chương 2 (P2/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 2/15</div>
        <div class="page-text-body">
          <p>Tôi ném chuyện đó ra sau đầu và quay lại với mớ công việc còn đang dang dở. Đầu tiên là hoàn thành một cuộc thương lượng chốt deal hơn triệu đô khác – một thương vụ cũng đầy tính giật gân mà tôi xin phép được kể chi tiết ở những chương sau. Vừa xong xuôi, chưa kịp để tay chân nghỉ ngơi, tôi lại bị ném vào một dự án khác để làm "lính cứu hỏa", đi chữa cháy ròng rã hơn một tháng trời.</p>
        </div>
        <div class="page-footer-num">- Trang 18 -</div>
      </div>
    </div>

    <!-- PAGE 19: Chương 2 (P3/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 3/15</div>
        <div class="page-text-body">
          <p>Quãng thời gian ba tháng trôi qua thật ra rất ngắn ngủi, nhưng lịch trình làm việc dày đặc đến nghẹt thở đã làm tôi gần như quên bẵng đi cái tập đoàn ngân hàng đa quốc gia nọ.</p>
          <p>Rồi một ngày, ngay lúc cái đầu tôi đang gào thét đòi nghỉ ngơi, thì tin tức ập đến: Ngân hàng đó đã quay trở lại! Họ muốn đi sâu vào câu chuyện hiện đại hóa hệ thống thông tin mà tôi đã ném lên bàn hôm trước. Họ không chỉ muốn nghe lướt qua, họ đòi mổ xẻ chi tiết từng chặng hành trình, cách thức thực thi và kết quả thực tế của toàn bộ cuộc đại phẫu đó.</p>
        </div>
        <div class="page-footer-num">- Trang 19 -</div>
      </div>
    </div>

    <!-- PAGE 20: Chương 2 (P4/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 4/15</div>
        <div class="page-text-body">
          <p>Áp lực lại dội xuống. Tôi còn nhớ như in cái đêm OT sấp mặt để cày cho xong bộ slide trình bày chi tiết. Căng thẳng và kiệt sức đến độ, ngay trong đêm, tôi nhắn thẳng một cái tin cục súc cho sếp: "Tao nghỉ việc, mệt lắm rồi không làm nữa, sáng mai tao gửi mail!"</p>
          <p>Nhắn xong, để xả cái cục tức tưởi và sự mỏi mệt rã rời, tôi xách xe đi tìm một trung tâm spa trị liệu cổ truyền. Thật ra, tôi vốn là người ít khi chia sẻ những sự nặng nề hay mệt mỏi với gia đình để tránh làm họ bị ảnh hưởng. Thay vào đó, tôi thường tự tìm không gian thư giãn để cởi bỏ áp lực.</p>
        </div>
        <div class="page-footer-num">- Trang 20 -</div>
      </div>
    </div>

    <!-- PAGE 21: Chương 2 (P5/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 5/15</div>
        <div class="page-text-body">
          <p>Không gian tĩnh lặng, thoang thoảng mùi tinh dầu sả chanh cùng tiếng nhạc thiền êm ái nhanh chóng kéo tôi ra khỏi mớ bòng bong công việc. Chất lượng dịch vụ ở đây thực sự chuyên nghiệp. Những động tác ấn huyệt vai gáy bài bản đã đánh tan sự căng cứng trong từng thớ cơ, giúp tôi được thả lỏng hoàn toàn sau nhiều ngày gồng mình căng não.</p>
          <p>Trong lúc làm việc, nhân viên trị liệu có bắt chuyện và hỏi tôi làm nghề gì. Sẵn tâm trạng chán nản, tôi trả lời ngay một câu ráo hoảnh: "Ngày mai anh nghỉ việc, dọn đồ về Việt Nam luôn." Nghe vậy, nhân viên đó liền thủ thỉ khuyên tôi một câu xanh rờn:</p>
        </div>
        <div class="page-footer-num">- Trang 21 -</div>
      </div>
    </div>

    <!-- PAGE 22: Chương 2 (P6/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 6/15</div>
        <div class="page-text-body">
          <p>"Thôi anh ạ, mệt quá thì đến đây thư giãn ấn huyệt cho khỏe người, chứ đừng có nghỉ việc. Tụi em ở đây làm lụng vất vả cực nhọc lắm mà có kiếm được bao nhiêu tiền đâu..."</p>
          <p>Chính cái câu nói thật thà, đượm chút xót xa đó tự nhiên làm tôi tỉnh người. Lời khuyên bâng quơ của một người xa lạ lại như một gáo nước lạnh tạt thẳng vào cái tôi đang rực lửa hờn dỗi của tôi lúc bấy giờ.</p>
        </div>
        <div class="page-footer-num">- Trang 22 -</div>
      </div>
    </div>

    <!-- PAGE 23: Chương 2 (P7/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 7/15</div>
        <div class="page-text-body">
          <p>Nằm đó, tôi chợt nhận ra sự mệt mỏi của mình đôi khi sao mà... xa xỉ quá. Tôi đang vùng vằng, bực dọc đòi vứt bỏ một công việc trí óc, nơi tôi được ngồi phòng máy lạnh, nắm trong tay những bản thiết kế định hình hệ thống lớn và đối thoại với những con số hàng triệu đô, chỉ vì hai chữ "áp lực". Còn cô gái này, ngày ngày phải dùng chính sức lực cơ bắp của mình để nhào nặn từng đồng mưu sinh, đối mặt với sự cực nhọc chát chúa của cơm áo gạo tiền, lại đang nhẹ nhàng khuyên tôi phải biết trân trọng cái áp lực đó.</p>
        </div>
        <div class="page-footer-num">- Trang 23 -</div>
      </div>
    </div>

    <!-- PAGE 24: Chương 2 (P8/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 8/15</div>
        <div class="page-text-body">
          <p>Hóa ra, cái "chiếc áo quá khổ" mà tôi luôn cằn nhằn, luôn cảm thấy kiệt sức khi phải gồng mình mặc vào, thực chất lại là một đặc quyền mà rất nhiều người đang muốn chạm tới. Cớ sao tôi lại cho phép mình yếu hèn buông xuôi dễ dàng như vậy?</p>
          <p>Sự tự ái, những bực dọc và cả cục tức tưởi đòi nghỉ việc ban nãy tự dưng tan biến, nhường chỗ cho một sự thấu hiểu tĩnh lặng. Mọi gánh nặng ngàn cân trong đầu dường như được tháo gỡ và nhẹ bẫng đi. Tiếng nhạc thiền nhẹ nhàng hòa quyện với tiếng nước chảy róc rách trong không gian êm ả, tôi từ từ thả lỏng từng thớ cơ, khép mắt lại và dần chìm vào một giấc ngủ thư thái.</p>
        </div>
        <div class="page-footer-num">- Trang 24 -</div>
      </div>
    </div>

    <!-- PAGE 25: Chương 2 (P9/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 9/15</div>
        <div class="page-text-body">
          <p>Khi tôi thức giấc và bước ra khỏi quán, đồng hồ đã điểm tầm 1 giờ sáng. Tôi chậm rãi từng bước chân tỉnh thức trở về căn phòng của mình. Đứng trong bóng tối, tôi tự nhủ: "Đã đến lúc sẵn sàng cho một cuộc chiến mới". Và điều quan trọng nhất bây giờ, là một giấc ngủ thật ngon để chuẩn bị cho ngày mới.</p>
          <p>Sáng hôm sau thức dậy, tôi tự thưởng cho bản thân một khởi đầu chậm chạp. Tôi không vội để công việc bủa vây tâm trí, mà chọn cách tỉnh thức trong từng hành động nhỏ nhất. Đánh răng, rửa mặt, và dành ra vài phút ngắm mình trong gương với một nụ cười nhẹ như một sự hài lòng về bản thân. Tôi ghé quán ăn sáng yêu thích, gọi một cốc cafe, rồi thong thả nhắn tin chào buổi sáng cho những người tôi yêu thương.</p>
        </div>
        <div class="page-footer-num">- Trang 25 -</div>
      </div>
    </div>

    <!-- PAGE 26: Chương 2 (P10/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 10/15</div>
        <div class="page-text-body">
          <p>Bước chân vào văn phòng, tôi như bỏ lại tất cả những mệt mỏi đêm qua sau cánh cửa. Tâm trí tôi lúc này chỉ khóa chặt vào một mục tiêu duy nhất: thương vụ với tập đoàn ngân hàng đa quốc gia nọ.</p>
        </div>
        <div class="page-footer-num">- Trang 26 -</div>
      </div>
    </div>

    <!-- PAGE 27: Chương 2 (P11/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 11/15</div>
        <div class="page-text-body">
          <p>Tôi bắt đầu phân tích tình hình của thương vụ và vạch ra các bước tiếp theo cần làm. Tôi có một thói quen, đó là không bao giờ bắt tay vào làm ngay lập tức nếu chưa hiểu rõ tình huống và ngữ cảnh. Hàng loạt câu hỏi sắc lạnh liên tục nảy số trong đầu tôi: Tại sao lại là chúng tôi? Một ngân hàng khổng lồ như họ thì các tập đoàn tư vấn tài chính hàng đầu thế giới lúc nào cũng săn đón. Điều gì thực sự đang xảy ra với họ? Tại sao bài toán hiện đại hóa lại được đặt ra ngay lúc này, và họ thực chất đang đứng ở đâu trên con đường đó?</p>
        </div>
        <div class="page-footer-num">- Trang 27 -</div>
      </div>
    </div>

    <!-- PAGE 28: Chương 2 (P12/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 12/15</div>
        <div class="page-text-body">
          <p>Tôi miệt mài phân tích từng chi tiết, liên kết các dữ kiện cũng như các thông tin được công bố trên báo chí. Đôi khi, bề nổi truyền thông vẫn chưa đủ độ tin cậy, tôi bắt buộc phải truy ngược sâu vào bản chất của vấn đề: họ là ai, họ đến từ đâu. Dần dần, bức tranh càng ngày càng trở nên rõ ràng, củng cố thêm niềm tin và những chiến thuật sơ khai đầu tiên bắt đầu thành hình trong đầu.</p>
          <p>Đang mải mê lướt từ sự kiện này đến sự kiện khác... thì một cái vỗ vai làm tôi giật mình. Oh, đó là sếp tôi. Ông ta bảo đừng quên cuộc họp 1-1 hôm nay để nói về "cái việc tôi muốn nghỉ việc" nhắn đêm qua. Tôi ngẩng lên nhìn ông, nhoẻn miệng cười:</p>
        </div>
        <div class="page-footer-num">- Trang 28 -</div>
      </div>
    </div>

    <!-- PAGE 29: Chương 2 (P13/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 13/15</div>
        <div class="page-text-body">
          <p>"Không cần thiết nữa đâu. Nhưng anh vẫn giữ slot đấy nhé, để thảo luận về các thông tin chiến lược mà em vừa tìm được."</p>
          <p>Tôi thấy một nụ cười nhẹ nhõm ánh lên trong mắt ông. Ông thừa hiểu tính tôi, một khi đã nhận kèo thì sẽ không bao giờ bỏ cuộc. Ông vỗ vai bảo: "Take care, không cần phải áp lực quá. Hôm nay anh bận cả ngày rồi, nên nếu mọi thứ OK thì cậu cứ chủ động tiếp tục đi. Khi nào sẵn sàng thì cả team cùng thảo luận."</p>
          <p>Thời gian không còn nhiều để chuẩn bị cho buổi thuyết trình mang tính quyết định sắp tới. Ngay khoảnh khắc đó, não tôi tự động kích hoạt chế độ siêu tập trung (Hyperfocus).</p>
        </div>
        <div class="page-footer-num">- Trang 29 -</div>
      </div>
    </div>

    <!-- PAGE 30: Chương 2 (P14/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 14/15</div>
        <div class="page-text-body">
          <p>Tôi nghĩ cũng có nhiều người sở hữu khả năng giống tôi. Một khi trạng thái hyperfocus đã được bật lên, tôi sẽ tư duy bằng cách tưởng tượng ra toàn bộ khung cảnh của buổi họp sắp tới. Tôi tự nói chuyện với chính mình trong vô thức hàng giờ liền, mô phỏng lại những thông tin, những thông điệp (message) mà tôi sẽ ném lên bàn đàm phán. Sát thủ trên bàn họp không phải là kẻ chỉ biết trình bày "những gì mình có", mà phải là người biết cách trình bày "những gì khách hàng khát khao muốn nghe".</p>
          <p>Nhưng để hiểu được câu chuyện của tôi có sức nặng và độ thuyết phục cỡ nào, xin hãy tạm gác lại cuộc họp sắp tới.</p>
        </div>
        <div class="page-footer-num">- Trang 30 -</div>
      </div>
    </div>

    <!-- PAGE 31: Chương 2 (P15/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 15/15</div>
        <div class="page-text-body">
          <p>Hãy cùng tôi nhìn lại quá khứ: Hành trình 2 năm ròng rã tôi làm Kiến trúc sư trưởng, gánh vác trọng trách hiện đại hóa toàn bộ hệ thống taxi booking cho gã khổng lồ ngành vận tải lớn nhất Singapore. Đó chính là trận đánh đã rèn giũa nên tôi của ngày hôm nay.</p>
          <p>---</p>
          <p>👉 <b>[Đọc tiếp Phần 3: Chuyến Tàu Điện Ngầm Và Cái Boongke Cách Ly](hoi_ky_chuong_3_chuyen_tau_dien_ngam_va_cai_boongke_cach_ly.md)</b></p>
        </div>
        <div class="page-footer-num">- Trang 31 -</div>
      </div>
    </div>

    <!-- PAGE 32: Chương 3 (P1/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 1/19</div>
        <h2 class="page-chapter-title">Chuyến Tàu Điện Ngầm & Cái Boongke Cách Ly</h2>
        <div class="page-text-body">
          <p>Để hiểu được sức nặng của câu chuyện mà tôi sắp mang lên bàn thương lượng với ngân hàng, hãy cùng tôi quay ngược thời gian. Khởi nguồn của chiếc áo quá khổ thứ hai trong sự nghiệp của tôi bắt đầu vào đúng cái thời điểm thế giới vừa bước ra khỏi cơn đại dịch.</p>
        </div>
        <div class="page-footer-num">- Trang 32 -</div>
      </div>
    </div>

    <!-- PAGE 33: Chương 3 (P2/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 2/19</div>
        <div class="page-text-body">
          <p>Đó là lúc thị trường IT nóng hơn bao giờ hết, các dự án hiện đại hóa (modernization) mọc lên khắp nơi như nấm sau mưa. Thời đó, những khái niệm như AI tạo sinh hay LLM vẫn chưa bùng nổ như bây giờ. Công việc của tôi lúc đó khá "chill", theo kiểu cân bằng hoàn hảo. Mỗi tuần tôi chỉ lên văn phòng đúng một ngày, lại còn có đồng nghiệp đưa rước tận cửa, những ngày còn lại thì work from home.</p>
        </div>
        <div class="page-footer-num">- Trang 33 -</div>
      </div>
    </div>

    <!-- PAGE 34: Chương 3 (P3/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 3/19</div>
        <div class="page-text-body">
          <p>Nhờ cái work-life balance đó, tôi có thêm rủng rỉnh thời gian cho những sở thích cá nhân, rảnh rỗi vác máy ảnh đi chụp hình dạo khắp nơi. Nói chung, đó là một chuỗi ngày thong dong và nhàn hạ.</p>
          <p>Cho đến một hôm, khi tôi đang thảnh thơi ở nhà, điện thoại bỗng reo lên. Là sếp tôi gọi.</p>
          <p>"Dạ em nghe."</p>
          <p>"Chú đang rảnh à?"</p>
          <p>"Dạ cũng thoải mái anh, nhàn quá đâm ra hơi chán."</p>
          <p>"Có một vụ cần chú xem qua. Mình đang lead dự án hiện đại hóa hệ thống book taxi của công ty ABC. Chú vào review đống tài liệu rồi gửi cho anh comments. Có thể sẽ cần chú qua bên đó hỗ trợ."</p>
          <p>"OK anh."</p>
        </div>
        <div class="page-footer-num">- Trang 34 -</div>
      </div>
    </div>

    <!-- PAGE 35: Chương 3 (P4/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 4/19</div>
        <div class="page-text-body">
          <p>Sếp tôi là một người rất đặc biệt. Ổng sở hữu một chất giọng đều đều, thều thào và bình thản đến mức rợn người. Bất kể tình huống lúc đó có đang yên bình hay cháy nhà chết người đi chăng nữa, thì âm lượng và nhịp điệu của ổng vẫn không hề thay đổi. Thế nên, chỉ nghe giọng ổng, tôi hoàn toàn không thể lường trước được mức độ căng thẳng của cái dự án mà mình sắp phải nhảy vào.</p>
          <p>Ngay sau đó, sếp add tôi vào một group chat có vài nhân sự đang làm việc, đồng thời cấp quyền truy cập vào kho tài liệu dự án. Hôm đó, tôi miệt mài đọc từng trang tài liệu, lướt cạn lịch sử các cuộc hội thoại và hàng loạt email đính kèm.</p>
          <p>OMG. Tất cả những thông tin đập vào mắt cho tôi thấy một thực tại không thể tồi tệ hơn.</p>
        </div>
        <div class="page-footer-num">- Trang 35 -</div>
      </div>
    </div>

    <!-- PAGE 36: Chương 3 (P5/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 5/19</div>
        <div class="page-text-body">
          <p>Kỳ vọng của dự án là hiện đại hóa toàn bộ hệ thống cốt lõi của doanh nghiệp vận tải này bằng phương pháp đập đi xây lại (re-platform), đưa toàn bộ dữ liệu lên Cloud trong vòng vỏn vẹn... 8 tháng. Với tình trạng kiến trúc hiện tại của họ, đây là một mục tiêu hoang đường. Càng lướt sâu vào lịch sử tin nhắn, tôi càng ngửi thấy mùi toxic (độc hại) nồng nặc. Các bên đang rơi vào trạng thái hỗn loạn, phòng thủ và chỉ lăm le tìm cách đối phó, đổ lỗi cho nhau thay vì giải quyết vấn đề.</p>
          <p>Tôi lập tức đứng trên quan điểm của khách hàng, tổng hợp tình hình và gửi lại cho sếp những feedback cực kỳ thẳng thắn, không nể nang.</p>
        </div>
        <div class="page-footer-num">- Trang 36 -</div>
      </div>
    </div>

    <!-- PAGE 37: Chương 3 (P6/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 6/19</div>
        <div class="page-text-body">
          <p>Vài phút sau, sếp nhắn lại: "Góc nhìn của chú khá tương đồng với ý kiến khách hàng. Sắp xếp công việc hiện tại đi, chuẩn bị tham gia vào dự án này. Vị trí Kiến trúc sư trưởng... có thể sẽ cần thay người."</p>
          <p>Nhìn dòng tin nhắn trên màn hình, tôi bật cười khẩy. Dĩ nhiên rồi, ném tôi vào giữa cái đống lửa đang cháy rừng rực này mà không giao quyền tổng tư lệnh thì chẳng khác nào trói tay tôi lại bắt đi đánh giặc. Một chút lo lắng xẹt qua trong đầu, nhưng ngay lập tức bị đè bẹp bởi sự kích thích tột độ. Lâu lắm rồi tôi mới lại ngửi thấy mùi máu của một dự án "khó nhằn" cỡ này.</p>
        </div>
        <div class="page-footer-num">- Trang 37 -</div>
      </div>
    </div>

    <!-- PAGE 38: Chương 3 (P7/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 7/19</div>
        <div class="page-text-body">
          <p>Đêm đó, thay vì trằn trọc lo âu hay cắm đầu vào mớ tài liệu rác, tôi quyết định thư giãn. Bạn bè rủ làm vài ván Dota, tôi nhận kèo ngay. Adrenaline của sự hào hứng khiến tôi đánh hăng lạ thường, càn quét khắp bản đồ. Với tôi, đó không phải là chơi game, đó là cách tôi mài sắc lại tư duy và xả hết mọi tạp niệm trước giờ G.</p>
          <p>Sáng hôm sau, tôi thức dậy từ tờ mờ sáng. Trụ sở khách hàng nằm tít ở đầu kia của hòn đảo, ngốn của tôi gần 60 phút di chuyển luân phiên giữa xe bus và MRT. Lần đầu tiên phải đi làm xa đến thế, nhưng tôi không để lãng phí một phút nào. Ngồi trên băng ghế tàu điện ngầm lạnh lẽo, tôi bật máy tính, kết nối mạng và quyết định tiến hành một cuộc "khám nghiệm tử thi" toàn diện kho tài liệu của dự án.</p>
        </div>
        <div class="page-footer-num">- Trang 38 -</div>
      </div>
    </div>

    <!-- PAGE 39: Chương 3 (P8/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 8/19</div>
        <div class="page-text-body">
          <p>Mọi thứ dần hiện nguyên hình.</p>
          <p>Đập vào mắt tôi đầu tiên là không gian lưu trữ Confluence. Phải thừa nhận, bề nổi được cấu trúc vô cùng bài bản và chuyên nghiệp. Đội ngũ kỹ sư của chúng tôi đã đổ một lượng effort (công sức) khổng lồ vào đây. Số lượng tài liệu đồ sộ đến mức choáng ngợp. Nếu chỉ nhìn lướt qua, ai cũng sẽ gật gù khen ngợi.</p>
        </div>
        <div class="page-footer-num">- Trang 39 -</div>
      </div>
    </div>

    <!-- PAGE 40: Chương 3 (P9/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 9/19</div>
        <div class="page-text-body">
          <p>Nhưng khi tôi lặn sâu hơn vào phần Yêu cầu hệ thống (Requirement), sự nực cười bắt đầu xuất hiện. Một mớ tài liệu được viết theo định dạng Gherkin của phương pháp tiếp cận BDD (Behavior-Driven Development). Nếu là viết User Story trên Jira cho quy trình Agile, thì Gherkin là một công cụ tuyệt vời. Nhưng trời đất ơi, đây là lần đầu tiên trong đời tôi thấy có người dùng Gherkin để viết System Requirement Specifications (Tài liệu đặc tả hệ thống toàn diện)!</p>
        </div>
        <div class="page-footer-num">- Trang 40 -</div>
      </div>
    </div>

    <!-- PAGE 41: Chương 3 (P10/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 10/19</div>
        <div class="page-text-body">
          <p>Nó giống như việc bạn cần bản vẽ thiết kế tổng thể của một tòa nhà chọc trời, nhưng kiến trúc sư lại quăng cho bạn một đống giấy nhớ ghi chú chi tiết về từng viên gạch, từng cái nắm cửa vậy. Thông tin rời rạc, chắp vá và hoàn toàn thiếu đi bức tranh toàn cảnh. Tôi lắc đầu ngán ngẩm, cá chắc 100% rằng nếu đưa đống yêu cầu này vào triển khai, khoảng trống (gap) sẽ xuất hiện khắp nơi và dự án sẽ phải đập đi sửa lại liên tục.</p>
        </div>
        <div class="page-footer-num">- Trang 41 -</div>
      </div>
    </div>

    <!-- PAGE 42: Chương 3 (P11/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 11/19</div>
        <div class="page-text-body">
          <p>Cơn ác mộng chưa dừng lại ở đó. Lướt qua mớ Tài liệu thiết kế chi tiết (Detailed Design) cho từng microservices, tôi phát hiện ra những người viết lại đi lặp lại các đoạn mô tả logic nghiệp vụ – thứ đáng lẽ chỉ nên nằm bên phần Business Requirement. Tệ hại hơn, logic ở hai bên lại đá nhau chan chát. Đặt mình vào vị trí của một gã Developer gõ code dưới đáy dây chuyền, tôi tự hỏi: "Bây giờ tao phải code theo cái nào đây?"</p>
        </div>
        <div class="page-footer-num">- Trang 42 -</div>
      </div>
    </div>

    <!-- PAGE 43: Chương 3 (P12/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 12/19</div>
        <div class="page-text-body">
          <p>Tiếp tục mở đến phần tài liệu Kiến trúc (Architecture) và Thiết kế Cơ sở dữ liệu, tôi chỉ muốn gập máy lại. Đến 80% trong số đó chỉ là một mớ lý thuyết sáo rỗng. Mấy bản thiết kế Database cứ lải nhải về những Best Practice chung chung nhập nhằng từ trên mạng, kiểu như "Tại sao nên dùng RDBMS thay vì NoSQL", mà tuyệt nhiên không hề có một ADR (Architecture Decision Record) nào giải thích cho những lựa chọn kỹ thuật gắn với bối cảnh cụ thể của cái hãng taxi này. Họ đang mang sách giáo khoa đi đánh trận.</p>
        </div>
        <div class="page-footer-num">- Trang 43 -</div>
      </div>
    </div>

    <!-- PAGE 44: Chương 3 (P13/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 13/19</div>
        <div class="page-text-body">
          <p>Và đòn chí mạng cuối cùng làm tôi lạnh toát sống lưng: Tốc độ.
Dự án chỉ còn vỏn vẹn 2 tháng nữa là chạm mốc "Go-live" (đưa vào vận hành thực tế). Thế nhưng, tất cả những bản demo được quay lại trên hệ thống chỉ là các demo sặc mùi kỹ thuật (technical demo). Họ tự gọi trực tiếp vào từng API đơn lẻ, chạy rải rác trên từng microservice tách biệt. Rõ ràng, khâu tích hợp toàn hệ thống (Integration) vẫn đang là một con số không tròn trĩnh. Đội ngũ phát triển cứ cắm đầu code dựa trên sự suy diễn chủ quan từ các bản thiết kế chi tiết rời rạc, thay vì nhìn nhận xuyên suốt từ góc độ của người dùng cuối.</p>
        </div>
        <div class="page-footer-num">- Trang 44 -</div>
      </div>
    </div>

    <!-- PAGE 45: Chương 3 (P14/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 14/19</div>
        <div class="page-text-body">
          <p>Chuyến tàu MRT phanh kít lại, báo hiệu đến trạm. Tôi gập laptop, bước ra khỏi toa tàu, hòa vào dòng người hối hả của buổi sáng Singapore. Bức tranh đã quá rõ ràng: Đội quân tinh nhuệ của chúng tôi thực chất đang bịt mắt cầm súng, bắn loạn xạ trong một khu rừng mù sương.</p>
        </div>
        <div class="page-footer-num">- Trang 45 -</div>
      </div>
    </div>

    <!-- PAGE 46: Chương 3 (P15/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 15/19</div>
        <div class="page-text-body">
          <p>Nhưng hành trình đi làm dài đằng đẵng của tôi vẫn chưa kết thúc. Bước ra khỏi ga tàu điện, tôi phải lết lên một chuyến xe buýt qua vài trạm nữa mới tới nơi. Tôi cất vội laptop vào balo. Nhồi nhét thêm mớ requirement nhức đầu đó khi đang ngồi trên xe buýt là một ý tồi nếu bạn không muốn cơn say xe quật ngã. Chọn một chỗ ngồi sát cửa sổ, tôi tựa đầu vào mặt kính, để mặc ánh nhìn trôi tuột theo những tán cây và dòng xe cộ vùn vụt lướt qua, chìm vào những suy nghĩ mông lung lúc nào không hay.</p>
          <p>Bước xuống xe buýt, tôi tặc lưỡi ngán ngẩm nhìn đoạn đường đi bộ còn lại. "Ngày nào cũng đi cày kiểu này chắc có ngày chết mất," tôi thầm than vãn.</p>
        </div>
        <div class="page-footer-num">- Trang 46 -</div>
      </div>
    </div>

    <!-- PAGE 47: Chương 3 (P16/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 16/19</div>
        <div class="page-text-body">
          <p>Nhưng lạ thay, khi rẽ vào con phố dẫn tới trụ sở khách hàng, không khí bỗng đổi khác. Hai bên đường không phải là những khối bê tông chọc trời ngột ngạt của khu trung tâm, mà mang dáng dấp của một vùng quê yên ả. Những bức tường gạch cũ kỹ được phủ kín bởi những mảng dây leo xanh mướt. Bóng râm mát rượi và sự tĩnh lặng tự nhiên xua tan sạch mọi bực dọc ban nãy. Tâm trạng tôi giãn ra, bước chân tự động nảy lên nhịp nhàng, nhảy tung tăng trên vỉa hè lúc nào không hay.</p>
          <p>Thế nhưng, cái sự "chill" đó bị dập tắt ngay tức khắc khi tôi đứng trước trụ sở công ty khách hàng.</p>
        </div>
        <div class="page-footer-num">- Trang 47 -</div>
      </div>
    </div>

    <!-- PAGE 48: Chương 3 (P17/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 17/19</div>
        <div class="page-text-body">
          <p>Nó là một tòa nhà theo phong cách cũ rích, và tồi tệ nhất là: không có thang máy. Lết những bước chân rã rời leo bộ lên tận tầng 3, tôi thở hắt ra khi một cậu đồng nghiệp mở cửa đón vào.</p>
          <p>Vừa bước qua lối vào chật hẹp, một sa bàn sống động của sự chia rẽ đập thẳng vào mắt tôi. Không gian tầng 3 này bị xẻ làm ba mảnh không thể rạch ròi hơn.</p>
          <p>Bên cánh trái là lãnh địa của "Thế giới mới". Ở đó, đội ngũ IT phụ trách Frontend, Backend-for-Frontend (BFF) ngồi chung mâm với nhóm Business Users.</p>
          <p>Bên cánh phải lại là một bầu không khí khác hẳn. Đó là "Thế giới cũ" – đại bản doanh của đội ngũ IT đang vận hành cái lõi hệ thống Backend nguyên khối. Giữa hai bên dường như có một đường biên giới vô hình mà không ai muốn bước qua.</p>
        </div>
        <div class="page-footer-num">- Trang 48 -</div>
      </div>
    </div>

    <!-- PAGE 49: Chương 3 (P18/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 18/19</div>
        <div class="page-text-body">
          <p>Và nằm lọt thỏm ngay chính giữa đường biên giới lạnh lẽo đó, là phòng làm việc của nhóm chuyên gia tư vấn chúng tôi.</p>
          <p>Tôi bước vào phòng. Đáng lý ra, một đội ngũ mang trọng trách "hiện đại hóa" phải được ngồi trong một không gian mở, minh bạch và kết nối. Nhưng không, cánh cửa và những vách ngăn bao quanh phòng chúng tôi là những tấm ván đặc quánh, kín mít chứ không phải vách kính trong suốt. Nó biến căn phòng này thành một cái boongke cách ly hoàn toàn với luồng sinh khí (và cả thông tin) của thế giới bên ngoài.</p>
        </div>
        <div class="page-footer-num">- Trang 49 -</div>
      </div>
    </div>

    <!-- PAGE 50: Chương 3 (P19/19) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 19/19</div>
        <div class="page-text-body">
          <p>Chưa hết, sự chia rẽ không chỉ tồn tại ở ngoài kia. Ngay bên trong cái boongke chật hẹp này, một đường ranh giới vô hình khác cũng được vạch ra rõ rệt: Một nửa phòng là lãnh địa của team SA (Kiến trúc sư hệ thống), nửa còn lại là chỗ cắm trại của team BA (Phân tích nghiệp vụ). Hai nhóm người ngồi quay lưng lại với nhau, cặm cụi vào màn hình, tựa như hai hòn đảo cô lập giữa một đại dương mù mịt thông tin.</p>
          <p>Tôi kéo ghế ngồi xuống, ném chiếc balo sang một bên. Cuộc chiến thực sự bây giờ mới bắt đầu.</p>
          <p>---</p>
          <p>👉 <b>[Đọc tiếp Phần 4: Vỏ Bọc Lính Mới Và Nút Thắt Tổ Chức](hoi_ky_chuong_4_vo_boc_linh_moi_va_nut_that_to_chuc.md)</b></p>
        </div>
        <div class="page-footer-num">- Trang 50 -</div>
      </div>
    </div>

    <!-- PAGE 51: Chương 4 (P1/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 1/15</div>
        <h2 class="page-chapter-title">Vỏ Bọc Lính Mới & Nút Thắt Tổ Chức</h2>
        <div class="page-text-body">
          <p>Tôi kéo ghế ngồi xuống, ném chiếc balo sang một bên. Không mất quá nhiều thời gian để màn chào hỏi xã giao kết thúc, bởi phần lớn anh em trong cái "boongke" này đều đã nhẵn mặt nhau từ những dự án trước.</p>
        </div>
        <div class="page-footer-num">- Trang 51 -</div>
      </div>
    </div>

    <!-- PAGE 52: Chương 4 (P2/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 2/15</div>
        <div class="page-text-body">
          <p>Căn phòng vẫn ồn ào và rôm rả. Nhưng điều khiến tôi cảm thấy ngột ngạt không phải là sự chật chội, mà là thứ không khí sực mùi toxic đang bao trùm lấy những câu chuyện. Khắp nơi chỉ toàn những tiếng thở dài, những lời than vãn, những câu chửi thề ngao ngán nhắm vào sự lươn lẹo của khách hàng, sự vô lý của đội ngũ "Thế giới cũ", và cả sự bế tắc của chính dự án này.</p>
        </div>
        <div class="page-footer-num">- Trang 52 -</div>
      </div>
    </div>

    <!-- PAGE 53: Chương 4 (P3/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 3/15</div>
        <div class="page-text-body">
          <p>Họ vẫn coi tôi là một gã Kiến trúc sư giải pháp (SA) bình thường vừa được ném vào để tăng cường nhân sự. Chẳng ai trong căn phòng này mường tượng được nội dung cuộc gọi định mệnh tối qua giữa tôi và sếp, cũng không ai biết về một cuộc thay máu nhân sự lớn ở vị trí Kiến trúc sư trưởng sắp sửa diễn ra. Với họ, tôi đơn giản chỉ là gã lính mới được phân công vào để cày ải, vẽ vời cho xong cái luồng thiết kế đặt xe (booking flow).</p>
          <p>Một cậu em đẩy bản thiết kế sang cho tôi, than thở:</p>
          <p>"Anh xem giúp luồng này với, bên kia họ giấu requirement kỹ quá, em mò mẫm vẽ đại mà chẳng biết trúng trật thế nào."</p>
        </div>
        <div class="page-footer-num">- Trang 53 -</div>
      </div>
    </div>

    <!-- PAGE 54: Chương 4 (P4/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 4/15</div>
        <div class="page-text-body">
          <p>Tôi gật đầu nhận lấy, mỉm cười nhẹ. Tôi hiểu rất rõ vai trò thực sự của mình lúc này, thế nên tôi hoàn toàn không vội vàng bật máy lên để bắt tay vào vẽ vời hay gõ code.</p>
        </div>
        <div class="page-footer-num">- Trang 54 -</div>
      </div>
    </div>

    <!-- PAGE 55: Chương 4 (P5/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 5/15</div>
        <div class="page-text-body">
          <p>Ngồi tựa lưng vào ghế, tôi lặng lẽ quan sát những cái đầu đang cắm gằm vào màn hình, vật lộn với những dòng code và API vô hồn. Bằng kinh nghiệm thực chiến qua hàng loạt dự án hiện đại hóa hệ thống doanh nghiệp (Enterprise Modernization), tôi thừa hiểu một chân lý phũ phàng: Các vấn đề cốt lõi đánh sập một dự án hiếm khi nằm ở thiết kế hay kỹ thuật. Bản chất của việc hiện đại hóa là lấy những công nghệ đã thành công, áp dụng vào một doanh nghiệp truyền thống để ép họ thay đổi cách vận hành. Nút thắt sinh tử, vì thế, luôn nằm ở Con người và Quy trình.</p>
          <p>Tôi bắt đầu chiến dịch rã đông cái "boongke" này bằng một thứ vũ khí cổ điển và hiệu quả nhất của đàn ông: những câu chuyện phiếm.</p>
        </div>
        <div class="page-footer-num">- Trang 55 -</div>
      </div>
    </div>

    <!-- PAGE 56: Chương 4 (P6/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 6/15</div>
        <div class="page-text-body">
          <p>Ngồi cùng bàn với tôi lúc đó là ba ông Kiến trúc sư Giải pháp (SA). Ban đầu, tôi chủ động hùa theo vài câu bông đùa về mấy bóng hồng trong công ty. Khi những gã đàn ông bắt đầu hạ lớp giáp xuống và trở nên thân tình, đó chính là thời khắc hoàn hảo nhất để tôi thả mồi.</p>
          <p>Tôi nhấp một ngụm cà phê, bâng quơ quăng ra một quả bom giữa bàn:</p>
          <p>"Mà mấy anh tính đề xuất Microservices cho cái hệ thống taxi này thật à? Em nói thật, Microservices giờ nó như một cái bong bóng xịt, một thứ kiến trúc sắp bị khai tử tới nơi rồi. Nó làm đội chi phí hạ tầng, khó kiểm soát. Nhìn thằng StackOverflow xem, hệ thống Monolith kinh điển phục vụ cả thế giới mà vẫn chạy phà phà đó thôi!"</p>
        </div>
        <div class="page-footer-num">- Trang 56 -</div>
      </div>
    </div>

    <!-- PAGE 57: Chương 4 (P7/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 7/15</div>
        <div class="page-text-body">
          <p>Đúng như dự đoán, quả bom nổ tung. Một cuộc tranh luận nảy lửa nổ ra. Nhưng sự thú vị nhất nằm ở chỗ: Dù cãi rất hăng, bảo vệ quan điểm đến mức đỏ mặt tía tai, họ tuyệt nhiên không đưa ra nổi một ví dụ thực chiến nào để chứng minh hệ thống taxi này thực sự cần đến Microservices.</p>
          <p>Trong suốt một tiếng đó, tôi vừa gật gù lắng nghe, vừa âm thầm ghi nhận. Thông qua cách họ phản ứng, tôi lờ mờ nhận ra một vấn đề cốt lõi: Đang có một khoảng cách không nhỏ giữa lý thuyết kiến trúc (Architecture) và khả năng thực thi (Engineering) ngay trong chính nội bộ team chúng tôi.</p>
        </div>
        <div class="page-footer-num">- Trang 57 -</div>
      </div>
    </div>

    <!-- PAGE 58: Chương 4 (P8/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 8/15</div>
        <div class="page-text-body">
          <p>Giả thuyết này hoàn toàn được khẳng định khi tôi lướt lại một vài đoạn chat đầy mùi thuốc súng trong group chung của dự án, nơi SA Lead và Head of Engineering đang cãi nhau nảy lửa vì thiếu những guideline cụ thể. Những dòng tin nhắn đó chỉ ra một sự thật rõ rệt: Khoảng cách giữa SA và Engineering đã trở nên quá lớn.</p>
        </div>
        <div class="page-footer-num">- Trang 58 -</div>
      </div>
    </div>

    <!-- PAGE 59: Chương 4 (P9/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 9/15</div>
        <div class="page-text-body">
          <p>Đưa mắt nhìn sang nửa kia của căn phòng, nơi đội ngũ BA (Phân tích nghiệp vụ) đang đóng quân, tôi lại thấy một thái cực hoàn toàn khác. Đội BA chìm trong một sự im lặng đáng sợ, tuyệt nhiên không hé răng tham gia vào cuộc tranh luận. Quan sát kỹ hơn, tôi nhận thấy họ đang được cử đi onsite nhưng lại chẳng có ai nhấc mông ra khỏi ghế để đi gặp Business Users. Họ chỉ cắm cúi gõ lạch cạch viết tài liệu.</p>
          <p>Bức tranh tổ chức của dự án không chỉ có nhiều vấn đề từ bên ngoài, mà còn đang rạn nứt ngay từ bên trong.</p>
          <p>Nhưng thời gian không cho phép tôi ngồi yên để suy diễn. Buổi chiều hôm đó, tôi nhờ một anh Engineering Manager dẫn sang khu vực văn phòng cánh trái – "Thế giới mới".</p>
        </div>
        <div class="page-footer-num">- Trang 59 -</div>
      </div>
    </div>

    <!-- PAGE 60: Chương 4 (P10/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 10/15</div>
        <div class="page-text-body">
          <p>Bước vào không gian bên cánh trái, một nhịp độ năng động đập ngay vào mắt. Người đầu tiên tôi bước tới bắt tay là Zang, vị VP Kiến trúc mang phong thái điềm đạm, sắc sảo của một tay chơi cờ lão luyện. Đứng cách đó không xa là Ju – vị VP kỹ thuật thứ hai, toát ra thoang thoảng mùi rượu whisky và uy lực của một gã quen nắm quyền sinh sát.</p>
          <p>Dưới trướng Ju là Tứ trụ Engineering Manager: An luôn mang vẻ lo âu; Zo kiêu kỳ nhưng năng lực thực chiến có vẻ không quá ấn tượng; Ri sống khép kín đúng chất nghiện game; và Bo – người đàn ông điềm đạm, vững chãi nhất. Cuối cùng là vị VP Business trẻ tuổi, nói nhanh như súng liên thanh và mang một khí thế cực kỳ hung hãn.</p>
        </div>
        <div class="page-footer-num">- Trang 60 -</div>
      </div>
    </div>

    <!-- PAGE 61: Chương 4 (P11/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 11/15</div>
        <div class="page-text-body">
          <p>Chào hỏi xong, tôi trở về chỗ ngồi, cẩn thận đóng gói những ấn tượng ban đầu này lại. Tuy nhiên, có một thông tin cực kỳ thú vị và trớ trêu mà tôi thu thập được: Đa phần dàn lãnh đạo sừng sỏ bên "Thế giới mới" này đều là người mới nhậm chức, gánh trên vai KPI hiện đại hóa hệ thống. Thế nhưng, cái quyền lực thực tế mà họ đang nắm giữ lại chỉ quẩn quanh ở tầng Frontend hoặc Backend for Frontend (BFF) – tức là cái vỏ giao diện. Còn cái lõi hệ thống thực sự thì họ hoàn toàn không chạm tay tới được.</p>
          <p>Chính cái nghịch lý trớ trêu đó đã dẫn tôi đến cuộc đụng độ trực diện đầu tiên với "Thế giới cũ" trong một buổi review thiết kế chiều hôm đó. Và đó cũng là khoảnh khắc tôi chạm mặt Tí.</p>
        </div>
        <div class="page-footer-num">- Trang 61 -</div>
      </div>
    </div>

    <!-- PAGE 62: Chương 4 (P12/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 12/15</div>
        <div class="page-text-body">
          <p>Bề ngoài, đây chỉ là một buổi review cho một luồng logic cỏn con. Nhưng ngồi chễm chệ cạnh VP Ju lại là một gã đàn ông mang dáng vẻ dị biệt: tóc để dài ngoằng vuốt ngược ra sau, hàm răng xỉn màu vì nhai trầu lâu năm. Gã ngồi đó, vắt chéo chân, toát ra khí chất bất cần.</p>
          <p>Trong suốt buổi họp, gã liên tục mổ xẻ bản thiết kế của bên tôi. Gã chỉ ra cái sai rất chuẩn xác, nhưng tuyệt nhiên lấp lửng, không đưa ra bất kỳ một manh mối nào để hướng dẫn chúng tôi làm cho đúng. Đầu tôi nảy số liên tục: Nếu chỉ một cái logic đơn giản xíu xiu mà đã cần chính gã xác nhận, lại còn phải kéo theo cả VP Ju ngồi kiểm chứng, thì hàng ngàn cái logic cốt lõi khác sẽ ra sao?</p>
        </div>
        <div class="page-footer-num">- Trang 62 -</div>
      </div>
    </div>

    <!-- PAGE 63: Chương 4 (P13/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 13/15</div>
        <div class="page-text-body">
          <p>Tôi chọn cách khóa miệng quan sát. Sau cuộc họp, tôi chủ động bước tới mỉm cười làm quen, gã chỉ gật đầu lạnh tanh rồi quay lưng đi thẳng.</p>
          <p>Dò hỏi ra mới biết, Tí chính là Kỹ sư trưởng, thống soái của "Thế giới cũ", kẻ duy nhất nắm giữ toàn bộ Knowledge Base trong đầu. Dù đang "rắn mất đầu", quyền lực ngầm của Tí vẫn bao trùm. Tí hoàn toàn không cần chúng tôi. Muốn lật ngược thế cờ, tôi buộc phải bước qua xác – hoặc thu phục – gã giữ cửa nhai trầu này.</p>
        </div>
        <div class="page-footer-num">- Trang 63 -</div>
      </div>
    </div>

    <!-- PAGE 64: Chương 4 (P14/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 14/15</div>
        <div class="page-text-body">
          <p>Tôi quay trở lại bàn làm việc, tựa lưng vào ghế, khẽ thở phào. Cả một ngày trời chạy đôn chạy đáo, từ cái boongke ngột ngạt sang thế giới mới hào nhoáng, rồi lại đụng độ tay trùm thế giới cũ. Tôi chưa vẽ thêm được một cái luồng nào ra hồn, cũng chẳng gõ được một dòng code nào. Nếu có lão sếp ở đây, chắc lão sẽ càm ràm bảo tôi ngồi chơi cả ngày.</p>
          <p>Nhưng kệ lão, tự bản thân tôi thấy hôm nay là một ngày làm việc quá đỗi hiệu quả rồi. Thế là đủ.</p>
        </div>
        <div class="page-footer-num">- Trang 64 -</div>
      </div>
    </div>

    <!-- PAGE 65: Chương 4 (P15/15) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 15/15</div>
        <div class="page-text-body">
          <p>Trời chập choạng tối. Tôi dọn đồ, vác balo bước ra khỏi văn phòng. Tranh thủ thời gian, tôi thong thả dạo vài vòng quanh khu vực để thám thính xem đồ ăn thức uống quanh đây thế nào. Điểm kết thúc của ngày hôm nay là một quán quen thuộc. Tôi gọi một cốc bia lạnh, bọt sủi tăm mát rượi trôi tuột xuống cổ họng, xua đi cái nóng nực của Singapore và cả những căng thẳng rát não ban chiều.</p>
          <p>Tí, Ju, Zang hay cái mớ bòng bong requirement kia... thôi thì, mọi chuyện cứ để mai tính tiếp! Khakhakha.</p>
          <p>---</p>
          <p>👉 <b>[Đọc tiếp Phần 5: Bản Đồ Trí Mạng Và Thế Trận "Vườn Không Nhà Trống"](hoi_ky_chuong_5_ban_do_tri_mang_va_the_tran_vuon_khong_nha_trong.md)</b></p>
        </div>
        <div class="page-footer-num">- Trang 65 -</div>
      </div>
    </div>

    <!-- PAGE 66: Chương 5 (P1/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 1/24</div>
        <h2 class="page-chapter-title">Bản Đồ Trí Mạng & Thế Trận Vườn Không Nhà Trống</h2>
        <div class="page-text-body">
          <p>Như một thói quen khó bỏ, tôi luôn bắt đầu ngày mới của mình bằng một nhịp độ chậm rãi và tĩnh lặng nhất có thể. Không vội vã mở máy tính, không cắm mặt vào những dòng tin nhắn giục giã đang nảy liên tục trong group chat. Ngồi nhâm nhi ly cà phê buổi sáng, tôi cho phép bộ não mình có một khoảng lùi cần thiết để nhìn nhận lại toàn bộ ngổn ngang sự kiện của ngày hôm qua.</p>
        </div>
        <div class="page-footer-num">- Trang 66 -</div>
      </div>
    </div>

    <!-- PAGE 67: Chương 5 (P2/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 2/24</div>
        <div class="page-text-body">
          <p>Trải qua một ngày "lặn lội" từ cái boongke ngột ngạt sang khu vực hào nhoáng của các sếp lớn, rồi lại đụng độ trực diện với tay trùm giữ cửa, mọi mảnh ghép giờ đây đã nằm gọn trên bàn.</p>
          <p>Trong đầu tôi lúc này không còn là một sơ đồ kiến trúc hệ thống khô khan, mà đã định hình thành một tấm bản đồ ba chiều sắc nét: bao gồm cả địa lý, cấu trúc xã hội, và đẫm mùi chính trị chốn công sở. Từng nhân vật đều đã được phác họa rõ ràng với nguồn gốc, năng lực cốt lõi và mục tiêu (KPI) riêng biệt của họ.</p>
        </div>
        <div class="page-footer-num">- Trang 67 -</div>
      </div>
    </div>

    <!-- PAGE 68: Chương 5 (P3/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 3/24</div>
        <div class="page-text-body">
          <p>Tôi thấy một dàn lãnh đạo mới nhậm chức mang tham vọng đập đi xây lại hệ thống, nhưng lại bị kẹt ở lớp vỏ giao diện bên ngoài. Tôi thấy một đội ngũ tư vấn nội bộ đang đứt gãy, nơi SA và BA ngồi quay lưng lại với nhau trong sự hoang mang tột độ. Và ở điểm nút yết hầu của mọi luồng thông tin, tôi thấy Tí – gã Kỹ sư trưởng dị biệt đang nắm giữ toàn bộ "linh hồn" của hệ thống cũ và tuyệt nhiên không có ý định chia sẻ nó cho bất kỳ ai.</p>
          <p>Ráp nối toàn cảnh bức tranh đó lại, một sự thật lạnh lẽo hiện ra: Tình thế đang cực kỳ bất lợi cho chúng tôi.</p>
        </div>
        <div class="page-footer-num">- Trang 68 -</div>
      </div>
    </div>

    <!-- PAGE 69: Chương 5 (P4/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 4/24</div>
        <div class="page-text-body">
          <p>Nhìn sang đội ngũ kỹ sư của mình, tôi biết họ đang hừng hực khí thế. Dù bên trong nội bộ đang râm ran rất nhiều sự bất mãn mà họ không rõ lý do tại sao, nhưng bù lại, hàng trăm thợ code thiện chiến với những khối óc logic sắc bén ấy vẫn đang trong tư thế sẵn sàng chờ lệnh.</p>
          <p>Nhưng bi kịch ở chỗ, đội quân đã dàn trận xong xuôi, gươm giáo đã tuốt trần... thế nhưng đánh vào đâu? Đánh mục tiêu nào? Không một ai hay biết. Lương thực (Requirement) thì bị giấu nhẹm, bản đồ tác chiến (Knowledge Base) thì nằm gọn trong đầu một gã Kỹ sư trưởng bảo thủ phe đối lập. Lực lượng của chúng tôi đang bị nhốt trong một cái boongke biệt lập, bịt mắt bằng cái mớ tài liệu Gherkin loằng ngoằng.</p>
        </div>
        <div class="page-footer-num">- Trang 69 -</div>
      </div>
    </div>

    <!-- PAGE 70: Chương 5 (P5/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 5/24</div>
        <div class="page-text-body">
          <p>Trên thương trường công nghệ, đội ngũ kỹ sư dù có đông đảo và xuất chúng đến mấy mà không có yêu cầu bài toán rõ ràng thì sức mạnh đó cũng coi như vô dụng. Cũng giống như một đội quân bị mắc kẹt giữa thế "vườn không nhà trống" vậy, có hô hào cách mấy thì đến khi lương thảo cạn kiệt (dự án hết ngân sách), đội quân đó cũng sẽ phải giải tán trong thất bại, để lại một bất lợi lâu dài khi ảnh hưởng trực tiếp đến uy tín và tên tuổi của chúng tôi trên thị trường.</p>
          <p>Tách cà phê buổi sáng cũng vừa vặn cạn đáy. Bức tranh giờ đây đã quá rõ ràng về những rào cản từ bên ngoài lẫn các vấn đề đứt gãy ngay từ trong nội bộ.</p>
        </div>
        <div class="page-footer-num">- Trang 70 -</div>
      </div>
    </div>

    <!-- PAGE 71: Chương 5 (P6/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 6/24</div>
        <div class="page-text-body">
          <p>Tôi thở dài một tiếng. Thật ra, tôi cũng đã phần nào đoán được cục diện này. Sự đứt gãy giữa nghiệp vụ và kỹ thuật, sự phòng thủ của hệ thống cũ và sự ảo tưởng của dàn lãnh đạo mới... đây luôn là những vấn đề hóc búa nhất, mang tính sống còn trong bất kỳ dự án hiện đại hóa doanh nghiệp nào.</p>
          <p>Tình thế tuy bế tắc, nhưng bù lại, tôi cũng bắt đầu định hình được những ý tưởng đầu tiên cho các bước đi tiếp theo. Trước hết, tôi không thể lao vào đánh một trận khô máu ngay được. Tôi cần một vài phép thử để xem phản ứng của các bên, qua đó đảm bảo rằng mình thực sự cầm lái được con tàu đắm này.</p>
        </div>
        <div class="page-footer-num">- Trang 71 -</div>
      </div>
    </div>

    <!-- PAGE 72: Chương 5 (P7/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 7/24</div>
        <div class="page-text-body">
          <p>Vào đến công ty, tôi kéo ghế ngồi xuống góc bàn quen thuộc. Chờ cho màn dạo đầu của buổi sáng trôi qua, người đầu tiên tôi nhấc máy gọi không phải là ai trong dự án, mà là Head of BA (Trưởng bộ phận Phân tích Nghiệp vụ) của công ty chúng tôi tại trụ sở Singapore.</p>
          <p>"Hello em, khỏe không? Dạo này có bồ bịch gì chưa nhỉ?" Tôi mở lời bằng chất giọng bông đùa quen thuộc.
Đầu dây bên kia cười phá lên: "Chưa anh ơi, vẫn đang tìm mỏi mắt mà chưa ra đây. Mà anh khỏe không? Em nghe giang hồ đồn anh đang chuyển công tác qua dự án mới à?"
"Đúng rồi, sao biết hay dạ?"
"Em thầy bói mà, hehehe. Sao tự dưng gọi em, có vụ gì căng à?"</p>
        </div>
        <div class="page-footer-num">- Trang 72 -</div>
      </div>
    </div>

    <!-- PAGE 73: Chương 5 (P8/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 8/24</div>
        <div class="page-text-body">
          <p>Đến lúc này, tôi bắt đầu hạ giọng, chuyển sang tông trầm và nghiêm túc hơn một chút:
"Anh đang đọc đống tài liệu BA của team mình ở dự án bên này. Chắc anh cần em cử người verify (xác minh) lại giúp anh."</p>
          <p>Nghe đến đó, cô bé bên kia đầu dây liền chép miệng, giọng chùng xuống: "Eo ơi anh ơi, con dự án này em biết. Hồi đầu em có nhảy vào hỗ trợ một thời gian. Nó lộn xộn lắm! Bọn users (người dùng) bên khách hàng cực kỳ nặng tính chính trị. Bọn đấy chả biết cái gì về requirement đâu, nên toàn tìm cách bully (bắt nạt) BA nhà mình."</p>
          <p>"Có thể em nói đúng," tôi điềm tĩnh đáp, "nhưng bản thân mớ tài liệu hiện tại của team cũng đang có quá nhiều vấn đề."</p>
        </div>
        <div class="page-footer-num">- Trang 73 -</div>
      </div>
    </div>

    <!-- PAGE 74: Chương 5 (P9/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 9/24</div>
        <div class="page-text-body">
          <p>Cô nàng im lặng một nhịp, rồi thở dài thú nhận: "Anh ơi... thật ra đội BA bên đó hoàn toàn là người mới. Lúc đầu dự án cháy quá, cần người gấp để lấp vào đội hình nên gom vào thôi, chứ hiện tại không có ai là core team (nhân sự nòng cốt) thực sự của mình đâu anh."</p>
          <p>Bingo. Lời thú nhận này đã khẳng định hoàn toàn những nghi ngờ của tôi vào ngày hôm qua.</p>
          <p>"Ok, có vẻ em đã nắm được phần nào tình hình," tôi chốt lại vấn đề. "Giúp anh sắp xếp một vài bạn senior (nhân sự cấp cao) cứng cựa vào review toàn bộ tài liệu và đánh giá lại. Có thể sắp tới anh sẽ cần những action (hành động) can thiệp chính thức từ phía tụi em."</p>
        </div>
        <div class="page-footer-num">- Trang 74 -</div>
      </div>
    </div>

    <!-- PAGE 75: Chương 5 (P10/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 10/24</div>
        <div class="page-text-body">
          <p>"Ok anh. Em sẽ ném bạn A, B, C vào đó xem sao. Nhưng anh cẩn thận nhé, vào đó sẽ cần phải quản trị được thằng Gà."
"Ok em, nhớ back (phản hồi) lại cho anh sớm nhất có thể."</p>
          <p>Tôi cúp máy, bắt đầu chuyển sang phép thử thứ hai. Mở màn hình lên, tôi truy cập vào một vài tài liệu thiết kế cốt lõi, tập trung vào phần quan trọng nhất của hệ thống: luồng match (ghép cuốc) giữa hành khách và tài xế.</p>
          <p>Lướt xuống phần bình luận, tôi ngay lập tức nhận ra "dấu ấn" của Tí. Vẫn là những dòng comment random, chỉ ra vài lỗi lặt vặt cốt để chứng minh rằng "tôi đã có review", chứ tuyệt nhiên không mang một chút ý niệm nào để giúp hoàn thiện tài liệu.</p>
        </div>
        <div class="page-footer-num">- Trang 75 -</div>
      </div>
    </div>

    <!-- PAGE 76: Chương 5 (P11/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 11/24</div>
        <div class="page-text-body">
          <p>Đi sâu hơn vào bản thiết kế, tôi dễ dàng nhặt ra hàng loạt điểm đứt gãy trong khâu tích hợp (integration) giữa các module. Hệ thống này được định hướng theo kiến trúc Event-Driven Design (Hướng sự kiện), sử dụng các message làm phương tiện giao tiếp chính. Thế nhưng, khi nối các Event lại với nhau, chúng hoàn toàn thiếu đi sự logic mạch lạc. Chuỗi sự kiện rời rạc đến mức không thể nào tạo thành một luồng chạy End-to-End (E2E) hoàn chỉnh để hệ thống có thể vận hành thực tế.</p>
        </div>
        <div class="page-footer-num">- Trang 76 -</div>
      </div>
    </div>

    <!-- PAGE 77: Chương 5 (P12/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 12/24</div>
        <div class="page-text-body">
          <p>Chuyển sang đọc tài liệu yêu cầu nghiệp vụ, việc điều hướng (navigate) tìm kiếm thông tin trở nên vô cùng chật vật vì cấu trúc lộn xộn. Nhưng điều thú vị nhất lại nằm ở cuối trang. Kéo xuống phần comment, mắt tôi khựng lại ở một dòng phê duyệt (sign-off) của Gà – gã VP Business hổ báo. Nguyên văn hắn viết:</p>
          <p>"Tôi sign-off cho dòng tài liệu này nếu nó mô tả y chang những gì hệ thống hiện tại đang làm."</p>
        </div>
        <div class="page-footer-num">- Trang 77 -</div>
      </div>
    </div>

    <!-- PAGE 78: Chương 5 (P13/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 13/24</div>
        <div class="page-text-body">
          <p>Đọc xong dòng đó, tôi không nhịn được mà bật cười thành tiếng. Cái cách làm chính trị chốn công sở này thật sự quá mức trẻ con. Nó hệt như một trò đùn đẩy trách nhiệm trắng trợn: Đại diện cho Business nhưng không muốn định hình tương lai đổi mới, chỉ chăm chăm bám víu vào cái cũ để bảo vệ sự an toàn cho chiếc ghế của mình.</p>
          <p>Điều này bất giác làm tôi nhớ lại một cuốn sách của tập đoàn tư vấn McKinsey viết về chuyển đổi số mà tôi từng đọc. McKinsey đã khẳng định một chân lý: "Chúng tôi chưa bao giờ thấy một câu chuyện chuyển đổi số thành công nào mà ở đó, sự chuyển đổi không được dẫn dắt (drive) bởi Business."</p>
        </div>
        <div class="page-footer-num">- Trang 78 -</div>
      </div>
    </div>

    <!-- PAGE 79: Chương 5 (P14/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 14/24</div>
        <div class="page-text-body">
          <p>Đúng vậy. Nhưng nghĩ đi cũng phải nghĩ lại, sở dĩ McKinsey có thể dõng dạc nói câu đó, một phần là vì vị thế của họ cho phép họ từ chối tham gia vào những dự án có cái nền tảng tổ chức lỏng lẻo như thế này ngay từ đầu. Còn với chúng tôi thì khác. Cuộc chơi khó nhằn này đã đến tay, và sứ mệnh của chúng tôi là bằng mọi giá, phải làm cho bằng được.</p>
          <p>Ngoài việc soi kỹ nội dung tài liệu, tôi còn đặc biệt chú ý đến tên của các tác giả — những tay Kiến trúc sư (SA) và Technical Lead đang ngồi ở offshore. Tôi cẩn thận chép lại tên họ ra một tờ giấy ghi chú. Đây sẽ là những người tôi phải "hỏi thăm" trong ngày hôm nay. Nhưng trước hết, có một con boss tôi cần phải đối mặt ngay lập tức: Tí.</p>
        </div>
        <div class="page-footer-num">- Trang 79 -</div>
      </div>
    </div>

    <!-- PAGE 80: Chương 5 (P15/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 15/24</div>
        <div class="page-text-body">
          <p>Bản tính tôi vốn là một gã hào sảng, lúc nào cũng giữ nụ cười trên môi. Cái tính cách tưng tửng đó đôi khi lại là một thứ vũ khí ngoại giao cực kỳ lợi hại, giúp tôi dễ dàng giao tiếp và phá vỡ lớp băng phòng thủ của người lạ.</p>
          <p>Tôi đẩy cửa bước vào lãnh địa của "Thế giới cũ". Đúng như dự đoán, không khí ở đây trái ngược hoàn toàn với sự năng động bên ngoài. Một sự im lặng bao trùm. Các dãy bàn làm việc được chia ô bởi những tấm vách ngăn cao cộp. Quan sát một vòng, tôi hơi ngạc nhiên khi nhận ra Tí không hề đơn độc chống đỡ toàn bộ hệ thống như tôi tưởng. Dưới trướng hắn vẫn còn một nhóm thân tín, bao gồm vài kỹ sư đồng hương Myanmar và một số người Singapore.</p>
        </div>
        <div class="page-footer-num">- Trang 80 -</div>
      </div>
    </div>

    <!-- PAGE 81: Chương 5 (P16/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 16/24</div>
        <div class="page-text-body">
          <p>Tôi tiến thẳng đến bàn Tí.
"Hello Tí, tôi là SA mới của đội dự án," tôi cất lời chào.
"Ok," gã không buồn ngẩng lên.
"Trông ông có vẻ bận rộn nhỉ."
"Yes." Câu trả lời cộc lốc, lạnh ngắt.</p>
          <p>Tôi dừng lại một nhịp, ánh mắt vô tình lướt qua cổ tay trái của gã. Khóe môi tôi nhếch lên. Bắt được bài rồi.
"Đồng hồ đẹp đấy. Tudor Black Bay 58 phải không?"</p>
          <p>Ngay lập tức, bàn phím ngừng gõ. Tí khựng lại, lần đầu tiên gã ngước lên nhìn thẳng vào mắt tôi, thái độ lạnh nhạt bỗng chốc rã đông.
"Cảm ơn. Mày cũng chơi đồng hồ à?"
"Dĩ nhiên," tôi kéo ghế ngồi xuống đối diện. "Tao thích form dáng của dòng Tudor, nhưng nhược điểm là cái viền dễ bị trầy xước quá. Nhìn form nó làm tao liên tưởng khá nhiều đến chiếc Rolex Submariner."</p>
        </div>
        <div class="page-footer-num">- Trang 81 -</div>
      </div>
    </div>

    <!-- PAGE 82: Chương 5 (P17/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 17/24</div>
        <div class="page-text-body">
          <p>Mắt Tí sáng lên, gã vỗ tay xuống bàn:
"'Ghost Bezel' đó bro! Dân chơi mới hiểu. Đây chỉ là con đồng hồ phụ tao đeo hàng ngày thôi."</p>
          <p>"Nice," tôi gật gù tán thưởng. Khoảnh khắc đó, tôi biết cánh cửa vào "Thế giới cũ" đã chính thức được hé mở.</p>
          <p>Khi cảm giác phòng thủ của Tí đã giãn ra một chút, tôi quyết định đi thẳng vào vấn đề. Tôi kéo xích chiếc ghế lại gần, mở bản thiết kế trên màn hình và chỉ vào một điểm nút:
"Tao thấy luồng thiết kế chỗ này có vẻ không ổn và chắc chắn không chạy được. Cái Message A này sẽ không bao giờ được trigger, vì nó hoàn toàn lệch nhịp với Service B đang đợi."</p>
          <p>Tí liếc mắt nhìn vào màn hình đúng một giây, rồi hờ hững đáp:
"I don't care." (Tôi không quan tâm).</p>
        </div>
        <div class="page-footer-num">- Trang 82 -</div>
      </div>
    </div>

    <!-- PAGE 83: Chương 5 (P18/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 18/24</div>
        <div class="page-text-body">
          <p>Thay vì khựng lại hay tỏ ra bực bội, tôi bật cười ném trả lại. Tôi cố tình dùng tiếng cười đó để xóa tan cái không khí nặng nề mà hắn vừa cố bủa vây, đồng thời gửi đi một thông điệp ngầm: Tôi hoàn toàn bình tĩnh, và ông nên bớt cái trò trẻ con này lại.</p>
          <p>Vừa cười, mắt tôi vừa khóa chặt vào gương mặt hắn để độc vị. Dưới cái vỏ bọc bất cần ấy, quầng thâm dưới mắt tố cáo một sự thật: Hắn đang làm việc vất vả đến mức kiệt sức.</p>
          <p>Tôi không dừng lại, tiếp tục lật mở từng trang tài liệu, đặt ra hàng loạt câu hỏi cốt lõi.
"I don't care."
"I don't care."</p>
        </div>
        <div class="page-footer-num">- Trang 83 -</div>
      </div>
    </div>

    <!-- PAGE 84: Chương 5 (P19/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 19/24</div>
        <div class="page-text-body">
          <p>Câu trả lời vẫn rập khuôn lặp lại. Bằng việc liên tục tung ra những câu hỏi gãi đúng chỗ ngứa, tôi đang gián tiếp cho Tí thấy rằng tôi đã nhìn thấu những vấn đề chí mạng đang tồn tại. Đến đòn quyết định, tôi lật sang phần tài liệu Requirement, trỏ tay vào dòng comment sign-off vô trách nhiệm của Gà.</p>
          <p>Lần này, Tí không nói "I don't care" nữa. Mắt hắn hằn lên tia bực dọc, buông ngay một câu chửi thề:
"They are shit."</p>
        </div>
        <div class="page-footer-num">- Trang 84 -</div>
      </div>
    </div>

    <!-- PAGE 85: Chương 5 (P20/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 20/24</div>
        <div class="page-text-body">
          <p>Nghe đến đó, tôi cười càng to hơn. Chính thái độ cợt nhả, không phán xét đó của tôi lại khiến Tí cảm thấy tôi là một kẻ cực kỳ khó đoán, nhưng đồng thời cũng vô hại với chiếc ghế của hắn. Không khí giãn ra hẳn. Tôi tranh thủ đứng lên say hello với những người xung quanh. Tí cũng tự nhiên hơn, nhanh miệng giới thiệu từng người trong team. Đáng chú ý nhất là hai gã SA người Ấn Độ đang ngồi ngay sau lưng hắn – hóa ra lại là nhân sự onsite đến từ công ty đối thủ trực tiếp của chúng tôi. Kế đó là một bác DBA lão làng, người tôi đã gật đầu chào hỏi đầy tôn trọng.</p>
          <p>Xong màn ngoại giao chớp nhoáng, tôi vỗ vai Tí rồi bước ra khỏi căn phòng.</p>
        </div>
        <div class="page-footer-num">- Trang 85 -</div>
      </div>
    </div>

    <!-- PAGE 86: Chương 5 (P21/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 21/24</div>
        <div class="page-text-body">
          <p>Tôi thu mình về góc làm việc, lặng lẽ ngẫm nghĩ. Nhìn Tí lúc này, tôi bất chợt thấy lại hình ảnh của những anh em key engineer mà tôi từng sát cánh, hay thậm chí là bóng dáng của chính bản thân mình trong quá khứ. Bản chất của những người làm kỹ thuật luôn là tìm cách giải quyết vấn đề. Chúng tôi liên tục phải compromise (thỏa hiệp) với những giới hạn của công nghệ và khó khăn của tổ chức để giữ cho hệ thống sống sót. Nhưng đến một ngày, khi những vấn đề của một hệ thống cũ kỹ bắt đầu bục vỡ, người ta lại tự động gán luôn cái tội danh đó lên đầu người Kỹ sư trưởng đương nhiệm.</p>
        </div>
        <div class="page-footer-num">- Trang 86 -</div>
      </div>
    </div>

    <!-- PAGE 87: Chương 5 (P22/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 22/24</div>
        <div class="page-text-body">
          <p>Chẳng mấy ai đủ sâu sắc để nhận ra rằng: Chính cái gã Kỹ sư trưởng đang mang tiếng bảo thủ kia mới là kẻ đáng thương nhất. Hắn đã phải cắn răng chịu đựng, oằn mình vượt qua vô vàn nỗi đau của một di sản nát bét chỉ để cố gắng duy trì tính ổn định sống còn cho cả một guồng máy kinh doanh.</p>
          <p>Tôi đứng dậy, đi pha cho mình một cốc trà nóng rồi tìm đến một góc khuất yên tĩnh ngoài ban công văn phòng. Nhìn xuống dòng xe cộ hối hả của Singapore đang bắt đầu lên đèn, tôi tự cho phép mình thả lỏng, hít một hơi thật sâu để rũ bỏ mọi mệt diễn ra từ sáng đến giờ.</p>
        </div>
        <div class="page-footer-num">- Trang 87 -</div>
      </div>
    </div>

    <!-- PAGE 88: Chương 5 (P23/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 23/24</div>
        <div class="page-text-body">
          <p>Thực ra, tối nay tôi có một cuộc chạm mặt cực kỳ quan trọng. Đó là buổi tiệc tối đầu tiên bên ngoài công sở giữa dàn lãnh đạo cấp cao của công ty tôi với những nhân vật chóp bu bên phía khách hàng – trong đó có sự góp mặt của Wang và Ju.</p>
          <p>Bằng kinh nghiệm lăn lộn bao năm trong nghề tư vấn, tôi thừa hiểu một quy luật bất thành văn: Cuộc chơi thực sự của giới làm dự án quy mô lớn hiếm khi được định đoạt trong những căn phòng họp sáng đèn hay qua dăm ba tờ tài liệu khô khan. Những nút thắt chính trị phức tạp nhất, những rào cản tổ chức kiên cố nhất, thường chỉ được tháo gỡ ở một nơi duy nhất – trên bàn nhậu.</p>
        </div>
        <div class="page-footer-num">- Trang 88 -</div>
      </div>
    </div>

    <!-- PAGE 89: Chương 5 (P24/24) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 24/24</div>
        <div class="page-text-body">
          <p>Đó sẽ là nơi tôi đặt mục tiêu đạt được cái "alignment" (sự đồng thuận) đầu tiên kể từ khi bước chân vào dự án này. Một khi sự đồng thuận đó được thiết lập, chúng tôi mới có thể bắt đầu đặt xuống những viên gạch đầu tiên cho công cuộc hiện đại hóa.</p>
          <p>Tôi dọn dẹp đồ đạc, vác balo lên vai và bước ra khỏi văn phòng. Màn đêm của nhịp sống đô thị hào nhoáng đang chờ đón, và cuộc gặp gỡ tối nay mới thực sự là chìa khóa mở ra cánh cửa tiếp theo.</p>
          <p>---</p>
          <p>👉 <b>[Đọc tiếp Phần 6: Bàn Cờ Mới Ở Boat Quay Và Cái Bắt Tay Ngầm](hoi_ky_chuong_6_ban_co_moi_o_boat_quay_va_cai_bat_tay_ngam.md)</b></p>
          <p>👉 <b>[Quay về Mục Lục](hoi_ky_00_muc_luc.md)</b></p>
        </div>
        <div class="page-footer-num">- Trang 89 -</div>
      </div>
    </div>

    <!-- PAGE 90: Chương 6 (P1/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 1/16</div>
        <h2 class="page-chapter-title">Bàn Cờ Mới Ở Boat Quay & Cái Bắt Tay Ngầm</h2>
        <div class="page-text-body">
          <p>Tôi ngồi ở băng ghế sau chiếc taxi lướt dọc theo khu Boat Quay, thả mình vào dòng suy nghĩ về chuỗi sự kiện từ sáng đến giờ. Mọi thứ đọng lại trong tâm trí một vị đắng nhẹ nhưng hậu ngọt, hệt như một viên sô-cô-la đen đang từ từ tan chảy trong miệng vậy.</p>
          <p>Đang miên man, một giọng nói hồ hởi từ ghế lái bỗng cắt ngang dòng suy nghĩ: "Chú em làm ở công ty taxi này hả?"</p>
          <p>Tôi ngẩng lên, nhìn chị tài xế qua chiếc gương chiếu hậu: "Dạ đúng rồi chị, em mới chuyển về đây làm."</p>
          <p>"Ừ, chú làm việc gì trong đấy?"</p>
        </div>
        <div class="page-footer-num">- Trang 90 -</div>
      </div>
    </div>

    <!-- PAGE 91: Chương 6 (P2/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 2/16</div>
        <div class="page-text-body">
          <p>"Em làm bên IT. Cơ mà mới vào nên chưa rành rẽ lắm chị ạ."</p>
          <p>Nghe đến chữ "IT", mắt chị tài xế sáng rực lên. Và thế là, chiếc taxi trong phút chốc biến thành một buổi thu thập yêu cầu thực tế nhất mà đời làm sản phẩm tôi từng chứng kiến. Chị thao thao bất tuyệt xả hết những bức xúc về cái app đặt xe đang hành hạ mình mỗi ngày: bản đồ chỉ đường toàn báo sai, khách chọn nhầm địa chỉ thì không cách nào hủy được, điểm đón khách thì mù mờ...</p>
          <p>Không chỉ dừng lại ở việc than vãn, chị còn tung ra hàng loạt đề xuất sắc bén bằng cả sự chân thành của một người dùng cuối.</p>
        </div>
        <div class="page-footer-num">- Trang 91 -</div>
      </div>
    </div>

    <!-- PAGE 92: Chương 6 (P3/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 3/16</div>
        <div class="page-text-body">
          <p>"Chú tính xem, mấy người già có biết xài app phức tạp đâu. Sao không làm cái gì đơn giản vào, ví dụ một nút bấm to đùng trên màn hình, bấm phát là xe tự túc chạy tới rước. Nhiều khi khách quen họ cũng chẳng buồn nhìn giá cước trước làm gì, cốt sao xe đến nhanh là được!"</p>
          <p>Hài hước nhất là vì mải mê say sưa góp ý, chị chạy lố luôn cả ngã rẽ vào địa điểm hẹn. Không để người dùng tâm huyết này cụt hứng, tôi cười xòa an ủi: "Hệ thống mới sắp triển khai rồi, khắc phục hết mấy cái này đấy chị, ráng chờ chút xíu nha!" Lúc bước xuống xe, chị còn nhiệt tình nhét cho tôi số điện thoại: "Có cần góp ý gì để cải thiện app thì cứ gọi chị nhé!" Đúng là những người dùng chân thực và đáng yêu kỳ lạ.</p>
        </div>
        <div class="page-footer-num">- Trang 92 -</div>
      </div>
    </div>

    <!-- PAGE 93: Chương 6 (P4/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 4/16</div>
        <div class="page-text-body">
          <p>Đến nơi, bàn tiệc đã được đặt sẵn trong một phòng VIP sang trọng. Bàn dài hơn chục người ngồi, chỉ còn chừa lại một chiếc ghế trống ở gần đầu dãy. Tôi bước vào, mỉm cười chào hỏi những người xung quanh rồi kéo ghế ngồi xuống.</p>
          <p>Ngồi ngay đối diện tôi không phải là những gương mặt sừng sỏ như Wang hay Ju – những người đang ngồi tít đầu kia cùng dàn sếp lớn bên phía công ty tôi – mà là một bác lớn tuổi. Bác có dáng người gầy, nụ cười rất tươi, phong thái hiền lành và cách nói chuyện từ tốn. Nhìn vị trí ngồi cách biệt, tôi đinh ninh bác chắc chỉ là một quản trị viên hệ thống (IT Admin) thâm niên nào đó đi ké bữa tiệc.</p>
        </div>
        <div class="page-footer-num">- Trang 93 -</div>
      </div>
    </div>

    <!-- PAGE 94: Chương 6 (P5/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 5/16</div>
        <div class="page-text-body">
          <p>Sau màn hâm nóng ban đầu, tôi bắt đầu triển khai các kỹ năng giao tiếp ngoại giao đã ngấm vào máu. Mục tiêu tối nay rất rõ ràng: tạo ra những ấn tượng đầu tiên về bản thân. Tôi nhẹ nhàng bắt chuyện, kể về vai trò hiện tại, quãng thời gian bôn ba ở Singapore và những công ty từng qua.</p>
          <p>Nói chuyện một hồi, tôi bật cười bảo: "Trò chuyện với bác nãy giờ, con cứ có cảm giác bác rất giống một vị CIO ở tập đoàn H. mà con từng làm chung. Ông ấy cũng gầy và nói năng từ tốn thế này, chỉ là ít cười hơn bác."</p>
          <p>Bác hơi nheo mắt: "Ông Lim hả?"</p>
          <p>Tôi ngạc nhiên: "Ơ, sao bác biết? Bạn bác à?"</p>
          <p>"Không, cùng thời thôi. Ông ấy cũng khá nổi tiếng trong lĩnh vực Healthcare. Singapore này nhỏ xíu mà."</p>
        </div>
        <div class="page-footer-num">- Trang 94 -</div>
      </div>
    </div>

    <!-- PAGE 95: Chương 6 (P6/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 6/16</div>
        <div class="page-text-body">
          <p>"Dạ vâng, con từng có thời gian làm việc với bác ấy, tập đoàn đang thử nghiệm liên thông hạ tầng IT giữa các chi nhánh quốc gia để xây dựng nền tảng tái sử dụng nhằm cắt giảm chi phí."</p>
          <p>"Các doanh nghiệp đa quốc gia ở Singapore giờ đang theo đuổi trend đó đấy," bác gật gù. "May là công ty tao chưa triển khai nước khác. Chứ nếu bước chân vào thị trường Việt Nam thì chắc phải đau đầu nghĩ cách tái sử dụng cái kiến trúc cũ rích hiện tại."</p>
          <p>"Dạ vâng, con cũng nghĩ thế," tôi nương theo đà đó. "Công ty mình hiện tại có lẽ cần tập trung nhiều hơn vào trải nghiệm người dùng. Trải nghiệm của hành khách và tài xế mới là mấu chốt cạnh tranh trong mảng đặt xe công nghệ khi giá cước các bên gần như tương đương."</p>
        </div>
        <div class="page-footer-num">- Trang 95 -</div>
      </div>
    </div>

    <!-- PAGE 96: Chương 6 (P7/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 7/16</div>
        <div class="page-text-body">
          <p>"Đúng, đó là ưu tiên cốt lõi trong năm nay."</p>
          <p>"Con nghĩ quan trọng là giữ chân được lượng khách hàng và tài xế trung thành. Hôm nay trên đường tới đây, chị tài xế taxi chở con cũng đã nhiệt tình chia sẻ..."</p>
          <p>Thế là chúng tôi cuốn vào câu chuyện lúc nào không hay. Bác thoải mái chia sẻ về các giải pháp đang được cân nhắc và thực trạng triển khai đầy ngổn ngang. Cả hai huyên thuyên cười nói rôm rả.</p>
          <p>Bác chép miệng: "Giờ team tao cũng vất vả lắm, toàn gánh hệ thống cũ kỹ."</p>
          <p>Tôi bật cười: "Hồi trước con làm ngân hàng, chiều tối tan sở mà bước ra thấy hoàng hôn là mừng rơi nước mắt rồi. Đa phần về đến nhà là tàu điện MRT đóng cửa quách."</p>
        </div>
        <div class="page-footer-num">- Trang 96 -</div>
      </div>
    </div>

    <!-- PAGE 97: Chương 6 (P8/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 8/16</div>
        <div class="page-text-body">
          <p>Bác ngửa cổ cười ha hả: "Thế thì công ty tao tốt hơn, nhân viên bên tao được về sớm hơn nhiều!"</p>
          <p>Đến khi thân thiết hơn, tôi mới rụt rè lân la hỏi về thân thế của bác, thỏ thẻ đề phòng lỡ gặp khách hàng chóp bu mà không biết thì coi như hỏng bét. Ai ngờ, vừa khéo léo hỏi ra mới ngã ngửa: bác chính là CIO của công ty khách hàng, là vị sếp tổng trực tiếp đứng trên cả Wang và Ju. Tôi toát mồ hôi hột, cũng may mà lúc đầu đã không hống hách hỏi tên hay chém gió linh tinh, nếu không chắc bác hờn thì về sau rất khó xử.</p>
          <p>Trò chuyện thêm vài chén, bác có việc xin phép về sớm, nở nụ cười hiền hậu hẹn gặp lại.</p>
        </div>
        <div class="page-footer-num">- Trang 97 -</div>
      </div>
    </div>

    <!-- PAGE 98: Chương 6 (P9/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 9/16</div>
        <div class="page-text-body">
          <p>Tôi thở phào nhẹ nhõm, kéo dĩa beefsteak đang ăn dở ra xử lý tiếp. Cắn vài miếng, tự nghĩ thầm đồ ăn ở đây cũng không tệ, thôi thì tranh thủ tận hưởng đồ miễn phí cho ngon nghẻ đã rồi tính tiếp.</p>
          <p>Đang mải mê thưởng thức thì sếp tổng bên tôi cất tiếng gọi: "Lương, chú lại đây ngồi với mọi người đi."</p>
          <p>Đúng là trên đời này chẳng có bữa trưa hay bữa tối nào thực sự miễn phí.</p>
          <p>Tôi cười trừ, cầm ly bước qua kéo ghế ngồi ngay cạnh Wang. Mọi người bắt đầu giới thiệu sơ qua về tôi. Wang và Ju vẫn nở nụ cười xã giao, nhưng rõ ràng họ vẫn né tránh giao tiếp bằng mắt. Hiển nhiên, những kẻ giữ ranh giới lãnh đạo luôn cần thêm thời gian để chấp nhận một nhân sự mới cài cắm vào ván cờ của họ.</p>
        </div>
        <div class="page-footer-num">- Trang 98 -</div>
      </div>
    </div>

    <!-- PAGE 99: Chương 6 (P10/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 10/16</div>
        <div class="page-text-body">
          <p>Vẫn với phong thái ngạo nghễ quen thuộc, Ju với tay lấy chai Glenfiddich 15, rót thẳng vào ly tôi một lượng đầy không đá. Cổ tay hắn lấp lánh chiếc Rolex Submariner – dòng đồng hồ "quốc dân" mà dân chơi Singapore cực kỳ ưa chuộng, khác hẳn với dân Việt Nam chuộng mốt Datejust thanh lịch.</p>
          <p>Rót xong, hắn nhìn cả bàn: "Uống hết đi, ly toàn nước mà!"</p>
          <p>Cả bàn lập tức nâng ly cụng 100%.</p>
          <p>Ly của tôi nặng chừng 3 shot Glenfiddich nguyên chất. Thời điểm đó, tửu lượng của tôi cũng coi như có số má, dẫu không dám bì với mấy lão bợm sừng sỏ nhưng chắc chắn không đến mức làm mất mặt phe mình. Một hơi dứt khoát, tôi ngửa cổ cạn sạch, rồi lật úp chiếc cốc trống không xuống bàn.</p>
          <p>Ju nheo mắt cười lớn: "Thằng này được!"</p>
        </div>
        <div class="page-footer-num">- Trang 99 -</div>
      </div>
    </div>

    <!-- PAGE 100: Chương 6 (P11/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 11/16</div>
        <div class="page-text-body">
          <p>Nói rồi hắn tự tay rót thêm cho tôi một ly đầy, tiện mồm gọi bồi bàn khui thêm hẳn một chai nữa.</p>
          <p>Không khí bàn tiệc nhanh chóng nóng lên. Chúng tôi rôm rả đủ thứ chuyện từ công nghệ AI, tiềm năng nguồn lực ở Singapore, Ấn Độ cho đến thị trường Việt Nam. Rõ ràng, đây mới chỉ là những nhát cuốc mở màn để hâm nóng trước khi chạm trán vào vấn đề chính.</p>
          <p>Tôi nhấp môi, nhận thấy phía ban lãnh đạo công ty mình bắt đầu phàn nàn về việc thiếu hụt yêu cầu bài toán (requirement) và việc requirement thay đổi liên tục chính là nguyên nhân làm trễ tiến độ cũng như tạo ra hàng loạt rủi ro phía trước. Chắc chắn Wang và Ju cũng chẳng có sẵn một cây đũa thần nào để giải quyết ngay lập tức.</p>
        </div>
        <div class="page-footer-num">- Trang 100 -</div>
      </div>
    </div>

    <!-- PAGE 101: Chương 6 (P12/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 12/16</div>
        <div class="page-text-body">
          <p>Ju điềm tĩnh nhấp ngụm rượu: "Giờ AI phát triển như vũ bão, công đoạn code hay viết unit test thì gen vèo cái là xong, ai mà chẳng làm được. Cái khó nằm ở chỗ quản lý stakeholder và tư duy thiết kế kiến trúc kìa, chứ chỉ biết mỗi code không thì chẳng có giá trị gì."</p>
          <p>Wang lập tức gật gù phụ họa: "Đúng vậy."</p>
          <p>Một sếp bên phía tôi vẫn cố bám lấy lý do: "Nhưng requirement cứ thay đổi liên tục thế này thì cực kỳ khó để team keep được tiến độ."</p>
        </div>
        <div class="page-footer-num">- Trang 101 -</div>
      </div>
    </div>

    <!-- PAGE 102: Chương 6 (P13/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 13/16</div>
        <div class="page-text-body">
          <p>Đến lúc này, Wang nhíu mày, giọng cao lên: "Requirement có bao giờ thay đổi đâu? Ngay từ đầu đã thống nhất là giữ nguyên toàn bộ chức năng, toàn bộ source code hệ thống cũ đã giao hết cho chúng mày rồi. Chúng mày tự vẽ ra requirement mới rồi tự thay đổi lung tung, chứ phía tao thay đổi lúc nào?"</p>
          <p>Nghe đến đây, tôi suýt phì cười thành tiếng. Cái lý lẽ của hắn nghe thì ngang ngược, nhưng ngẫm lại... nó không có gì là sai. Tôi thầm nghĩ, cả hai bên cứ đôi co mãi trong vòng luẩn quẩn này thì chẳng đi đến đâu. Mục tiêu tối thượng của tôi lúc này không phải là phân xử đúng sai, mà là tìm cách bước chân vào ván cờ rồi tính tiếp.</p>
        </div>
        <div class="page-footer-num">- Trang 102 -</div>
      </div>
    </div>

    <!-- PAGE 103: Chương 6 (P14/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 14/16</div>
        <div class="page-text-body">
          <p>Giữa lúc đôi bên còn đang tranh luận bất phân thắng bại, một thành viên bên tôi lại buông một câu chí mạng: "Yêu cầu viết tài liệu dự án nhiều quá, làm tụi anh tốn quá nhiều effort mà lại ảnh hưởng trực tiếp đến timeline."</p>
          <p>Chớp lấy thời cơ, tôi lập tức cắt ngang lời và nhảy vào: "Mục tiêu cốt lõi của document là dùng để giao tiếp. Hiện tại, giữa hai bên vẫn còn tồn tại rất nhiều khoảng cách trong việc thống nhất về yêu cầu và thiết kế hệ thống. Do đó, việc làm tài liệu chi tiết ở giai đoạn này là cực kỳ cần thiết."</p>
          <p>Wang nghe vậy liền bật cười sảng khoái, ánh mắt sáng lên, quay sang vỗ vai Ju: "Thằng này được!"</p>
        </div>
        <div class="page-footer-num">- Trang 103 -</div>
      </div>
    </div>

    <!-- PAGE 104: Chương 6 (P15/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 15/16</div>
        <div class="page-text-body">
          <p>Phản ứng đó có phần vượt ngoài mong đợi của tôi. Có vẻ như Wang đã nhận ra điều gì đấy. Hóa ra, mấy bác khách hàng này không hề tìm kiếm một vị cứu tinh với những mớ lý thuyết siêu phàm, họ đơn giản chỉ cần một người có tư duy đồng hành thực chiến.</p>
          <p>Lúc này tôi mới thực sự thở phào. Kinh nghiệm của tôi đủ để hiểu rằng khi đã "align" (đồng thuận) xong rồi thì ngày mai sẽ là một ngày dễ dàng hơn rất nhiều. Giờ thì có thể hoàn toàn thả lỏng và enjoy bữa tiệc rồi. Cái gì tới nó tới.</p>
        </div>
        <div class="page-footer-num">- Trang 104 -</div>
      </div>
    </div>

    <!-- PAGE 105: Chương 6 (P16/16) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 16/16</div>
        <div class="page-text-body">
          <p>Phần còn lại của bữa tiệc trôi qua trong tiếng cười nói rôm rả. Sau chừng hai ba ly Glenfiddich tiếp theo, đầu óc tôi cũng bắt đầu trôi dạt và chẳng còn nhớ rõ mình đã chém gió những gì với mấy gã đối diện nữa. Chắc mấy lão kia cũng trạng thái tương tự. Vui là chính!</p>
          <p>Đêm đó, tôi trở về nhà khá muộn. Sức nặng êm dịu của dòng rượu vàng óng đưa tôi chìm sâu vào giấc ngủ tĩnh lặng – nơi mà sự ồn ào của những luồng suy nghĩ, những đấu đá ngầm hay áp lực công việc chẳng thể chạm tới. Đối với tôi lúc đó, đó thực sự là một giấc ngủ chất lượng nhất.</p>
        </div>
        <div class="page-footer-num">- Trang 105 -</div>
      </div>
    </div>

    <!-- PAGE 106: BACK COVER -->
    <div class="page page-cover page-cover-back hard" data-density="hard">
      <div>
        <div style="font-size: 3rem; margin-bottom: 16px;">🌟</div>
        <h3 style="color: #fbbf24; margin-bottom: 12px; font-size: 1.3rem;">HÀNH TRÌNH VẪN TIẾP DIỄN</h3>
        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.6; max-width: 320px; margin: 0 auto;">
          Cảm ơn bạn đã đồng hành qua 6 chương hồi ký. Những bài học kiến trúc và câu chuyện nghề sẽ luôn được cập nhật tại blog.
        </p>
      </div>
      <div class="cover-author" style="margin-top: 32px;">DH LUXURY • DIGITAL EDITION</div>
    </div>
  </div>
</div>

<script>
// ============================================================================
// 1. DUAL MODE SWITCHING CONTROLS
// ============================================================================
function switchToReaderMode() {
  const showcase = document.getElementById('book-showcase-view');
  const reader = document.getElementById('book-reader-view');
  if (showcase) showcase.style.display = 'none';
  if (reader) reader.style.display = 'flex';
  
  if (window.isAutoRotating) {
    toggleAutoRotate();
  }

  // Force PageFlip to measure visible layout
  setTimeout(() => {
    if (window.tryInitPageFlip) {
      window.tryInitPageFlip(true);
    }
  }, 60);
}

function switchToShowcaseMode() {
  const showcase = document.getElementById('book-showcase-view');
  const reader = document.getElementById('book-reader-view');
  if (reader) reader.style.display = 'none';
  if (showcase) showcase.style.display = 'flex';
}

// ============================================================================
// 2. 3D ROTATABLE 360 SHOWCASE ENGINE
// ============================================================================
(function() {
  let rotX = 12;
  let rotY = -25;
  let isDragging = false;
  let startX, startY;
  window.isAutoRotating = true;
  let autoRotateInterval = null;

  function updateTransform() {
    const book = document.getElementById('book-3d-box');
    if (book) {
      book.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
  }

  function startAutoRotate() {
    if (autoRotateInterval) clearInterval(autoRotateInterval);
    autoRotateInterval = setInterval(() => {
      if (window.isAutoRotating && !isDragging) {
        rotY = (rotY + 0.5) % 360;
        updateTransform();
      }
    }, 25);
  }

  window.toggleAutoRotate = function() {
    window.isAutoRotating = !window.isAutoRotating;
    const btn = document.getElementById('btn-auto-rotate');
    if (btn) {
      btn.innerText = window.isAutoRotating ? "⏸️ Dừng Tự Xoay" : "🔄 Tự Động Xoay 3D";
    }
  };

  function init3DDrag() {
    const stage = document.getElementById('showcase-stage');
    if (!stage) return;

    stage.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      rotY += dx * 0.5;
      rotX = Math.max(-60, Math.min(60, rotX - dy * 0.5));
      startX = e.clientX;
      startY = e.clientY;
      updateTransform();
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    // Touch Support
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      rotY += dx * 0.5;
      rotX = Math.max(-60, Math.min(60, rotX - dy * 0.5));
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      updateTransform();
    });

    window.addEventListener('touchend', () => { isDragging = false; });

    startAutoRotate();
  }

  document.addEventListener('DOMContentLoaded', init3DDrag);
  document.addEventListener('DOMContentSwitch', init3DDrag);
  if (window.app && window.app.document$) {
    window.app.document$.subscribe(init3DDrag);
  }
})();

// ============================================================================
// 3. ST.PAGEFLIP INITIALIZATION & READER CONTROLS
// ============================================================================
(function() {
  window.tryInitPageFlip = function(forceReinit) {
    const container = document.getElementById('my-book-flipbook');
    const readerView = document.getElementById('book-reader-view');
    if (!container || !readerView) return;

    if (window.getComputedStyle(readerView).display === 'none') {
      return;
    }

    if (!window.St || !window.St.PageFlip) {
      setTimeout(() => window.tryInitPageFlip(forceReinit), 100);
      return;
    }

    if (container.dataset.initialized === "true" && !forceReinit && window.pageFlipObj) {
      return;
    }

    try {
      if (window.pageFlipObj) {
        try { window.pageFlipObj.destroy(); } catch(e) {}
        window.pageFlipObj = null;
      }

      window.pageFlipObj = new St.PageFlip(container, {
        width: 440,
        height: 620,
        size: "stretch",
        minWidth: 300,
        maxWidth: 550,
        minHeight: 450,
        maxHeight: 750,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
      });

      const pages = container.querySelectorAll('.page');
      window.pageFlipObj.loadFromHTML(pages);
      container.dataset.initialized = "true";

      const totalPages = window.pageFlipObj.getPageCount();
      const totalEl = document.getElementById('page-total');
      if (totalEl) totalEl.innerText = totalPages;

      window.pageFlipObj.on('flip', (e) => {
        const numEl = document.getElementById('page-num');
        if (numEl) numEl.innerText = e.data + 1;
        const select = document.getElementById('chapter-select');
        if (select) select.value = e.data;
      });
    } catch(err) {
      console.error("PageFlip init error:", err);
    }
  };

  document.addEventListener('DOMContentLoaded', () => window.tryInitPageFlip(false));
  document.addEventListener('DOMContentSwitch', () => window.tryInitPageFlip(false));

  if (window.app && window.app.document$) {
    window.app.document$.subscribe(() => window.tryInitPageFlip(false));
  }
})();

function flipBookNext() {
  if (window.pageFlipObj) window.pageFlipObj.flipNext();
}

function flipBookPrev() {
  if (window.pageFlipObj) window.pageFlipObj.flipPrev();
}

function jumpToChapter(pageIndex) {
  if (window.pageFlipObj) window.pageFlipObj.flip(parseInt(pageIndex));
}
</script>
