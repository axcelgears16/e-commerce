import axios from "axios";
import process from 'process';

export const createAxiosInstace = (
    headers: any = {}
) => {
    return axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    });
}
