export const songCleanerRegex = /\(\w.+\)/gm;
export const DISCORD_ID = "865648010390405146";
export const avatar = "https://api.lanyard.rest/"+DISCORD_ID+".png";
const detectableAPI = "https://discord.com/api/v9/applications/detectable";

export function clearSongName(songName: any): String {
    const match = songName.match(songCleanerRegex);
    if(match == null) return songName
    return songName.replace(match[0], "")
}

export function getAge(): Number {
    const currentYear = new Date().getFullYear();
    return currentYear - 2005; // you can change it with your born date
}

export const getFlags = (flag: number, avatar: string): string[] => {
    const flags: string[] = [];

    if (flag & 1) flags.push("Discord_Employee")
    if (flag & 2) flags.push("Partnered_Server_Owner")
    if (flag & 4) flags.push("HypeSquad_Events")
    if (flag & 8) flags.push("Bug_Hunter_Level_1")
    if (flag & 64) flags.push("House_Bravery")
    if (flag & 128) flags.push("House_Brilliance")
    if (flag & 256) flags.push("House_Balance")
    if (flag & 512) flags.push("Early_Supporter")
    if (flag & 16384) flags.push("Bug_Hunter_Level_2")
    if (flag & 131072) flags.push("Early_Verified_Bot_Developer")
    if (flag & 4194304) flags.push("Active_Developer");
    if (avatar && avatar.includes("a_")) flags.push("Nitro");

    return flags;
}

export default {
    getAge: getAge(),
    DISCORD_ID
}
