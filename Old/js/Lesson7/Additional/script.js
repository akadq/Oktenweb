// //Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду. Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// function Rec(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id,
//         this.name = name,
//         this.username = username,
//         this.email = email,
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         },
//         this.phone = phone,
//         this.website = website,
//         this.company = {
//             companyName: companyName,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
// }
//
// // debugger;
// let store = new Rec(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light','Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',   '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
//
// console.log(store);
//
// const { id, phone } = store;
//
// console.log(id, phone)


class Test {
    a;
    div;
    h1;
    span;
    input;
    form;
    option;
    select;

    constructor() {
        this.a = {}
        this.div = div;
        this.h1 = h1;
        this.span = span;
        this.input = input;
        this.form = form;
        this.option = option;
        this.select = select;
    }
}
