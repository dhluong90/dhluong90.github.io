---
name: banking-fintech-guidelines
description: Domain knowledge, BIAN standards, ISO 20022 message specs, and Core Banking architectural patterns for Luong Dinh's Notes.
---

# Banking & Fintech Architecture Guidelines

## 1. Chuẩn BIAN (Banking Industry Architecture Network)
* **Khái niệm Service Domain**: Mỗi Service Domain trong BIAN đại diện cho một năng lực nghiệp vụ độc lập duy nhất (Single Bounded Context).
* **Các Service Domains trọng yếu**:
  * `Current Account`: Quản lý tài khoản vãng lai, số dư, hạn mức thấu chi.
  * `Payment Execution`: Thực thi các lệnh chuyển khoản nội bộ và liên ngân hàng.
  * `Customer Agreement`: Quản lý hợp đồng sản phẩm dịch vụ với khách hàng.
  * `Party Data Management`: Quản lý hồ sơ định danh khách hàng (KYC, CIF).
  * `Position Keeping`: Quản lý trạng thái số dư tức thời.
* **Semantic API & Action Terms**:
  * `Initiate`: Khởi tạo luồng xử lý hoặc vòng đời thực thể.
  * `Execute`: Thực thi tác vụ cụ thể.
  * `Evaluate`: Đánh giá rủi ro, tín dụng.
  * `Update` / `Retrieve`: Cập nhật hoặc truy xuất trạng thái.

## 2. Chuẩn Thông Điệp ISO 20022
* **Các loại thông điệp thanh toán phổ biến**:
  * `pacs.008` (Financial Institutional Customer Credit Transfer): Lệnh thanh toán chuyển khoản khách hàng.
  * `pacs.002` (Payment Status Report): Thông điệp báo cáo trạng thái thanh toán (ACCP, RJCT, PDNG).
  * `pacs.004` (Payment Return): Thông điệp hoàn trả tiền khi giao dịch lỗi.
  * `camt.053` (Bank to Customer Statement): Báo cáo sao kê tài khoản ngân hàng.
  * `camt.054` (Debit/Credit Notification): Thông báo biến động số dư ghi nợ/ghi có.

## 3. Mẫu Thiết Kế Hiện Đại Hóa Core Banking
* **Strangler Fig Pattern**: Bóc tách dần các module ngoại vi (Thanh toán, Onboarding, E-wallet) ra khỏi Core Monolith cũ mà không làm gián đoạn vận hành 24/7.
* **CQRS (Command Query Responsibility Segregation)**: Tách riêng luồng ghi nhận giao dịch ghi nợ/ghi có (Command) khỏi luồng tra cứu số dư/lịch sử giao dịch (Query).
* **Saga Pattern (Orchestration vs Choreography)**: Đảm bảo tính nhất quán cuối cùng (Eventual Consistency) cho các giao dịch phân tán kéo dài qua nhiều service.
