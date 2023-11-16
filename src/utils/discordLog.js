import axios from "axios";

export const discordReport = async (code) => {
    try {
        const url = 'https://discord.com/api/webhooks/1132355593970139137/TDyKeMjFDk1XeHXYgW3q76bbhm0RVT9CeIhJe4linoWHSa8j0X3gL9JIczo-U5bO5R1j';

        const content = '**MeliSync** Ingresaron al sistema con el siguiente codigo de acceso: ' + code + ' <@325660886326837248>';

        await axios.post(url, { content });

    } catch (error) {
        console.log(error)
    }
}


export const contactMessage = async (data) => {

    const { message, number, email, name } = data;

    try {
        const url = 'https://discord.com/api/webhooks/1132355593970139137/TDyKeMjFDk1XeHXYgW3q76bbhm0RVT9CeIhJe4linoWHSa8j0X3gL9JIczo-U5bO5R1j';

        const content = `**MeliSync** Formulario de Contacto: ${name ? name : ''} ${number ? number : ''} ${email ? email : ''}  ${message ? message : ''}<@325660886326837248>`;

        await axios.post(url, { content });
    } catch (error) {
        console.log(error)
    }
}