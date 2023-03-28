<template>
    <div class="flex flex-col">

        <!-- whats happening -->
        <SidebarRightPreviewCard :title="`What's happening`">
            <SidebarRightPreviewCardItem v-for="(data, index) in whatsHappening" :key="index">
                <h2 class="text-gray-800 text-md font-bold">{{ data.title }}</h2>
                <p class="text-xs text-gray-400">{{ data.count }}</p>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- friend suggestions -->
        <SidebarRightPreviewCard :title="`Suggested for you`">
            <SidebarRightPreviewCardItem v-for="(data, index) in whotoFollow" :key="index">
                <div class="flex flex-row justify-between items-center p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="data.image" alt="">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-800">{{ data.name }}</h1>
                            <p class="text-xs text-gray-600">{{ data.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <div>
                            <button class="px-4 py-2 font-bold text-xs bg-black text-white rounded-full">Follow</button>
                        </div>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {

        const whatsHappening = ref([
            {
                title: "Space X",
                count: "19.9k tweet"
            },
            {
                title: "Nasa",
                count: "19.9k tweet"
            },
            {
                title: "Python Community",
                count: "19.9k tweet"
            }
        ]);

        const whotoFollow = ref([
            {
                name: 'Ben',
                handle: '@ben',
                image: 'https://picsum.photos/200'
            },
            {
                name: 'Mark',
                handle: '@mark',
                image: 'https://picsum.photos/201'
            },
            {
                name: 'John',
                handle: '@john',
                image: 'https://picsum.photos/202'
            },
        ])

        return {
            whatsHappening,
            whotoFollow,
        }

    }
}
</script>