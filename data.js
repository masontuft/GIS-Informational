const LOCATIONS = [
  // Parks
  {
    id: 1,
    title: "Tautphaus Park",
    category: "park",
    description: "Idaho Falls' largest park featuring a zoo, amusement rides, picnic areas, and seasonal events.",
    lat: 43.4798,
    lng: -112.0549
  },
  {
    id: 2,
    title: "Freeman Park",
    category: "park",
    description: "Family-friendly park along the Snake River with playgrounds, picnic shelters, and greenbelt access.",
    lat: 43.5040,
    lng: -112.0417
  },
  {
    id: 3,
    title: "Snake River Greenbelt",
    category: "park",
    description: "A scenic 5-mile paved trail along the Snake River, popular for walking, running, and cycling.",
    lat: 43.4947,
    lng: -112.0348
  },
  {
    id: 4,
    title: "Pinecrest Municipal Golf Course",
    category: "park",
    description: "Public 18-hole golf course nestled in a scenic setting with mountain views.",
    lat: 43.5123,
    lng: -112.0336
  },
  {
    id: 5,
    title: "Riverview Park",
    category: "park",
    description: "Small neighborhood park along the Snake River offering peaceful river views and walking paths.",
    lat: 43.4920,
    lng: -112.0372
  },

  // Restaurants
  {
    id: 6,
    title: "Snake River Grill",
    category: "restaurant",
    description: "Upscale American cuisine with stunning views of the Snake River Falls. Known for steaks and seafood.",
    lat: 43.4928,
    lng: -112.0388
  },
  {
    id: 7,
    title: "The Celt Irish Pub",
    category: "restaurant",
    description: "Authentic Irish pub atmosphere with a full menu of pub fare, local beers, and live music on weekends.",
    lat: 43.4940,
    lng: -112.0413
  },
  {
    id: 8,
    title: "Jakers Bar and Grill",
    category: "restaurant",
    description: "Casual American restaurant offering a wide menu including steaks, seafood, pasta, and cocktails.",
    lat: 43.4820,
    lng: -112.0513
  },
  {
    id: 9,
    title: "Smoky Mountain Pizza & Pasta",
    category: "restaurant",
    description: "Local favorite for hand-tossed pizza, pasta, and Italian dishes. Family-friendly atmosphere.",
    lat: 43.4919,
    lng: -112.0389
  },
  {
    id: 10,
    title: "Smitty's Pancake & Steak House",
    category: "restaurant",
    description: "Classic American breakfast and steakhouse open since 1955, famous for their fluffy pancakes.",
    lat: 43.4885,
    lng: -112.0517
  },

  // Landmarks
  {
    id: 11,
    title: "Idaho Falls Temple",
    category: "landmark",
    description: "Historic LDS temple completed in 1945, the first temple in the intermountain west region. Iconic spire visible citywide.",
    lat: 43.4946,
    lng: -112.0407
  },
  {
    id: 12,
    title: "Museum of Idaho",
    category: "landmark",
    description: "Regional natural history and cultural museum featuring exhibits on Idaho's geology, wildlife, and Native American heritage.",
    lat: 43.4933,
    lng: -112.0400
  },
  {
    id: 13,
    title: "Snake River Falls",
    category: "landmark",
    description: "Stunning natural waterfalls on the Snake River, visible from the downtown Greenbelt. A must-see Idaho Falls landmark.",
    lat: 43.4948,
    lng: -112.0330
  },
  {
    id: 14,
    title: "Bonneville County Historical Museum",
    category: "landmark",
    description: "Local history museum with rotating exhibits on the settlement and development of eastern Idaho.",
    lat: 43.4936,
    lng: -112.0397
  },
  {
    id: 15,
    title: "Idaho Falls Regional Airport",
    category: "landmark",
    description: "Regional airport serving eastern Idaho with connections to major hubs. Named Idaho Falls Regional Airport (IDA).",
    lat: 43.5143,
    lng: -112.0707
  },

  // Shopping
  {
    id: 16,
    title: "Grand Teton Mall",
    category: "shopping",
    description: "Idaho Falls' premier indoor shopping mall featuring over 70 stores, restaurants, and entertainment options.",
    lat: 43.4777,
    lng: -112.0519
  },
  {
    id: 17,
    title: "Idaho Falls Town Square",
    category: "shopping",
    description: "Open-air shopping center with a mix of national retailers, dining, and service businesses.",
    lat: 43.4844,
    lng: -112.0509
  },
  {
    id: 18,
    title: "Pine Ridge Mall",
    category: "shopping",
    description: "Neighborhood shopping center anchored by major grocery and home improvement stores.",
    lat: 43.5149,
    lng: -112.0340
  },
  {
    id: 19,
    title: "Snake River Landing",
    category: "shopping",
    description: "Mixed-use development along the Snake River with shops, offices, and waterfront dining.",
    lat: 43.4843,
    lng: -112.0434
  },
  {
    id: 20,
    title: "Westgate Shopping Center",
    category: "shopping",
    description: "West-side shopping hub with grocery anchors, pharmacy, and a variety of specialty shops.",
    lat: 43.5028,
    lng: -112.0543
  },

  // Government
  {
    id: 21,
    title: "Idaho Falls City Hall",
    category: "government",
    description: "Seat of Idaho Falls municipal government. Houses the mayor's office, city council chambers, and public services.",
    lat: 43.4932,
    lng: -112.0412
  },
  {
    id: 22,
    title: "Bonneville County Courthouse",
    category: "government",
    description: "Historic county courthouse serving Bonneville County, housing courts, the county clerk, and assessor offices.",
    lat: 43.4929,
    lng: -112.0405
  },
  {
    id: 23,
    title: "Idaho Falls Public Library",
    category: "government",
    description: "Main branch of the Idaho Falls Public Library system offering books, digital resources, and community programs.",
    lat: 43.4934,
    lng: -112.0398
  },
  {
    id: 24,
    title: "Idaho Falls Post Office",
    category: "government",
    description: "Main USPS post office serving downtown Idaho Falls and surrounding areas.",
    lat: 43.4938,
    lng: -112.0416
  },
  {
    id: 25,
    title: "Idaho National Laboratory",
    category: "government",
    description: "Major U.S. Department of Energy research lab located west of Idaho Falls. A hub for nuclear and clean energy research.",
    lat: 43.5253,
    lng: -112.8561
  }
];

const CATEGORIES = {
  park: {
    label: "Parks",
    color: "#2d9e2d",
    icon: "🌿"
  },
  restaurant: {
    label: "Restaurants",
    color: "#e63535",
    icon: "🍽️"
  },
  landmark: {
    label: "Landmarks",
    color: "#1a6fb5",
    icon: "📍"
  },
  shopping: {
    label: "Shopping",
    color: "#8b35c4",
    icon: "🛍️"
  },
  government: {
    label: "Government",
    color: "#c47a00",
    icon: "🏛️"
  }
};
