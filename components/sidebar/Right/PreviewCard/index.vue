<template>
    <div class="m-2 border rounded-2xl bg-gray-50 overflow-hidden">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b">{{ props.title }}</h1>

        <slot></slot>

        <div class="p-3 text-sm text-blue-400 hover:bg-gray-100 cursor-pointer" :class="defaultTransition">
            Show more
        </div>
    </div>
</template>

<script>
import useTailwindConfig from '../../../../composables/useTailwindConfig'
export default {
    props: ['title'],
    setup(props) {
        const { defaultTransition } = useTailwindConfig();
        return {
            props,
            defaultTransition,
        }
    }
}
</script>