const properties = [
  {
    id: 1,
    status: "For Sale",
    type: "Apartment",
    image: "/images/apartment2.jpg",
    images: [
      "/images/apartment2.jpg",
      "/images/apartment4.jpg",
      "/images/apartment5.jpg",
      "/images/apartment6.jpg"
    ],
    price: "₦85,000,000",
    title: "Modern 2 Bedroom Apartment",
    location: "Lekki, Lagos",
    bedrooms: "2 Beds",
    bathrooms: "2 Baths",
    size: "1,200 sqft"
  },
  {
    id: 2,
    status: "For Sale",
    type: "House",
    image: "/images/house2.jpg",
    images: [
      "/images/house2.jpg",
      "/images/house4.jpg",
      "/images/house3.jpg",
      "/images/house5.jpg"
    ],
    price: "₦250,000,000",
    title: "Luxury 4 Bedroom House",
    location: "Lekki, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "2,500 sqft"
  },
  {
    id: 3,
    status: "For Rent",
    type: "Villa",
    image: "/images/villa2.jpg",
    images: [
      "/images/villa2.jpg",
      "/images/villa3.jpg",
      "/images/villa4.jpg",
      "/images/villa5.jpg"
    ],
    price: "₦2,500,000",
    period: "/month",
    title: "3 Bedroom Villa with Pool",
    location: "Victoria Island, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    size: "2,000 sqft"
  },
  {
    id: 4,
    status: "For Rent",
    type: "commercial",
    image: "/images/office.jpg",
    images: [
      "/images/office.jpg",
      "/images/office1.jpg",
      "/images/office2.jpg",
      "/images/office3.jpg"
    ],
    price: "₦1,800,000",
    period: "/month",
    title: "Prime Office Space",
    location: "Lekki Phase 1, Lagos",
    size: "1,500 sqft"
  },
  {
    id: 5,
    status: "For Sale",
    type: "Bungalow",
    image: "/images/bungalow.jpg",
    images: [
      "/images/bungalow.jpg",
      "/images/bungalow1.jpg",
      "/images/bungalow2.jpg",
      "/images/bungalow3.jpg"
    ],
    price: "₦100,000,000",
    title: "3 Bedroom Bungalow",
    location: "Chevron, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    size: "1,800 sqft"
  },
  {
    id: 6,
    status: "For Sale",
    type: "Apartment",
    image: "/images/apartment3.jpg",
    images: [
      "/images/apartment3.jpg",
      "/images/apartment7.jpg",
      "/images/apartment8.jpg",
      "/images/apartment9.jpg"
    ],
    price: "₦45,000,000",
    title: "Stylish 1 Bedroom Apartment",
    location: "Yaba, Lagos",
    bedrooms: "1 Bed",
    bathrooms: "1 Bath",
    size: "800 sqft"
  },
  {
    id: 7,
    status: "For Sale",
    type: "Apartment",
    image: "/images/apartment.jpg",
    images: [
      "/images/apartment.jpg",
      "/images/apartment1.jpg",
      "/images/apartment7.jpg",
      "/images/apartment8.jpg"
    ],
    price: "₦65,000,000",
    title: "Elegant 2 Bedroom Apartment",
    location: "Ikeja, Lagos",
    bedrooms: "2 Beds",
    bathrooms: "2 Baths",
    size: "1,100 sqft"
  },
  {
    id: 8,
    status: "For Sale",
    type: "Apartment",
    image: "/images/apartment4.jpg",
    images: [
      "/images/apartment4.jpg",
      "/images/apartment5.jpg",
      "/images/apartment6.jpg",
      "/images/apartment9.jpg"
    ],
    price: "₦72,000,000",
    title: "Contemporary City Apartment",
    location: "Victoria Island, Lagos",
    bedrooms: "2 Beds",
    bathrooms: "2 Baths",
    size: "1,300 sqft"
  },
  {
    id: 9,
    status: "For Rent",
    type: "Apartment",
    image: "/images/apartment7.jpg",
    images: [
      "/images/apartment7.jpg",
      "/images/apartment8.jpg",
      "/images/apartment9.jpg",
      "/images/apartment1.jpg"
    ],
    price: "₦2,000,000",
    period: "/year",
    title: "Bright 1 Bedroom Apartment",
    location: "Yaba, Lagos",
    bedrooms: "1 Bed",
    bathrooms: "1 Bath",
    size: "750 sqft"
  },

  // 2. HOUSES
  {
    id: 10,
    status: "For Sale",
    type: "House",
    image: "/images/house.jpg",
    images: [
      "/images/house.jpg",
      "/images/house1.jpg",
      "/images/house3.jpg",
      "/images/house4.jpg"
    ],
    price: "₦180,000,000",
    title: "Spacious Family House",
    location: "Ajah, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "2,200 sqft"
  },
  {
    id: 11,
    status: "For Sale",
    type: "House",
    image: "/images/house1.jpg",
    images: [
      "/images/house1.jpg",
      "/images/house2.jpg",
      "/images/house4.jpg",
      "/images/house5.jpg"
    ],
    price: "₦210,000,000",
    title: "Modern Detached House",
    location: "Chevron, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "2,400 sqft"
  },
  {
    id: 12,
    status: "For Sale",
    type: "House",
    image: "/images/house3.jpg",
    images: [
      "/images/house3.jpg",
      "/images/house5.jpg",
      "/images/house1.jpg",
      "/images/house2.jpg"
    ],
    price: "₦145,000,000",
    title: "Stylish 3 Bedroom House",
    location: "Ikeja, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    size: "1,900 sqft"
  },
  {
    id: 13,
    status: "For Rent",
    type: "House",
    image: "/images/house4.jpg",
    images: [
      "/images/house4.jpg",
      "/images/house2.jpg",
      "/images/house3.jpg",
      "/images/house5.jpg"
    ],
    price: "₦4,500,000",
    period: "/year",
    title: "Family Home with Garden",
    location: "Magodo, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "3 Baths",
    size: "2,300 sqft"
  },
  {
    id: 14,
    status: "For Sale",
    type: "House",
    image: "/images/house5.jpg",
    images: [
      "/images/house5.jpg",
      "/images/house1.jpg",
      "/images/house2.jpg",
      "/images/house4.jpg"
    ],
    price: "₦165,000,000",
    title: "Elegant Contemporary House",
    location: "Sangotedo, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    size: "2,000 sqft"
  },


  // 3. VILLAS
  {
    id: 15,
    status: "For Sale",
    type: "Villa",
    image: "/images/villa.jpg",
    images: [
      "/images/villa.jpg",
      "/images/villa1.jpg",
      "/images/villa2.jpg",
      "/images/villa3.jpg"
    ],
    price: "₦320,000,000",
    title: "Luxury Garden Villa",
    location: "Lekki, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "3,000 sqft"
  },
  {
    id: 16,
    status: "For Sale",
    type: "Villa",
    image: "/images/villa1.jpg",
    images: [
      "/images/villa1.jpg",
      "/images/villa2.jpg",
      "/images/villa4.jpg",
      "/images/villa5.jpg"
    ],
    price: "₦400,000,000",
    title: "Premium Family Villa",
    location: "Banana Island, Lagos",
    bedrooms: "5 Beds",
    bathrooms: "5 Baths",
    size: "3,800 sqft"
  },
  {
    id: 17,
    status: "For Rent",
    type: "Villa",
    image: "/images/villa3.jpg",
    images: [
      "/images/villa3.jpg",
      "/images/villa4.jpg",
      "/images/villa5.jpg",
      "/images/villa1.jpg"
    ],
    price: "₦3,500,000",
    period: "/month",
    title: "Modern Poolside Villa",
    location: "Victoria Island, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "2,800 sqft"
  },
  {
    id: 18,
    status: "For Sale",
    type: "Villa",
    image: "/images/villa4.jpg",
    images: [
      "/images/villa4.jpg",
      "/images/villa5.jpg",
      "/images/villa2.jpg",
      "/images/villa1.jpg"
    ],
    price: "₦275,000,000",
    title: "Contemporary Luxury Villa",
    location: "Ajah, Lagos",
    bedrooms: "4 Beds",
    bathrooms: "4 Baths",
    size: "2,700 sqft"
  },

  
  // 4. BUNGALOWS
  {
    id: 19,
    status: "For Sale",
    type: "Bungalow",
    image: "/images/bungalow1.jpg",
    images: [
      "/images/bungalow1.jpg",
      "/images/bungalow2.jpg",
      "/images/bungalow3.jpg",
      "/images/bungalow.jpg"
    ],
    price: "₦75,000,000",
    title: "Modern 3 Bedroom Bungalow",
    location: "Ikorodu, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "2 Baths",
    size: "1,600 sqft"
  },
  {
    id: 20,
    status: "For Sale",
    type: "Bungalow",
    image: "/images/bungalow2.jpg",
    images: [
      "/images/bungalow2.jpg",
      "/images/bungalow3.jpg",
      "/images/bungalow1.jpg",
      "/images/bungalow.jpg"
    ],
    price: "₦90,000,000",
    title: "Spacious Family Bungalow",
    location: "Epe, Lagos",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    size: "1,750 sqft"
  },
  {
    id: 21,
    status: "For Rent",
    type: "Bungalow",
    image: "/images/bungalow3.jpg",
    images: [
      "/images/bungalow3.jpg",
      "/images/bungalow.jpg",
      "/images/bungalow1.jpg",
      "/images/bungalow2.jpg"
    ],
    price: "₦2,200,000",
    period: "/year",
    title: "Comfortable 2 Bedroom Bungalow",
    location: "Agege, Lagos",
    bedrooms: "2 Beds",
    bathrooms: "2 Baths",
    size: "1,300 sqft"
  },

  
  // 5. COMMERCIAL PROPERTIES
  {
    id: 22,
    status: "For Sale",
    type: "Commercial",
    image: "/images/commercial.jpg",
    images: [
      "/images/commercial.jpg",
      "/images/commercial1.jpg",
      "/images/office1.jpg",
      "/images/office2.jpg"
    ],
    price: "₦350,000,000",
    title: "Commercial Building Investment",
    location: "Ikeja, Lagos",
    size: "4,000 sqft"
  },
  {
    id: 23,
    status: "For Sale",
    type: "Commercial",
    image: "/images/commercial1.jpg",
    images: [
      "/images/commercial1.jpg",
      "/images/commercial.jpg",
      "/images/office2.jpg",
      "/images/office3.jpg"
    ],
    price: "₦280,000,000",
    title: "Prime Commercial Property",
    location: "Yaba, Lagos",
    size: "3,200 sqft"
  },
  {
    id: 24,
    status: "For Rent",
    type: "Commercial",
    image: "/images/office1.jpg",
    images: [
      "/images/office1.jpg",
      "/images/office2.jpg",
      "/images/office3.jpg",
      "/images/office.jpg"
    ],
    price: "₦2,500,000",
    period: "/year",
    title: "Modern Office Suite",
    location: "Victoria Island, Lagos",
    size: "1,800 sqft"
  },
  {
    id: 25,
    status: "For Rent",
    type: "Commercial",
    image: "/images/office2.jpg",
    images: [
      "/images/office2.jpg",
      "/images/office3.jpg",
      "/images/office1.jpg",
      "/images/office.jpg"
    ],
    price: "₦3,000,000",
    period: "/year",
    title: "Executive Office Space",
    location: "Lekki, Lagos",
    size: "2,000 sqft"
  }
];

export default properties;
