import axios, { AxiosInstance } from "axios";
import { EnvironmentHelper } from "./EnvironmentHelper";
import {
    BlogAllResponse,
    BlogDeleteResponse,
    BlogResponse,
    BlogUpdateResponse
} from "../proto/api_pb";

import qs from 'query-string';

const url = new EnvironmentHelper()

const grpcClient: AxiosInstance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        'content-type': 'application/json',
    },
});

export const api = {

    async getBlog() {
        try {
            return await grpcClient.get<BlogResponse>(`/v1/get?${qs.stringify({
                blogId: "jocham#1985#drew"
            })}`)
                .then(res => {
                    console.log(res.data);
                    return res.data
                })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async deleteBlog(id: string) {
        try {
            return await grpcClient.delete<BlogDeleteResponse>(`/v1/delete?${qs.stringify({
                blogId: id
            })}`).then(res => {
                    console.log(res.data);
                    return res.data
                }
            )
        } catch (err) {
            console.log("error" + err);
        }
    },

    async updateBlog(id: string, post: string) {
        try {
            return await grpcClient.put<BlogUpdateResponse>(`/v1/update?${qs.stringify({
                blogId: id,
                post: post,
            })}`).then(res => {
                console.log(res.data);
                return res.data
            })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async createBlog(id: string, post: string) {
        try {
            return await grpcClient.post<BlogResponse>(`/v1/create?${qs.stringify({
                blogId: id,
                post: post,
            })}`).then(res => {
                const blog = new IBlog()
                blog.post = res.data.post
                blog.blogId = res.data.blogId
                return blog
            })
        } catch (err) {
            console.log("error" + err);
        }
    },

    async getAllBlogs() {
        try {
            return await grpcClient.get<BlogAllResponse>(`/v1/getAll?${qs.stringify({

            })}`).then(res => {
                console.log("res", res)
                return res.data
            })
        } catch (err) {
            console.log("error" + err);
        }
    },
}

export default class IBlog {
    blogId?: string
    post?: string
    date?: Date
}


