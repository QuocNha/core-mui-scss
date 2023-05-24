export function randomString(length: number) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    let str = '';
    for (let i = 0; i < length; ) {
         i+= 1;
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}