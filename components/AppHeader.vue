<script setup lang="ts">
const { locale, locales, t } = useI18n();

const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const nav = computed(() => [
  { name: t("nav.home"), route: { path: localePath("/") }, current: true },
  {
    name: t("nav.publications"),
    route: { path: localePath("/"), hash: "#publications" },
    current: false,
  },
]);

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const localeName = computed(() => {
  return locales.value.find((i) => i.code === locale.value)?.name;
});

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <Disclosure
    as="nav"
    class="fixed left-0 top-0 z-10 w-full bg-white shadow-md"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <ul class="flex space-x-10">
              <li v-for="item in nav" :key="item.name">
                <NuxtLink
                  :to="item.route"
                  class="font-medium text-slate-900 transition-colors hover:text-slate-500"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Langage selection -->
        <div>
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton>
                {{ localeName }}
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <ul class="py-1">
                  <li v-for="locale in availableLocales" :key="locale.code">
                    <MenuItem v-slot="{ active }">
                      <div>
                        <NuxtLink
                          :to="switchLocalePath(locale.code)"
                          :class="[
                            active ? 'bg-gray-100 outline-none' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          ]"
                        >
                          {{ locale.name }}
                        </NuxtLink>
                      </div>
                    </MenuItem>
                  </li>
                </ul>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <ul class="flex flex-col space-y-2">
          <li v-for="item in nav" :key="item.name">
            <NuxtLink
              :to="item.route"
              class="font-medium text-slate-900 transition-colors hover:text-slate-500"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
