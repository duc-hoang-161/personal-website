import axios from 'axios';
const API_URL = 'https://api.resume.htmd.dev/api';

export async function addContact(contact) {
    return axios.post(`${API_URL}/contacts`, contact);
}
