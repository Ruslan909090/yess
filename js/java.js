// // let poster = document.querySelectorAll('.promo_header'); // пошук елемента для видалення
//      genre = document.querySelector('.label'); 
//      genre.style.borderRadius = '50%';
//      genre.style.cssText = 'background-color: red';
//      console.log(genre);
//      for(let i = 0; i < genre.length; i++){
//         genre[i].style.backgroundColor = 'pink'; // цикл для застосування всіх ел
//      }
//       let div = document.createElement('div'); // добавлення ел
//       let div2 = document.createTextNode('TExt'); // добавлення текста
//       div.classList.add('black') // добавити клас
//        document.body.append(div); //в кінець баді добавляється div
//        document.querySelector('.require_list').append(div); // prepend вставляє на початок, before перед after після
//     div[0].replaceWidth(div2); //замінити один ел на другий 
//     div.innerHTML = "<h1>Hello</h1>" //вставка ел з тегом
//     div.textContent = "hello" // вставка виключно текста без тега
//     div.insertAdjacentElement('beforebegin', <h2>hello</h2>) // вставка перед ел

//     genre.textContent = 'ggg'; // заміна тексту
//     poster.style.backgroundImage = 'url("")' // заміна бекграунда
//     movieList.innerHTML = ""; // видалення тексту в елементах
//     movieDB.movies.sort(); // сортування ел в обєкті

//     movieDB.movies.forEach((film, i) => {
//         movieList.innerHTML += `<li>${i + 1} ${film} </li>`;

//     }); //внесення елементів які відповідають кількості значення обєкта ${i + 1} ${film} - перенесеня 

       //     mem = genre.querySelector('.mobile_item_subtitle');
//      movieList = document.querySelector('.menu'); //масив 
//      movieList.innerHTML = ""; // чистка всіх лішок
//  let hh = document.querySelectorAll('.require_list');
//  console.log(hh);
//  let jkj = document.getElementsByClassName('require_descr'); // get отримати елемент
// console.log(jkj);
//      hh.forEach(item => { // видалення
//      ();
//     });
//      mem.textContent = "yes"; // замінна тексту
//      genre.style.backgroundImage = 'url("img/BMW-i5-3.jpg")'; // бекграунд
//      const movieDB = {
//         movies: [
//             "egge",
//             "geeggeeg",
//             "wggwww",
//             "gsdgegde"
//         ]
//      };

//      movieDB.movies.sort(); // сортування 
//      movieDB.movies.forEach((film, i) => {
//      movieList.innerHTML += //добавлення строк
//     ` <li class="menu_item"><a href="#" class="menu_link">${i + 1} ${film}</a>
//      </li> ` //перенесення з масива на сайт елементів
//      });
     
// let numberOfFilms = +prompt('Скільки фільмів переглянули?', '');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++){
//     let a = prompt('Скільки переглянутих фільмів?', '');
//         b = prompt('На скільки оціните їх?', '');
//         personalMovieDB.count[a] = [b];
//         if(a != '' && b != '' && a != null && b != null && a.length < 50){
//             console.log('Done!');
//         } else {
//             console.log('Error!');
//         }
// };
// if(personalMovieDB.count < 10) {
//     console.log('Переглянуто мало фільмів!');
// } else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
//     console.log('Ви класичний глядач');
// } else if(personalMovieDB.count > 30) {
//     console.log('Ви кіноман!');
// } else {
//     console.log('Вийшла помилка!'); 
// };

// let btn = document.querySelectorAll('button');
//     overlay = document.querySelector('.overlay');
// // btn.onclick = function() {
// // alert('Click');
// // };
// btn.forEach(item => {
//     item.addEventListener('click', deleteElement, {once: true});
// })
// // btn.onclick = function() {
// //     alert('Second Click');
// //     };

// // btn.addEventListener('mouseenter', (event) => { 
// //     console.log(event.target);
// //     event.target.remove(); // видалення елемента
// // })      
// // let i = 0;                                 // можливість додавання кілька подій
// let deleteElement = (e) => {
//     console.log(e.currentTarget); 
//     console.log(e.type);
//     // i++
//     // if(i == 1) {
//     //     btn.removeEventListener('click', deleteElement); 
//     // }
// };
// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 


// // btn.addEventListener('click', () => { 
// //     alert('Second Click');
// // })
// let link = document.querySelector('a');
// link.addEventListener('click', function(event){
//  event.preventDefault(); // метод не переходити по ссилці
// console.log(event.target);
// });

// console.log(document.body.childNodes); пошук всіх нод
// console.log(document.body.firstChild); пошук першого дитя
// console.log(document.body.lastChild); пошук другого дитя
// console.log(document.querySelector('.promo_subheader').parentNode.parentNode); //наслідство по верхніх батьках
// console.log(document.querySelector('[data-current="3"]').nextSibling); наступний сусід
// console.log(document.querySelector('[data-current="3"]').previousSibling); попередній сусід
// console.log(document.querySelector('[data-current="3"]').nextElement); наступний елемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); попередній елемент
// // console.log(document.querySelector('.promo_subheader').parentElementSibling);

// for(let node of document.body.childNodes) {
//     if(node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

// let req = document.querySelector('.require_list');
// console.log(req.innerHTML);


// console.log(req);
// let gg = document.createTextNode('Yes');
// document.querySelector('.require_list').append(gg);  
// console.log(gg); 
// gg.innerHTML = "<h1>Hello</h1>"
// req[1].classList.add('black');

// let gddf = document.querySelectorAll('.menu');
// console.log(gddf);
// let div = document.createElement('div');

// let gdfd = document.querySelector('.menu_link').append(div);
// console.log(gdfd);
// div.innerHTML = "<h1>HEllo</h1>";
// div.classList.add('back');
// let gggg = document.querySelector('.back');
// gggg.style.textDecoration = 'dashed';
