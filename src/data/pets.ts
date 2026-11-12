export type PetType = 'dog' | 'cat';
export type PetSize = 'Small' | 'Medium' | 'Large';
export type PetStatus = 'Available' | 'Pending' | 'Adopted';

export interface Pet {
  id: number;
  name: string;
  type: PetType;
  breed: string;
  age: string;
  ageMonths: number;
  size: PetSize;
  gender: 'Male' | 'Female';
  status: PetStatus;
  personality: string[];
  description: string;
  image: string;
  location: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Biscuit',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '2 years',
    ageMonths: 24,
    size: 'Large',
    gender: 'Male',
    status: 'Available',
    personality: ['Friendly', 'Playful', 'Loyal'],
    description:
      'Biscuit is a sunshine-in-dog-form golden who greets every person like a long-lost friend. He walks beautifully on a leash, adores children, and his favourite hobby is carrying his plush duck around the house.',
    image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
  {
    id: 2,
    name: 'Clover',
    type: 'cat',
    breed: 'Tabby',
    age: '1 year',
    ageMonths: 12,
    size: 'Small',
    gender: 'Female',
    status: 'Available',
    personality: ['Curious', 'Gentle', 'Cuddly'],
    description:
      'Clover was found curled up in a clover patch behind the shelter, and the name stuck. She chirps when she is happy, follows her foster mum from room to room, and falls asleep in the warmest laundry pile she can find.',
    image: 'https://images.pexels.com/photos/220876/pexels-photo-220876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
  {
    id: 3,
    name: 'Mocha',
    type: 'dog',
    breed: 'Pug',
    age: '4 years',
    ageMonths: 48,
    size: 'Small',
    gender: 'Male',
    status: 'Available',
    personality: ['Calm', 'Funny', 'Affectionate'],
    description:
      'Mocha is a professional snorer and an amateur comedian. This dignified little pug loves short walks, long naps, and sitting on feet. He gets along famously with other dogs and polite cats.',
    image: 'https://images.pexels.com/photos/36695980/pexels-photo-36695980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 4,
    name: 'Pepper',
    type: 'cat',
    breed: 'Russian Blue mix',
    age: '3 years',
    ageMonths: 36,
    size: 'Medium',
    gender: 'Female',
    status: 'Available',
    personality: ['Elegant', 'Quiet', 'Watchful'],
    description:
      'Pepper will watch you from across the room, decide you are acceptable, and then never leave your side. She is a gentle soul who loves window perches, feather toys, and quiet evenings.',
    image: 'https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 5,
    name: 'Scout',
    type: 'dog',
    breed: 'Border Collie',
    age: '1 year',
    ageMonths: 14,
    size: 'Medium',
    gender: 'Male',
    status: 'Pending',
    personality: ['Smart', 'Energetic', 'Eager'],
    description:
      'Scout already knows sit, stay, and how to herd a frisbee. He is looking for an active family who will teach him tricks and take him on adventures. Fast learner, faster runner.',
    image: 'https://images.pexels.com/photos/28587408/pexels-photo-28587408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
  {
    id: 6,
    name: 'Ginger',
    type: 'cat',
    breed: 'Calico',
    age: '6 months',
    ageMonths: 6,
    size: 'Small',
    gender: 'Female',
    status: 'Available',
    personality: ['Playful', 'Bold', 'Chatty'],
    description:
      'Ginger is a tiny calico with a huge opinion of herself. She pounces on shoelaces, supervises all cooking, and announces dinner with a proud little trill. Kitten energy guaranteed.',
    image: 'https://images.pexels.com/photos/236648/pexels-photo-236648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 7,
    name: 'Honey',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '5 years',
    ageMonths: 60,
    size: 'Large',
    gender: 'Female',
    status: 'Available',
    personality: ['Gentle', 'Patient', 'Sweet'],
    description:
      'Honey is the matriarch of the shelter play yard — calm, kind, and endlessly patient with puppies and people alike. She would love a sunny porch and a family to lean on.',
    image: 'https://images.pexels.com/photos/11106504/pexels-photo-11106504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
  {
    id: 8,
    name: 'Sage',
    type: 'cat',
    breed: 'Domestic Longhair',
    age: '2 years',
    ageMonths: 28,
    size: 'Medium',
    gender: 'Male',
    status: 'Adopted',
    personality: ['Mellow', 'Snuggly', 'Shy'],
    description:
      'Sage needed three weeks to come out from under the foster bed. Now he is the first at the door for chin scritches. He was adopted by a quiet couple and their elder cat.',
    image: 'https://images.pexels.com/photos/38687771/pexels-photo-38687771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 9,
    name: 'Luna',
    type: 'dog',
    breed: 'Husky',
    age: '2 years',
    ageMonths: 26,
    size: 'Large',
    gender: 'Female',
    status: 'Available',
    personality: ['Adventurous', 'Vocal', 'Affectionate'],
    description:
      'Luna is a talking husky with glacier-blue eyes and a love of snow, sand, and anything outdoors. She needs a yard to patrol and humans who appreciate her singing.',
    image: 'https://images.pexels.com/photos/14346106/pexels-photo-14346106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 10,
    name: 'Peanut',
    type: 'dog',
    breed: 'Chihuahua mix',
    age: '3 years',
    ageMonths: 38,
    size: 'Small',
    gender: 'Male',
    status: 'Available',
    personality: ['Spunky', 'Loyal', 'Alert'],
    description:
      'Peanut is seven pounds of confidence. He rides in a hoodie pocket, guards the sofa like a castle, and loves nothing more than burrowing under blankets at bedtime.',
    image: 'https://images.pexels.com/photos/18735033/pexels-photo-18735033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
  {
    id: 11,
    name: 'Olive',
    type: 'cat',
    breed: 'British Shorthair mix',
    age: '4 years',
    ageMonths: 52,
    size: 'Medium',
    gender: 'Female',
    status: 'Available',
    personality: ['Independent', 'Curious', 'Calm'],
    description:
      'Olive is the queen of her castle and will graciously allow you to pet her — on her schedule. She is tidy, thoughtful, and loves puzzle feeders that make her work for treats.',
    image: 'https://images.pexels.com/photos/39354385/pexels-photo-39354385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Riverside Rescue Center',
  },
  {
    id: 12,
    name: 'Ziggy',
    type: 'dog',
    breed: 'Terrier mix',
    age: '8 months',
    ageMonths: 8,
    size: 'Small',
    gender: 'Male',
    status: 'Pending',
    personality: ['Zoomy', 'Cheeky', 'Loving'],
    description:
      'Ziggy does laps of joy around the yard at 7am and again at 7pm. In between, he is a lap dog. He is working on "drop it" and is very proud of his progress.',
    image: 'https://images.pexels.com/photos/6782544/pexels-photo-6782544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Maple Street Shelter',
  },
];

export const featuredPetIds = [1, 3, 7];

export const stories = [
  {
    id: 1,
    title: 'Milo found his marathon partner',
    quote:
      "We wanted a running buddy and got a best friend instead. Milo waits by the door every morning with his leash in his mouth — rain or shine.",
    author: 'The Carter family',
    pet: 'Adopted Milo, Terrier mix',
    image: 'https://images.pexels.com/photos/11248623/pexels-photo-11248623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    title: 'Two cats, one very full heart',
    quote:
      'We came for one kitten and left with Clover and her brother. The shelter team helped us introduce them to our old boy step by step. Now it is a trio.',
    author: 'Maya R.',
    pet: 'Adopted Clover & Finn',
    image: 'https://images.pexels.com/photos/40289458/pexels-photo-40289458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    title: 'Daisy taught us to slow down',
    quote:
      'Our senior golden came home and instantly owned the place. She naps in the sun, watches the birds, and our daughter reads to her every single night.',
    author: 'The Okafor family',
    pet: 'Adopted Daisy, 8-year-old Golden',
    image: 'https://images.pexels.com/photos/4453110/pexels-photo-4453110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const faqs = [
  {
    q: 'What does the adoption process involve?',
    a: 'Browse the pets, submit an inquiry for the one who steals your heart, and our team will arrange a meet-and-greet within a few days. If it is a match, we complete a short home check and paperwork, and your new family member comes home that same week.',
  },
  {
    q: 'Are the pets vaccinated and neutered?',
    a: 'Yes. Every PawHaven pet is vaccinated, microchipped, spayed or neutered, and receives a full health check from our partner vets before adoption. You will get their complete medical record on adoption day.',
  },
  {
    q: 'What are the adoption fees?',
    a: 'Dogs are $150 and cats are $100, which covers vaccines, microchipping, and spay or neuter surgery. Senior pets (7+) and long-stay residents have reduced or waived fees — ask our team about current offers.',
  },
  {
    q: 'Can I meet a pet before deciding?',
    a: 'Absolutely, and we encourage it. After your inquiry we schedule a visit at the shelter or a video call for fostered pets. Bringing the whole family, including resident dogs, is always welcome.',
  },
  {
    q: 'What if the adoption does not work out?',
    a: 'We take returns seriously and kindly: any PawHaven pet can come back to us at any point in their life, no questions asked. We would rather a pet return safely than stay in a home that is not right for them.',
  },
];
