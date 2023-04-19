import { createStore } from "vuex";

const store = createStore({
    state: {
        currentPlayer: {},
        players: []
    },
    getters: {
        currentPlayer (state) {
            return state.currentPlayer;
        },
        players (state) {
            return state.players;
        }
    },
    mutations: {
        setCurrentPlayer(state, payload) {
            state.currentPlayer = payload;
        },
        setPlayers(state, payload) {
            state.players = payload;
        },
        addPlayer(state, payload) {
            state.players.push(payload);
        }
    }
});

export default store;