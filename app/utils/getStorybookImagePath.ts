export default (imagePath: string): string => {
    if (process.env.NODE_ENV === 'production') {
        return imagePath;
    }
    return `http://localhost:3000${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};
