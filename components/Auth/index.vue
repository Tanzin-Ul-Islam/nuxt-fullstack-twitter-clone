<template>
    <div class="flex h-screen">
        <div class="relative flex-1 hidden w-0 lg:block">
            <img class="absolute inset-0 w-full h-full object-fit"
                src="https://browsecat.art/sites/default/files/aesthetic-anime-phone-wallpapers-49409-399891-6295635.png"
                alt="">
        </div>
        <div class="flex flex-col flex-1 justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
                <AuthForm/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    }
}
</script>