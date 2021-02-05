import axios from 'axios';

export const blog = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLOG_URL
});