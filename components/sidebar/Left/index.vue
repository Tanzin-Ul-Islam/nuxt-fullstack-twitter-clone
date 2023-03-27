<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="h-8 w-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-3 space-y-4">
      <SidebarLeftTab :active="true">
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>
          Bookmarks
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentIcon />
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name>
          More
        </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script>
import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentIcon, UserIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    DocumentIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon
  },
  setup() {
    const { defaultTransition } = useTailwindConfig();
    return {
      defaultTransition,
    };
  },
};
</script>
