/*
 * @Description: 
 * @Date: 2021-07-03 15:22:25
 * @Author: 楊皮皮
 */
import request from '../utils/request';

export function userLogin(){
    const postData={
        username:'yanggang',
        password:'123456'
    }
    return request({
        url: `/user/login.json`,
        method: 'GET',
        // data: postData
      });
}