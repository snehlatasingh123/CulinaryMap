# Namaste React learning

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module replacement
- File Watching Algorithm ~ writeen in C++
- Caching - faster build
- Image Optimisation
- Minification
- Bundling 
- compress
- consistent hashing
- code splitting
- differential bundling - support older browsers
- diagnostic
- error handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namste Food App
/**
 * Header
 * - logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant container
 *  - Restaurant card
 *    - Image
 *    - Name of res, star rating, cuisine , delivery time,
 *    -
 * Footer
 * - Copyright
 * - links
 * - address
 * - contact
 *
 */


Two types of export/import

- Default export/import
export default Component;
import Component from "path";

- Named export/import
export const Component;
omport {Component} from "path";

#React Hooks
normal JS utility function
- useState() - To generate state variable in react
- useEffect()

useEffect takes two arguments, one callback function, another optional dependency array
if the dependency array is not there, useEffect will be called everytime the component renders, 
but it is not necessary as we don't want to make the API call everytime the component renders, 
we just want make it once  when our component renders (empty dependency array)