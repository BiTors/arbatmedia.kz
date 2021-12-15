export default {
    state: {
       dialog: false,
        single:false
    },
    getters: {
        getSingle(state){
          return state.single
        },
        getDialog(state) {
            return state.dialog
        },
    },
        actions: {

            //Дополнительные события
            async payBook(cot) {
                cot.commit('mA');
                await axios.post("/payment", {
                    data: 'id'
                })
                    .then((response) => {
                        cot.commit('sendFormBotMounted', id);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
                actionClose(cot){
                    cot.commit('mutationClose');
                },
                actionSingle(cot){
                    cot.commit('mSingle');
                },
            },
        mutations: {
        mSingle(state){
            state.single = !state.single
            state.dialog = !state.dialog
        },
            sendFormBotMounted(state,id){
                state.text = id.name['Name']+', мы свяжемся с вами в ближайшее время.'
                state.dialog = false
                state.single = false
                state.snackbars = true
            },
            mA(state){
                state.load = !state.load
            },

            mutationClose(state){
                state.dialog = false
                state.single = false
                state.base.b = ''
                state.base.a = ''
                state.msg = ''
            },
        },
}
