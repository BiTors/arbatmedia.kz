export default {
    state: {
       dialog: false,
        single:false,
        info:'',
        dialogpay:false,
        step:false,
        load:false,
        status:'',
        name:''
    },
    getters: {
        getDialogpay(state){
            return state.dialogpay
        },
        getName(state){
            return state.name
        },
        getSingle(state){
          return state.single
        },
        getLoad(state){
            return state.load
        },
        getInfo(state){
          return state.info
        },
        getDialog(state) {
            return state.dialog
        },
        getStep(state) {
            return  state.step
        },
        getStatus(state){
            return  state.status
        }
    },
        actions: {

            //Дополнительные события
            async payBook(cot) {
                cot.commit('mA');
                await axios.post("/payment")
                    .then((response) => {
                        cot.commit('sendFormBotMounted', response.data);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
            async PayСash(cot,data) {
                cot.commit('mA');
                await axios.post("/payment-cash", {
                    data:data
                })
                    .then((response) => {
                        cot.commit('mPayСash', {'data':response.data,'name':data.name});
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
            async actionPayOnline(cot,data) {
                cot.commit('mA');
                await axios.post("/payment-online", {
                    data
                })
                    .then((response) => {
                        cot.commit('layLog', response);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
            async actionPayOnlineEms(cot,data){
                cot.commit('mA');
                await axios.post("/payment-online-ems", {
                    data
                })
                    .then((response) => {
                        cot.commit('layLog', response);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
            payBack(cot){
                cot.commit('mBack');
            },
                actionClose(cot){
                    cot.commit('mutationClose');
                },
                actionSingle(cot){
                    cot.commit('mSingle');
                },
                payСashClose(cot){
                    cot.commit('mPayСashClose');
                },

            },
        mutations: {
        mSingle(state){
            state.single = !state.single
            state.dialog = !state.dialog
        },
            sendFormBotMounted(state,response){
                state.single = false;
                state.step = true;
                state.info = response
                state.snackbars = true
            },
            mA(state){
                state.load = !state.load
            },
            mBack(state){
                state.step =false
                state.single = true
                state.info = ''
            },
            mutationClose(state){
                state.dialog = false
                state.single = false
                state.step = false
            },
            mPayСash(state,data){
                state.single = false
                state.step = false
                state.dialog = false
                state.dialogpay= true
                state.status = data.data
                state.name = data.name
            },
            mPayСashClose(state){
                state.dialogpay= false
            },
            layLog(state, response){
                console.log(response)
            }
        },
}
