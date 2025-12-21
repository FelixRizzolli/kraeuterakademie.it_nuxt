<template>
    <SectionElement
        class="contentelement_infos grid-container"
        :spacing="settings?.spacing"
        :style="settings?.infosStyle"
    >
        <div class="info" v-for="(info, index) in data.infos" :key="index" ref="infoElements">
            <h3 v-if="info.title" class="title">{{ info.title }}</h3>
            <div v-if="info.text" class="text">
                <LexicalRenderer :nodes="info.text" />
            </div>
        </div>
        <NuxtLink
            v-if="data.link"
            class="link-button"
            :to="data.link.href"
            :target="data.link.target ?? '_self'"
            ref="linkElement"
        >
            {{ data.link.text }}
        </NuxtLink>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface Info {
        title?: string;
        text?: any;
    }

    interface InfosData {
        infos: Array<Info>;
        link?: Link;
    }

    interface InfosSettings {
        spacing: any;
        infosStyle: string;
    }

    export interface InfosProps {
        data: InfosData;
        settings: InfosSettings;
    }

    const props = defineProps<InfosProps>();

    const infoElements = ref<HTMLElement[]>([]);

    onMounted(() => {
        infoElements.value.forEach((element) => {
            if (!(element instanceof HTMLElement)) return;
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(ref(element));
        });
    });
</script>

<style lang="scss" scoped>
    .contentelement_infos {
        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;
    }

    .info {
        @include col(4);

        &:nth-child(3n + 1) {
            @include col-start(2);
        }

        &:nth-child(3n + 2) {
            @include col-start(6);

            & {
                margin-top: 13.5rem;
            }
        }

        &:nth-child(3n) {
            @include col-start(10);

            & {
                margin-top: 6rem;
            }
        }
    }

    .title {
        @include font-24-39-5-L();
        @include fontFamilyDefault();

        & {
            font-weight: 700;
        }
    }

    .text {
        @include font-24-39-5-L();
    }

    .link-button {
        @include col-start(2);
        @include col(12);

        & {
            margin: 5.2rem auto 0 auto;
        }
    }

    @media (max-width: 1023px) {
        .info {
            @include col(12);

            &:nth-child(3n + 1) {
                @include col-start(2);
                @include col(12);
            }

            &:nth-child(3n + 2) {
                @include col-start(2);
                @include col(12);

                & {
                    margin-top: 0;
                }
            }

            &:nth-child(3n) {
                @include col-start(2);
                @include col(12);

                & {
                    margin-top: 0;
                }
            }

            &:not(:first-of-type) {
                margin-top: 3.5rem;
            }
        }

        .link-button {
            margin: 6rem auto 0 auto;
        }
    }
</style>
