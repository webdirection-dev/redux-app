import {createStore} from "redux";

const reducer = (state=0, action) => {
    // return action.type === 'INC' ? state + 1 : 0;
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return 0;
            // return action.value;

        default:
            return state;
    }
};

// Функции креэйторы (Action Creators) чтобы удобнее передавать данные в dispatch
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value=0) => ({type: "RND", value});

// JS-native. Создаем State вручную
// let state = reducer(undefined, {});
// console.log(state);
//
// state = reducer(state, {type: 'INC'});
// console.log(state);
//
// state = reducer(state, {type: 'INC'});
// console.log(state);

// Создаем State с помощью Redux
// Метод getState - покажет текущее состояние State
// Метод dispatch - запускает изменения в State
// Метод subscribe -  подписка на State т.е. колбэк срабатывает при каждом изменении State

const store = createStore(reducer);

// Теория
// console.log(store);
// console.log(store.getState()); // 0
//
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// });
//
// store.dispatch({type: 'INC'});
// console.log(store.getState()); // 1
// store.dispatch({type: 'INC'});
// console.log(store.getState()); // 2

// Практика

//Плюсуем
document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc());
    });

// Минусуем
document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec());
    });

// Random
document
    .getElementById('random')
    .addEventListener('click', () => {
        const value = Math.floor(Math.random() * 10)
        store.dispatch(rnd(value));
    });

// Подписываемся на изменения STORE
// т.е. когда store.dispatch изменит STATE, то сработает subscribe(updateHTML)
store.subscribe(updateHTML);

// Отрисовываем HTML
function updateHTML () {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
}