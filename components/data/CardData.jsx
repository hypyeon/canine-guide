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
  },
  {
    page: 'unsafe',
    list: [
      {
        title: 'Chocolate',
        content: [
          'Contains theobromine and caffeine, which are toxic to dogs.',
          'Vomiting, diarrhea, rapid breathing, increased heart rate, seizures, and in severe cases, death.'
        ]
      },
      {
        title: 'Onions and Garlic',
        content: [
          'Can cause sudden kidney failure in dogs.',
          'Vomiting, lethargy, loss of appetite, and kidney failure.'
        ]
      },
      {
        title: 'Grapes and Raisins',
        content: [
          'Can cause sudden kidney failure in dogs.',
          'Vomiting, lethargy, loss of appetite, and kidney failure.'
        ]
      },
      {
        title: 'Avocado',
        content: [
          'Contains persin, which can cause vomiting and diarrhea in dogs.',
          'Gastrointestinal distress, including vomiting and diarrhea.'
        ]
      },
      {
        title: 'Macadamia Nuts',
        content: [
          `Contains an unknown toxin that affects dogs' nervous systems.`,
          `Weakness, vomiting, tremors, and hyperthermia.`
        ]
      },
      {
        title: 'Bones from Cooked Meat',
        content: [
          `Can splinter and cause blockages or tears in the digestive system.`,
          `Choking, internal bleeding, and punctures in the stomach or intestines.`
        ]
      },
      {
        title: 'Xylitol',
        content: [
          `Can be found in sugar-free gum, candy, and some peanut butter. Causes a rapid release of insulin, leading to hypoglycemia (low blood sugar).`,
          `Vomiting, loss of coordination, seizures, liver failure, and in severe cases, death.`
        ]
      },
      {
        title: 'Alcohol',
        content: [
          `Dogs are far more sensitive to alcohol than humans.`,
          `Vomiting, diarrhea, decreased coordination, difficulty breathing, tremors, coma, and death.`
        ]
      },
      {
        title: 'Caffeine',
        content: [
          `Found in coffee, tea, energy drinks, and some medications. Contains methylxanthines, which are toxic to dogs.`,
          `Restlessness, rapid breathing, heart palpitations, muscle tremors, seizures, and death.`
        ]
      },
      {
        title: 'Raw Dough (containing yeast)',
        content: [
          `Yeast produces alcohol as it ferments, which can expand in the stomach and cause alcohol poisoning in dogs.`,
          `Severe bloating, alcohol poisoning, and gastric distress.`
        ]
      },
      {
        title: 'Fat Trimmings and Greasy Foods',
        content: [
          `High-fat content can lead to pancreatitis in dogs.`,
          `Vomiting, diarrhea, and inflammation of the pancreas.`
        ]
      },
      {
        title: 'Salt',
        content: [
          `Excessive salt intake can lead to sodium ion poisoning in dogs.`,
          `Excessive thirst, urination, vomiting, diarrhea, tremors, seizures, and death.`
        ]
      },
      {
        title: 'Milk and Dairy Products',
        content: [
          `Many dogs are lactose intolerant, leading to digestive issues.`,
          `Vomiting, diarrhea, and gastrointestinal distress.`
        ]
      }
    ]
  },
  {
    page: 'safe',
    list: [
      {
        title: 'Best Foods for Dogs',
        content: `[list][list][list][list][list][list][list][list]`,
        list: [
          {
            subtitle: 'Lean Meat (Chicken, Turkey, Beef)',
            elements: [
              'Excellent source of protein, essential amino acids, and B vitamins.',
              'How to serve: Cooked, unseasoned, and without bones or skin.'
            ]
          },
          {
            subtitle: 'Carrots',
            elements: [
              'Low-calorie treat rich in fiber, beta-carotene, and vitamin A.',
              'How to serve: Raw or cooked, cut into bite-sized pieces.'
            ]
          },
          {
            subtitle: 'Pumpkin',
            elements: [
              'High in fiber and vitamin A, great for digestive health.',
              'How to serve: Plain, canned pumpkin (not pie filling) or cooked fresh pumpkin.'
            ]
          },
          {
            subtitle: 'Blueberries',
            elements: [
              'Packed with fiber, vitamins C and K, and antioxidant-rich fruit that supports brain health and immunity.',
              'How to serve: Fresh or frozen, as a treat or mixed into meals.'
            ]
          },
          {
            subtitle: 'Sweet Potatoes',
            elements: [
              'Rich in dietary fiber, vitamins A and C, and beta-carotene.',
              'How to serve: Cooked and mashed or cut into small pieces, without added sugar or seasoning.'
            ]
          },
          {
            subtitle: 'Apples',
            elements: [
              'High in fiber and vitamins A and C, great for dental health.',
              'How to serve: Sliced and cored (remove seeds), can be fed raw or lightly cooked.'
            ]
          },
          {
            subtitle: 'Cooked Salmon',
            elements: [
              'Rich in omega-3 fatty acids, protein, and essential nutrients for skin and coat health.',
              'How to serve: Cooked, deboned, and without seasoning.'
            ]
          },
          {
            subtitle: 'Eggs',
            elements: [
              'Excellent source of protein, vitamins, and minerals.',
              'How to serve: Cooked without oil, butter, or seasoning.'
            ]
          }
        ]
      },
      {
        title: 'Good in Normal Amounts',
        content: `[list][list][list][list][list][list][list][list][list]`,
        list: [
          {
            subtitle: 'Green Beans',
            elements: [
              'Low-calorie, high in fiber, and vitamins C and K.',
              'How to serve: Steamed or raw, plain and unsalted.'
            ]
          },
          {
            subtitle: 'Cucumbers',
            elements: [
              'Low-calorie, hydrating, and contains vitamins K and C.',
              'How to serve: Sliced and unseasoned.'
            ]
          },
          {
            subtitle: 'Broccoli',
            elements: [
              'Contains fiber, vitamin C, and is low in fat.',
              'How to serve: Steamed or raw in small quantities.'
            ]
          },
          {
            subtitle: 'Rice (White or Brown)',
            elements: [
              'Easy on the stomach and provides energy.',
              'How to serve: Plain, cooked rice, especially useful for dogs with digestive issues.'
            ]
          },
          {
            subtitle: 'Oatmeal',
            elements: [
              'Good source of soluble fiber, beneficial for dogs with bowel irregularities.',
              'How to serve: Cooked plain, without added sugar or flavorings.'
            ]
          },
          {
            subtitle: 'Watermelon',
            elements: [
              'Hydrating and low-calorie, with vitamins A, B6, and C.',
              'How to serve: Seedless and rindless, cut into small chunks.'
            ]
          },
          {
            subtitle: 'Peanut Butter',
            elements: [
              'Good source of protein, healthy fats, and vitamins E and B.',
              'How to serve: In moderation, without xylitol or added sugar.'
            ]
          },
          {
            subtitle: 'Bananas',
            elements: [
              'High in potassium, fiber, and vitamins B6 and C.',
              'How to serve: In small amounts due to sugar content. Fresh, peeled, and cut into small pieces.'
            ]
          },
          {
            subtitle: 'Cheese',
            elements: [
              'High in protein, calcium, and vitamins A and B12.',
              'How to serve: In moderation, as a treat for dogs that tolerate lactose.'
            ]
          }
        ]
      }
    ]
  }
]

export default CardData