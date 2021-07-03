/*
 * @Description: 
 * @Date: 2021-07-03 14:17:38
 * @Author: 楊皮皮
 */

class Single {
    login() {
        console.log('login...')
    }
}

Single.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new Single();
        }
        return instance;
    }
})()