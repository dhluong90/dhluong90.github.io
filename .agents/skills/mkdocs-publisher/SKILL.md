---
name: mkdocs-publisher
description: Workflow to validate links, run local preview server, build site, and deploy to GitHub Pages for dhluong90.github.io.
---

# MkDocs Publisher Skill

Skill này điều hành quy trình kiểm tra chất lượng và phát hành website `dhluong90.github.io`.

## Các Tác Vụ Thường Dùng

### 1. Khởi Chạy Local Dev Server
```bash
cd /Users/luongdh/Mylab/dhluong90.github.io
source venv/bin/activate
mkdocs serve
```
Mở trình duyệt tại `http://127.0.0.1:8000` để xem trực tiếp các thay đổi khi gõ phím (hot-reload).

### 2. Kiểm Tra Lỗi Biên Dịch (Strict Build Verification)
Trước khi xuất bản, bắt buộc chạy kiểm thử nghiêm ngặt:
```bash
cd /Users/luongdh/Mylab/dhluong90.github.io
source venv/bin/activate
mkdocs build --strict
```
Lệnh này sẽ biến mọi cảnh báo (như broken link, sai cú pháp TOC, missing asset) thành lỗi chặn dừng để khắc phục triệt để.

### 3. Xuất Bản Lên GitHub Pages
Khi Sếp xác nhận nội dung đã hoàn tất:
```bash
cd /Users/luongdh/Mylab/dhluong90.github.io
source venv/bin/activate
mkdocs gh-deploy
```
Lệnh sẽ tự động build vào branch `gh-pages` và đẩy lên GitHub để website cập nhật trực tiếp tại `https://dhluong90.github.io`.
