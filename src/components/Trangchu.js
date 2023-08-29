import React from 'react'


export default function Trangchu() {
    return (
        <>
            <header>
                <h1>Website Đồ Chơi</h1>
            </header>
            
            <main>
                <section>
                    <h2>Đồ chơi phổ biến</h2>
                    <div className="product">
                        <img src="./img/images.jpg" alt="Đồ chơi 1" />
                        <h3>Đồ chơi 1</h3>
                        <p>Giá: $10</p>
                    </div>
                    <div className="product">
                        <img src="./img/tải xuống (8).jpg" alt="Đồ chơi 2" />
                        <h3>Đồ chơi 2</h3>
                        <p>Giá: $15</p>
                    </div>
                    <div className="product">
                        <img src="./img/tải xuống.jpg" alt="Đồ chơi 3" />
                        <h3>Đồ chơi 3</h3>
                        <p>Giá: $12</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2022 Website Đồ Chơi. All rights reserved.</p>
            </footer>
        </>
    )
}
