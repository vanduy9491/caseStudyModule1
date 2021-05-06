function home() {
    let home = document.getElementById('home');
    home.href = "http://127.0.0.1:5501/Home/home.html";
}

function n5() {
    let n5 = document.getElementById('n5');
    n5.href = "http://127.0.0.1:5501/Home/n5.html"
    let N5 = document.getElementById('N5');
    N5.innerHTML = "";
    N5.innerHTML += `
    <div>
        <h2 style="color: red;">Giáo trình N5-N4</h2>
    </div>
    <div>
    <a href="http://jls.vnjpclub.com/bang-chu-cai-hiragana-katakana.html" class="link">Bảng chữ cái</a><br>
    <a href="https://www.vnjpclub.com/minna-no-nihongo/" class="link"> 50 bài Minna No Nihongo</a>
    </div>`
}

function n3() {
    let n3 = document.getElementById('n3');
    n3.href = "http://127.0.0.1:5501/Home/n3.html";   
}
n5();


