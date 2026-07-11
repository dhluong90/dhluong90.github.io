# Chương 14: Hệ Thống Câu Hỏi Trắc Nghiệm Ôn Tập & Đánh Giá Năng Lực Kiến Trúc BIAN Microservices

---

## 1. Mục Tiêu & Phương Pháp Sử Dụng Bộ Câu Hỏi

Chương này cung cấp "bộ câu hỏi trắc nghiệm chuyên sâu (Comprehensive Quiz & Assessment)" được thiết kế dành riêng cho các Kiến trúc sư Giải pháp (Solution Architect), Kiến trúc sư Doanh nghiệp (Enterprise Architect), Kỹ sư Trưởng (Principal/Lead Engineer) và Chuyên viên Phân tích Nghiệp vụ Ngân hàng (BA/Product Owner).

Bộ câu hỏi bao phủ toàn bộ "13 Chương" của cuốn sách, giúp người đọc:

1. "Ghi nhớ sâu sắc các khái niệm nền tảng:" BIAN Service Landscape, Metamodel, Control Record, Behavior Qualifiers, Action Terms.
2. "Kiểm chứng tư duy thiết kế thực chiến:" Phân định ranh giới Bounded Context theo DDD, xử lý giao dịch phân tán (Saga, Outbox, CQRS), thiết kế BIAN Semantic API và ánh xạ ISO 20022.
3. Đánh giá năng lực giải quyết tình huống kiến trúc: Lựa chọn giữa Choreography và Orchestration, áp dụng Strangler Fig Pattern để hiện đại hóa hệ thống Core Banking liền khối.

Mỗi câu hỏi đều đi kèm đáp án chuẩn và "giải thích kiến trúc chi tiết (Architectural Rationale)" để làm rõ lý do tại sao phương án đó là tối ưu trong môi trường Ngân hàng thực tế.

---

## 2. Phần 1: Nền Tảng Kiến Trúc BIAN & Metamodel (Chương 1 & Chương 2)

