function restart(ifThree = false) {
    document.getElementById('seedMoney').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('p1m').innerHTML = 0;
    document.getElementById('p2m').innerHTML = 0;
    document.getElementById('p1l').innerHTML = '';
    document.getElementById('p2l').innerHTML = '';
    document.getElementById('p1w').checked = false;
    document.getElementById('p2w').checked = false;
    if (ifThree) {
        document.getElementById('p3m').innerHTML = 0;
        document.getElementById('p3l').innerHTML = '';
        document.getElementById('p3w').checked = false;
    }
}  // restart