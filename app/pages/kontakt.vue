<template>
    <HeroBig :title="pageData.herobig.title" />
    <ImageText :image="pageData.contact.image" :text1="pageData.contact.text1" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herobig: {
        title: "Sigrid Thaler Rizzolli",
    },
    contact: {
        image: {
            src: "/images/sigrid/sigrid_02.jpg",
            alt: "Sigrid Thaler Rizzolli",
        },
        text1: String.raw`
            <address>
                <h3>Handy</h3>
                <p>
                    <a href="tel:+39 3382 698 477" class="link">+39 3382 698 477</a>
                </p>
                <h3>E-Mail</h3>
                <p>
                    <a href="mailto:sigrid.thaler@gmail.com" class="link">sigrid.thaler@gmail.com</a>
                </p>
                <h3>Wohnort</h3>
                <p>
                    IT 39040 Montan, Weingütl Nr. 6
                </p>
            </address>
        `,
    },
});
</script>

<style lang="scss" scoped></style>
