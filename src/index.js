import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app.jsx"
import reducer from "./reducer";

const store = createStore(reducer);

// Используем <Provider>
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Без <Provider>
// Отрисовываем HTML
// const updateHTML = () => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App />
//         </Provider>,
//         document.getElementById('root')
//     );
// }
//Первый вызов для первичной отрисовки HTML
// updateHTML();

// // Плюсуем
// document
//     .getElementById('inc')
//     .addEventListener('click', inc);
//
// // Минусуем
// document
//     .getElementById('dec')
//     .addEventListener('click', dec);
//
// // Random либо ноль в зависимости от value
// document
//     .getElementById('rnd')
//     .addEventListener('click', () => {
//         const value = Math.floor(Math.random() * 10)
//         rnd(value);
//     });

// ВРУЧНУЮ Генерируем функции для creators
// const bindActionCreator = (creator, dispath) => (...args) => {
//     dispath(creator(...args));
// };

// ПОЧТИ ВРУЧНУЮ
// Метод bindActionCreators из Redux для генерирования функций
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// ДИНАМИЧЕСКАЯ ГЕНЕРАЦИЯ REDUX. Синтаксис ES6 + REDUX для передачи нужных данных
// Скорее всег будет непонятно и забыто. Нужно пересмотреть урок:
// https://www.udemy.com/course/javascript_full/learn/lecture/18308310?start=0#content
// const {inc, dec, rnd} = bindActionCreators( actions, dispatch );
// где actions это объект из bindActionCreators: { inc: inc, dec: dec, rnd: rnd }

// Подписываемся на изменения STORE
// т.е. когда store.dispatch изменит STATE, то сработает subscribe(updateHTML)
// store.subscribe(updateHTML);
