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
  },
  {
    page: 'puppy',
    list: [
      {
        title: 'Puppy proofing your home',
        content: 'Remove any hazardous items within your puppy’s reach, such as electrical cords, small objects, and toxic plants. \n \nSet up a comfortable area with a bed, crate, and some toys. This will be your puppy’s safe space.'
      },
      {
        title: 'Nutritions',
        content: 'Choose a well-balanced puppy food suited to their breed size and nutritional needs. \n \nPuppies typically need to eat three to four times a day. '
      },
      {
        title: 'Veterinary Care',
        content: 'Schedule a vet visit as soon as possible for vaccinations. Essential vaccines include distemper, parvovirus, and rabies. \n \nStart your puppy on flea, tick, and worm prevention treatments. \n \nDiscuss the appropriate time for spaying or neutering with your vet.'
      },
      {
        title: 'Training and Socialization',
        content: '[bold]\nStart with simple commands like “sit,” “stay,” “come,” and “leave it.” Consistency and positive reinforcement are key. \n\n[bold]\nTake your puppy outside frequently, especially after meals, naps, and playtime. Praise and reward them for going outside. \n\n[bold]\nExpose your puppy to different people, environments, and other animals early on to help them grow into a well-adjusted adult dog.',
        bold: [
          'Basic Commands', 'Potty Training', 'Socialization'
        ]
      },
      {
        title: 'Exercise and Playtime',
        content: 'Puppies have a lot of energy. Provide daily exercise through walks, playtime, and interactive toys. \n\nPuzzle toys, training sessions, and new experiences keep their minds sharp and engaged.'
      },
      {
        title: 'Grooming',
        content: '[bold]\nRegularly brush your puppy’s coat to keep it clean and reduce shedding. The frequency depends on the breed.\n\n[bold]\nBathe your puppy as needed with a gentle, puppy-safe shampoo. \n\n[bold]\nKeep their nails trimmed to prevent discomfort and injury. \n\n[bold]\nIntroduce tooth brushing early with a puppy-safe toothpaste. Dental chews can also help maintain oral health.',
        bold: [
          'Brushing', 'Bathing', 'Nail Trimming', 'Dental Care'
        ]
      },
      {
        title: 'Health Monitoring',
        content: 'Keep an eye out for any signs of illness, such as vomiting, diarrhea, lethargy, or loss of appetite. If you notice anything unusual, contact your vet. \n\nSchedule regular check-ups to ensure your puppy is growing and developing healthily.'
      },
      {
        title: 'Puppy Challenges',
        content: '[bold]\nPuppies will chew on things to relieve teething discomfort. Provide plenty of appropriate chew toys.\n\n[bold]\nGradually teach your puppy to be comfortable alone to prevent anxiety when you leave the house.',
        bold: [
          'Teething', 'Separation Anxiety'
        ]
      }
    ]
  },
  {
    page: 'adult',
    list: [
      {
        title: 'Understanding Your Dog’s Background',
        content: 'If your dog is a rescue, try to learn about their past experiences, as this can influence their behavior and needs. \n\nUnderstand your dog’s temperament and any behavioral issues they might have. This will help you tailor your approach to training and care.'
      },
      {
        title: 'Establishing a Routine',
        content: 'Adult dogs thrive on routine. Establish regular times for feeding, walks, playtime, and rest. \n\nDepending on the breed and energy level, adult dogs generally need 30 minutes to 2 hours of exercise daily. Adjust as needed to maintain their physical and mental health.'
      },
      {
        title: 'Nutrition',
        content: 'Choose a high-quality dog food that meets the nutritional needs of adult dogs. Consider factors like age, size, and any specific health concerns. \n\nMonitor your dog’s weight and adjust their diet and exercise to prevent obesity, which can lead to health problems. \n\nFeed your dog at consistent times each day, typically twice a day for adult dogs.'
      },
      {
        title: 'Health and Veterinary Care',
        content: 'Ensure your dog is up-to-date on vaccinations and monthly preventative care, including flea, tick, and heart-worm prevention. \n\nSchedule annual check-ups to monitor your dog’s health and catch any issues early. \n\nDental health is crucial for adult dogs. Regular brushing and dental chews can help prevent periodontal disease.'
      },
      {
        title: 'Training & Behavioral Reinforcement',
        content: 'Even if your dog is already trained, reinforcing good behavior and continuing obedience training is important. It keeps their skills sharp and strengthens your bond. \n\nIf your dog has behavioral issues, such as anxiety or aggression, work with a professional trainer or behaviorist. Positive reinforcement is key. \n\nContinue socializing your dog with other dogs and people to maintain their confidence and reduce the likelihood of fear-based behaviors.'
      },
      {
        title: 'Emergency Preparedness',
        content: 'Learn basic dog first aid, such as how to handle cuts, choking, or ingestion of harmful substances. \n\nKeep a pet-specific emergency kit with items like bandages, antiseptic, and your vet’s contact information.'
      }
    ]
  },
  {
    page: 'senior',
    list: [
      {
        title: 'Understanding Aging',
        content: `As dogs age, they may experience reduced mobility, decreased vision and hearing, and changes in skin and coat. Be aware of these changes and adjust care accordingly. \n\nSenior dogs might become less active or develop new behavioral issues, such as increased anxiety or confusion. Patience and understanding are crucial.`
      },
      {
        title: 'Veterinary Care',
        content: `Schedule more frequent veterinary visits, typically every 6 months, to monitor for age-related health issues. Your vet can provide tailored advice for managing your dog’s health. \n\nRegular screenings for common senior health issues like arthritis, diabetes, kidney disease, and tumors are important. Discuss appropriate diagnostic tests with your vet. \n\nEnsure your dog remains up-to-date on vaccinations and parasite prevention. Discuss any necessary adjustments with your vet based on your dog’s health status.`
      },
      {
        title: 'Nutrition',
        content: `Senior dogs often require a diet tailored to their age, which may include reduced calories, increased fiber, and joint-supporting nutrients. Consult your vet for recommendations. \n\nMonitor your dog’s weight closely. Obesity can exacerbate health issues, while being underweight may indicate other problems. Adjust their diet and exercise accordingly. \n\nEnsure your dog has constant access to fresh water, as senior dogs can be more prone to dehydration.`
      },
      {
        title: 'Exercise and Mobility',
        content: `Continue regular, low-impact exercise to maintain mobility and prevent weight gain. Short, frequent walks and gentle play sessions are ideal. \n\nProvide orthopedic beds and ramps to help your dog navigate stairs or get into the car. Non-slip mats can help prevent slips on smooth surfaces.`
      },
      {
        title: 'Comfort and Quality of Life',
        content: `Create a cozy and accessible space for your senior dog to rest and relax. Make sure their bed is supportive and easy to get into and out of. \n\nProvide mental stimulation through gentle interactive toys and games to keep their mind engaged. \n\nBe observant of any changes in your dog’s health, such as changes in appetite, weight, urination, defecation, or mobility. Report any concerns to your vet. \n\nIf your dog shows signs of pain or discomfort, such as difficulty moving or changes in behavior, consult your vet for appropriate pain management options.`
      },
      {
        title: 'Safety and Care',
        content: `Make your home safe by removing hazards that could lead to falls or injuries. Ensure your dog has easy access to their food, water, and outdoor areas. \n\nRegularly assess your dog’s quality of life, considering factors like comfort, mobility, and enjoyment of daily activities. \n\nProvide extra attention and affection to reassure your senior dog. Your presence and care are crucial for their emotional well-being. \n\nSeek support from friends, family, or pet support groups to navigate the challenges of caring for a senior dog. \n\nBe prepared to make difficult decisions about end-of-life care in consultation with your vet. Palliative care and hospice options can help manage discomfort and provide a dignified end. \n\nSpend quality time with your senior dog, enjoying the special moments and memories you create together. Celebrate their life and the bond you share.`
      }
    ]
  }
]

export default CardData