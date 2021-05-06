function n3() {
    let n3 = document.getElementById('n3');
    n3.href = "http://127.0.0.1:5501/Home/n3.html";
    let N3 = document.getElementById('N3');
    N3.innerHTML = "";
    N3.innerHTML += `<div>
        <h2 style="color: red;">Giáo trình N3</h2>
    </div>
    <div>
        <h3>Mimikara Oboeru N3</h3>
        <a href="https://www.vnjpclub.com/mimi-kara-n3-goi/" class="link">Mimikara N3 Từ vựng</a><br>
        <a href="https://www.vnjpclub.com/mimi-kara-n3-bunpo/" class="link">Mimikara N3 Ngữ pháp</a><br>
        <a href="https://www.vnjpclub.com/mimi-kara-n3-chokai/" class="link">Mimikara N3 Nghe hiểu</a><br>
    </div>
    <div>
        <h3>Somatome N3</h3>
        <a href="https://www.vnjpclub.com/somatome-n3-tu-vung/" class="link">Somatome N3 Từ vựng</a><br>
        <a href="https://www.vnjpclub.com/somatome-n3-ngu-phap/" class="link"> Somatome N3 Ngữ pháp</a><br>
        <a href="https://www.vnjpclub.com/somatome-n3-han-tu/" class="link">Somatome N3 Hán tự</a><br>
        <a href="https://www.vnjpclub.com/somatome-n3-doc-hieu/" class="link">Somatome N3 Đọc hiểu</a><br>
        <a href="https://www.vnjpclub.com/somatome-n3-nghe-hieu/" class="link">Somatome N3 Nghe hiểu</a><br>
    </div>
    <div>
        <h3>Luyện thi JLPT N3</h3>
        <a href="https://www.vnjpclub.com/500-cau-hoi-n3/" class="link">500 câu hỏi N3</a><br>
    </div>   `;
}
function n5() {
    let n5 = document.getElementById('n5');
    n5.href = "http://127.0.0.1:5501/Home/n5.html"
}
function home() {
    let home = document.getElementById('home');
    home.href = "http://127.0.0.1:5501/Home/home.html";
}
n3();