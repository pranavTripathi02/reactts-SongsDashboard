const useImage = (image: File) => {
    if (image) return URL.createObjectURL(image);
};

export default useImage;
