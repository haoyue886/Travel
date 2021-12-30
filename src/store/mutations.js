export default {
    BIAN(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {}
    }
}