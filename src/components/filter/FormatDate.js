import moment from 'moment'
import Vue from "vue";

export const formatDate = Vue.filter('formatDate', value => {
    if (value) {
        return moment(value, moment.HTML5_FMT.DATETIME_LOCAL_MS).fromNow()
    }
})

