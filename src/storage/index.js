import router from '@/router';
import {createStore} from 'vuex'
 
const storage = createStore({

    state: {
        isAuthenticated: false,
        nombre: ''
    },
    mutations:{
        setAuthenticated(state, value)
        {
            state.isAuthenticated = value;
        },
        setNombre(state, nombre){
            state.nombre = nombre;
            
        },
        logout(state)
        {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            state.nombre = '';
            router.push('/Login');
        }
    }
});

export default storage