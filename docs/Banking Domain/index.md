# THIẾT KẾ MICROSERVICES CHO NGÂN HÀNG THỰC CHIẾN VỚI BIAN
Banking Industry Architecture Network (BIAN) Microservices Handbook for Enterprise Banking Modernization

[Trang Bìa & Chuẩn Mực Thực Hành Kiến Trúc](00_Trang_Bia_Va_Thong_Tin_Xuat_Ban_Practice_Standard.md)

---

## Mục Lục Chi Tiết

### [Phần 1: Nền Tảng Kiến Trúc BIAN (BIAN Foundations)](Part_01_BIAN_Foundations/)
- [Chương 1: Tổng Quan BIAN & Kiến Trúc Ngân Hàng Hiện Đại (Service Landscape)](Part_01_BIAN_Foundations/Ch01_Tong_Quan_BIAN_Va_Service_Landscape.md)
  - Phân tích thất bại của Microservices tự phát tại Ngân hàng.
  - Khái niệm BIAN Service Landscape (Business Area -> Business Domain -> Service Domain).
  - Nguyên tắc độc lập "MECE" (Mutually Exclusive, Collectively Exhaustive).
- [Chương 2: BIAN Metamodel – Control Record, Behavior Qualifier & BOM](Part_01_BIAN_Foundations/Ch02_Cac_Thanh_Phan_Kien_Truc_BIAN_Metamodel.md)
  - Phẫu thuật Service Domain: Asset/Control Record, Behavior Qualifiers.
  - Các loại thao tác chuẩn BIAN (Action Terms: Initiate, Execute, Request, Retrieve...).
  - Business Object Model (BOM) & cách định hình hợp đồng dữ liệu.

### [Phần 2: Phương Pháp Luận Thực Chiến Step-by-Step (Pragmatic Methodology)](Part_02_Step_By_Step_Methodology/)
- [Chương 3: Step-by-Step Mapping Từ BIAN Sang Microservices (DDD & Bounded Context)](Part_02_Step_By_Step_Methodology/Ch03_Tu_BIAN_Service_Domain_Den_Microservice_Bounded_Context.md)
  - Quy trình 4 bước chuẩn xác chuyển hóa Service Domain thành Microservice Boundary.
  - Phân tích độ mịn (Granularity Analysis) – Khi nào gộp, khi nào tách.
- [Chương 4: Thiết Kế API & Event-Driven Theo BIAN Semantic API](Part_02_Step_By_Step_Methodology/Ch04_Thiet_Ke_API_Va_Event_Driven_Theo_BIAN_Semantic_API.md)
  - Thiết kế REST/gRPC API theo BIAN Semantic Specification.
  - Định nghĩa Event Driven Architecture (EDA) với CloudEvents & Kafka.
- [Chương 5: Chiến Lược Quản Trị Dữ Liệu Phân Tán (Polyglot, CQRS, Saga Pattern)](Part_02_Step_By_Step_Methodology/Ch05_Chien_Luoc_Du_Lieu_Polyglot_Va_CQRS_Saga.md)
  - Database-per-Service trong Ngân hàng và thách thức ACID.
  - Saga Pattern (Choreography vs Orchestration) cho giao dịch chuyển tiền kép.
  - Outbox Pattern đảm bảo Transactional Messaging 100% không mất dữ liệu.

### [Phần 3: Core Banking – CASA Domain (Current Account & Savings Account)](Part_03_Core_Banking_CASA_Domain/)
- [Chương 6: Thiết Kế Microservices CASA (Current Account & Savings Account)](Part_03_Core_Banking_CASA_Domain/Ch06_Thiet_Ke_Microservices_Current_Account_Va_Savings_Account.md)
  - Ngữ cảnh nghiệp vụ CASA, quy trình mở tài khoản & hạch toán số dư.
  - NFRs: Độ trễ cực thấp, chống Double-Spending, Lock optimistic/pessimistic.
  - Thiết kế cụm Microservices: Current Account SD, Position Keeping SD, Transaction Engine.

### [Phần 4: Payments & ISO 20022 Domain](Part_04_Payments_Va_ISO20022_Domain/)
- [Chương 7: Thiết Kế Payment Engine & Payment Execution](Part_04_Payments_Va_ISO20022_Domain/Ch07_Thiet_Ke_Payment_Engine_Va_Payment_Execution.md)
  - Kiến trúc Thanh toán Ngay (Real-Time Payments / NAPAS / SEPA Instant).
  - Yêu cầu nghiệp vụ & NFRs thanh toán.
  - Thiết kế Microservices: Payment Order SD, Payment Execution SD.
