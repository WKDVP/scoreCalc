function changeName(who) {
    let newname = prompt('변경할 이름을 입력하세요');
    if (newname === null) {
        return;
    }
    else if (newname === '') {
        alert('이름을 입력해주세요');
        return;
    }
    else {
        document.getElementById(who).innerHTML = newname;
    }
}