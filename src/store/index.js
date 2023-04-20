import { createStore } from "vuex";

const store = createStore({
    state: {
        currentPlayer: {},
        players: [],
        gameId: null,
    },
    getters: {
        currentPlayer (state) {
            return state.currentPlayer;
        },
        players (state) {
            return state.players;
        },
        gameId (state) {
            return state.gameId;
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
        },
        setGameId(state, gameId) {
            state.gameId = gameId;
        }
    }
});

export default store;