- [Chương 8: Chuẩn Hóa Giao Tiếp ISO 20022 & Payment Gateway](Part_04_Payments_Va_ISO20022_Domain/Ch08_Giao_Tiep_ISO20022_Va_Payment_Order_Microservice.md)
  - Ánh xạ BIAN Semantic API với thông điệp ISO 20022 (pacs.008, pain.001, camt.054).
  - Kiến trúc chuyển đổi thông điệp (Message Translation Engine).

### [Phần 5: Lending & Customer Management Domain](Part_05_Lending_Va_Customer_Management_Domain/)
- [Chương 9: Thiết Kế Hệ Thống Tín Dụng (Loan Origination & Servicing)](Part_05_Lending_Va_Customer_Management_Domain/Ch09_Thiet_Ke_He_Thong_Vay_Loan_Origination_Va_Servicing.md)
  - Hành trình tín dụng: Khởi tạo khoản vay -> Thẩm định -> Giải ngân -> Thu nợ.
  - Thiết kế Microservices: Consumer Loan SD, Credit Appraisal SD, Collateral Allocation SD.
- [Chương 10: Quản Trị Khách Hàng Định Danh Duy Nhất (Party Management & KYC)](Part_05_Lending_Va_Customer_Management_Domain/Ch10_Party_Management_Customer_Profile_Va_KYC.md)
  - Khắc phục tình trạng "Khách hàng phân mảnh" ở các Core cũ.
  - Thiết kế Microservices: Party Routing SD, Customer Profile SD, Customer Agreement SD.

### [Phần 6: Master Banking Blueprint & Lộ Trình Hiện Đại Hóa](Part_06_Master_Banking_Blueprint/)
- [Chương 11: Tổng Thể Master Banking Microservices Blueprint](Part_06_Master_Banking_Blueprint/Ch11_Tong_The_Banking_Microservices_Blueprint.md)
  - Sơ đồ Enterprise Blueprint Diagram đầy đủ.
  - Kiến trúc 3 tầng: Experience Layer -> Process Orchestration Layer -> Core BIAN Service Domains Layer.
- [Chương 12: Integration Architecture (Choreography vs Orchestration & Event Mesh)](Part_06_Master_Banking_Blueprint/Ch12_Integration_Architecture_Choreography_vs_Orchestration.md)
  - Nguyên tắc giao tiếp giữa các Service Domains (Synch REST/gRPC vs Asynch Event Mesh).
- [Chương 13: Lộ Trình Chuyển Đổi Core Banking (Strangler Fig Pattern Với BIAN)](Part_06_Master_Banking_Blueprint/Ch13_Lo_Trinh_Chuyen_Doi_Core_Banking_Strangler_Fig_Pattern.md)
  - Chiến lược bóc tách Monolithic Core Banking sang BIAN Microservices.
  - Anti-Corruption Layer (ACL) và Change Data Capture (CDC / Debezium).

### [Phần 7: Bài Tập Thực Hành, Trắc Nghiệm & Case Study Tổng Hợp](Part_07_Exercises_Quizzes_And_Case_Studies/)
- [Chương 14: Hệ Thống Câu Hỏi Trắc Nghiệm Ôn Tập & Đánh Giá Năng Lực Kiến Trúc BIAN Microservices](Part_07_Exercises_Quizzes_And_Case_Studies/Ch14_He_Thong_Cau_Hoi_Trac_Nghiem_On_Tap_13_Chuong.md)
  - Bộ câu hỏi trắc nghiệm chuyên sâu bao phủ toàn bộ 13 Chương.
  - Đáp án chuẩn mực & giải thích chuyên sâu nguyên lý kiến trúc (Architectural Rationale).
  - Thang tự đánh giá năng lực Kiến trúc sư Ngân hàng.
- [Chương 15: Bài Tập Thực Chiến Thiết Kế Kiến Trúc & Case Study Tổng Hợp](Part_07_Exercises_Quizzes_And_Case_Studies/Ch15_Bai_Tap_Thuc_Chien_Thiet_Ke_Kien_Truc_Va_Case_Studies.md)
  - Bài tập 1: Phân rã Bounded Context & Ánh xạ BIAN cho nghiệp vụ Thẻ Tín Dụng.
  - Bài tập 2: Thiết kế Saga Orchestration cho Mở Tiết Kiệm Trực Tuyến & thu phí.
  - Bài tập 3: Thiết kế BIAN Semantic API & Ánh xạ ISO 20022 (pacs.008).
  - Bài tập 4: Lộ trình Strangler Fig hiện đại hóa Core Tiền gửi có kỳ hạn với CDC Debezium.
