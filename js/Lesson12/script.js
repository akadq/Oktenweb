let className = 0;
const container = document.getElementById('content');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(result => {
        let i = -1;
        result.forEach(val => {
            i++;
            let row;
            // Creating row for 5 posts, each fifth row will be with new id like row0, row5, row10... in each row 5 posts will be placed
            if ((i === 0) || (i % 5 === 0)) {
                className = i;
                row = document.createElement('div');
                row.id = 'row'.concat(className);
                row.className = 'row';
                const posts = document.createElement('div');
                const userId = document.createElement('h5');
                const id = document.createElement('h6');
                const title = document.createElement('h6');
                const body = document.createElement('h7');
                userId.innerText = `UserID: ${val.userId}`;
                id.innerText = `ID: ${val.id}`;
                title.innerText = `Title: ${val.title}`;
                body.innerText = `Body: ${val.body}`;
                posts.className = 'post';
                posts.append(userId, id, title, body);
                row.append(posts);
                container.append(row);
            } else {
                // four (4) more post adding to row with id name row + clasName
                const posts = document.createElement('div');
                const userId = document.createElement('h5');
                const id = document.createElement('h6');
                const title = document.createElement('h6');
                const body = document.createElement('h7');
                userId.innerText = `UserID: ${val.userId}`;
                id.innerText = `ID: ${val.id}`;
                title.innerText = `Title: ${val.title}`;
                body.innerText = `Body: ${val.body}`;
                posts.append(userId, id, title, body);
                row = document.getElementById('row'.concat(className));
                row.className = 'row';
                posts.className = 'post';
                row.append(posts);
                container.append(row);
            }
        });
    });