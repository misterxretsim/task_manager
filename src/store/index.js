import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstCol: [],
        secondCol: [],
        firdCol: []
    },
    mutations: {
        addTask(state, task) {
            state.firstCol.push(task)
        },
        addToFirstFromSecond (state, task) {
            state.firstCol.push(task);
            for (let i = 0; i < state.secondCol.length; i++) {
                if (state.secondCol[i].id === task.id) state.secondCol.splice(i, 1);
            }
        },
        addToSecondFromFirst(state, task) {
            state.secondCol.push(task);
            for (let i = 0; i < state.firstCol.length; i++) {
                if (state.firstCol[i].id === task.id) state.firstCol.splice(i, 1);
            }
        },
        addToSecondFromFird(state, task) {
            state.secondCol.push(task);
            for (let i = 0; i < state.firdCol.length; i++) {
                if (state.firdCol[i].id === task.id) state.firdCol.splice(i, 1);
            }
        },
        addToFirdFromSecond(state, task) {
            state.firdCol.push(task);
            for (let i = 0; i < state.secondCol.length; i++) {
                if (state.secondCol[i].id === task.id) state.secondCol.splice(i, 1);
            }
        },
        deleteTask(state, id) {
            for (let i = 0; i < state.firstCol.length; i++) {
                if (state.firstCol[i].id === id) state.firstCol.splice(i, 1);
            }
        },
        deleteTask2(state, id) {
            for (let i = 0; i < state.secondCol.length; i++) {
                if (state.secondCol[i].id === id) state.secondCol.splice(i, 1);
            }
        },
        deleteTask3(state, id) {
            for (let i = 0; i < state.firdCol.length; i++) {
                if (state.firdCol[i].id === id) state.firdCol.splice(i, 1);
            }
        },
        changeBody(state, t) {
            for (let i = 0; i < state.firstCol.length; i++) {
                if (state.firstCol[i].id === t.id) state.firstCol[i].body = t.body
            }
        },
        changeBody2(state, t) {
            for (let i = 0; i < state.secondCol.length; i++) {
                if (state.secondCol[i].id === t.id) state.secondCol[i].body = t.body
            }
        },
        changeBody3(state, t) {
            for (let i = 0; i < state.firdCol.length; i++) {
                if (state.firdCol[i].id === t.id) state.firdCol[i].body = t.body
            }
        }
    },
    getters: {
        firstCol: (state) => state.firstCol,
        secondCol: (state) => state.secondCol,
        firdCol: (state) => state.firdCol
    }
})
