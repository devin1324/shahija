const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'g9c4e0pt',
  dataset: 'production',
  apiVersion: '2023-01-22', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client