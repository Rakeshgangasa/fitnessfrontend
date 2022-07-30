import axios from 'axios';

const AppUser_API_BASE_URL = "http://localhost:8080/user";

class AppUserService {

    getuser(){
        return axios.get('http://localhost:9091/user/getuser');
    }

    createUser(eid){
        return axios.post('http://localhost:9091/user/adduser', eid);
    }

    

    updateUser(user){
        return axios.put('http://localhost:9091/user/updateuser',user);
    }

    deleteUser(eid){
        return axios.delete('http://localhost:9091/user/deleteuser/'+ eid);
    }
}

export default new AppUserService()