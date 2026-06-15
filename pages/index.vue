<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { ref } from "vue";
import { useKonamiCode } from "@/composables/useKonamiCode";

const easterEgg = ref(false);
useKonamiCode(() => (easterEgg.value = !easterEgg.value));

const { t, locale } = useI18n();

import publications, { type Publication } from "@/assets/data/publications";

const publicationList: Publication[] = publications;

const links = [
  {
    name: "GitHub",
    url: "https://github.com/Chevrefeuille",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adrien-gregorj-197851108/",
    icon: "mdi:linkedin",
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.co.uk/citations?user=ewQrLacAAAAJ&hl=en",
    icon: "fa6-brands:google-scholar",
  },
];
</script>

<template>
  <div :class="{ 'font-jp': locale === 'ja' }">
    <div class="min-h-[90vh] pt-32 md:pt-60">
      <div
        class="mx-auto flex max-w-screen-xl flex-col space-y-8 p-8 md:flex-row md:space-x-10 md:space-y-0"
      >
        <div class="flex flex-col items-center space-y-10 md:w-2/5">
          <div class="relative h-60 w-60">
            <Transition name="crossfade" mode="out-in">
              <img
                :key="easterEgg ? 'secret' : 'normal'"
                class="absolute h-60 w-60 rounded-full object-cover shadow-md"
                :src="
                  easterEgg
                    ? '/images/profile_secret.jpeg'
                    : '/images/profile.jpeg'
                "
                alt="Profile picture"
              />
            </Transition>
          </div>
          <div class="flex flex-col space-y-1 text-center">
            <h1 class="text-4xl">
              <template v-if="locale === 'ja'">
                <ruby>Adrien<rt>アドリアン</rt></ruby
                >&nbsp;<ruby class="font-medium"
                  >Gregorj<rt>グレゴリー</rt></ruby
                >
              </template>
              <template v-else>
                Adrien <span class="font-medium">Gregorj</span>
              </template>
            </h1>
            <p class="text-2xl text-slate-400">
              {{ $t("home.position") }}
            </p>
            <p class="text-lg font-light text-slate-400">
              adrien.gregorj[at]gmail.com
            </p>
          </div>
          <!--  FIXED: Added the missing <a tag here -->
          <div class="flex space-x-8">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.url"
              class="text-slate-400 transition-colors hover:text-slate-600"
            >
              <Icon :name="link.icon" class="h-10 w-10" />
            </a>
          </div>
        </div>
        <div class="flex flex-col space-y-10 md:w-3/5">
          <div>
            <h1 class="mb-5 text-4xl">{{ $t("home.about.about") }}</h1>
            <div class="flex flex-col space-y-5 text-lg leading-relaxed">
              <p>{{ $t("home.about.introduction") }}</p>
              <i18n-t keypath="home.about.exp" tag="p">
                <!--  FIXED: Added the missing <a tag here -->
                <template #deepomatic>
                  <a
                    href="https://deepomatic.com/"
                    class="font-medium text-slate-400 transition-colors hover:text-slate-600"
                    >Deepomatic</a
                  >
                </template>
              </i18n-t>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-slate-200 py-16 md:py-32" id="publications">
      <div
        class="mx-auto flex max-w-screen-xl flex-col space-y-8 p-8 md:flex-row md:space-x-10 md:space-y-0"
      >
        <div class="flex flex-col items-center space-y-10 md:w-2/5">
          <div class="text-center">
            <h1 class="text-4xl">
              {{ $t("home.publications") }}
            </h1>
          </div>
        </div>
        <div class="flex flex-col space-y-10 md:w-3/5">
          <ul class="flex flex-col space-y-10">
            <li
              v-for="publication in publicationList"
              :key="publication.title"
              class="flex flex-col space-y-1"
            >
              <h2 class="text-xl">{{ publication.title }}</h2>
              <p class="font-light">{{ publication.authors.join(", ") }}</p>
              <p>{{ publication.information }}</p>
              <div class="flex space-x-4 text-xs">
                <PublicationButton v-if="publication.doi">
                  <a :href="'https://doi.org/' + publication.doi">DOI</a>
                </PublicationButton>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crossfade-enter-active,
.crossfade-leave-active {
  transition:
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform; /* Tells the browser to use GPU acceleration */
}

.crossfade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.crossfade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
