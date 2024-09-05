import hs from '../../assets/images/logo-donate-hs.png'
import aspca from '../../assets/images/logo-donate-aspca.png'
import apollo from '../../assets/images/logo-donate-apollo.png'

const CardData = [
  {
    page: 'donation',
    list: [
      {
        title: 'The Humane Society',
        src: hs,
        href: 'https://www.humanesociety.org/',
        content: 'Together with millions of supporters, the Humane Society of the United States takes on puppy mills, factory farms, the fur trade, trophy hunting, animal cosmetics testing and other cruel industries. We fight all forms of animal cruelty to achieve the vision behind our name: a humane society.'
      },
      {
        title: 'ASPCA®',
        src: aspca,
        href: 'https://www.aspca.org/',
        content: 'The ASPCA (American Society for the Prevention of Cruelty to Animals®) has been at the forefront of animal rescue and protection since our founding as the first animal welfare organization in North America in 1866. For more than 150 years, we have been the leading voice in animal welfare, bringing the critical protection of animals to the forefront of society.'
      },
      {
        title: 'Apollo Support & Rescue',
        src: apollo,
        href: 'https://www.apollosupportandrescue.org/',
        content: 'Founded in 2012, Apollo Support & Rescue has saved thousands of animals that found themselves alone and in distress. Abused, neglected, abandoned, or orphaned, our efforts to give these animals another chance goes unchallenged.'
      }
    ]
  }
]

export default CardData