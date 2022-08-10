const {createApp, ref} = Vue;

const app = createApp({
    setup() {

        const url = "https://randomuser.me/api/";
        const profileUser = ref("");
        const nameUser = ref("");
        const lastName = ref("");
        const fotoUser = ref("");

        const generateUser = async () => {
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.results[0].name.first;
            profileUser.value = resUser.data.results[0].picture.large;
            lastName.value = resUser.data.results[0].name.last;
            fotoUser.value = resUser.data.results[0].picture.large;
        };

        return{
           generateUser,
           profileUser,
           nameUser,
           lastName,
           fotoUser,
        };
    },
});

app.mount("#app");