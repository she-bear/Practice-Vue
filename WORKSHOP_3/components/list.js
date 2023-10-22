const list = {
    data() {
        return {
            listArr: [],
            task: '',
        };
    },
    methods: {
        addTask() {
            this.listArr.push({
                id: this.listArr.length + 1,
                nameTask: this.task,
            });
            this.task = '';
        },
        delTask(id) {
            // перезапишем массив БЕЗ удаляемого элемента
            this.listArr = this.listArr.filter(
                el => el.id !== id
            );
        },
    },
    template: `
        <div>
            <input type="text" v-model="task">
            <button @click="addTask">Add Task</button>
            <ul>
                <li v-for="item in listArr" :key="item.id">{{ item.nameTask }} - <button @click="delTask(item.id)">Delete Task</button></li>
            </ul>
        </div>
    `,
}
