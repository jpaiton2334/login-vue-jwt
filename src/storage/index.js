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
            
        }
    }
});

export default storage