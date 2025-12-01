import Vue from 'nativescript-vue';
import Calculator from './components/Calculator.vue';
import './app.scss';

new Vue({
    render: (h) => h('frame', [h(Calculator)]),
}).$start();