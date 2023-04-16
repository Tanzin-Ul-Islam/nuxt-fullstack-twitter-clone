<template>
    <div class="w-full max-w-xs">
        <form @submit.prevent="handleLogin">
            <div class="mb-4">
                <UiInput :label="'User Name'" :type="'text'" v-model="formValue.name" :placeholder="'@name'" />
                <span v-if="!hasValue.name" class="text-xs text-red-500">*user name required</span>
            </div>
            <div class="mb-4">
                <UiInput :label="'Password'" :type="'password'" v-model="formValue.password" :placeholder="'@password'" />
                <span v-if="!hasValue.password" class="text-xs text-red-500">*password required</span>
            </div>
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white font-bold">Login</button>
        </form>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useFetch } from '#app';
import api from "../../api_core/index.json";
import userAuth from "../../composables/userAuth";
export default {
    setup() {
        const config = useRuntimeConfig();
        const { login } = userAuth();
        let formValue = reactive({
            name: "",
            password: "",
        });
        let hasValue = reactive({
            name: true,
            password: true,
        });

        function loginValidation() {
            let isValid = true;
            if (!formValue.name) {
                hasValue.name = false;
                isValid = false;
            } else {
                hasValue.name = true;
            }
            if (!formValue.password) {
                hasValue.password = false;
                isValid = false;
            } else {
                hasValue.password = true;
            }
            if (!isValid) {
                return false;
            }
            return true;
        }

        async function handleLogin() {
            try {
                if (loginValidation()) {
                    let formatData = {
                        userName: formValue.name,
                        password: formValue.password
                    }
                    await login(formatData);
                }
            } catch (error) {
                console.log(error)
            }
        }
        return {
            formValue,
            handleLogin,
            hasValue
        }
    }
}
</script>