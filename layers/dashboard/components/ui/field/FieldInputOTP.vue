<script setup lang="ts">
    import {
        InputOTP,
        InputOTPGroup,
        InputOTPSeparator,
        InputOTPSlot,
    } from '~~/layers/dashboard/components/ui/input-otp';
</script>

<template>
    <InputOTP :maxlength="8">
        <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
            <InputOTPSlot :index="3" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
            <InputOTPSlot :index="6" />
            <InputOTPSlot :index="7" />
        </InputOTPGroup>
    </InputOTP>
</template>
