import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: { cloudName: 'dtr2k5tlb' } // Substitua pelo seu Cloud Name
});

export default cld;
