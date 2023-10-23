
import { db } from '$lib/db.server';
import { PrismaClient } from '@prisma/client'
/** @type {import('./$types').PageServerLoad} */



export async function load({ params }) {
    return {
        guests: await db.Guest.findMany({
          include: {
            contact: true,
          },
        })

    };
}