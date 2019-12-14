<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <center>
            <div class="column" id="col1">
                <h1>To do</h1>
                <input type="text" class="input" v-model="firstInput" @keypress.enter="addTask">
                <button @click="addTask" @mousedown="addClass" @mouseup="deleteClass" id="buttonAdd">Add</button>
                <div class="task" v-for="task in this.$store.getters.firstCol" :key="task.id">
                    <h2 @click="changeBodyFirst(task)">{{ task.body }}</h2>
                    <div class="delete" @click="deleteTask(task.id)">X</div>
                    <div class="goRight" @click="addToSecondFromFirst(task)">right</div>
                </div>
            </div>
            <div class="column" id="col2">
                <h1>Doing</h1>
                <div class="task" v-for="tsk in this.$store.getters.secondCol" :key="tsk.id">
                    <h2 @click="changeBodySecond(tsk)">{{ tsk.body }}</h2>
                    <div class="goLeft" @click="addToFirstFromSecond(tsk)">left</div>
                    <div class="delete" @click="deleteTask2(tsk.id)">X</div>
                    <div class="goRight" @click="addToFirdFromSecond(tsk)">right</div>
                </div>
            </div>
            <div class="column" id="col3">
                <h1>Done</h1>
                <div class="task" v-for="t in this.$store.getters.firdCol" :key="t.id">
                    <h2 @click="changeBodyFird(t)">{{ t.body }}</h2>
                    <div class="goLeft" @click="addToSecondFromFird(t)">left</div>
                    <div class="delete" @click="deleteTask3(t.id)">X</div>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                firstInput: '',
                count: 0
            }
        },
        methods: {
            addTask() {
                if (this.firstInput.length > 0) {
                    this.count++;
                    this.$store.commit('addTask', {
                        id: this.count,
                        body: this.firstInput
                    });
                    this.firstInput = ''
                }
            },
            deleteTask(id) {
                this.$store.commit('deleteTask', id)
            },
            addToSecondFromFirst(t) {
                this.$store.commit('addToSecondFromFirst', t)
            },
            addToFirstFromSecond(t) {
                this.$store.commit('addToFirstFromSecond', t)
            },
            addToFirdFromSecond(t) {
                this.$store.commit('addToFirdFromSecond', t)
            },
            addToSecondFromFird(t) {
                this.$store.commit('addToSecondFromFird', t)
            },
            deleteTask2(id) {
                this.$store.commit('deleteTask2', id)
            },
            deleteTask3(id) {
                this.$store.commit('deleteTask3', id)
            },
            changeBodyFirst(t) {
                t.body = prompt('Change', t.body);
                this.$store.commit('changeBody', t)
            },
            changeBodySecond(t) {
                t.body = prompt('Change', t.body);
                this.$store.commit('changeBody', t)
            },
            changeBodyFird(t) {
                t.body = prompt('Change', t.body);
                this.$store.commit('changeBody', t)
            },
            addClass() {
                document.getElementById('buttonAdd').classList.add('clicking');
            },
            deleteClass() {
                document.getElementById('buttonAdd').classList.remove('clicking');
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: white;
        font-weight: bold;
    }
    .column {
        position: absolute;
        width: 30vw;
        height: 80vh;
        border-radius: 5px;
        background: #2c3e50;
        top: 100px;
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
    h2 {
        cursor: pointer;
    }
    .input {
        width: 60%;
        height: 30px;
        border-radius: 5px 0 0 5px;
        border: 0;
        border-right: 2px solid lightgray;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        outline: none;
    }
    button {
        outline: none;
        width: 25%;
        height: 32px;
        border-radius: 0 5px 5px 0;
        border: 0;
        font-size: 16px;
        cursor: pointer;
    }
    button:hover {
        background: #e4e4e4;
    }
    .clicking {
        background: #c1c1c1 !important;
    }
    .task {
        color: white;
        width: 80%;
        padding-top: 2px;
        margin-bottom: 7px;
        border-radius: 5px;
        background: #5d8290;
    }
    .delete {
        color: darkred;
        cursor: pointer;
        display: inline-block;
        margin-left: 15px;
        margin-right: 15px;
        font-weight: bold;
    }
    .goRight {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
    }
    .goLeft {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
    }
</style>
