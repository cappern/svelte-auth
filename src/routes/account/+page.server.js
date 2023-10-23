

    import { db } from "$lib/db.server"

    /** @type {import('./$types').PageServerLoad} */

    
    
    export async function load({locals}) {
        let {sessioninfo} = locals;

        console.log(sessioninfo);
    }