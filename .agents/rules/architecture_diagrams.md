---
name: architecture-diagrams
description: Rules for authoring clear, valid, and elegant Mermaid diagrams in MkDocs Material.
---

# Architecture & Sequence Diagram Guidelines

## 1. Nguyên Tắc Thiết Kế Sơ Đồ
1. **Rõ ràng và có định hướng (Clear Flow)**: Xác định rõ sơ đồ thể hiện luồng nghiệp vụ (Business Flow), luồng tích hợp (Integration Flow), hay cấu trúc dữ liệu (Data Model).
2. **Bọc nhãn bằng dấu ngoặc kép**: Tránh lỗi syntax parser của Mermaid khi chuỗi chứa dấu cách, dấu ngoặc hoặc ký tự đặc biệt:
   * Đúng: `node1["API Gateway (Kong / Envoy)"]`
   * Sai: `node1[API Gateway (Kong / Envoy)]`
3. **Màu sắc & Phân vùng (Subgraphs)**: Sử dụng `subgraph` để nhóm các service domain (ví dụ: Core Banking, Payment Gateway, External Switch).

## 2. Các Mẫu Sơ Đồ Thường Dùng

### Flowchart / Bounded Context
```mermaid
flowchart TD
  subgraph Channels["Kênh Giao Dịch (Digital Channels)"]
    MB["Mobile Banking App"]
    IB["Internet Banking"]
  end

  subgraph Integration["Tầng Tích Hợp (API & Events)"]
    GW["API Gateway (OAuth2/mTLS)"]
    Kafka["Apache Kafka Event Bus"]
  end

  subgraph Core["Core Banking Domain (BIAN)"]
    CASA["Current Account Service"]
    PAY["Payment Execution Service"]
  end

  MB --> GW
  IB --> GW
  GW --> PAY
  PAY -->|Event: PaymentInitiated| Kafka
  Kafka --> CASA
```

### Sequence Diagram (Giao tiếp nghiệp vụ ngân hàng)
```mermaid
sequenceDiagram
  autonumber
  actor User as Khách Hàng
  participant App as Mobile App
  participant PaySvc as Payment Engine
  participant Core as Core Banking (CASA)
  participant Napas as Napas 24/7 Switch

  User->>App: Xác nhận chuyển tiền
  App->>PaySvc: Gửi lệnh Payment Order
  PaySvc->>Core: Khóa/Trừ tiền tài khoản (Hold/Debit)
  Core-->>PaySvc: Trừ tiền thành công
  PaySvc->>Napas: Phát lệnh chuyển tiền liên ngân hàng
  Napas-->>PaySvc: Phản hồi kết quả (Thành công)
  PaySvc-->>App: Thông báo hoàn tất
  App-->>User: Hiển thị biên lai giao dịch
```
