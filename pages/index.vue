<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
  <div>
    <div class="min-h-[90vh] pt-32 md:pt-60">
      <div
        class="mx-auto flex max-w-screen-xl flex-col space-y-8 p-8 md:flex-row md:space-x-10 md:space-y-0"
      >
        <div class="flex flex-col items-center space-y-10 md:w-2/5">
          <img
            class="h-60 w-60 rounded-full object-cover"
            src="/images/profile.jpeg"
            alt="Profile picture"
          />
          <div class="flex flex-col space-y-1 text-center">
            <h1 class="text-4xl">
              Adrien <span class="font-medium">Gregorj</span>
            </h1>
            <p class="text-2xl text-slate-400">
              {{ $t("home.position") }}
            </p>
            <p class="text-lg font-light text-slate-400">
              adrien-gregorj[at]s.okayama-u.ac.jp
            </p>
          </div>
          <div class="flex space-x-8">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.url"
              class="text-slate-400 transition-colors hover:text-slate-600"
            >
              <Icon :name="link.icon" class="h-12 w-12" />
            </a>
          </div>
        </div>
        <div class="flex flex-col space-y-10 md:w-3/5">
          <div>
            <h1 class="mb-5 text-4xl">{{ $t("home.about.about") }}</h1>
            <div class="flex flex-col space-y-5 text-lg leading-relaxed">
              <i18n-t keypath="home.about.introduction" tag="p">
                <template #lab>
                  <span class="font-medium">{{ t("home.about.lab") }}</span>
                </template>
                <template #zeynep>
                  <a
                    href="https://yucelzeynep.github.io/index.html"
                    class="\ font-medium text-slate-400 transition-colors hover:text-slate-600"
                    >{{ t("home.about.zeynep") }}</a
                  >
                </template>
                <template #monden>
                  <a
                    href="https://digi-ana.sakura.ne.jp/"
                    class="\ font-medium text-slate-400 transition-colors hover:text-slate-600"
                    >{{ t("home.about.monden") }}</a
                  >
                </template>
              </i18n-t>
              <i18n-t keypath="home.about.exp" tag="p">
                <template #deepomatic>
                  <a
                    href="https://deepomatic.com/"
                    class="\ font-medium text-slate-400 transition-colors hover:text-slate-600"
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
