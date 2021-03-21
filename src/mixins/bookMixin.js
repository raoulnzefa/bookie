export default {
    methods: {
        getCurrency(currCode) {
            currCode.toUpperCase()
            switch (currCode) {
                case 'ILS':
                    return '₪'
                case 'EUR':
                    return '€'
                case 'USD':
                    return '$'
                default:
                    return
            }
        },
        getReadLength(pageCount) {
            if (pageCount > 500) return 'Long Reading'
            else if (pageCount > 200) return 'Decent Reading'
            else return 'Light Reading'
        },
        defineAge(publishYear) {
            const currYear = new Date().getFullYear()
            if (currYear - publishYear > 10) return 'Veteran Book'
            else if (currYear - publishYear < 1) return 'New Book!'
        },
    },
}