<template>
    <div class="border-x">
        <div class="sticky top-0 px-3 py-4 bg-white/80 backdrop-blur-md">
            <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
        </div>
        <div v-if="props.loading" class="flex justify-center items-center p-4 border-b">
            <UiSpinner/>
        </div>
        <div v-else>
            Content
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['title', 'loading'],
    setup(props) {
        return {
            props
        }
    }
}
</script>