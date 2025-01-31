import cld from './coudnaryConfig';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

export const getTransformedImage = (imageName, width = 500, height = 500) => {
    return cld
        .image(imageName) // Nome do recurso no Cloudinary
        .format('auto')   // Formato otimizado
        .quality('auto')  // Qualidade otimizada
        .resize(auto().gravity(autoGravity()).width(width).height(height)); // Redimensiona
};