### Câu hỏi 1.1: Nguyên nhân cốt lõi khiến các dự án Microservices tự phát tại Ngân hàng thường biến thành "Distributed Monolith"?
- A. Sử dụng REST API thay vì gRPC cho giao tiếp nội bộ giữa các dịch vụ.
- B. Phân chia Microservices theo cơ cấu tổ chức phòng ban (Conway's Law bẫy sai lầm) hoặc chia quá nhỏ theo từng bảng cơ sở dữ liệu mà thiếu ranh giới nghiệp vụ độc lập (Bounded Context).
- C. Sử dụng quá nhiều ngôn ngữ lập trình khác nhau (Polyglot Programming) trong cùng một cụm dịch vụ.
- D. Không triển khai hệ thống trên Kubernetes và Service Mesh.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Theo Định luật Conway, tổ chức thiết kế hệ thống sẽ phản ánh cấu trúc giao tiếp của chính tổ chức đó. Khi ngân hàng cắt nhỏ hệ thống theo phòng ban hoặc cắt cơ học theo từng bảng DB mà không dựa trên năng lực nghiệp vụ độc lập (Business Capability / MECE), các dịch vụ sẽ phụ thuộc chéo chằng chịt vào nhau cả về dữ liệu lẫn logic xử lý đồng bộ. Kết quả là tạo ra một "Distributed Monolith" – mang toàn bộ nhược điểm của Monolith cộng thêm độ trễ mạng và rủi ro lỗi phân tán.

---

### Câu hỏi 1.2: Trong BIAN Service Landscape, nguyên tắc "MECE" (Mutually Exclusive, Collectively Exhaustive) áp dụng cho Service Domain mang ý nghĩa gì?
- A. Các Service Domain có thể chia sẻ chung một cơ sở dữ liệu vật lý nhưng logic nghiệp vụ phải tách biệt.
- B. Mỗi Service Domain thực hiện một tập hợp nghiệp vụ loại trừ lẫn nhau (không trùng lặp chức năng với Service Domain khác) và tổng hợp toàn bộ các Service Domain sẽ bao phủ trọn vẹn toàn bộ hoạt động ngân hàng.
- C. Các Service Domain chỉ được phép giao tiếp bất đồng bộ qua Event Mesh và không bao giờ gọi đồng bộ qua REST API.
- D. Tất cả các Service Domain đều phải được phát triển bởi cùng một đội ngũ kỹ thuật để đảm bảo tính nhất quán.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" "Mutually Exclusive" đảm bảo không có hai Service Domain nào cùng chịu trách nhiệm quản lý vòng đời của cùng một thực thể nghiệp vụ cốt lõi (chống trùng lặp logic và dữ liệu). "Collectively Exhaustive" đảm bảo danh mục ~312 Service Domain của BIAN bao phủ đầy đủ mọi khía cạnh hoạt động của một ngân hàng hiện đại từ Core Banking, Thanh toán, Tín dụng đến Quản trị rủi ro và Kế toán.

---

### Câu hỏi 1.3: Cấu trúc BIAN Metamodel định nghĩa một "Service Domain" thông qua sự kết hợp cốt lõi của những yếu tố nào?
- A. Database Table + REST Controller + Messaging Queue.
- B. Asset / Control Record + Behavior Qualifiers + Functional Pattern.
- C. Frontend UI + Backend API + Database Schema.
- D. ISO 20022 XML Schema + Kafka Topic + Kubernetes Pod.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Trong BIAN Metamodel, mỗi Service Domain được xác định duy nhất bởi: (1) "Asset/Control Record" (thực thể tài sản hoặc hồ sơ kiểm soát nghiệp vụ mà nó quản lý trọn đời), (2) "Behavior Qualifiers" (trạng thái hoặc khía cạnh hành vi chi tiết của Control Record), và (3) "Functional Pattern" (mẫu hình chức năng như Process, Register, Agree, Evaluate...).

---

### Câu hỏi 1.4: Trong BIAN Action Terms, sự khác biệt căn bản giữa hành động `Initiate` và `Execute` là gì?
- A. `Initiate` dùng cho giao dịch đọc dữ liệu, còn `Execute` dùng cho giao dịch ghi dữ liệu.
- B. `Initiate` khởi tạo một phiên bản mới của Control Record (tạo mới hồ sơ/tài khoản), trong khi `Execute` thực thi một thủ tục tự động trên một Control Record đã tồn tại.
- C. `Initiate` là lời gọi bất đồng bộ qua Kafka, còn `Execute` là lời gọi đồng bộ qua gRPC.
- D. `Initiate` chỉ do khách hàng bên ngoài thực hiện, còn `Execute` chỉ do hệ thống nội bộ thực hiện.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" BIAN chuẩn hóa ngữ nghĩa API (Semantic API) thông qua các Action Terms. `Initiate` luôn gắn liền với vòng đời tạo mới (Creation lifecycle) của một Control Record (ví dụ: mở tài khoản CASA mới, khởi tạo khoản vay). `Execute` được sử dụng khi yêu cầu Service Domain thực hiện một thao tác nghiệp vụ trên một Control Record đang hoạt động (ví dụ: thực hiện trích nợ/ghi có trên một tài khoản đã tồn tại).

---

## 3. Phần 2: Phương Pháp Luận DDD, API/Event & Quản Trị Dữ Liệu Phân Tán (Chương 3, 4, 5)

### Câu hỏi 2.1: Khi áp dụng Domain-Driven Design (DDD) để ánh xạ BIAN Service Domain sang Microservice, quy tắc vàng về "Bounded Context" là gì?
- A. Một Microservice bắt buộc phải tương ứng đúng tỷ lệ 1:1 với một BIAN Service Domain duy nhất trong mọi trường hợp.
- B. Một Bounded Context có thể bao gồm một hoặc nhiều BIAN Service Domain có tính gắn kết nghiệp vụ cực cao (High Cohesion) và cùng chung chu kỳ thay đổi, nhưng tuyệt đối không để rò rỉ mô hình dữ liệu nội bộ ra ngoài.
- C. Tất cả các Bounded Context trong ngân hàng phải sử dụng chung một mô hình dữ liệu chuẩn duy nhất (Canonical Enterprise Data Model) trong cơ sở dữ liệu.
- D. Bounded Context chỉ áp dụng cho các nghiệp vụ Frontend, không áp dụng cho xử lý Core Banking.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" BIAN cung cấp độ mịn chuẩn ở mức Service Domain (~312 domain). Tuy nhiên, khi thiết kế Microservices thực tế, kiến trúc sư cần phân tích độ mịn (Granularity Analysis). Các Service Domain có liên kết chặt chẽ về dữ liệu và vòng đời (ví dụ: *Current Account* và *Position Keeping* trong một số thiết kế hiệu năng cao) có thể được gom vào cùng một Bounded Context để tối ưu hóa ACID và độ trễ dưới 10ms, miễn là giữ nguyên ranh giới API đối ngoại.

---

### Câu hỏi 2.2: Để giải quyết bài toán giao dịch tài chính liên quan đến nhiều Microservices (ví dụ: Chuyển tiền từ Tài khoản A sang Tài khoản B thuộc hai Core Service khác nhau), mẫu hình nào đảm bảo tính nhất quán cuối cùng (Eventual Consistency) an toàn nhất?
- A. Two-Phase Commit (2PC / XA Transaction) trên toàn bộ hệ thống phân tán.
- B. Saga Pattern kết hợp với các giao dịch bù trừ (Compensating Transactions).
- C. Gộp tất cả các Microservices liên quan vào chung một Database để dùng ACID Transaction thông thường.
- D. Bỏ qua tính nhất quán, xử lý tự động vào cuối ngày bằng Batch Job.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Two-Phase Commit (2PC) gây khóa tài nguyên dài (Blocking locks), không thể mở rộng (Scalability bottleneck) và rất dễ gây Deadlock trong kiến trúc Microservices phân tán cao. "Saga Pattern" chia nhỏ giao dịch lớn thành chuỗi các giao dịch cục bộ (Local Transactions). Nếu một bước thất bại (ví dụ: Tài khoản B bị khóa không thể ghi có), Saga sẽ kích hoạt các giao dịch bù trừ (Compensating Transaction - hoàn tiền lại cho Tài khoản A) để bảo đảm tính nhất quán cuối cùng.

---

### Câu hỏi 2.3: Trong kiến trúc Microservice hướng sự kiện (Event-Driven Architecture), vấn đề "Dual-Write Problem" (ghi vào Database thành công nhưng gửi Event ra Kafka thất bại, hoặc ngược lại) được giải quyết triệt để bằng mẫu hình nào?
- A. Circuit Breaker Pattern.
- B. Transactional Outbox Pattern kết hợp Change Data Capture (CDC).
- C. Retry Pattern với Exponential Backoff.
- D. API Gateway Rate Limiting.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Transactional Outbox Pattern yêu cầu Microservice ghi dữ liệu nghiệp vụ (Domain Entity) và sự kiện (Event Payload) vào hai bảng `business_table` và `outbox_table` trong "cùng một giao dịch ACID cục bộ (Local ACID Transaction)". Sau đó, một tiến trình nền hoặc công cụ CDC (như Debezium) sẽ đọc bảng `outbox_table` và đẩy sự kiện lên Kafka theo nguyên tắc *At-Least-Once Delivery*, loại bỏ hoàn toàn rủi ro Dual-Write.

---

### Câu hỏi 2.4: BIAN Semantic API khuyến nghị sử dụng tiêu chuẩn nào để định nghĩa cấu trúc thông điệp thanh toán quốc tế và liên ngân hàng?
- A. FIX Protocol.
- B. ISO 8583.
- C. ISO 20022.
- D. SWIFT MT (MT103 / MT202).

> Đáp án đúng: C
> 
> "Giải thích kiến trúc:" BIAN tích hợp sâu sắc với từ điển dữ liệu "ISO 20022". Trong khi ISO 8583 phổ biến cho giao thức thẻ thẻ/ATM và SWIFT MT đang dần bị đào thải, ISO 20022 (với cấu trúc XML/JSON phong phú như `pacs.008`, `pain.001`, `camt.054`) là tiêu chuẩn vàng toàn cầu được BIAN Semantic API áp dụng làm mô hình dữ liệu chuẩn cho các giao dịch thanh toán hiện đại.

---

## 4. Phần 3: Core Banking – CASA Domain (Chương 6)

### Câu hỏi 3.1: Trong thiết kế cụm Microservices CASA (Current Account & Savings Account), Service Domain nào chịu trách nhiệm quản lý số dư thời gian thực và kiểm tra hạn mức khả dụng để chống Double-Spending?
- A. Customer Profile Service Domain.
- B. Position Keeping Service Domain.
- C. General Ledger Service Domain.
- D. Payment Order Service Domain.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Theo chuẩn BIAN, "Position Keeping Service Domain" là đơn vị chuyên trách duy trì các vị thế tài chính (Financial Positions / Balances) thời gian thực của tài khoản. Nó tính toán Số dư thực tế (Book Balance), Số dư bị phong tỏa/đặt cọc (Hold/Reserved Amount) và Số dư khả dụng (Available Balance), chịu trách nhiệm giữ khóa (Locking) hoặc đặt chỗ số dư trong tích tắc để ngăn chặn chi tiêu vượt mức (Double-Spending).

---

### Câu hỏi 3.2: Để đạt SLA độ trễ dưới 15ms cho giao dịch trích nợ tài khoản CASA trong đợt cao điểm flash-sale, kỹ thuật quản trị đồng thời (Concurrency Control) nào sau đây là tối ưu nhất cho Microservice CASA?
- A. Pessimistic Locking toàn cục trên toàn bộ bảng tài khoản (`SELECT ... FOR UPDATE` kéo dài qua mạng).
- B. Optimistic Locking với số phiên bản (`version` column) kết hợp In-Memory Data Grid (Redis/Hazelcast) hoặc Single-Threaded Event Loop Engine (như LMAX Disruptor).
- C. Không sử dụng khóa, cho phép ghi đè tự do và đối soát lại vào cuối ngày.
- D. Sử dụng Distributed Lock qua Zookeeper cho mỗi giao dịch trích nợ.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Pessimistic Lock hoặc Distributed Lock qua mạng tạo ra hàng đợi nghẽn cổ chai cực lớn và độ trễ cao. Để đạt TPS hàng chục nghìn với độ trễ dưới 15ms, các Core Banking hiện đại áp dụng "Optimistic Concurrency Control (OCC)" với trường `version` hoặc xử lý hạch toán trong bộ nhớ tốc độ siêu cao (In-Memory Processing với Single-Threaded Queue) trước khi lưu vết bất đồng bộ xuống đĩa bền vững.

---

## 5. Phần 4: Payments & ISO 20022 Domain (Chương 7 & Chương 8)

### Câu hỏi 4.1: Trong kiến trúc Thanh toán Ngay (Real-Time Payments / Instant Payment), sự phân định trách nhiệm giữa **Payment Order Service Domain** và **Payment Execution Service Domain** theo BIAN là gì?
- A. Payment Order giao tiếp với mạng chuyển tiền ngoại tệ, còn Payment Execution giao tiếp với mạng ATM nội địa.
- B. Payment Order tiếp nhận chỉ thị thanh toán, kiểm tra tính hợp lệ và định hướng quy trình; Payment Execution thực thi giao thức thanh quyết toán với hệ thống bù trừ trung ương (ACH/RTGS/NAPAS).
- C. Payment Order lưu trữ số dư tài khoản, còn Payment Execution in sao kê.
- D. Hai Service Domain này có chức năng hoàn toàn giống nhau, chỉ phân chia theo khu vực địa lý.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" "Payment Order" đóng vai trò điều phối nghiệp vụ lệnh thanh toán từ kênh (xác thực chữ ký, kiểm tra hạn mức, AML screening, chọn kênh thanh toán tối ưu). Sau khi lệnh được phê duyệt, "Payment Execution" đóng vai trò kết nối kỹ thuật nghiệp vụ chuyên sâu với mạng lưới thanh toán bên ngoài (đóng gói thông điệp ISO 20022 `pacs.008`, quản lý phiên kết nối song phương với NAPAS/SWIFT/RTGS).

---

### Câu hỏi 4.2: Thông điệp ISO 20022 nào dưới đây đại diện cho "Lệnh chuyển tiền thanh toán giữa các tổ chức tài chính vì mục đích của khách hàng" (FI to FI Customer Credit Transfer)?
- A. `pain.001` (Customer Credit Transfer Initiation).
- B. `pacs.008` (Financial Institution To Financial Institution Customer Credit Transfer).
- C. `camt.053` (Bank To Customer Statement).
- D. `pacs.004` (Payment Return).

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" `pain.001` là thông điệp khách hàng gửi ngân hàng khởi tạo thanh toán. Khi Ngân hàng A chuyển tiền cho Ngân hàng B qua hệ thống thanh toán liên ngân hàng để ghi có cho người thụ hưởng, thông điệp chuẩn mực được sử dụng là `pacs.008`. `camt.053` là sao kê tài khoản cuối kỳ, và `pacs.004` dùng để hoàn trả lệnh thanh toán.

---

## 6. Phần 5: Lending & Customer Management Domain (Chương 9 & Chương 10)

### Câu hỏi 6.1: Trong quy trình nghiệp vụ Tín dụng (Loan Origination & Servicing), BIAN Service Domain nào chịu trách nhiệm định giá tài sản bảo đảm và quản lý tỷ lệ LTV (Loan-to-Value)?
- A. Consumer Loan Service Domain.
- B. Collateral Allocation / Collateral Asset Administration Service Domain.
- C. Credit Appraisal Service Domain.
- D. Party Management Service Domain.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" "Collateral Allocation / Asset Administration Service Domain" là domain độc lập chịu trách nhiệm quản lý danh mục tài sản bảo đảm (bất động sản, xe, giấy tờ có giá), định giá định kỳ và phân bổ giá trị tài sản bảo đảm cho một hoặc nhiều khoản vay nhằm kiểm soát tỷ lệ LTV theo quy định quản trị rủi ro.

---

### Câu hỏi 6.2: Để giải quyết triệt để tình trạng "Khách hàng bị phân mảnh hồ sơ" (cùng một người có nhiều mã CIF khác nhau ở Core Tiền gửi, Core Thẻ, Core Vay), kiến trúc BIAN áp dụng giải pháp nào?
- A. Gộp chung toàn bộ dữ liệu giao dịch của khách hàng vào một bảng khổng lồ duy nhất.
- B. Tách biệt rõ ràng giữa "Party Routing / Party Reference Data SD" (quản lý định danh Master CIF duy nhất toàn hàng) và "Customer Profile SD" (quản lý chân dung nghiệp vụ theo ngữ cảnh).
- C. Xóa bỏ toàn bộ các hệ thống cũ và yêu cầu khách hàng đăng ký lại từ đầu.
- D. Sử dụng tên khách hàng làm khóa chính (Primary Key) trong toàn bộ Microservices.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Theo nguyên tắc BIAN, "Party" là thực thể pháp nhân hoặc thể nhân độc lập. "Party Reference Data / Party Routing SD" đóng vai trò là Single Source of Truth cung cấp mã định danh duy nhất (Master Party ID) và ánh xạ với các CIF ở hệ thống cũ. Các domain khác như "Customer Profile" hay "Customer Agreement" chỉ tham chiếu đến Master Party ID này để tổng hợp góc nhìn 360 độ mà không bị trùng lặp.

---

## 7. Phần 6: Master Blueprint, Integration & Strangler Fig Pattern (Chương 11, 12, 13)

### Câu hỏi 7.1: Trong mô hình tích hợp Enterprise Microservices Ngân hàng, khi nào kiến trúc sư nên ưu tiên sử dụng **Choreography (Event-Driven không có nhạc trưởng)** thay vì **Orchestration (Quy trình có nhạc trưởng điều phối)**?
- A. Khi quy trình nghiệp vụ cực kỳ phức tạp, có nhiều bước rẽ nhánh điều kiện pháp lý và cần kiểm soát trạng thái giao dịch tập trung (như Quy trình Duyệt cấp tín dụng 10 bước).
- B. Khi các dịch vụ cần phản ứng độc lập, lỏng lẻo với một sự kiện nghiệp vụ xảy ra (ví dụ: Sự kiện `CustomerAddressUpdated` kích hoạt thông báo email, tính lại điểm tín dụng và cập nhật CRM mà không cần dịch vụ phát ra sự kiện phải biết ai đang lắng nghe).
- C. Khi hệ thống yêu cầu độ trễ gọi hàm dưới 1ms giữa 2 dịch vụ.
- D. Khi không có hệ thống Message Broker (Kafka/RabbitMQ) trong mạng.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" "Choreography" mang lại độ liên kết lỏng (Loose Coupling) tối đa và khả năng mở rộng tuyệt vời cho các sự kiện quảng bá (Broadcast Events) nơi nhiều dịch vụ hạ nguồn cần tự động phản ứng. Ngược lại, với các quy trình giao dịch tài chính nhiều bước đòi hỏi bồi hoàn chặt chẽ (như Giải ngân khoản vay hay Chuyển tiền liên ngân hàng phức tạp), "Orchestration" (với một Saga Orchestrator engine như Camunda/Temporal) được ưu tiên để dễ dàng kiểm toán và theo dõi trạng thái.

---

### Câu hỏi 7.2: Khi thực hiện lộ trình hiện đại hóa Core Banking liền khối (Monolithic Core) theo **Strangler Fig Pattern**, vai trò cốt lõi của lớp **Anti-Corruption Layer (ACL)** là gì?
- A. Ngăn chặn hacker xâm nhập vào cơ sở dữ liệu của Core Banking cũ.
- B. Đóng vai trò lớp đệm chuyển đổi mô hình dữ liệu và giao thức giữa mô hình chuẩn BIAN hiện đại và cấu trúc dữ liệu lạc hậu của Monolith, giúp Microservice mới không bị ô nhiễm bởi kỹ thuật cũ.
- C. Tự động viết lại mã nguồn COBOL/PL-SQL sang Java/Go.
- D. Sao lưu toàn bộ cơ sở dữ liệu Core Banking sang Cloud Storage mỗi ngày.

> Đáp án đúng: B
> 
> "Giải thích kiến trúc:" Khi chuyển đổi dần theo Strangler Fig, hệ thống mới (BIAN Microservices) buộc phải cùng tồn tại và giao tiếp với Core Monolith trong nhiều năm. "Anti-Corruption Layer (ACL)" dịch các mô hình dữ liệu cũ kỹ, không chuẩn mực của Monolith sang BIAN Canonical Model (và ngược lại), bảo vệ các Bounded Context mới khỏi bị "lây nhiễm" sự rắc rối của kiến trúc di sản.

---

### Câu hỏi 7.3: Trong chiến lược đồng bộ dữ liệu song song (Coexistence Phase) giữa Core cũ và BIAN Microservices mới, giải pháp **Change Data Capture (CDC)** mang lại lợi thế vượt trội nào so với Dual-Write từ Frontend?
- A. CDC không yêu cầu sửa đổi bất kỳ dòng code nào trên ứng dụng Core Banking cũ, bắt trực tiếp sự thay đổi từ Transaction Log của Database (như Oracle Redo Log) với độ trễ thấp và độ tin cậy tuyệt đối.
- B. CDC tự động khóa toàn bộ hệ thống cũ để ngăn người dùng giao dịch.
- C. CDC giúp tăng tốc độ xử lý CPU của máy chủ Mainframe cũ lên gấp 10 lần.
- D. CDC thay thế hoàn toàn nhu cầu sử dụng API Gateway.

> Đáp án đúng: A
> 
> "Giải thích kiến trúc:" Ghi kép từ Frontend (Dual-Write) cực kỳ rủi ro vì dễ gây lệch dữ liệu khi một bên lỗi mạng. "CDC (Change Data Capture)" thông qua các công cụ như Debezium/GoldenGate đọc trực tiếp log giao dịch ở tầng cơ sở dữ liệu Core Monolith một cách hoàn toàn không xâm lấn (Non-invasive), biến mọi thay đổi INSERT/UPDATE/DELETE thành các stream sự kiện phát lên Kafka để cập nhật Read-Model hoặc Microservices mới theo thời gian thực.

---

## 8. Bảng Tổng Hợp Đánh Giá Kết Quả Trắc Nghiệm

Sau khi hoàn thành 15 câu hỏi trọng tâm trên, độc giả có thể tự đối chiếu kết quả theo thang chuẩn năng lực Kiến trúc sư Ngân hàng BIAN dưới đây:

| Số câu trả lời đúng | Cấp độ năng lực kiến trúc | Khuyến nghị lộ trình nghiên cứu tiếp theo |
| :--- | :--- | :--- |
| 13 – 15 câu | "Principal / Enterprise Architect" | Nắm vững xuất sắc cả lý thuyết BIAN lẫn thực chiến Microservices. Có thể dẫn dắt thiết kế Enterprise Blueprint và chủ trì các dự án hiện đại hóa Core Banking. |
| 10 – 12 câu | "Senior Solution Architect / Tech Lead" | Hiểu rõ mô hình BIAN và thiết kế phân tán. Nên ôn lại kỹ hơn về chi tiết BIAN Action Terms (Chương 2) và chiến lược xử lý đồng thời OCC/Saga (Chương 5, 6). |
| 7 – 9 câu | "Mid-level Architect / Domain Expert" | Có kiến thức nền tảng tốt về nghiệp vụ ngân hàng hoặc kỹ thuật Microservices nhưng chưa kết hợp nhuần nhuyễn. Nên đọc kỹ lại "Phần 2 (Chương 3, 4, 5)". |
| Dưới 7 câu | "Foundation / Junior Practitioner" | Cần đọc lần lượt cuốn sách từ Chương 1 đến Chương 13, đặc biệt làm kỹ các bài tập thiết kế thực chiến tại "Chương 15". |

---
*Chương tiếp theo (Chương 15) sẽ đưa bạn vào các "Bài tập Lớn Thực chiến & Case Study Tự thiết kế Kiến trúc", nơi bạn tự tay xây dựng bản vẽ Microservice cho các nghiệp vụ ngân hàng thực tế.*
