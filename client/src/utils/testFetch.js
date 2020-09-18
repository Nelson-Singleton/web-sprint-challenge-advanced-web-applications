import {axiosWithAuth} from './axiosWithAuth'

export const testFetch = () => {
     
        axiosWithAuth()
            .get('/api/colors')
            .then(res => {
                console.log(res)
                return res
      
    })    
      
}
