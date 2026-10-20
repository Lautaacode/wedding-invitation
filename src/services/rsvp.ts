
export interface RSVPData {
    name: string
    firstName: string
    lastName: string
    phone: string
    attending: 'yes' | 'no'
    message: string
}

const endpoint = import.meta.env.VITE_RSVP_ENDPOINT

export async function submitRSVP(
    data: RSVPData,
): Promise<{ success: boolean }> {
    if (!endpoint) {
        throw new Error(
            'Falta configurar la variable VITE_RSVP_ENDPOINT.',
        )
    }

    await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
    })

    return { success: true }
}
