interface Options {
	width?: number;
	height?: number;
}

export const processImageUri = (imageUri: string, {width = 100, height = 100} = {} as Options) => {
	return imageUri.replace('$width', width.toString()).replace('$height', height.toString());
};
