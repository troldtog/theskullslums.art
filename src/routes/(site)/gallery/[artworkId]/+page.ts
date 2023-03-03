import { error } from '@sveltejs/kit';
import navKeys from '$lib/config/navKeys.json';
import { mockdata } from '../mockdata.js';
export const load = async ({ params }) => {
    const art = mockdata.data.find((s) => s.id == params.artworkId);
    if (!art) {
        throw error(404);
    }

    return {
        navData: {
            hideInDrawer: true
        },
        art: art
    };
};
