# NodeJs_Cloudinary
Hook to upload imagen to Cloudinary

# Step One : Imports 

```
import { setCloudinaryConfig, fileUpload } from './cloudinary.js'
import { config } from './config.js'

```

Config is an object that contains the api configuration

# Step Two: Add Cloudinary configuration

```
setCloudinaryConfig(config);

```

# Step Three: Upload an image


```
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

```
