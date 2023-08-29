import React from 'react'

export default function Lienhe() {
    return (
        <div className="contact">
            <h1>Liên hệ với chúng tôi</h1>
            <p>
                Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền vào biểu mẫu dưới đây và chúng
                tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>
            <form className="contact-form">
                <label htmlFor="name">Họ và tên:</label>
                <input type="text" id="name" name="name" placeholder="Họ và tên" />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Địa chỉ email" />
                <label htmlFor="message">Nội dung tin nhắn:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Nội dung tin nhắn"
                    style={{ height: 200 }}
                    defaultValue={""}
                />
                <input type="submit" defaultValue="Gửi" />
            </form>
        </div>

    )
}
