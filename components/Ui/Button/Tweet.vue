<template>
    <button :type="props.type"
        class="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        :disabled="props.isDisabled">Tweet</button>
</template>
<script>
export default {
    props: ['type', 'isDisabled'],
    setup(props) {
        return {
            props
        }
    }
}
</script>