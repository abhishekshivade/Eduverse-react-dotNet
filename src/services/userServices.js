import axios from 'axios';
import { GET_USER_BY_ID } from '../constants/apiConstants';

export const getUserById = ( userId,token) => {

    console.log(`request ${GET_USER_BY_ID}/${userId}`,token)
  return axios.get(`${GET_USER_BY_ID}/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};