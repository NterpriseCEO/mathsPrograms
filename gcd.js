function gcd(num1, num2) {
    let array = [];
    let a, b, c, temp, GCD;
    if(num2 > num1) {
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    a = num1;
    b = Math.floor(num1/num2);
    c = num1%num2;


    let j = -1;
    temp = num2;
    while(c > -1) {
        array[++j] = [1, a, -b, num2, c];
        document.body.innerHTML+= `${a} = ${b}(${num2})+${c}<br>`;
        if(c > 0) {
            a = num2;
            b = Math.floor(a/c);
            num2 = c;
            c = a%num2;
        }else {
            GCD = num2;
            c = -1;
        }
    }
    document.body.innerHTML+= `<br><br><b>gcd(${num1}, ${temp}) = ${GCD}</b><br><br>`;
    return [GCD, j, array];
}

function eea(array, j, GCD) {
    console.log(array);
    console.log(j);
    let J = j;
    if(j !== 0) {
        j--;
        document.body.innerHTML+= `${array[j][0]}(${array[j][1]})${array[j][2]}(${array[j][3]}) = ${GCD}<br>`;
    }
    let X = array[j][0],
        Y = array[j][2],
        w = 0,
        arrmEnding,
        output,
        x = 0, y = -1;
    for(let i = j; i > 0; i--) {
        let arr = array[i],
            arrm = array[i-1];
        if(w == 0) {
            w = 1;
            //console.log(X, i);
            x = X+(Y*array[i-1][2]);
            console.log(arr, x);
            document.body.innerHTML+= `${X}(${arr[1]})${Y}(${arrm[0]}(${arrm[1]})${arrm[2]}(${arrm[3]})) = ${GCD}<br>`;
            document.body.innerHTML+= `${X}(${arr[1]})${Y}(${arrm[1]})+${Y*arrm[2]}(${arr[1]}) = ${GCD}<br>`;
            document.body.innerHTML+= `${x}(${arr[1]})${Y}(${arrm[1]}) = ${GCD}<br>`;
            arrmEnding = arr[1];
            output = [Y, x];
            console.log(output);
        }else {
            w = 0;
            //console.log(x, arrm[2], arr[2]);
            y = (x*arrm[2])+Y;
            //console.log("test", y, array[i+1][2]);
            X = x;
            document.body.innerHTML+= `${x}(${arrm[1]}${arrm[2]}(${arr[1]}))${Y}(${arr[1]}) = ${GCD}<br>`;
            document.body.innerHTML+= `${x}(${arrm[1]})${arrm[2]*x}(${arr[1]})${Y}(${arr[1]}) = ${GCD}<br>`;
            document.body.innerHTML+= `${x}(${arrm[1]})${y}(${arr[1]}) = ${GCD}<br>`;
            Y = y;
            arrmEnding = arrm[1];
            output = [x, Y];
        }
    }
    console.log(output);
    if(J === 1) {
        console.log("test", array);
        output = [array[0][2], array[0][1]];
    }else if(J === 0) {
        document.body.innerHTML+= `0(${array[j][1]})+1(${array[j][3]}) = ${GCD}<br>`;
        output = [1, 0];
    }else {
        console.log(arrmEnding, array[0][1]);
        if(arrmEnding == array[0][3]) {
            output = [output[1],output[0]];
        }
    }
    document.body.innerHTML+= `<br><br><b>x = ${output[0]}</b><br><b>y = ${output[1]}</b>`;
    return [...output, GCD];
}

function positiveMod(x, y) {
    if(x > y) {
        while(x > y) {
            x-=y;
        }
    }else if(x < 0) {
        while(x < 0 || x+y < y) {
            console.log(x);
            x+=y;
        }
    }
    return x;
}
