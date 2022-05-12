function allClasses(a, arr) {
    if (a.className) {
        arr.push(a.className)
    }
    if (a.hasChildNodes()) {
        for (let i = 0; i < a.childNodes.length - 1; i++) {
            // console.log(a.childNodes[i]);
            allClasses(a.childNodes[i], arr);
        }
    }
}

const body = document.body;
let newarr = []
allClasses(body, newarr);
for (const newarrElement of newarr) {
    console.log(newarrElement);
}
