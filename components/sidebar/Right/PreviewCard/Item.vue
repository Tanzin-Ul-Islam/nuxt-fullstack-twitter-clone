<template>
    <div class="p-3 border-b cursor-pointer hover:bg-gray-100 " :class="defaultTransition">
        <slot></slot>
    </div>
</template>

<script>
import useTailwindConfig from '../../../../composables/useTailwindConfig'
export default {
    setup(props) {
        const { defaultTransition } = useTailwindConfig();
        return {
            defaultTransition,
        }
    }
}
</script>