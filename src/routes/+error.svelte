<script>
    import '../theme.postcss';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../app.postcss';
    import buhSCUSEme from '$lib/images/buh-scuseme.jpg';
    import { page } from '$app/stores';
    // I don't actually think this needs to be reactive?
    const status = $page.status;
    let header = 'Whoops';
    let subheader = 'Something went wrong.';
    let message =
        'Something. We don\'t know what. If it what you were doing was important, contact <a href="mailto:admin@theskullslums.art">admin@theskullslums.art</a>. If it wasn\'t, try pressing back on your browser.';
    let image = buhSCUSEme;

    if (status == 404) {
        header = 'Huh?';
        subheader = "That page doesn't exist.";
        message =
            "This site is still under construction, so maybe it <em>should</em> exist and it just hasn't been made yet. Try back later!";
    }
</script>

<div class="p-2 flex portrait:items-center portrait:flex-col">
    <div class="flex grow flex-col py-2 portrait:items-center justify-start gap-2">
        <h1>{header} ({$page.status})</h1>
        <h3 class="portrait:hidden">{subheader}</h3>
        <p class="portrait:hidden">
            {@html message}
        </p>
    </div>
    <div class="landscape:basis-3/4 pt-2 pb-4 flex place-content-center">
        <img
            class="w-5/6 portrait:max-h-96 lg:portrait:max-h-none"
            alt="A confused- and irritated-looking Skully"
            src={buhSCUSEme}
        />
    </div>
    <h3 class="landscape:hidden">{subheader}</h3>
    <p class="landscape:hidden max-w-sm text-left">
        {@html message}
    </p>
</div>
