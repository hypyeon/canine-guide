import hs from '../../assets/images/logo-donate-hs.png'
import aspca from '../../assets/images/logo-donate-aspca.png'
import apollo from '../../assets/images/logo-donate-apollo.png'
import sniffspot from '../../assets/images/logo-app-sniffspot.png'
import rover from '../../assets/images/logo-app-rover.png'
import firstaid from '../../assets/images/logo-app-first-aid.png'
import netflix from '../../assets/images/logo-app-netflix.png'
import wp from '../../assets/images/logo-tool-wp.png'
import byte from '../../assets/images/logo-tool-byte.png'
import pup from '../../assets/images/logo-tool-pup.png'

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
    page: 'adoption',
    list: [
      {
        title: 'Haven’t started the adoption process yet?',
        content: `Raising a pet is a long-term commitment. Are you prepared to dedicate the time, energy, and resources your pet will need every day? \n[button] \nSelect your location and search nearby shelters. Filter by age, breed, size, gender, and behavior traits to find your pur-fect companion!\n[button] \n\nOr take a 1-minute quiz to find out where your future pet is right now!\n[button]`,
        buttons: [
          {
            type: 'expect',
            to: '/expect',
            text: 'What to Expect'
          },
          {
            type: 'finder',
            to: 'https://www.petfinder.com/',
            text: 'PetFinder'
          },
          {
            type: 'finder',
            to: 'https://www.petfinder.com/user/profile/create/?experience=loginAtEnd',
            text: 'PetFinder Quiz'
          }
        ]
      },
    ]
  },
  {
    page: 'checklist',
    list: [
      {
        title: 'Future Pet Owner Checklist',
        content: `Go through this checklist with your family to ensure everyone is on the same page. \n\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]\n[checklist]`,
        checklist: [
          {
            text: `All family members have read everything in the What to expect page`,
            color: 'yellow'
          },
          {
            text: `Have a space for the dog at our home and a crate / kennel / dog bed ready in place`,
            color: 'yellow'
          },
          {
            text: `Buy essentials such as dental products, dog shampoo, ear cleaner, nail cutter, etc`,
            color: 'yellow'
          },
          {
            text: `Buy age-and-size-appropriate dog food`,
            color: 'yellow'
          },
          {
            text: `Buy a collar, a leash, and/or a harness`,
            color: 'yellow'
          },
          {
            text: `Find the primary veterinarian `,
            color: 'yellow'
          },
          {
            text: `Already micro-chipped / planning to`,
            color: 'yellow'
          },
          {
            text: `Be prepared for all necessary vaccinations`,
            color: 'yellow'
          },
          {
            text: `If 3 - 6 months old, their first Rabies vaccination might be due`,
            color: 'sage'
          },
          {
            text: `If 6 - 12 months old, this is when they get neutered/spayed if not done yet`,
            color: 'sage'
          },
        ]
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
  },
  {
    page: 'language',
    list: [
      {
        title: 'Body Language: Tail',
        content: `[list][list][list][list][list][list][list][list]`,
        list: [
          {
            subtitle: 'Tail Wagging in a Circular Motion',
            elements: [
              'Joy or excitement',
              'A tail wagging in a circular motion often means your dog is extremely happy or excited, frequently seen during greetings or playtime.'
            ]
          },
          {
            subtitle: 'Fast, Wide Wagging',
            elements: [
              'Excitement or eagerness',
              'A rapidly wagging tail with wide, sweeping motions often shows that your dog is very excited or eager.'
            ]
          },
          {
            subtitle: 'Tail Held High and Wagging',
            elements: [
              'Confidence or enthusiasm',
              'A tail held high and wagging energetically typically reflects confidence, happiness, or strong interest.'
            ]
          },
          {
            subtitle: 'Relaxed, Wagging Tail',
            elements: [
              'Happiness or contentment',
              'A tail that wags slowly and comfortably with a relaxed body usually means your dog is content and at ease.'
            ]
          },
          {
            subtitle: 'Tail Wagging Slowly with Low Position',
            elements: [
              'Uncertainty or submissiveness',
              'A slow wagging tail held low, often combined with other submissive signals, may show that your dog is feeling unsure or submissive.'
            ]
          },
          {
            subtitle: 'Tail Wagging with Stiff Body',
            elements: [
              'Nervousness or anxiety',
              'If the tail is wagging but the body is stiff, it may signal that your dog is excited but also feeling anxious or unsure.'
            ]
          },
          {
            subtitle: 'Tail Tucked Between Legs',
            elements: [
              'Fear or submission',
              'A tail tucked tightly between the legs can indicate fear, anxiety, or submissive behavior. It’s a sign your dog is feeling threatened or uncomfortable.'
            ]
          },
          {
            subtitle: 'Tail Held Rigid and Not Wagging',
            elements: [
              'Alertness or potential aggression',
              'A stiff, upright tail that is not wagging may indicate that your dog is on high alert, defensive, or potentially aggressive.'
            ]
          }
        ]
      },
      {
        title: 'Body Language: Ears',
        content: `[list][list][list]`,
        list: [
          {
            subtitle: 'Ears Relaxed and Slightly Forward',
            elements: [
              'Calm and content',
              'When your dog’s ears are relaxed and slightly forward, it often means they are in a state of calm and comfort, feeling secure and at ease.'
            ]
          },
          {
            subtitle: 'Ears Up and Forward',
            elements: [
              'Curiosity or attentiveness',
              'Ears held up and facing forward show your dog is interested in something.'
            ]
          },
          {
            subtitle: 'Ears Back',
            elements: [
              'Fear, submission, or discomfort',
              'Ears pulled back against the head can signal that your dog feels threatened or is unsure.'
            ]
          },
        ]
      },
      {
        title: 'Body Language: Others',
        content: `[list][list][list]`,
        list: [
          {
            subtitle: 'Relaxed Body and Panting',
            elements: [
              'Contentment or relaxation',
              'A relaxed stance with loose muscles and gentle panting usually means your dog is comfortable.'
            ]
          },
          {
            subtitle: 'Paw Lifting',
            elements: [
              'Uncertainty or hesitation',
              'A lifted paw can show that your dog is unsure or anxious.'
            ]
          },
          {
            subtitle: 'Yawning',
            elements: [
              'Stress or boredom',
              'Dogs may yawn when they are stressed, anxious, or simply bored.'
            ]
          },
        ]
      },
      {
        title: 'Facial Expressions',
        content: `[list][list][list][list]`,
        list: [
          {
            subtitle: 'Soft Eyes',
            elements: [
              'Trust and affection',
              'Relaxed eyes and a soft gaze generally mean your dog is comfortable and trusts you.'
            ]
          },
          {
            subtitle: 'Wide Eyes or Showing White',
            elements: [
              'Fear or anxiety',
              'If your dog’s eyes are wide open or showing the whites, it may be feeling threatened or scared.'
            ]
          },
          {
            subtitle: 'Licking Lips',
            elements: [
              'Nervousness or submission',
              'Licking the lips can be a sign of stress or that your dog is trying to calm themselves.'
            ]
          },
          {
            subtitle: 'Relaxed Mouth',
            elements: [
              'Contentment',
              'A relaxed, open mouth with a gentle expression often means your dog is happy and relaxed.'
            ]
          },
        ]
      },
      {
        title: 'Vocalizations',
        content: `[list][list][list]`,
        list: [
          {
            subtitle: 'Barking',
            elements: [
              'Alertness, excitement, or seeking attention',
              'The tone and frequency can vary—playful barks, alert barks, or bark warnings can all have different meanings.'
            ]
          },
          {
            subtitle: 'Whining',
            elements: [
              'Distress, discomfort, or desire for attention',
              'Whining can signal that your dog needs something or is feeling anxious.'
            ]
          },
          {
            subtitle: 'Growling',
            elements: [
              'Warning or discomfort',
              'Growling can be a sign of discomfort, fear, or a warning that your dog wants to be left alone.'
            ]
          },
        ]
      },
      {
        title: 'Sleeping Positions',
        content: `[list][list][list][list][list][list]`,
        list: [
          {
            subtitle: 'Curled Up in a Ball',
            elements: [
              'Comfort and security',
              'This position helps dogs conserve body heat and protect their vital organs. It often signifies that your dog feels safe and secure in their environment.'
            ]
          },
          {
            subtitle: 'On Their Side with Legs Extended',
            elements: [
              'Relaxation and trust',
              'When a dog sleeps on their side with their legs stretched out, it shows they are completely relaxed and feel secure in their surroundings. It’s a sign of deep comfort and trust.'
            ]
          },
          {
            subtitle: 'On Their Back with Belly Exposed',
            elements: [
              'Ultimate trust and comfort',
              'Sleeping on their back with their belly exposed is a vulnerable position that indicates your dog feels extremely safe and comfortable in their environment. It also helps them cool down.'
            ]
          },
          {
            subtitle: 'Sleeping with Their Head on Their Paws',
            elements: [
              'Sleepiness or comfort',
              'This position can indicate that your dog is in a state of deep relaxation or sleepiness. It’s a comforting way for them to rest while keeping an eye on their surroundings.'
            ]
          },
          {
            subtitle: 'Napping with a Favorite Toy or Blanket',
            elements: [
              'Security and affection',
              'Holding or snuggling with a favorite toy or blanket while sleeping indicates that your dog finds comfort and security in the item. It often represents a need for reassurance and emotional comfort.'
            ]
          },
          {
            subtitle: 'In a Tucked Position',
            elements: [
              'This position can indicate that your dog is feeling a bit cautious or cold. It’s a way to keep themselves warm and secure while resting.'
            ]
          },
        ]
      }
    ]
  },
  {
    page: 'communicating',
    list: [
      {
        title: 'Voice Communication',
        content: `[list][list]`,
        list: [
          {
            subtitle: 'Use clear and Consistent Commands',
            elements: [
              'Stick to simple, one-word commands like “sit,” “stay,” or “come.” Consistency in the words you use helps your dog understand what you’re asking for.'
            ]
          },
          {
            subtitle: 'Use a Firm but Calm Tone',
            elements: [
              'Speak in a firm, calm tone to convey authority without raising your voice. Dogs respond better to clear, controlled communication rather than shouting.'
            ]
          }
        ]
      },
      {
        title: 'Body Language',
        content: `Dogs are highly attuned to your body language. Use confident, clear gestures to reinforce commands. \n\n[list][list][list][list][list]`,
        list: [
          {
            subtitle: 'Hand Signals',
            elements: [
              'Pairing verbal commands with hand signals can enhance communication. Over time, your dog may even respond to hand signals alone, especially in noisy environments. For example, raise your hand for “sit” or point for “come.”'
            ]
          },
          {
            subtitle: 'Respect Their Space',
            elements: [
              'Give your dog space when they need it. Crowding or approaching too quickly can make them feel threatened. Allow your dog to come to you when they’re ready for interaction.'
            ]
          },
          {
            subtitle: 'Touch and Physical Affection',
            elements: [
              'Dogs often respond well to touch, such as gentle petting or scratching. This can reinforce positive behavior and strengthen your bond, but be mindful of your dog’s preferences and boundaries.'
            ]
          },
          {
            subtitle: 'Maintain Eye Contact',
            elements: [
              'Making eye contact can help build trust and reinforce your connection. However, avoid prolonged eye contact if your dog seems uncomfortable, as some dogs may perceive it as a challenge.'
            ]
          },
          {
            subtitle: 'Use Your Own Energy',
            elements: [
              'Dogs are sensitive to human emotions and energy levels. Stay calm and composed, especially during training sessions or when correcting unwanted behavior. Your energy can influence how your dog responds to you.'
            ]
          }
        ]
      },
      {
        title: 'Positive Reinforcement and Routine',
        content: `[list][list][list]`,
        list: [
          {
            subtitle: 'Reward Good Behavior',
            elements: [
              'Positive reinforcement, such as treats, praise, or petting, helps your dog associate good behavior with positive outcomes. Immediate rewards are most effective.'
            ]
          },
          {
            subtitle: 'Establish Routines',
            elements: [
              'Dogs thrive on routine. Establishing consistent feeding, walking, and training times helps them understand what to expect, reducing anxiety and improving overall communication.'
            ]
          },
          {
            subtitle: 'Play and Engage',
            elements: [
              'Playtime is a great way to communicate and build a positive relationship with your dog. Engaging in games like fetch or tug-of-war also helps reinforce commands in a fun, interactive way.'
            ]
          },
        ]
      },
      {
        title: 'Patience and Consistency',
        content: `Consistency in your interactions helps your dog learn and understand your expectations. Patience is key, as it may take time for your dog to fully grasp new commands or behaviors.`,
      }
    ]
  },
  {
    page: 'donts',
    list: [
      {
        title: 'During Communication and Training',
        content: `[list][list][list][list]`,
        list: [
          {
            subtitle: 'Don’t Yell or Shout',
            elements: [
              'Yelling can cause fear, anxiety, and confusion in dogs. It can damage trust and make your dog fearful of you, hindering effective communication and training.'
            ]
          },
          {
            subtitle: 'Don’t Use Physical Punishment',
            elements: [
              'Physical punishment can lead to aggression, fear, and a breakdown in the relationship. It can make your dog distrustful, anxious, and potentially reactive or aggressive towards you or others.'
            ]
          },
          {
            subtitle: 'Don’t Overwhelm with Too Many or Repetitive Commands',
            elements: [
              'Bombarding your dog with too many commands at once can overwhelm them, causing confusion and frustration. It can reduce their ability to learn effectively and weaken your communication.',
              'Repeating commands too often can confuse your dog. Say the command once and wait for a response before repeating.'
            ]
          },
          {
            subtitle: 'Don’t Ignore Warning Signs',
            elements: [
              'Ignoring signs of discomfort or stress, such as growling or avoiding eye contact, can escalate to aggressive behavior. This can strain your relationship and lead to dangerous situations.'
            ]
          }
        ]
      },
      {
        title: 'For Emotional and Physical Well-being',
        content: `[list][list][list][list]`,
        list: [
          {
            subtitle: `Don’t Force Interaction`,
            elements: [
              `Forcing your dog to interact with people or other animals when they are uncomfortable can increase anxiety and stress. It can result in fear-based aggression and damage your dog's confidence and trust in you.`
            ]
          },
          {
            subtitle: `Don’t Leave Your Dog Alone for Extended Periods`,
            elements: [
              `Prolonged isolation can lead to separation anxiety, depression, and destructive behavior. It can make your dog feel abandoned, damaging your bond and leading to behavioral problems.`
            ]
          },
          {
            subtitle: `Don’t Neglect Regular Exercise and Mental Stimulation`,
            elements: [
              `A lack of physical exercise and mental stimulation can lead to boredom, destructive behavior, and obesity. It can also cause frustration, anxiety, and negatively affect your dog’s overall well-being.`
            ]
          },
          {
            subtitle: `Don’t Compare Your Dog to Others`,
            elements: [
              `Comparing your dog’s behavior or abilities to other dogs can create unrealistic expectations and lead to frustration. This can make your dog feel inadequate and strain your relationship.`
            ]
          }
        ]
      },
      {
        title: 'Health and Behavioral Management',
        content: `[list][list][list]`,
        list: [
          {
            subtitle: `Don’t Neglect Health Care Needs and Behaviorl Changes`,
            elements: [
              `Regular vet check-ups are essential for your dog’s health and well-being. Routine vaccinations, parasite prevention, and dental care are crucial to maintaining their overall health.`,
              `Changes in your dog’s behavior, appetite, energy levels, or bathroom habits can indicate underlying health issues. Consult your vet if you notice any unusual or persistent changes.`
            ]
          },
          {
            subtitle: `Don’t Encourage Bad Behavior`,
            elements: [
              `Laughing at or rewarding undesirable behavior, like jumping on people or barking excessively, can reinforce bad habits. It can make behavior problems worse and harder to correct later.`
            ]
          },
          {
            subtitle: `Don’t Use Your Dog as a Scapegoat`,
            elements: [
              `Blaming your dog for your frustrations can lead to resentment and damage the trust in your relationship. It can cause emotional distress for your dog and create a negative environment.`
            ]
          }
        ]
      },
    ]
  },
  {
    page: 'apps',
    list: [
      {
        title: '"Sniffspot"',
        src: sniffspot,
        href: 'https://www.sniffspot.com/',
        content: 'Inspired by the idea of making things better for dogs, David put up a simple website and started crowdsourcing yards. Now Sniffspot operates in all 50 states and all around the world.',
        apps: [
          'https://apps.apple.com/us/app/sniffspot-private-dog-parks/id1437699295?l=ko',
          'https://play.google.com/store/apps/details?id=com.sniffspot&pli=1'
        ]
      },
      {
        title: '"Rover"',
        src: rover,
        href: 'https://www.rover.com/?adwordslocation=9197773',
        content: 'Founded in 2011, the Rover app and website connect dog and cat parents with loving pet sitters and dog walkers in neighborhoods across the US, Canada, the UK, and Europe.',
        apps: [
          'https://itunes.apple.com/us/app/rover.com/id547320928?mt=8&uo=4',
          'http://play.google.com/store/apps/details?id=com.rover.android&gl=us&hl=en'
        ]
      },
      {
        title: '"Pet First Aid" by Red Cross',
        src: firstaid,
        href: 'https://www.redcross.org/about-us/news-and-events/news/2023/pet-first-aid-awareness-app.html',
        content: 'The FREE Pet First Aid app puts veterinary advice for emergencies as well as everyday pet care in the palm of your hand. With videos, interactive quizzes and simple step-by-step advice it’s never been easier to know pet first aid.',
        apps: [
          'https://itunes.apple.com/us/app/pet-first-aid-by-american/id780415389?ls=1&mt=8',
          'https://play.google.com/store/apps/details?id=com.cube.arc.pfa'
        ]
      },
      {
        title: '"Netflix"',
        src: netflix,
        href: 'https://www.netflix.com/',
        content: 'Netflix has many documentaries about dogs, including ones that explore their thoughts, intelligence, and athletic abilities. We recommend you to watch “Inside the Mind of a Dog”, “The Hidden Lives of Pets”, “Canine Intervention”, “Dogs” and to find out more.',
        apps: [
          'https://itunes.apple.com/us/app/pet-first-aid-by-american/id780415389?ls=1&mt=8',
          'https://play.google.com/store/apps/details?id=com.cube.arc.pfa'
        ]
      },
    ]
  },
  {
    page: 'tools',
    list: [
      {
        title: '"Wisdom Panel" DNA Test Kit',
        src: wp,
        href: 'https://www.wisdompanel.com/en-us/dog-dna-tests',
        content: `... after 20+ years of research, genotyping, and our own pet parenting, we've developed tests that deliver the knowledge you need to actually know your pet as the complex being they are.`,
      },
      {
        title: '"ByteTag" Scannable Pet Tag',
        src: byte,
        href: 'https://shop.bytetag.co/?tw_source=google&tw_adid=688823468766&tw_campaign=17395432004',
        content: `ByteTag is a scannable pet tag containing all of your pets important information conveniently in one profile. If someone scans your pet's ByteTag, they can share their current location with the click of a button.`,
      },
      {
        title: '"PupPod" Interactive Dog Game',
        src: pup,
        href: 'https://puppod.com/',
        content: `The positive reinforcement enrichment game that reduces anxiety and tires dogs out.`,
      },
    ]
  },

]

export default CardData