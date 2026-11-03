---
name: mkdocs-material-standards
description: Standards and guidelines for formatting Markdown, code blocks, admonitions, and typography in MkDocs Material for dhluong90.github.io.
---

# MkDocs Material Formatting Standards

## 1. Admonition Callouts
Sử dụng Admonition của `pymdownx.details` để nhấn mạnh các khối thông tin:

* **Ghi chú thông thường:**
  ```markdown
  !!! note "Tiêu đề ghi chú"
      Nội dung ghi chú thụt dòng 4 khoảng trắng.
  ```

* **Mẹo thực chiến:**
  ```markdown
  !!! tip "Kinh nghiệm thực tế"
      Kinh nghiệm đúc kết từ triển khai production.
  ```

* **Cảnh báo rủi ro:**
  ```markdown
  !!! warning "Cảnh báo kiến trúc"
      Rủi ro về race-condition, dữ liệu không nhất quán hoặc bế tắc (deadlock).
  ```

* **Khối mở rộng thu gọn (Collapsible Details):**
  ```markdown
  ??? example "Xem mã nguồn mẫu (Bấm để mở)"
      Nội dung chi tiết được giấu mặc định.
  ```

## 2. Tabbed Content Blocks
Dùng cho so sánh giải pháp, đa ngôn ngữ lập trình hoặc xem trước payload:

```markdown
=== "REST API"
    ```http
    POST /payments/v1/transfer HTTP/1.1
    Host: api.bank.internal
    Content-Type: application/json
    ```

=== "Event-Driven (Kafka)"
    ```json
    {
      "eventType": "PaymentInitiatedEvent",
      "timestamp": "2026-11-03T12:00:00Z"
    }
    ```
```

## 3. Hình ảnh & Assets
* Mọi ảnh minh họa lưu trữ tại `docs/img/`.
* Sử dụng đường dẫn tương đối hoặc chuẩn: `![Mô tả ảnh](../img/ten-anh.png)`
* Nếu cần bo góc hoặc đổ bóng, sử dụng inline style nhẹ nhàng hoặc class có sẵn trong `stylesheets/extra.css`.
