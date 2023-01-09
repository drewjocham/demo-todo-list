<template>
    <div class="flex">
        <div class="m-auto text-white font-serif text-2xl">
            Todo list
        </div>
    </div>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-white-500 dark:text-gray-400 font-serif">
            <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Todo
                </th>
                <th scope="col" class="py-3 px-6">
                    Edit
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item in todoArr"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {{ item.id }}
                </th>

                <td class="py-4 px-6">
                    <Post :title=item.title date="today"/>
                </td>

                <td class="flex items-center py-4 px-6 space-x-3">
                    <div class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="openModal(item)">Edit</div>
                    <div class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="remove(item)">Remove</div>
                </td>
            </tr>
            </tbody>
        </table>

        <div v-show="isOpened" class="fixed flex justify-center items-center top-0 left-0
                right-0 z-50 w-full p-5 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <EditTodo @toggle="closeModal"
                      @update:save="save($event)"
                      @update:data="update($event)"
                      :todo="editModel" />
        </div>

        <form>
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea v-model="message" @keydown.enter="submit" id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Todo message"></textarea>
                <button type="button" @click="submit"  class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    <span class="sr-only">message</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import Post from "../components/Post.vue";
import { api } from "../lib/api";
import { reactive, ref } from "vue";
import { onMounted } from "vue-demi";
import EditTodo from "../components/EditTodo.vue";

const todoArr = ref('');
const message = ref('');
let isOpened = ref(false);

let editModel = reactive({
    id: '',
    title: '',
})

onMounted(() => {
    posts()
});

const posts = async () => {
    try {
        const response = await api.getAllTodos()
        console.log("the res " + response.todo.title)
            if (response != null) {
                todoArr.value =  response.todo
            }
        return response

    } catch (error) {
        console.log('Error while getting the response in home posts:', error)
    }
}

const submit = async () => {
    try {
        if (!(message.value.length >= 10) ) {
            alert('The message has to be at least 10 characters')
        } else {
            const d: Date = new Date();
            const date = d.getDate()+ "-" +d.getMonth() + 1 +"-"+d.getFullYear()
            await api.createTodo("jocham#"+ date + "#" + d.getMilliseconds(), message.value).then(
                posts,
                message.value = '',
            )
        }
    }catch (error) {
        console.log('Error while submitting:', error)
    }
}

const remove = async (post: any) => {
    try {
        await api.deleteTodo(post.id).then(
            posts
        )
    }catch (error) {
        console.log('Error while deleting:', error)
    }
}

function closeModal() {
    isOpened.value = false
}

function openModal(value: any) {
    editModel.title = value.title
    editModel.id = value.id
    isOpened.value = true
}

function update(event: any) {
    console.log('the value   ' + event.title)
    console.log('the id   ' + event.id)

    editModel.id = event.id
    editModel.title = event.title
}

function save(event: any) {
    console.log('the value save  ' + event.title)
    console.log('the id save ' + event.id)
    try {
        api.updateTodo(event.id, event.title ).then(res => {
            posts()
        })
    } catch (e) {
        console.log("unable to update post " + e)
    }

}

</script>
