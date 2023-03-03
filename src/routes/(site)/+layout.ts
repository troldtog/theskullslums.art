import navKeys from '$lib/config/navKeys.json';
export const prerender = true;
export const load = () => {
    return {
        navData: {
            currentPage: 'Home'
        }
    };
};
