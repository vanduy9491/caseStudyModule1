// let fname = document.getElementById("fname").value;
// let Uname = document.getElementById("uname").value;
// let password = document.getElementById("pw").value;
// let rePassword = document.getElementById("rpw").value;

// function User() {
//     this.fname,
//         this.setFname = function (fname) {
//             this.fname = fname;
//         }
//     this.Uname,
//         this.setUname = function (Uname) {
//             this.Uname = Uname;
//         }
//     this.Pword,
//         this.setPword = function (Pword) {
//             this.Pword = Pword;
//         }
//     this.repw,
//         this.setRepw = function (Repw) {
//             this.Repw = Repw;
//         }
//     this.gender = function () {
//         return document.getElementById("gender").value;
//     }
//     this.birthday = function () {
//         return document.getElementById("bday").value;
//     }
//     this.address = function () {
//         return document.getElementById("add").value;
//     }
//     this.avarta = function () {
//         return document.getElementById("ava").value;
//     }
// }
function setStorage(data){
    window.localStorage.setItem('inforUser',JSON.stringify(data));
}
function getStorage(key){
    return JSON.parse(window.localStorage.getItem(key))
}
let userList = [];
function init(){
    if (getStorage('inforUser') == null ){
        setStorage(userList);
    }
    else {
        userList = getStorage('inforUser');
    }
}
function setInfor() {
    let fname = document.getElementById("fname").value;
    let Uname = document.getElementById("uname").value;
    let password = document.getElementById("pw").value;
    let rePassword = document.getElementById("rpw").value;
    let address = document.getElementById("add").value;
    let birthday = document.getElementById("bday").value;
    if (password != rePassword){
        alert('Mật khẩu không trùng khớp!! Vui lòng kiểm tra lại');
        return false;
    }
    let user = {
        'fullName': fname,
        'userName': Uname,
        'password': password,
        'birthDay':birthday,
        'address' :address,
    }
     let isFind  = false;
     for (let i=0;i< userList.length;i++){
         if (userList[i].userName == Uname){
             isFind = true;
             userList[i] = user;

         }
     }
     if (!isFind){
         userList.push(user)
     }
    setStorage(userList);
    return true;
    // user.setFname(fname);
    // user.setUname(Uname);
    // user.setPword(password);
    // user.setRepw(rePassword);
    // user.gender();
    // user.birthday();
    // user.address();
    // user.avarta();
    // setStorage(user);
}

function login(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let login = document.getElementById("login");
    for (let i = 0;i< userList.length;i++){
        if (userList[i].userName === userName){
            if (userList[i].password === password){
                alert ('Đăng nhập thành công');
                login.href = "http://127.0.0.1:5501/caseStudy.html";
            }
            else alert('Sai mật khẩu');
        }     
    } 
    return false;
}