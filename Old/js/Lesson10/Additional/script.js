const div = document.createElement('div');
div.innerText = 'daf';
document.body.append(div);
div.onkeydown = (key) => {
    console.log(key);
}