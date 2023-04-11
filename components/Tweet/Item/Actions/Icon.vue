<template>
    <div class="flex items-center text-gray-400 cursor-pointer group">
        <div class="p-1 group-hover:bg-blue-300 group-hover:text-blue-600 rounded-full">
            <slot name="icon" classes="w-5 h-5"></slot>
        </div>
        <span class="ml-1 group-hover:text-blue-500">
            <slot name="count"></slot>
        </span>
    </div>
</template>

<script>

export default {
    setup(props) {

    }
}
</script>