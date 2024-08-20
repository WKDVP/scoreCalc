function undo(isThree = false) {
    if (document.getElementById('restart').style.display == 'block') {
        document.getElementById('restart').style.display = 'none';
        document.getElementById('resultMoney').style.display = 'block';
    }
    let sivar = document.getElementById('p1l').innerHTML
    let gaesivar = sivar.split('<br>').at(-2);
    let sivarva = parseInt(document.getElementById('p1m').innerHTML);
    document.getElementById('p1l').innerHTML = sivar.slice(0, sivar.lastIndexOf(gaesivar));
    document.getElementById('p1m').innerHTML = sivarva - parseInt(gaesivar);

    sivar = document.getElementById('p2l').innerHTML
    gaesivar = sivar.split('<br>').at(-2);
    sivarva = parseInt(document.getElementById('p2m').innerHTML);
    document.getElementById('p2l').innerHTML = sivar.slice(0, sivar.lastIndexOf(gaesivar));
    document.getElementById('p2m').innerHTML = sivarva - parseInt(gaesivar);
    if (isThree) {
        sivar = document.getElementById('p3l').innerHTML;
        gaesivar = sivar.split('<br>').at(-2);
        sivarva = parseInt(document.getElementById('p3m').innerHTML);
        document.getElementById('p3l').innerHTML = sivar.slice(0, sivar.lastIndexOf(gaesivar));
        document.getElementById('p3m').innerHTML = sivarva - parseInt(gaesivar);
    }

}