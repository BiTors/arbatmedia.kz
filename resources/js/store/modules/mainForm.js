export default {
    state: {
        snackbars:false,
       dialog: false,
        work: false,
        workOptions:{
            title:'',
            body:'',
            link:'',
            linkImg:'',
        },
        base:{
            a:'',
            b:''
        },
        msg:'',
        options:{
           a:true,
           b:Number
        },
        optionsAds:false,
        title:'',
        load:false,
        text:'',
    },
    getters: {
        getWork(state) {
            return state.work
        },
        getWorkOptions(state) {
            return state.workOptions
        },
        getDialog(state) {
            return state.dialog
        },
        getBase(state) {
            return state.base
        },
        getMsg(state){
            return state.msg
        },
        getOptions(state){
            return state.options
        },
        getTitle(state){
            return state.title
        },
        getLoad(state){
            return state.load
        },
        getText(state){
            return state.text
        },
        gSnackbar(state){
            return state.snackbars
        }
    },
        actions: {
            aSnackbar(cot){
                cot.commit('mSnackbar');
            },
            //Дополнительные события
            async sendFormBot(cot, id) {
                cot.commit('mA');
                await axios.post("/bot", {
                    data: id
                })
                    .then((response) => {
                        cot.commit('sendFormBotMounted', id);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
            async actionTopForm(cot, id) {
                cot.commit('mA');
                await axios.post("/coll-me", {
                    data: id
                })
                    .then((response) => {
                        cot.commit('setSend', id);
                    })
                    .catch(() => {
                        console.log("Error........")
                    });
                cot.commit('mA');
            },
                actionForm(cot,data){
                    cot.commit('mutationForm',data );
                },
                actionClose(cot){
                    cot.commit('mutationClose');
                },

            actionAds(cot,data){
                    cot.commit('ads',data);
                },
            actionFormService(cot,data){
                    cot.commit('TopForm',data);
                },
            /*portfolio*/
                actionWork(cot,data){
                    cot.commit('setWork',data);
                },
                actionWorkClose(cot,data){
                    cot.commit('setWorkClose');
                },

            },


        mutations: {
            sendFormBotMounted(state,id){
                state.text = id.name['Name']+', мы свяжемся с вами в ближайшее время.'
                state.dialog = false
                state.snackbars = true
            },
            mA(state){
                state.load = !state.load
            },
            mSnackbar(state){
                state.snackbars = false
            },
            setSend(state,id){

                state.text = id.name+', мы свяжемся с вами в ближайшее время.'
                state.snackbars = true
            },
            mutationForm(state,data){
                state.dialog = data.dialog
                state.base.a = data.total
                state.base.b = data.plan
                state.msg = 'Привет, хочу заказать'+' '+ data.product+' '+'за' +' '+ data.total+ ' ' + 'тенге'
                state.options = true
                state.optionsAds = false
            },
            mutationClose(state){
                state.dialog = false
            },
            TopForm(state,data){
                state.dialog = true
                state.base.a = data.name
                state.base.b =  data.type
                state.msg = data.body
                state.options.a = data.bool
                state.options.b = data.options
                state.optionsAds = false
                state.title = data.title
            },
            ads(state,data){
                state.dialog = true
                state.base.a = data.total
                state.base.b = data.plan
                state.msg = 'Привет, хочу заказать'+' '+ data.product+' '+'за' +' '+ data.total+ ' ' + 'тенге'
                state.options = true
                state.optionsAds = true
            },
            setWork(state, data){
              console.log(data);
                state.work = !state.work
                state.workOptions.title = data.info.title
                state.workOptions.body = data.info.body
                state.workOptions.link = data.info.link
                state.workOptions.linkImg = data.info.linkImg
            },
            setWorkClose(state, data){
              console.log(data);
                state.work = false
                state.workOptions.title = ''
                state.workOptions.body = ''
                state.workOptions.link = ''
                state.workOptions.linkImg =''
            },
        },
}
