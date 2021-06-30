import { ref } from 'vue';
import { projectFirestore } from "./firebaseConfig";

const getPlayers = () => {
    const players = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await projectFirestore.collection("players").get();

            players.value = res.docs.map(player => {
                return { ...player.data() };
            })
        }
        catch(err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { players, error, load }
}

export default getPlayers;