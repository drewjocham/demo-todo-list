import axios, { AxiosInstance } from "axios";
import { EnvironmentHelper } from "./EnvironmentHelper";

import qs from 'query-string';
import {
    TodoDeleteResponse,
    TodoResponse,
    TodoUpdateResponse
} from "../proto/api_pb";
import { ITodoAllResponse } from "../types/ITodoAllResponse";

const url = new EnvironmentHelper()

const grpcClient: AxiosInstance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        'content-type': 'application/json',
    },
});

export const api = {

    async get() {
        try {
            return await grpcClient.get<TodoResponse>(`/v1/get?${qs.stringify({
                id: "jocham#1985#drew"
            })}`)
                .then(res => {
                    console.log(res.data);
                    return res.data
                })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async deleteTodo(id: string) {
        try {
            return await grpcClient.delete<TodoDeleteResponse>(`/v1/delete?${qs.stringify({
                id: id
            })}`).then(res => {
                    console.log(res.data);
                    return res.data
                }
            )
        } catch (err) {
            console.log("error" + err);
        }
    },

    async updateTodo(id: string, title: string) {
        try {
            return await grpcClient.put<TodoUpdateResponse>(`/v1/update?${qs.stringify({
                id: id,
                title: title,
            })}`).then(res => {
                console.log(res.data);
                return res.data
            })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async createTodo(id: string, title: string) {
        try {
            return await grpcClient.post<TodoResponse>(`/v1/create?${qs.stringify({
                id: id,
                title: title,
            })}`).then(res => {
                return res.data
            })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async getAllTodos() {
        try {
            return await grpcClient.get<ITodoAllResponse>(`/v1/getAll?${qs.stringify({
            })}`).then(res => {
                console.log("res in getAll", res.data.todo)
                return res.data.todo
            })
        } catch (err) {
            console.log("error" + err);
        }
    },
}


