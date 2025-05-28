export const apps = $state({
    open: {
        file_explorer: false,
        internet_browser: false,
        settings: false,
    } as Record<string, boolean>,
})