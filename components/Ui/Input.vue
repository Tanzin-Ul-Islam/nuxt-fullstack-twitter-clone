<template>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {{ props.label }}
    </label>
    <input
        class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        @input="$emit('update:modelValue', $event.target.value)" :value="props.modelValue" id="username" :type="props.type"
        :placeholder="props.placeholder">
</template>
<script>
export default {
    props: ['label', 'type', 'modelValue', 'placeholder'],
    emits: ['update:modelValue'],
    setup(props) {
        return {
            props,
        }
    }
}
</script>