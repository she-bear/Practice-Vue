## Задание 1

Создание базового хранилища: 
1. Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием приложения.
2. Создайте счетчик который хранит состояние count
3. Создайте две мутации, которые увеличивают и уменьшают значение счетчика
4. Создайте компонент счетчик

## Задание 2

Управление корзиной покупок
Вы разрабатываете интернет-магазин и вам необходимо реализовать функциональность управления корзиной покупок с использованием Vuex и геттеров.
1. Создайте хранилище Vuex с именем "store".
2. В состоянии (state) хранилища создайте массив "cartItems", в котором будут храниться объекты товаров в корзине. Каждый объект товара должен иметь следующие свойства: id, name, price.
3. Создайте мутацию (mutation) с именем "ADD_ITEM_TO_CART", которая принимает товар в качестве параметра и добавляет его в массив "cartItems".
4. Создайте геттер (getter) с именем "cartItems", который возвращает массив товаров в корзине.

<button @click="addItemToCart({ id: 1, name: 'Товар', price: 10})">
Добавить в корзину</button>

5. Создайте геттер с именем "totalItems", который возвращает
общее количество товаров в корзине.
6. Создайте геттер с именем "totalPrice", который возвращает
общую стоимость всех товаров в корзине.
7. Создайте действие (action) с именем "addToCart", которое
принимает товар в качестве параметра и вызывает мутацию
"ADD_ITEM_TO_CART".
8. В компоненте Vue.js создайте список товаров, которые можно
добавить в корзину. Каждый товар должен иметь кнопку
"Добавить в корзину", при нажатии на которую вызывается
метод для добавления товара в корзину.
9. Выведите информацию о корзине покупок на вашем
компоненте. Отобразите список товаров в корзине, общее
количество товаров и общую стоимость.