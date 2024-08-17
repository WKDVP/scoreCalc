function setSeedmoney(isThree = false) {
    if (isNaN(parseInt(document.getElementsByName('smi')[0].value))) {
        alert('시작금을 올바르게 입력해주세요');
        document.getElementsByName('smi').value = null;
    }
    else {
        document.getElementById('seedMoney').style.display = 'none';
        let m1 = document.getElementsByName('smi');
        let m2 = document.getElementsByName('smi');
        document.getElementById('resultMoney').style.display = 'block';
        document.getElementById('p1m').innerHTML = m1[0].value;
        document.getElementById('p2m').innerHTML = m2[0].value;
        if(isThree) {
            let m3 = document.getElementsByName('smi');
            document.getElementById('p3m').innerHTML = m3[0].value;
        }
    }
    document.getElementsByName('smi')[0].value = null;
}
