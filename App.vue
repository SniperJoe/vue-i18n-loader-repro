<i18n lang="json">
    {
        "en": {
            "message": "Loader is working!"
        },
        "ru": {
            "message": "Загрузчик работает!"
        }
    }
</i18n>

<template>
    <div>{{$te('message') ? $t('message') : 'Loader is NOT working :('}}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
    created() {
        this.$te
    }
}
</script>