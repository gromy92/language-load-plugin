const fs = require('fs');
const axios = require('axios');
const { resolve } = require('path');

module.exports = axiosRequest = (request) => {

        return new Promise((resolve,reject)=>{
            axios({
                url: request.url,
                methods: request.methods,
                data: request.data
            })
            .then(response => {
                if(response?.data?.data?.data?.length){
                    resolve(response.data.data.data)
                }else{
                    reject("response data is null")
                }
               
           
    
            }).catch((error)=>{
                reject(error)
            })
        })
         

}

