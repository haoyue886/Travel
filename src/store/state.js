let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {
    alert(error.message)
}

export default {
    city: defaultCity
}