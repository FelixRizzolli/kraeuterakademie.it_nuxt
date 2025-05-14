<template>
    <section class="course" ref="courseElement">
        <h3 class="title">{{ course.title }}</h3>
        <span class="key-infos">{{ course.place }} | {{ formatDate(course.dates[0]) }} - {{ formatDate(course.dates[course.dates.length - 1]) }}</span>
        <p class="description">{{ course.description }}</p>
        <a v-if="dates" class="open-close" @click="toggleDates">Alle Termine ansehen</a>
        <div class="dates" ref="dates">
            <p class="date" v-for="(date, index) in course.dates" :key="index">
                {{ formatDate2(date) }}
            </p>
        </div>
        <NuxtLink v-if="course.link" class="link-button" :to="course.link?.href">{{ course.link?.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

export interface Course {
    title: string;
    place: string;
    description: string;
    dates: Array<string>;
    link?: {
        href: string;
        text: string;
    };
}

export interface CourseProps {
    course: Course;
}

const props = defineProps<CourseProps>();

const dates = ref<HTMLDivElement | null>(null);
const courseElement = ref<HTMLElement>();

const toggleDates = () => {
    if (dates.value) {
        dates.value.style.height = dates.value.style.height === "0px" ? "auto" : "0px";
        dates.value.style.paddingTop = dates.value.style.paddingTop === "0px" ? "2.5rem" : "0px";
    }
};

// Function to format ISO date YYYY-MM-DD to DD.MM.YYYY
const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
};

// Function to format ISO date YYYY-MM-DD to DD.MM.YYYY WD with weekday
const formatDate2 = (isoDate: string): string => {
    const date = new Date(isoDate);
    const formattedDate = new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
    const weekday = new Intl.DateTimeFormat("de-DE", {
        weekday: "short",
    }).format(date);
    return `${formattedDate} ${weekday}`;
};

onMounted(() => {
    if (courseElement.value) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(courseElement);
    }
});
</script>

<style lang="scss" scoped>
.course {
    display: grid;
    height: fit-content;
}

.title {
    order: 2;
    margin-top: 4.5rem;
}

.key-infos {
    @include font-19-30-5-L();

    & {
        order: 1;

        text-transform: uppercase;
    }
}

.description {
    order: 3;
    margin-top: 2.5rem;
}

.dates {
    order: 4;
    padding-top: 0px;

    height: 0px;
    overflow: hidden;

    display: grid;
    grid-template-columns: 1fr 1fr;

    text-transform: uppercase;
}

.open-close {
    order: 5;
    margin-top: 2.5rem;

    text-align: right;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
        color: $colorCta;
    }
}

.link-button {
    order: 6;
    margin-top: 4.5rem;
}

@media (max-width: 1023px) {
    .title {
        margin-top: 2.5rem;
    }

    .description {
        margin-top: 1rem;
    }

    .open-close {
        margin-top: 1.5rem;
    }

    .link-button {
        margin-top: 3rem;
    }
}
</style>
