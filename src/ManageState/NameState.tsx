import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

 export const writeSecretFile = async (name:string) => {
   await Filesystem.writeFile({
     path: 'name_f/name.txt',
     data: name,
     directory: Directory.Documents,
     encoding: Encoding.UTF8,
   });
 };


 export const readSecretFile = async () => {
   const contents =  await Filesystem.readFile({
     path: 'name_f/name.txt',
     directory: Directory.Documents,
     encoding: Encoding.UTF8,
   });

   const StringData:string = contents.data
   return StringData
 };


 export const deleteSecretFile = async () => {
   await Filesystem.deleteFile({
     path: 'name_f/text.txt',
     directory: Directory.Documents,
   });
 };