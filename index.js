import { setCloudinaryConfig, fileUpload } from './cloudinary.js'
import { config } from './config.js'


setCloudinaryConfig(config);

try {

    const result = fileUpload('pizza.jpg');
   
    result.then(function (image) {
   
    console.log(`Image url is: ${image.url}`);

  })
  .catch(function (err) {
   
    console.log("** File Upload (Promise)");
    if (err) { console.warn(err); }

  });
    
} catch (error) {

    console.log(error)
}
