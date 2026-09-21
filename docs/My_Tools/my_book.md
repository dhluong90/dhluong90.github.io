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
    <a href="../" class="auto-rotate-btn" style="text-decoration: none;">⬅️ Toys Hub</a>
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
      <a href="../" class="hud-btn">⬅️ Toys Hub</a>
      <button class="hud-btn" id="btn-prev" onclick="flipBookPrev()">◄ Prev</button>
      <button class="hud-btn" id="btn-next" onclick="flipBookNext()">Next ►</button>
    </div>

    <div class="hud-page-indicator">
      Trang <span id="page-num">1</span> / <span id="page-total">25</span>
    </div>

    <div class="hud-group">
      <select class="hud-btn" id="chapter-select" onchange="jumpToChapter(this.value)">
        <option value="0">📘 Bìa Sách</option>
        <option value="1">📜 Lời Mở Đầu</option>
        <option value="2">Chương 1 (Trang 1)</option>
        <option value="3">Chương 1 (Trang 2)</option>
        <option value="4">Chương 1 (Trang 3)</option>
        <option value="5">Chương 2 (Trang 1)</option>
        <option value="6">Chương 2 (Trang 2)</option>
        <option value="7">Chương 2 (Trang 3)</option>
        <option value="8">Chương 3 (Trang 1)</option>
        <option value="9">Chương 3 (Trang 2)</option>
        <option value="10">Chương 3 (Trang 3)</option>
        <option value="11">Chương 3 (Trang 4)</option>
        <option value="12">Chương 4 (Trang 1)</option>
        <option value="13">Chương 4 (Trang 2)</option>
        <option value="14">Chương 4 (Trang 3)</option>
        <option value="15">Chương 5 (Trang 1)</option>
        <option value="16">Chương 5 (Trang 2)</option>
        <option value="17">Chương 5 (Trang 3)</option>
        <option value="18">Chương 5 (Trang 4)</option>
        <option value="19">Chương 5 (Trang 5)</option>
        <option value="20">Chương 6 (Trang 1)</option>
        <option value="21">Chương 6 (Trang 2)</option>
        <option value="22">Chương 6 (Trang 3)</option>
        <option value="23">Chương 6 (Trang 4)</option>
        <option value="24">📕 Bìa Sau</option>
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

    <!-- PAGE 1: LỜI MỞ ĐẦU -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Lời Mở Đầu</div>
        <h2 class="page-chapter-title">Chiếc Áo Rộng Vừa Vặn</h2>
        <div class="page-text-body">
          <p>Mọi chuyện thú vị nhất của tôi thật sự bắt đầu từ chuyến bay đáp xuống Singapore năm 2017. Như bao kỹ sư nuôi mộng lớn khác, tôi bắt đầu hành trình bằng những dòng code. Tôi vẫn còn nhớ rõ mình của những năm tháng đó – một developer cặm cụi trong một team nhỏ xíu, ngước nhìn một ông VP trong ngân hàng như một nhân vật vĩ đại nào đó ở thế giới khác.</p>
          <p>Thế mà hôm nay, định mệnh đưa cậu developer ấy trở thành người đứng thuyết trình trước mặt CIO của một ngân hàng đa quốc gia. Trong căn phòng họp lạnh toát đó là những cái đầu sừng sỏ nhất, những người nắm quyền sinh sát các khoản ngân sách lên đến hàng trăm triệu đô la. Còn tôi, một tay đút túi quần, tự tin trình bày bản thiết kế của mình.</p>
          <p>Mọi thứ diễn ra như một sự sắp đặt của số phận, một định mệnh luôn ép tôi phải khoác lên mình một chiếc áo quá khổ. Lúc nào tôi cũng thấy chiếc áo vị trí ấy rộng hơn năng lực của mình rất nhiều, và lúc nào cũng phải gồng mình, vắt kiệt sức lực để lớn lên cho vừa vặn với nó.</p>
        </div>
        <div class="page-footer-num">- Trang 1 -</div>
      </div>
    </div>

    <!-- PAGE 2: CHƯƠNG 1 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 1/3</div>
        <h2 class="page-chapter-title">Cuộc Chơi Định Mệnh Và Người Đàn Ông Đeo Grand Seiko</h2>
        <div class="page-text-body">
          <p>Tôi còn nhớ như in buổi họp đầu tiên với vị CIO của tập đoàn ngân hàng đó. Thật ra, ban đầu tôi không hề là nhân vật chính. Dẫn dắt thương vụ quan trọng này là một bác người Ấn Độ – từng là CA của một ngân hàng quốc tế, và hiện tại đang làm việc cho công ty chúng tôi.</p>
          <p>Người được chỉ định đứng ra bảo chứng chuyên môn trong mảng ngân hàng lúc bấy giờ cũng không phải là tôi. Trong căn phòng hôm ấy, tôi chỉ sắm vai một người phụ, mang theo nhiệm vụ trình bày về một trong những dự án mà đội ngũ chúng tôi từng hoàn thành.</p>
          <p>Đó là buổi họp hoành tráng nhất mà tôi từng được tham gia. Không gian vô cùng nghiêm túc, xung quanh bàn họp toàn những nhân vật ra quyết định của tập đoàn tài chính này trong mảng IT. Vị CIO là một nhân vật nổi tiếng ở Singapore, mang theo bản CV dày cộm bao gồm nhiều năm kinh nghiệm tại các tập đoàn tư vấn Big 4.</p>
        </div>
        <div class="page-footer-num">- Trang 2 -</div>
      </div>
    </div>

    <!-- PAGE 3: CHƯƠNG 1 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 2/3</div>
        <div class="page-text-body">
          <p>Tôi vốn mắc chứng mất tập trung. Trong các cuộc họp, tôi thường khó mà nghe lọt tai toàn bộ nội dung. Khối lượng thông tin tôi đọng lại chắc chỉ khoảng 10-15%. Thay vào đó, bộ não tôi lại chuyển hướng sự tập trung vào một thứ thú vị hơn rất nhiều: gương mặt và cảm xúc của con người. Đối với tôi, mỗi người ngồi trong phòng họp giống như một diễn viên vậy.</p>
          <p>Trong phòng họp hôm đó, vị CIO là người đáng chú ý nhất. Não tôi "nhảy số" và báo ngay một dữ kiện: <i>Người đàn ông này đam mê văn hóa Nhật.</i> Từ chiếc áo sơ mi được ủi phẳng phiu, gương mặt sáng, cách cười mỉm từ tốn nhưng toát lên vẻ nghiêm nghị tuyệt đối. Và đòn "chốt hạ" chính là chiếc đồng hồ <b>Grand Seiko</b> nằm yên vị trên cổ tay.</p>
          <p>Không hiểu sao, giữa cái áp lực nghẹt thở đó, tôi lại có một sự thiện cảm mãnh liệt. Cảm giác như "quý nhân" của đời mình đã xuất hiện. Tôi nhìn bác bằng một sự ngưỡng mộ chân thành.</p>
        </div>
        <div class="page-footer-num">- Trang 3 -</div>
      </div>
    </div>

    <!-- PAGE 4: CHƯƠNG 1 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 1 • Trang 3/3</div>
        <div class="page-text-body">
          <p>Rồi cũng đến lượt tôi trình bày. Như một thói quen cơ học để che đậy sự lo lắng, tôi mỉm cười. Tôi đứng hẳn dậy, đút một tay vào túi quần – giọng tôi vang lên to, rõ ràng dõng dạc giới thiệu mình là một Kiến trúc sư trưởng.</p>
          <p>Tôi ném lên bàn "trận đánh" hiện đại hóa hệ thống taxi booking lớn nhất Singapore – gã khổng lồ nắm 60% lưu lượng taxi toàn đảo quốc. Tôi cuốn họ từ slide này sang slide khác, lồng vào các câu chuyện ngụ ý để giải thích "tại sao" và nêu bật các yếu tố cốt lõi của <i>Event-driven design</i> và <i>Fundamental of Coupling</i>.</p>
          <p>Bác CIO lặng lẽ nghe và rất hài lòng. Đó là cảm giác của một người vừa tìm đúng chỗ cần tìm, mở đường cho cuộc chơi định mệnh của tôi.</p>
        </div>
        <div class="page-footer-num">- Trang 4 -</div>
      </div>
    </div>

    <!-- PAGE 5: CHƯƠNG 2 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 1/3</div>
        <h2 class="page-chapter-title">Đêm Khủng Hoảng, Lời Khuyên Ở Spa Và Hyperfocus</h2>
        <div class="page-text-body">
          <p>Trở về sau cuộc họp định mệnh đó, mọi thứ lại quay về nhịp độ quen thuộc của những trận ra quân săn deal. Vừa xong một thương vụ triệu đô khác, chưa kịp nghỉ ngơi tôi lại bị ném vào làm "lính cứu hỏa" chữa cháy ròng rã hơn một tháng.</p>
          <p>Rồi một ngày, khi ngân hàng đó đột ngột quay trở lại đòi mổ xẻ chi tiết dự án, áp lực dội xuống. Tôi cày OT sấp mặt để cày cho xong bộ slide. Căng thẳng đến độ tôi nhắn thẳng cho sếp: <em>"Tao nghỉ việc, mệt lắm rồi không làm nữa, sáng mai tao gửi mail!"</em></p>
          <p>Nhắn xong, tôi xách xe đi tìm một trung tâm spa trị liệu cổ truyền để xả cái cục tức tưởi và sự mỏi mệt rã rời.</p>
        </div>
        <div class="page-footer-num">- Trang 5 -</div>
      </div>
    </div>

    <!-- PAGE 6: CHƯƠNG 2 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 2/3</div>
        <div class="page-text-body">
          <p>Trong lúc làm việc, nhân viên trị liệu hỏi tôi làm nghề gì. Tôi trả lời chán nản: <i>"Ngày mai anh nghỉ việc, dọn đồ về Việt Nam luôn."</i> Nghe vậy, cô gái thủ thỉ khuyên một câu xanh rờn:</p>
          <blockquote>"Thôi anh ạ, mệt quá thì đến đây thư giãn ấn huyệt cho khỏe người, chứ đừng có nghỉ việc. Tụi em ở đây làm lụng vất vả cực nhọc lắm mà có kiếm được bao nhiêu tiền đâu..."</blockquote>
          <p>Câu nói thật thà đó làm tôi tỉnh người. Sự mệt mỏi của tôi đôi khi sao mà xa xỉ quá. Hóa ra cái "chiếc áo quá khổ" mà tôi luôn cằn nhằn lại là một đặc quyền mà rất nhiều người khát khao. Cớ sao tôi lại buông xuôi dễ dàng như vậy?</p>
        </div>
        <div class="page-footer-num">- Trang 6 -</div>
      </div>
    </div>

    <!-- PAGE 7: CHƯƠNG 2 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 2 • Trang 3/3</div>
        <div class="page-text-body">
          <p>Sáng hôm sau thức dậy, tôi bước vào văn phòng với nụ cười nhẹ nhõm. Khi sếp hỏi về tin nhắn nghỉ việc, tôi cười đáp: <i>"Không cần thiết nữa đâu sếp. Em đã sẵn sàng cho trận đánh mới."</i></p>
          <p>Ngay khoảnh khắc đó, bộ não tôi tự động kích hoạt chế độ siêu tập trung (Hyperfocus). Tôi tưởng tượng ra toàn bộ khung cảnh buổi họp, mô phỏng lại những thông điệp khách hàng khao khát muốn nghe nhất.</p>
          <p>Sát thủ trên bàn họp không phải là kẻ chỉ biết trình bày "những gì mình có", mà phải là người biết cách trình bày "những gì khách hàng khát khao muốn nghe".</p>
        </div>
        <div class="page-footer-num">- Trang 7 -</div>
      </div>
    </div>

    <!-- PAGE 8: CHƯƠNG 3 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 1/4</div>
        <h2 class="page-chapter-title">Chuyến Tàu Điện Ngầm Và Cái Boongke Cách Ly</h2>
        <div class="page-text-body">
          <p>Thời điểm thế giới vừa bước ra khỏi đại dịch, thị trường IT nóng hơn bao giờ hết. Đang trong chuỗi ngày chill-out thong dong WFH, điện thoại bỗng reo lên. Là sếp tôi gọi giao nhiệm vụ nhảy vào dự án hiện đại hóa hệ thống book taxi của công ty ABC.</p>
          <p>Truy cập vào kho tài liệu, tôi rùng mình khi thấy kỳ vọng dự án là đập đi xây lại (re-platform) toàn bộ core hệ thống đưa lên Cloud trong vỏn vẹn... 8 tháng. Các bên đang rơi vào trạng thái hỗn loạn, toxic và đùn đẩy trách nhiệm.</p>
          <p>Sếp nhắn: <i>"Góc nhìn của chú tương đồng với khách hàng. Chuẩn bị tham gia vào dự án... vị trí Kiến trúc sư trưởng có thể sẽ cần thay người."</i></p>
        </div>
        <div class="page-footer-num">- Trang 8 -</div>
      </div>
    </div>

    <!-- PAGE 9: CHƯƠNG 3 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 2/4</div>
        <div class="page-text-body">
          <p>Sáng hôm sau trên chuyến MRT lạnh lẽo, tôi tiến hành "khám nghiệm tử thi" kho tài liệu Confluence. Đập vào mắt tôi là sự nực cười: Đội ngũ kỹ sư dùng định dạng Gherkin của BDD để viết Tài liệu đặc tả hệ thống toàn diện (System Requirement Specifications)!</p>
          <p>Nó giống như việc bạn cần bản vẽ thiết kế tổng thể của tòa nhà chọc trời, nhưng kiến trúc sư lại quăng cho bạn một đống giấy nhớ ghi chú chi tiết về từng viên gạch. Thông tin rời rạc, chắp vá và thiếu hẳn bức tranh toàn cảnh.</p>
          <p>Tài liệu Detailed Design thì lặp lại logic nghiệp vụ nhưng đá nhau chan chát. Tài liệu Kiến trúc thì bê nguyên 80% lý thuyết sáo rỗng trên mạng về.</p>
        </div>
        <div class="page-footer-num">- Trang 9 -</div>
      </div>
    </div>

    <!-- PAGE 10: CHƯƠNG 3 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 3/4</div>
        <div class="page-text-body">
          <p>Và đòn chí mạng: Chỉ còn 2 tháng nữa là Go-live, nhưng tất cả bản demo đều chỉ là technical demo gọi API riêng lẻ. Khâu tích hợp toàn hệ thống (Integration) vẫn là con số không tròn trĩnh. Đội ngũ phát triển đang bịt mắt cầm súng bắn loạn xạ trong khu rừng mù sương.</p>
          <p>Đặt chân tới trụ sở công ty khách hàng, một sa bàn chia rẽ đập thẳng vào mắt: Bên cánh trái là "Thế giới mới" (Frontend, BFF, Business Users); bên cánh phải là "Thế giới cũ" (Backend monolith).</p>
        </div>
        <div class="page-footer-num">- Trang 10 -</div>
      </div>
    </div>

    <!-- PAGE 11: CHƯƠNG 3 (P4) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 3 • Trang 4/4</div>
        <div class="page-text-body">
          <p>Nằm lọt thỏm ngay giữa đường biên giới lạnh lẽo đó là phòng làm việc của nhóm chuyên gia tư vấn chúng tôi – một cái "boongke" đóng kín bởi những tấm ván đặc quánh, kín mít chứ không phải vách kính.</p>
          <p>Ngay bên trong cái boongke đó, team SA và team BA ngồi quay lưng lại với nhau như hai hòn đảo cô lập. Tôi kéo ghế ngồi xuống, ném balo sang một bên. Cuộc chiến thực sự bây giờ mới bắt đầu.</p>
        </div>
        <div class="page-footer-num">- Trang 11 -</div>
      </div>
    </div>

    <!-- PAGE 12: CHƯƠNG 4 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 1/3</div>
        <h2 class="page-chapter-title">Vỏ Bọc Lính Mới Và Nút Thắt Tổ Chức</h2>
        <div class="page-text-body">
          <p>Trong căn phòng boongke ồn ào sực mùi toxic, họ vẫn nghĩ tôi là một gã SA bình thường được ném vào cày ải luồng booking. Chẳng ai biết cuộc gọi thay máu Kiến trúc sư trưởng tối qua giữa tôi và sếp.</p>
          <p>Bằng kinh nghiệm thực chiến Enterprise Modernization, tôi hiểu chân lý phũ phàng: Các vấn đề cốt lõi đánh sập dự án hiếm khi nằm ở kỹ thuật. Nút thắt sinh tử luôn nằm ở Con người và Quy trình.</p>
          <p>Tôi bắt đầu chiến dịch rã đông căn phòng bằng những câu chuyện phiếm và quăng ra một câu bâng quơ phản biện về Microservices để kích hoạt tư duy thực chiến của team.</p>
        </div>
        <div class="page-footer-num">- Trang 12 -</div>
      </div>
    </div>

    <!-- PAGE 13: CHƯƠNG 4 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 2/3</div>
        <div class="page-text-body">
          <p>Chiều hôm đó sang văn phòng "Thế giới mới", tôi gặp dàn lãnh đạo sừng sỏ: Zang (VP Architecture điềm đạm), Ju (VP Engineering uy lực thoang thoảng mùi whisky), và vị VP Business trẻ tuổi hung hãn.</p>
          <p>Trớ trêu thay, dàn sếp mới nhậm chức này gánh KPI hiện đại hóa nhưng quyền lực thực tế chỉ quẩn quanh ở cái vỏ giao diện Frontend/BFF. Còn cái lõi hệ thống thực sự thì họ hoàn toàn không chạm tới được.</p>
          <p>Và khoảnh khắc đó dẫn tôi tới cuộc đụng độ trực diện với Tí – gã Kỹ sư trưởng đại diện cho "Thế giới cũ".</p>
        </div>
        <div class="page-footer-num">- Trang 13 -</div>
      </div>
    </div>

    <!-- PAGE 14: CHƯƠNG 4 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 4 • Trang 3/3</div>
        <div class="page-text-body">
          <p>Tí ngồi chễm chệ với dáng vẻ dị biệt: tóc dài vuốt ngược, răng xỉn màu nhai trầu. Gã liên tục mổ xẻ bản thiết kế của chúng tôi, chỉ ra cái sai rất chuẩn nhưng lấp lửng không hề hướng dẫn sửa.</p>
          <p>Tí chính là gã giữ cửa thống soái "Thế giới cũ", kẻ duy nhất nắm giữ toàn bộ Knowledge Base trong đầu. Muốn lật ngược thế cờ, tôi buộc phải bước qua xác – hoặc thu phục – gã giữ cửa nhai trầu này.</p>
          <p>Tối đó, tôi tự thưởng cho mình một cốc bia mát rượi ven đường: Tí, Ju, Zang hay mớ bòng bong requirement... thôi thì, mọi chuyện cứ để mai tính tiếp! Khakhakha.</p>
        </div>
        <div class="page-footer-num">- Trang 14 -</div>
      </div>
    </div>

    <!-- PAGE 15: CHƯƠNG 5 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 1/5</div>
        <h2 class="page-chapter-title">Bản Đồ Trí Mạng & Thế Trận Vườn Không Nhà Trống</h2>
        <div class="page-text-body">
          <p>Nhâm nhi ly cà phê buổi sáng, tôi vẽ ra bản đồ 3 chiều trong đầu: Dàn sếp mới bị kẹt ở vỏ giao diện; team tư vấn đứt gãy nội bộ; và Tí nắm giữ linh hồn hệ thống cũ không chịu chia sẻ.</p>
          <p>Đội quân kỹ sư thiện chiến của tôi đã dàn trận xong xuôi, nhưng lương thực (Requirement) bị giấu nhẹm. Chúng tôi rơi vào thế "Vườn không nhà trống".</p>
          <p>Tôi bắt đầu thực hiện các phép thử. Đầu tiên là gọi cho Head of BA tại Singapore để yêu cầu cử nhân sự senior cứng cựa vào rà soát và tháo gỡ sự bế tắc của team BA.</p>
        </div>
        <div class="page-footer-num">- Trang 15 -</div>
      </div>
    </div>

    <!-- PAGE 16: CHƯƠNG 5 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 2/5</div>
        <div class="page-text-body">
          <p>Phép thử thứ hai: Soi kỹ luồng match cuốc xe và phát hiện dòng comment sign-off vô trách nhiệm của Gà (VP Business): <i>"Tôi sign-off nếu nó mô tả y chang những gì hệ thống hiện tại đang làm."</i></p>
          <p>Cái trò làm chính trị chốn công sở này thật trẻ con – đùn đẩy trách nhiệm để bảo vệ an toàn cho chiếc ghế của mình. McKinsey từng nói: "Không có cuộc chuyển đổi số nào thành công nếu không được dẫn dắt bởi Business."</p>
          <p>Nhưng cuộc chơi khó nhằn này đã đến tay, và sứ mệnh của chúng tôi là bằng mọi giá phải làm cho bằng được.</p>
        </div>
        <div class="page-footer-num">- Trang 16 -</div>
      </div>
    </div>

    <!-- PAGE 17: CHƯƠNG 5 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 3/5</div>
        <div class="page-text-body">
          <p>Tôi bước sang bàn của Tí. Gã lạnh nhạt đáp "Ok", "Yes". Tôi liếc thấy chiếc đồng hồ trên cổ tay gã và cất lời:</p>
          <p><i>"Đồng hồ đẹp đấy. Tudor Black Bay 58 phải không?"</i></p>
          <p>Phím ngừng gõ. Tí ngước lên: <i>"Ghost Bezel đó bro! Dân chơi mới hiểu."</i> Khái niệm phòng thủ rã đông ngay tức khắc.</p>
          <p>Tôi chỉ vào điểm đứt gãy luồng Event-driven. Tí buông câu lặp lại: <i>"I don't care."</i> Nhưng khi tôi chỉ vào dòng sign-off đùn đẩy của Gà, Tí chửi thề: <i>"They are shit!"</i></p>
        </div>
        <div class="page-footer-num">- Trang 17 -</div>
      </div>
    </div>

    <!-- PAGE 18: CHƯƠNG 5 (P4) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 4/5</div>
        <div class="page-text-body">
          <p>Thái độ cợt nhả, không phán xét của tôi làm Tí thấy tôi là gã khó đoán nhưng vô hại với chiếc ghế của gã. Tí thoải mái giới thiệu team và 2 gã SA đối thủ.</p>
          <p>Trở về góc làm việc, tôi ngẫm nghĩ: Chính cái gã Kỹ sư trưởng đang mang tiếng bảo thủ kia mới là kẻ đáng thương nhất. Hắn đã oằn mình gánh di sản nát bét để giữ tính sống còn cho guồng máy kinh doanh.</p>
        </div>
        <div class="page-footer-num">- Trang 18 -</div>
      </div>
    </div>

    <!-- PAGE 19: CHƯƠNG 5 (P5) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 5 • Trang 5/5</div>
        <div class="page-text-body">
          <p>Tối nay tôi có buổi tiệc ngoại giao đầu tiên với Wang và Ju tại Boat Quay.</p>
          <p>Quy luật bất thành văn của các dự án lớn: Những nút thắt chính trị phức tạp nhất hiếm khi được định đoạt trong phòng họp, mà được tháo gỡ trên bàn nhậu.</p>
          <p>Đó sẽ là nơi tôi đặt mục tiêu đạt được sự đồng thuận (alignment) đầu tiên cho dự án.</p>
        </div>
        <div class="page-footer-num">- Trang 19 -</div>
      </div>
    </div>

    <!-- PAGE 20: CHƯƠNG 6 (P1) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 1/4</div>
        <h2 class="page-chapter-title">Bàn Cờ Mới Ở Boat Quay Và Cái Bắt Tay Ngầm</h2>
        <div class="page-text-body">
          <p>Ngồi trên xe taxi tới Boat Quay, chị tài xế biến chuyến đi thành buổi thu thập yêu cầu thực tế nhất: Than vãn app chỉ đường sai, chọn nhầm địa chỉ không hủy được, và đề xuất nút bấm to đùng cho người già.</p>
          <p>Đến phòng VIP sang trọng, tôi ngồi cạnh một bác lớn tuổi hiền lành, từ tốn. Nói chuyện một hồi, tôi ngã ngửa khi biết bác chính là CIO tổng – sếp cấp cao nhất đứng trên cả Wang và Ju!</p>
        </div>
        <div class="page-footer-num">- Trang 20 -</div>
      </div>
    </div>

    <!-- PAGE 21: CHƯƠNG 6 (P2) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 2/4</div>
        <div class="page-text-body">
          <p>Bác CIO mỉm cười hẹn gặp lại. Ngay sau đó sếp tôi gọi qua bàn của Wang và Ju. Ju ngạo nghễ rót cho tôi một ly đầy Glenfiddich 15 không đá (tay đeo Rolex Submariner): <i>"Uống hết đi, ly toàn nước mà!"</i></p>
          <p>Tôi ngửa cổ dứt khoát cạn sạch 3 shot nguyên chất rồi lật úp ly xuống bàn. Ju nheo mắt cười lớn: <i>"Thằng này được!"</i></p>
        </div>
        <div class="page-footer-num">- Trang 21 -</div>
      </div>
    </div>

    <!-- PAGE 22: CHƯƠNG 6 (P3) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 3/4</div>
        <div class="page-text-body">
          <p>Bàn tiệc nóng lên. Khi hai bên đôi co gay gắt về việc requirement thiếu hụt và trễ tiến độ, tôi nhảy vào cắt ngang:</p>
          <p><i>"Mục tiêu cốt lõi của document là dùng để giao tiếp. Hiện tại giữa hai bên tồn tại khoảng cách lớn, do đó việc làm tài liệu chi tiết giai đoạn này là cực kỳ cần thiết."</i></p>
          <p>Wang bật cười sảng khoái, vỗ vai Ju: <i>"Thằng này được!"</i> Hóa ra họ chỉ cần một người có tư duy đồng hành thực chiến chứ không phải mớ lý thuyết sáo rỗng.</p>
        </div>
        <div class="page-footer-num">- Trang 22 -</div>
      </div>
    </div>

    <!-- PAGE 23: CHƯƠNG 6 (P4) -->
    <div class="page">
      <div class="page-content">
        <div class="page-header-tag">Chương 6 • Trang 4/4</div>
        <div class="page-text-body">
          <p>Sự đồng thuận (alignment) đã chính thức được thiết lập. Ngày mai sẽ là một ngày làm việc dễ dàng hơn rất nhiều.</p>
          <p>Đêm đó trở về nhà trong giấc ngủ êm dịu của dòng rượu vàng óng, chiếc áo năm xưa từng rộng thùng thình, giờ đây đã trở thành một bộ vest vừa vặn hoàn hảo với người kĩ sư trưởng.</p>
          <p style="text-align: center; margin-top: 20px; font-weight: bold; color: #d97706;">--- HẾT HỒI KÝ ---</p>
        </div>
        <div class="page-footer-num">- Trang 23 -</div>
      </div>
    </div>

    <!-- PAGE 24: BACK COVER -->
    <div class="page page-cover page-cover-back hard" data-density="hard">
      <div>
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🌟</div>
        <h3 style="color: #ffffff; margin-bottom: 8px;">CẢM ƠN BẠN ĐÃ ĐỌC</h3>
        <p style="color: #94a3b8; font-size: 0.8rem;">Series Hồi Ký - Luong Dinh</p>
      </div>
    </div>

  </div>
