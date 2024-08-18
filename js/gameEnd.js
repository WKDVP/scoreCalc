function gameEnd(isThree = false) {
    if (isThree) {
        if (isNaN(parseInt(document.getElementsByName('betMoney')[0].value))) {
            alert('판돈을 올바르게 입력해주세요');
        }
        else {
            let m1 = parseInt(document.getElementById('p1m').innerHTML);
            let m2 = parseInt(document.getElementById('p2m').innerHTML);
            let m3 = parseInt(document.getElementById('p3m').innerHTML);
            if (document.getElementById('p1w').checked) {
                m1 += parseInt(document.getElementsByName('betMoney')[0].value);
                m2 -= parseInt(document.getElementsByName('betMoney')[0].value);
                m3 -= parseInt(document.getElementsByName('betMoney')[0].value);
                document.getElementById('p1l').innerHTML += '+' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p2l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p3l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';

            }
            else if (document.getElementById('p2w').checked) {
                m2 += parseInt(document.getElementsByName('betMoney')[0].value);
                m1 -= parseInt(document.getElementsByName('betMoney')[0].value);
                m3 -= parseInt(document.getElementsByName('betMoney')[0].value);
                document.getElementById('p1l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p2l').innerHTML += '+' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p3l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
            }
            else if (document.getElementById('p3w').checked) {
                m1 -= parseInt(document.getElementsByName('betMoney')[0].value);
                m2 -= parseInt(document.getElementsByName('betMoney')[0].value);
                m3 += parseInt(document.getElementsByName('betMoney')[0].value);
                document.getElementById('p1l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p2l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p3l').innerHTML += '+' + document.getElementsByName('betMoney')[0].value + '<br>';
            }
            else {
                alert('승리자를 선택해주세요');
                return;
            }
            document.getElementById('p1m').innerHTML = m1;
            document.getElementById('p2m').innerHTML = m2;
            document.getElementById('p3m').innerHTML = m3;
            document.getElementsByName('betMoney')[0].value = null;
            if (m1 <= 0 || m2 <= 0 || m3 <= 0) {
                alert('게임이 종료되었습니다.');
                document.getElementById('restart').style.display = 'block';
                document.getElementById('resultMoney').style.display = 'none';
            }
        }
    }
    else
    {
        if (isNaN(parseInt(document.getElementsByName('betMoney')[0].value))) {
            alert('판돈을 올바르게 입력해주세요');
        }
        else {
            let m1 = parseInt(document.getElementById('p1m').innerHTML);
            let m2 = parseInt(document.getElementById('p2m').innerHTML);
            if (document.getElementById('p1w').checked) {
                m1 += parseInt(document.getElementsByName('betMoney')[0].value);
                m2 -= parseInt(document.getElementsByName('betMoney')[0].value);
                document.getElementById('p1l').innerHTML += '+' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p2l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';

            }
            else if (document.getElementById('p2w').checked) {
                m2 += parseInt(document.getElementsByName('betMoney')[0].value);
                m1 -= parseInt(document.getElementsByName('betMoney')[0].value);
                document.getElementById('p1l').innerHTML += '-' + document.getElementsByName('betMoney')[0].value + '<br>';
                document.getElementById('p2l').innerHTML += '+' + document.getElementsByName('betMoney')[0].value + '<br>';
            }
            else {
                alert('승리자를 선택해주세요');
                return;
            }
            document.getElementById('p1m').innerHTML = m1;
            document.getElementById('p2m').innerHTML = m2;
            document.getElementsByName('betMoney')[0].value = null;
            if (m1 <= 0 || m2 <= 0) {
                alert('게임이 종료되었습니다.');
                document.getElementById('restart').style.display = 'block';
                document.getElementById('resultMoney').style.display = 'none';
            }
        }
    }
} 