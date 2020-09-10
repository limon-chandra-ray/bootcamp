import React from 'react'

const FetchData = () => {
    let status="loading"
    let result
    const DataPostFetch = async()=>{
        const response = await fetch('http://127.0.0.1:8000/api/product/?');
        const data = await response.json()
        return data
    }
    let suspender= DataPostFetch().then(
        (data)=>{
            status="success"
            result =data;
        },
        (error)=>{
            status="error"
            result = error
        }
        
    )
    return {
        read(){
            if(status === 'loading'){
                throw suspender
            }
            else if(status === 'error'){
                throw result
            }
            else if(status === 'success'){
                return result
            }
        }
    }
    
}

export default FetchData
