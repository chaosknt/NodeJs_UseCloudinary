import assert from 'assert';
import { setCloudinaryConfig, fileUpload } from '../cloudinary.js'
import { config } from '../config.js'

const imagenInvalidad = '../test/imagen.txt';
const imagenInexistente = '../test/foto.txt';

describe('Intentar subir una imagen', () => {

    setCloudinaryConfig(config);

    describe('Se intenta subir una imagen con extension invalidad', () => {

        it('Falla', () => {

            assert.throws(() => {
                fileUpload(imagenInvalidad)
            }, (error) => {

                return true
            })
        })

    })

    describe('Se intenta subir que no existe', () => {

        it('Falla', () => {

            assert.throws(() => {
                fileUpload(imagenInexistente)
            }, (error) => {
                console.log(error)
                return true
            })
        })

    })    
})
        


    
