export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'de',
        fallbackLocale: 'de',
        globalInjection: true,
        missingWarn: false,
        fallbackWarn: false,
    };
});
