export default {
    state: {
        rewrite:'',
    },
    getters: {
        getRewrite(state){
            return state.rewrite
        }
    },
    actions: {
        async actionRewrite(cot, id) {

            await axios.post("/rewrites", {
                data: id
            })
                .then((response) => {
                    cot.commit('mutRewrite', {data:response.data,text:id} );
                })
                .catch(() => {
                    console.log("Error........")
                });
        },
    },
    mutations: {
        mutRewrite(state, id){
           state.rewrite = id.data
        },
    },
}
