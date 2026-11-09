# Văn Phòng Đêm

Văn phòng 3D ban đêm hiển thị trạng thái các agent. Chạy hoàn toàn trên trình duyệt bằng WebGL, không dùng thư viện ngoài.

Dữ liệu nằm trong `agents.json` (mẫu). Sửa `status` để đổi trạng thái: `ready`, `waiting`, `idle`, `off`, `planned`.

Chạy thử trên máy:

    python3 -m http.server 8000

rồi mở http://localhost:8000

Trang này không đọc dữ liệu riêng, không ghi gì ra ngoài. Không đưa token, file `.env` hay số liệu quảng cáo vào repo này.
