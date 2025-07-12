import axios from 'axios';

export const HTTPClient = axios.create({
    baseURL: 'https://localhost:7143', // conferir o url do swagger
     headers: {
    'Access-Controll-Allow-Origins': '*',
    'Access-Controll-Allow-Headers': 'Authorization',
    'Access-Controll-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
}})