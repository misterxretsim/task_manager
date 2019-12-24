import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        firstCol: [],
        secondCol: [],
        thirdCol: []
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
        addToSecondFromThird(state, task) {
            state.secondCol.push(task);
            for (let i = 0; i < state.thirdCol.length; i++) {
                if (state.thirdCol[i].id === task.id) state.thirdCol.splice(i, 1);
            }
        },
        addToThirdFromSecond(state, task) {
            state.thirdCol.push(task);
            for (let i = 0; i < state.secondCol.length; i++) {
                if (state.secondCol[i].id === task.id) state.secondCol.splice(i, 1);
            }
        },
        deleteTask(state, obj) {
            switch (obj.col) {
                case 1:
                    for (let i = 0; i < state.firstCol.length; i++) {
                        if (state.firstCol[i].id === obj.id) state.firstCol.splice(i, 1);
                    }
                break;
                case 2:
                    for (let i = 0; i < state.secondCol.length; i++) {
                        if (state.secondCol[i].id === obj.id) state.secondCol.splice(i, 1);
                    }
                break;
                case 3:
                    for (let i = 0; i < state.thirdCol.length; i++) {
                        if (state.thirdCol[i].id === obj.id) state.thirdCol.splice(i, 1);
                    }
                break;
            }
        }
    },
    getters: {
        firstCol: (state) => state.firstCol,
        secondCol: (state) => state.secondCol,
        thirdCol: (state) => state.thirdCol
    }
})
