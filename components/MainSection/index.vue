<template>
    <div class="border-x">
        <div class="sticky top-0 px-3 py-4 bg-white/80 backdrop-blur-md">
            <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['title'],
    setup(props) {
        return {
            props,
        }
    }
}
</script>