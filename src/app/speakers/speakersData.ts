export type Speaker = {
  slug: string
  name: string
  role: string
  image: string
  externalLink: string
  talk: {
    title: string
    summary: string
  }
}

export const speakers: Speaker[] = [
  {
    slug: 'greg-feingold',
    name: 'Greg Feingold',
    role: 'Community Program Manager @ Perplexity', // Update with actual role
    image: '/speaker_photos/greg-feingold.jpeg',
    externalLink: 'https://www.linkedin.com/in/greg-feingold-3a890a91/',
    talk: {
      title: 'Title to be added', // Update with actual title
      summary: 'Summary to be added' // Update with actual summary
    }
  },
  {
    slug: 'sree-bhattacharya',
    name: 'Sree Bhattacharya',
    role: 'Role to be added', // Update with actual role
    image: '/speakers/sree-bhattacharya.jpg',
    externalLink: 'https://www.linkedin.com/in/sree-bhattacharyya/',
    talk: {
      title: 'Title to be added', // Update with actual title
      summary: 'Summary to be added' // Update with actual summary
    }
  },
  {
    slug: 'marmik-chaudhari',
    name: 'Marmik Chaudhari',
    role: 'Role to be added', // Update with actual role
    image: '/speakers/marmik-chaudhari.jpg',
    externalLink: 'https://marmik.xyz',
    talk: {
      title: 'Title to be added', // Update with actual title
      summary: 'Summary to be added' // Update with actual summary
    }
  }
] 