</div>

<script>
// ============================================================================
// 1. MODE SWITCHING LOGIC (3D SHOWCASE ↔ PAGEFLIP READER)
// ============================================================================
function switchToReaderMode() {
  const showcase = document.getElementById('book-showcase-view');
  const reader = document.getElementById('book-reader-view');
  if (showcase) showcase.style.display = 'none';
  if (reader) reader.style.display = 'flex';
  
  const container = document.getElementById('my-book-flipbook');
  if (container) {
    container.dataset.initialized = "false";
  }

  // Allow DOM to apply layout dimensions before initializing PageFlip
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
// 2. 3D BOOK SHOWCASE ROTATION LOGIC (360 DRAG & AUTO-ROTATE)
// ============================================================================
(function() {
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let rotY = -25;
  let rotX = 15;
  let isAutoRotating = false;
  let autoRotateInterval = null;

  function init3DDrag() {
    const stage = document.getElementById('showcase-stage');
    const box = document.getElementById('book-3d-box');
    if (!stage || !box) return;

    function updateTransform() {
      box.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }

    stage.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotY += deltaX * 0.6;
      rotX -= deltaY * 0.6;
      rotX = Math.max(-60, Math.min(60, rotX));

      updateTransform();
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    // Touch support for mobile devices
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      rotY += deltaX * 0.6;
      rotX -= deltaY * 0.6;
      rotX = Math.max(-60, Math.min(60, rotX));

      updateTransform();
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    window.addEventListener('touchend', () => { isDragging = false; });
  }

  window.toggleAutoRotate = function() {
    const box = document.getElementById('book-3d-box');
    const btn = document.getElementById('btn-auto-rotate');
    if (!box || !btn) return;

    isAutoRotating = !isAutoRotating;
    if (isAutoRotating) {
      btn.innerText = '⏸️ Dừng Xoay 3D';
      btn.style.background = '#f59e0b';
      btn.style.color = '#000000';
      if (autoRotateInterval) clearInterval(autoRotateInterval);
      autoRotateInterval = setInterval(() => {
        rotY += 1.2;
        box.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      }, 30);
    } else {
      btn.innerText = '🔄 Tự Động Xoay 3D';
      btn.style.background = 'rgba(15, 23, 42, 0.85)';
      btn.style.color = '#ffffff';
      if (autoRotateInterval) clearInterval(autoRotateInterval);
    }
  };

  setTimeout(() => {
    init3DDrag();
    // Auto-start 3D rotation automatically on page load!
    if (!isAutoRotating && window.toggleAutoRotate) {
      window.toggleAutoRotate();
    }
  }, 200);
})();

// ============================================================================
// 3. ST.PAGEFLIP INITIALIZATION & READER CONTROLS
// ============================================================================
(function() {
  window.tryInitPageFlip = function(forceReinit) {
    const container = document.getElementById('my-book-flipbook');
    const readerView = document.getElementById('book-reader-view');
    if (!container || !readerView) return;

    // Do not initialize if readerView is currently hidden
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
        height: 600,
        size: "stretch",
        minWidth: 300,
        maxWidth: 550,
        minHeight: 420,
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
