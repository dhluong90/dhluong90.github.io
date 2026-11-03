---
title: "Claude Code Plugins Directory: Cấu Trúc Và Hướng Dẫn Chi Tiết"
date: 2026-10-01
authors:
  - Luong Dinh
categories:
  - "AI"
  - "Claude Code"
  - "Plugins"
  - "Developer Tools"
---

# Claude Code Plugins Directory — Cấu Trúc Và Hướng Dẫn Phát Triển Plugin Cho Claude Code

Thư mục chọn lọc các plugin chất lượng cao dành cho **Claude Code**. Hệ sinh thái plugin giúp mở rộng sức mạnh của Claude Code với các công cụ MCP (Model Context Protocol), lệnh tuỳ biến (slash commands), tác nhân tự trị (agents) và các bộ kỹ năng chuyên biệt (skills).

!!! warning "Lưu ý bảo mật quan trọng"
    Hãy đảm bảo bạn hoàn toàn tin tưởng plugin trước khi cài đặt, cập nhật hoặc sử dụng. Anthropic không kiểm soát các MCP server, file mã nguồn hoặc phần mềm bên thứ ba đi kèm trong plugin và không đảm bảo chúng hoạt động đúng như mong đợi hay không bị thay đổi mã nguồn. Hãy tham khảo trang chủ/repository của từng plugin để biết thêm chi tiết.

---

## 1. Phân loại cấu trúc thư mục (Structure)

Kho plugin chuẩn thường được tổ chức thành 2 nhóm chính:

- **`/plugins`**: Các plugin nội bộ (Internal plugins) được phát triển và bảo trì trực tiếp bởi đội ngũ Anthropic.
- **`/external_plugins`**: Các plugin từ đối tác bên thứ ba và cộng đồng mã nguồn mở.

---

## 2. Cách cài đặt Plugin (Installation)

Các plugin có thể được cài đặt trực tiếp thông qua hệ thống quản lý plugin của Claude Code:

### Cài đặt qua lệnh:
```bash
/plugin install {plugin-name}@claude-plugins-official
```

### Tìm kiếm qua giao diện tương tác:
Gõ lệnh sau trong phiên làm việc của Claude Code để duyệt danh mục plugin:
```text
/plugin > Discover
```

---

## 3. Quy trình đóng góp Plugin (Contributing)

### Internal Plugins (Nội bộ)
Phát triển bởi đội ngũ nòng cốt. Bạn có thể tham khảo mẫu triển khai chuẩn tại thư mục `/plugins/example-plugin`.

### External Plugins (Cộng đồng & Đối tác)
Các đối tác bên thứ ba có thể gửi plugin để được kiểm duyệt và đưa vào Marketplace. Plugin phải đáp ứng các tiêu chuẩn khắt khe về chất lượng mã nguồn và an toàn bảo mật. 

Để gửi plugin mới, bạn sử dụng mẫu biểu: [Plugin Directory Submission Form](https://clau.de/plugin-directory-submission).

---

## 4. Cấu trúc chuẩn của một Plugin (Plugin Structure)

Mỗi plugin trong Claude Code cần tuân thủ cấu trúc thư mục tiêu chuẩn sau:

```text
plugin-name/
├── .claude-plugin/
│   └── plugin.json      # Metadata khai báo plugin (Bắt buộc)
├── .mcp.json            # Cấu hình MCP server đi kèm (Tuỳ chọn)
├── commands/            # Các slash commands tuỳ biến (Tuỳ chọn)
├── agents/              # Định nghĩa Agent (Tuỳ chọn)
├── skills/              # Định nghĩa Skill (Tuỳ chọn)
└── README.md            # Tài liệu hướng dẫn sử dụng
```

---

## 5. Quy tắc bất biến về tên Plugin (Plugin names are immutable)

Trường `name` trong mỗi khai báo marketplace là một **immutable slug** (định danh bất biến). Khi một plugin đã được phát hành công khai, giá trị `name` tuyệt đối không được phép thay đổi — người dùng đã cài đặt theo slug đó và việc đổi tên sẽ gây lỗi hỏng cài đặt với thông báo `plugin-not-found`.

- **Muốn đổi nhãn hiển thị**: Cập nhật thuộc tính `displayName` thay vì đổi `name`.
- **Trường hợp bắt buộc phải đổi tên**: Cần khai báo vào bảng ánh xạ `renames` ở cấp cao nhất trong `.claude-plugin/marketplace.json` để người dùng cũ tự động di chuyển (auto-migrate):

```json
"renames": {
  "old-name": "new-name"
}
```

Trình nạp plugin của Claude Code sẽ tự động đọc bản đồ chuyển đổi này và cập nhật slug cũ sang slug mới trong lần đồng bộ kế tiếp của người dùng.

---

## 6. Skill-Bundle Plugins (Plugin gói kỹ năng)

Khi kho mã nguồn của plugin chỉ cung cấp các file kỹ năng (`SKILL.md`) mà không có file cấu hình manifest `.claude-plugin/plugin.json`, khai báo trên marketplace có thể công bố trực tiếp các kỹ năng này bằng thiết lập `strict: false` cùng mảng `skills` cụ thể:

```json
{
  "name": "example-bundle",
  "description": "Mô tả ngắn gọn về bộ kỹ năng đi kèm.",
  "author": { "name": "Author Name" },
  "category": "development",
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/example-org/sdk.git",
    "path": "packages/agent-skills",
    "ref": "main",
    "sha": "<commit sha>"
  },
  "strict": false,
  "skills": [
    "./skill-a",
    "./skill-b",
    "./skill-c"
  ],
  "homepage": "https://github.com/example-org/sdk"
}
```

### Cơ chế nhận diện:
- Mỗi đường dẫn trong danh sách `skills` là đường dẫn tương đối so với `source.path` và trỏ đến thư mục chứa file `SKILL.md`.
- Đường dẫn có thể trỏ sâu nhiều cấp thư mục (ví dụ: `["./libA/skill-1", "./libB/skill-2"]`), cho phép chọn lọc một tập con kỹ năng từ nhiều thư mục khác nhau trong kho dự án.
- Mỗi skill sau khi cài đặt sẽ được đăng ký theo định dạng: `<plugin-name>:<skill-name>` trong môi trường Claude Code.

---

## 7. Tài liệu & Giấy phép (Documentation & License)

- **License**: Vui lòng tham khảo file `LICENSE` trong từng kho repository của mỗi plugin.
- **Tài liệu chính thức**: Đọc thêm hướng dẫn chuyên sâu về phát triển plugin tại [Claude Code Plugins Documentation](https://code.claude.com/docs/en/plugins).
