function repetidos() {
    let a = [1, 2, 2, 3, 4, 4, 4, 5];

    let b = [];

    for (let i = 0; i < a.length; i++) {

        if (!b.includes(a[i])) {
            b.push(a[i]);
        }
    }

    alert(b);
}