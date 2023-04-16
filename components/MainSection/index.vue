<template>
    <div class="border-x">
        <div class="top-0 px-3 py-4 bg-white/80 backdrop-blur-md">
            <div class="flex justify-between">
                <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
                <h2 class="text-xl font-bold text-gray-800" @click="handleLogout">Logout</h2>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['title'],
    setup(props) {
        const { logout } = userAuth();
        async function handleLogout() {
            await logout();
        }
        return {
            props,
            handleLogout
        }
    }
}
</script>