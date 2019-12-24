<template>
    <div id="app">
        <div class="hello">
            <h1>Task manager</h1>
            <center>
                <div class="column" id="col1">
                    <h2>To do</h2>
                    <input type="text" class="input" v-model="input">
                    <button @click="addTask" id="buttonAdd">✚</button>
                    <div class="task" v-for="task in this.$store.getters.firstCol" :key="task.id">
                        <h2 @click="changeBody(task)">{{ task.body }}</h2>
                        <div class="delete" @click="deleteTask({id: task.id, col: 1})">🗑</div>
                        <div class="goRight" @click="addToSecondFromFirst(task)"></div>
                    </div>
                </div>
                <div class="column" id="col2">
                    <h2>Doing</h2>
                    <div class="task" v-for="task in this.$store.getters.secondCol" :key="task.id">
                        <h2 @click="changeBody(task)">{{ task.body }}</h2>
                        <div class="goLeft" @click="addToFirstFromSecond(task)"></div>
                        <div class="delete" @click="deleteTask({id: task.id, col: 2})">🗑</div>
                        <div class="goRight" @click="addToThirdFromSecond(task)"></div>
                    </div>
                </div>
                <div class="column" id="col3">
                    <h2>Done</h2>
                    <div class="task" v-for="task in this.$store.getters.thirdCol" :key="task.id">
                        <h2 @click="changeBody(task)">{{ task.body }}</h2>
                        <div class="goLeft" @click="addToSecondFromThird(task)"></div>
                        <div class="delete" @click="deleteTask({id: task.id, col: 3})">🗑</div>
                    </div>
                </div>
            </center>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                count: 0
            }
        },
        methods: {
            addTask() {
                if (this.input.length > 0) {
                    this.count++;
                    this.$store.commit('addTask', {
                        id: this.count,
                        body: this.input
                    });
                    this.input = ''
                }
            },
            addToSecondFromFirst(task) {
                this.$store.commit('addToSecondFromFirst', task)
            },
            addToFirstFromSecond(task) {
                this.$store.commit('addToFirstFromSecond', task)
            },
            addToThirdFromSecond(task) {
                this.$store.commit('addToThirdFromSecond', task)
            },
            addToSecondFromThird(task) {
                this.$store.commit('addToSecondFromThird', task)
            },
            deleteTask(obj) {
                this.$store.commit('deleteTask', obj);
            },
            changeBody(task) {
                task.body = prompt('Change', task.body);
            }
        }
    }
</script>

<style>
    body {
        background: #ffbbb0;
        color: white;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    h1 {
        font-weight: bold;
    }
    .column {
        position: absolute;
        width: 30vw;
        height: 80vh;
        border-radius: 10px;
        top: 100px;
        border: 2px dashed white;
    }
    #col1 {
        left: 2.5vw;
    }
    #col2 {
        left: 35vw;
    }
    #col3 {
        left: 67.5vw;
    }
    .task h2 {
        cursor: pointer;
    }
    .input {
        width: 60%;
        height: 30px;
        border-radius: 5px 0 0 5px;
        border: 0;
        border-right: 2px solid #e8e8e8;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        outline: none;
        color: #a8a8a8;
    }
    button {
        outline: none;
        width: 25%;
        height: 32px;
        border-radius: 0 5px 5px 0;
        border: 0;
        font-size: 16px;
        cursor: pointer;
        color: #a8a8a8;
    }
    button:hover {
        background: #f5f5f5;
    }
    .task {
        color: white;
        width: 80%;
        padding-top: 2px;
        margin-bottom: 7px;
        border-radius: 10px;
        background: #f1b1a6;
    }
    .delete {
        color: darkred;
        cursor: pointer;
        display: inline-block;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 30px;
        font-weight: bold;
    }
    .goRight {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-left-color: #bc8d85;
        border-right: 0;
    }
    .goLeft {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-right-color: #bc8d85;
        border-left: 0;
    }
</style>
