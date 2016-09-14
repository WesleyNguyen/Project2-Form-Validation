/*jslint browser: true, devel: true */

//  Group Name: The Average Joes
//  Group Members: Bruce Li (Leader), Matt Irby, Wesley Nguyen, Zachary Gay
//  File Name: script.js
//  Purpose: This is the javascript file for index.html


var cities = ["-",
    "Abbeville",
    "Acworth",
    "Adairsville",
    "Adel",
    "Adrian",
    "Ailey",
    "Alamo",
    "Alapaha",
    "Albany",
    "Allenhurst",
    "Allentown",
    "Alma",
    "Alpharetta",
    "Alston",
    "Alto",
    "Ambrose",
    "Americus",
    "Andersonville",
    "Appling",
    "Arabi",
    "Aragon",
    "Argyle",
    "Arlington",
    "Armuchee",
    "Arnoldsville",
    "Ashburn",
    "Athens",
    "Atlanta",
    "Attapulgus",
    "Auburn",
    "Augusta",
    "Austell",
    "Avera",
    "Avondale Estates",
    "Axson",
    "Baconton",
    "Bainbridge",
    "Baldwin",
    "Ball Ground",
    "Barnesville",
    "Barney",
    "Bartow",
    "Barwick",
    "Baxley",
    "Bellville",
    "Berlin",
    "Bethlehem",
    "Bishop",
    "Blackshear",
    "Blairsville",
    "Blakely",
    "Bloomingdale",
    "Blue Ridge",
    "Bluffton",
    "Blythe",
    "Bogart",
    "Bolingbroke",
    "Bonaire",
    "Boneville",
    "Boston",
    "Bostwick",
    "Bowdon",
    "Bowdon Junction",
    "Bowersville",
    "Bowman",
    "Box Springs",
    "Braselton",
    "Bremen",
    "Brinson",
    "Bristol",
    "Bronwood",
    "Brookfield",
    "Brooklet",
    "Brooks",
    "Broxton",
    "Brunswick",
    "Buchanan",
    "Buckhead",
    "Buena Vista",
    "Buford",
    "Butler",
    "Byromville",
    "Byron",
    "Cadwell",
    "Cairo",
    "Calhoun",
    "Calvary",
    "Camak",
    "Camilla",
    "Canon",
    "Canton",
    "Carlton",
    "Carnesville",
    "Carrollton",
    "Cartersville",
    "Cassville",
    "Cataula",
    "Cave Spring",
    "Cecil",
    "Cedar Springs",
    "Cedartown",
    "Centerville",
    "Chatsworth",
    "Chauncey",
    "Cherrylog",
    "Chester",
    "Chestnut Mountain",
    "Chickamauga",
    "Chula",
    "Cisco",
    "Clarkdale",
    "Clarkesville",
    "Clarkston",
    "Claxton",
    "Clayton",
    "Clermont",
    "Cleveland",
    "Climax",
    "Clinchfield",
    "Clyo",
    "Cobb",
    "Cobbtown",
    "Cochran",
    "Cohutta",
    "Colbert",
    "Coleman",
    "Collins",
    "Colquitt",
    "Columbus",
    "Comer",
    "Commerce",
    "Concord",
    "Conley",
    "Conyers",
    "Coolidge",
    "Coosa",
    "Cordele",
    "Cornelia",
    "Cotton",
    "Covington",
    "Crandall",
    "Crawford",
    "Crawfordville",
    "Crescent",
    "Culloden",
    "Cumming",
    "Cusseta",
    "Cuthbert",
    "Dacula",
    "Dahlonega",
    "Daisy",
    "Dallas",
    "Dalton",
    "Damascus",
    "Danielsville",
    "Danville",
    "Darien",
    "Davisboro",
    "Dawson",
    "Dawsonville",
    "De Soto",
    "Dearing",
    "Decatur",
    "Demorest",
    "Denton",
    "Dewy Rose",
    "Dexter",
    "Dillard",
    "Dixie",
    "Doerun",
    "Donalsonville",
    "Douglas",
    "Douglasville",
    "Dover",
    "Dry Branch",
    "Du Pont",
    "Dublin",
    "Dudley",
    "Duluth",
    "East Dublin",
    "East Ellijay",
    "Eastanollee",
    "Eastman",
    "Eatonton",
    "Eden",
    "Edison",
    "Elberton",
    "Elko",
    "Ellabell",
    "Ellaville",
    "Ellenton",
    "Ellenwood",
    "Ellerslie",
    "Ellijay",
    "Emerson",
    "Enigma",
    "Epworth",
    "Esom Hill",
    "Eton",
    "Evans",
    "Experiment",
    "Fairburn",
    "Fairmount",
    "Fargo",
    "Farmington",
    "Fayetteville",
    "Felton",
    "Fitzgerald",
    "Fleming",
    "Flintstone",
    "Flovilla",
    "Flowery Branch",
    "Folkston",
    "Forest Park",
    "Forsyth",
    "Fort Benning",
    "Fort Gaines",
    "Fort Oglethorpe",
    "Fort Stewart",
    "Fort Valley",
    "Fortson",
    "Fowlstown",
    "Franklin",
    "Franklin Springs",
    "Funston",
    "Gainesville",
    "Garfield",
    "Gay",
    "Geneva",
    "Georgetown",
    "Gibson",
    "Gillsville",
    "Girard",
    "Glenn",
    "Glennville",
    "Glenwood",
    "Good Hope",
    "Gordon",
    "Gough",
    "Gracewood",
    "Grantville",
    "Gray",
    "Grayson",
    "Graysville",
    "Greensboro",
    "Greenville",
    "Griffin",
    "Grovetown",
    "Guyton",
    "Haddock",
    "Hagan",
    "Hahira",
    "Hamilton",
    "Hampton",
    "Haralson",
    "Hardwick",
    "Harlem",
    "Harrison",
    "Hartsfield",
    "Hartwell",
    "Hawkinsville",
    "Hazlehurst",
    "Helen",
    "Helena",
    "Hephzibah",
    "Hiawassee",
    "High Shoals",
    "Hillsboro",
    "Hinesville",
    "Hiram",
    "Hoboken",
    "Hogansville",
    "Holly Springs",
    "Homer",
    "Homerville",
    "Hortense",
    "Hoschton",
    "Howard",
    "Hull",
    "Ideal",
    "Ila",
    "Inman",
    "Iron City",
    "Irwinton",
    "Irwinville",
    "Jackson",
    "Jacksonville",
    "Jakin",
    "Jasper",
    "Jefferson",
    "Jeffersonville",
    "Jekyll Island",
    "Jenkinsburg",
    "Jersey",
    "Jesup",
    "Jewell",
    "Jonesboro",
    "Juliette",
    "Junction City",
    "Kathleen",
    "Kennesaw",
    "Keysville",
    "Kings Bay",
    "Kingsland",
    "Kingston",
    "Kite",
    "Knoxville",
    "La Fayette",
    "Lagrange",
    "Lake Park",
    "Lakeland",
    "Lakemont",
    "Lavonia",
    "Lawrenceville",
    "Leary",
    "Lebanon",
    "Leesburg",
    "Lenox",
    "Leslie",
    "Lexington",
    "Lilburn",
    "Lilly",
    "Lincolnton",
    "Lindale",
    "Lithia Springs",
    "Lithonia",
    "Lizella",
    "Locust Grove",
    "Loganville",
    "Lookout Mountain",
    "Louisville",
    "Louvale",
    "Lovejoy",
    "Ludowici",
    "Lula",
    "Lumber City",
    "Lumpkin",
    "Luthersville",
    "Lyerly",
    "Lyons",
    "Mableton",
    "Macon",
    "Madison",
    "Manassas",
    "Manchester",
    "Manor",
    "Mansfield",
    "Marble Hill",
    "Marietta",
    "Marshallville",
    "Martin",
    "Matthews",
    "Mauk",
    "Maxeys",
    "Maysville",
    "Mc Caysville",
    "Mc Intyre",
    "Mc Rae",
    "McDonough",
    "Meansville",
    "Meigs",
    "Meldrim",
    "Menlo",
    "Meridian",
    "Mershon",
    "Mesena",
    "Metter",
    "Midland",
    "Midville",
    "Midway",
    "Milan",
    "Milledgeville",
    "Millen",
    "Millwood",
    "Milner",
    "Mineral Bluff",
    "Mitchell",
    "Molena",
    "Monroe",
    "Montezuma",
    "Monticello",
    "Montrose",
    "Moreland",
    "Morgan",
    "Morganton",
    "Morris",
    "Morrow",
    "Morven",
    "Moultrie",
    "Mount Airy",
    "Mount Berry",
    "Mount Vernon",
    "Mount Zion",
    "Mountain City",
    "Murrayville",
    "Musella",
    "Mystic",
    "Nahunta",
    "Nashville",
    "Naylor",
    "Nelson",
    "Newborn",
    "Newington",
    "Newnan",
    "Newton",
    "Nicholls",
    "Nicholson",
    "Norcross",
    "Norman Park",
    "Norristown",
    "North Metro",
    "Norwood",
    "Nunez",
    "Oakfield",
    "Oakman",
    "Oakwood",
    "Ochlocknee",
    "Ocilla",
    "Oconee",
    "Odum",
    "Offerman",
    "Oglethorpe",
    "Oliver",
    "Omaha",
    "Omega",
    "Orchard Hill",
    "Oxford",
    "Palmetto",
    "Parrott",
    "Patterson",
    "Pavo",
    "Peachtree City",
    "Pearson",
    "Pelham",
    "Pembroke",
    "Pendergrass",
    "Perkins",
    "Perry",
    "Pine Lake",
    "Pine Mountain",
    "Pine Mountain Valley",
    "Pinehurst",
    "Pineview",
    "Pitts",
    "Plainfield",
    "Plains",
    "Plainville",
    "Pooler",
    "Portal",
    "Porterdale",
    "Poulan",
    "Powder Springs",
    "Preston",
    "Pulaski",
    "Putney",
    "Quitman",
    "Rabun Gap",
    "Ranger",
    "Ray City",
    "Rayle",
    "Rebecca",
    "Red Oak",
    "Redan",
    "Register",
    "Reidsville",
    "Rentz",
    "Resaca",
    "Rex",
    "Reynolds",
    "Rhine",
    "Riceboro",
    "Richland",
    "Richmond Hill",
    "Rincon",
    "Ringgold",
    "Rising Fawn",
    "Riverdale",
    "Roberta",
    "Rochelle",
    "Rock Spring",
    "Rockledge",
    "Rockmart",
    "Rocky Face",
    "Rocky Ford",
    "Rome",
    "Roopville",
    "Rossville",
    "Roswell",
    "Royston",
    "Rupert",
    "Rutledge",
    "Rydal",
    "Saint George",
    "Saint Marys",
    "Saint Simons Island",
    "Sale City",
    "Sandersville",
    "Sapelo Island",
    "Sardis",
    "Sargent",
    "Sasser",
    "Sautee Nacoochee",
    "Savannah",
    "Scotland",
    "Scottdale",
    "Screven",
    "Sea Island",
    "Senoia",
    "Seville",
    "Shady Dale",
    "Shannon",
    "Sharon",
    "Sharpsburg",
    "Shellman",
    "Shiloh",
    "Siloam",
    "Silver Creek",
    "Smarr",
    "Smithville",
    "Smyrna",
    "Snellville",
    "Social Circle",
    "Soperton",
    "Sparks",
    "Sparta",
    "Springfield",
    "Stapleton",
    "Statenville",
    "Statesboro",
    "Statham",
    "Stephens",
    "Stillmore",
    "Stockbridge",
    "Stockton",
    "Stone Mountain",
    "Suches",
    "Sugar Valley",
    "Summerville",
    "Sumner",
    "Sunny Side",
    "Surrency",
    "Suwanee",
    "Swainsboro",
    "Sycamore",
    "Sylvania",
    "Sylvester",
    "Talbotton",
    "Talking Rock",
    "Tallapoosa",
    "Tallulah Falls",
    "Talmo",
    "Tarrytown",
    "Tate",
    "Taylorsville",
    "Temple",
    "Tennga",
    "Tennille",
    "The Rock",
    "Thomaston",
    "Thomasville",
    "Thomson",
    "Tifton",
    "Tiger",
    "Tignall",
    "Toccoa",
    "Toccoa Falls",
    "Toomsboro",
    "Townsend",
    "Trenton",
    "Trion",
    "Tucker",
    "Tunnel Hill",
    "Turin",
    "Turnerville",
    "Twin City",
    "Ty Ty",
    "Tybee Island",
    "Tyrone",
    "Unadilla",
    "Union City",
    "Union Point",
    "Upatoi",
    "Uvalda",
    "Valdosta",
    "Varnell",
    "Vidalia",
    "Vienna",
    "Villa Rica",
    "Waco",
    "Wadley",
    "Waleska",
    "Walthourville",
    "Waresboro",
    "Warm Springs",
    "Warner Robins",
    "Warrenton",
    "Warthen",
    "Warwick",
    "Washington",
    "Watkinsville",
    "Waverly",
    "Waverly Hall",
    "Waycross",
    "Waynesboro",
    "Waynesville",
    "West Green",
    "West Point",
    "Weston",
    "Whigham",
    "White",
    "White Oak",
    "White Plains",
    "Whitesburg",
    "Wildwood",
    "Wiley",
    "Willacoochee",
    "Williamson",
    "Winder",
    "Winston",
    "Winterville",
    "Woodbine",
    "Woodbury",
    "Woodland",
    "Woodstock",
    "Wray",
    "Wrens",
    "Wrightsville",
    "Yatesville",
    "Young Harris",
    "Zebulon"];
var zipcodes = [[30323, 30335, 30351, 30363, 30365, 30367, 30381, 30466, 30505, 30610, 30613, 31332],
    [31001],
    [30101, 30102],
    [30103],
    [31620],
    [31002],
    [30410],
    [30411],
    [31622],
    [31701, 31702, 31703, 31704, 31705, 31706, 31707, 31708],
    [31301],
    [31003],
    [31510],
    [30004, 30005, 30009, 30022, 30023],
    [30412],
    [30510, 30596],
    [31512],
    [31709, 31710],
    [31711],
    [30802],
    [31712],
    [30104],
    [31623],
    [31713],
    [30105],
    [30619],
    [31714],
    [30601, 30602, 30603, 30604, 30605, 30606, 30607, 30608, 30609, 30612],
    [30301, 30302, 30303, 30304, 30305, 30306, 30307, 30308, 30309, 30310, 30311, 30312, 30313, 30314, 30315, 30316, 30317, 30318, 30319, 30320, 30321, 30322, 30324, 30325, 30326, 30327, 30328, 30329, 30330, 30331, 30332, 30333, 30334, 30336, 30337, 30338, 30339, 30340, 30341, 30342, 30343, 30344, 30345, 30346, 30347, 30348, 30349, 30350, 30353, 30354, 30355, 30356, 30357, 30358, 30359, 30360, 30361, 30362, 30364, 30366, 30368, 30369, 30370, 30371, 30374, 30375, 30376, 30377, 30378, 30379, 30380, 30384, 30385, 30386, 30387, 30388, 30389, 30390, 30392, 30394, 30396, 30398, 30399, 31106, 31107, 31119, 31126, 31131, 31139, 31141, 31145, 31146, 31150, 31156, 31191, 31192, 31193, 31195, 31196, 31197, 31198, 31199, 39901],
    [31715],
    [30011],
    [30901, 30903, 30904, 30905, 30906, 30907, 30909, 30910, 30911, 30912, 30913, 30914, 30916, 30917, 30919, 30999],
    [30106, 30168],
    [30803],
    [30002],
    [31624],
    [31716],
    [31717, 31718],
    [30511],
    [30107],
    [30204],
    [31625],
    [30413],
    [31720],
    [31513, 31515],
    [30414],
    [31722],
    [30620],
    [30621],
    [31516],
    [30512, 30514],
    [31723],
    [31302],
    [30513],
    [31724],
    [30805],
    [30622],
    [31004],
    [31005],
    [30806],
    [31626],
    [30623],
    [30108],
    [30109],
    [30516],
    [30624],
    [31801],
    [30517],
    [30110],
    [31725],
    [31518],
    [31726],
    [31727],
    [30415],
    [30205],
    [31519],
    [31520, 31521, 31523, 31524, 31525],
    [30113],
    [30625],
    [31803],
    [30515, 30518, 30519],
    [31006],
    [31007],
    [31008],
    [31009],
    [31728],
    [30701, 30703],
    [31729],
    [30807],
    [31730],
    [30520],
    [30114, 30115],
    [30627],
    [30521],
    [30116, 30117, 30118, 30119],
    [30120, 30121],
    [30123],
    [31804],
    [30124],
    [31627],
    [31732],
    [30125],
    [31028],
    [30705],
    [31011],
    [30522],
    [31012],
    [30502],
    [30707],
    [31733],
    [30708],
    [30111],
    [30523],
    [30021],
    [30417],
    [30525],
    [30527],
    [30528],
    [31734],
    [31013],
    [31303],
    [31735],
    [30420],
    [31014],
    [30710],
    [30628],
    [31736],
    [30421],
    [31737],
    [31901, 31902, 31903, 31904, 31906, 31907, 31908, 31909, 31914, 31917, 31993, 31994, 31997, 31998, 31999],
    [30629],
    [30529, 30530, 30599],
    [30206],
    [30288],
    [30012, 30013, 30094],
    [31738],
    [30129],
    [31010, 31015],
    [30531],
    [31739],
    [30014, 30015, 30016],
    [30711],
    [30630],
    [30631],
    [31304],
    [31016],
    [30028, 30040, 30041],
    [31805],
    [31740],
    [30019],
    [30533, 30597],
    [30423],
    [30132, 30157],
    [30719, 30720, 30721, 30722],
    [31741],
    [30633],
    [31017],
    [31305],
    [31018],
    [31742],
    [30534],
    [31743],
    [30808],
    [30030, 30031, 30032, 30033, 30034, 30035, 30036, 30037],
    [30535, 30544],
    [31532],
    [30634],
    [31019],
    [30537],
    [31629],
    [31744],
    [31745],
    [31533, 31534, 31535],
    [30133, 30134, 30135, 30154],
    [30424],
    [31020],
    [31630],
    [31021, 31040],
    [31022],
    [30095, 30096, 30097, 30098, 30099],
    [31027],
    [30539],
    [30538],
    [31023],
    [31024],
    [31307],
    [31746],
    [30635],
    [31025],
    [31308],
    [31806],
    [31747],
    [30294],
    [31807],
    [30540],
    [30137],
    [31749],
    [30541],
    [30138],
    [30724],
    [30809],
    [30212],
    [30213],
    [30139],
    [31631],
    [30638],
    [30214, 30215],
    [30140],
    [31750],
    [31309],
    [30725],
    [30216],
    [30542],
    [31537],
    [30297, 30298],
    [31029],
    [31905, 31995],
    [31751],
    [30742],
    [31314, 31315],
    [31030],
    [31808],
    [31752],
    [30217],
    [30639],
    [31753],
    [30501, 30503, 30504, 30506, 30507],
    [30425],
    [30218],
    [31810],
    [31754],
    [30810],
    [30543],
    [30426],
    [30219],
    [30427],
    [30428],
    [30641],
    [31031],
    [30811],
    [30812],
    [30220],
    [31032],
    [30017],
    [30726],
    [30642],
    [30222],
    [30223, 30224],
    [30813],
    [31312],
    [31033],
    [30429],
    [31632],
    [31811],
    [30228],
    [30229],
    [31034],
    [30814],
    [31035],
    [31756],
    [30643],
    [31036],
    [31539],
    [30545],
    [31037],
    [30815],
    [30546],
    [30645],
    [31038],
    [31310, 31313],
    [30141],
    [31542],
    [30230],
    [30142],
    [30547],
    [31634],
    [31543],
    [30548],
    [31039],
    [30646],
    [31041],
    [30647],
    [30232],
    [31759],
    [31042],
    [31760],
    [30233],
    [31544],
    [31761],
    [30143],
    [30549],
    [31044],
    [31527],
    [30234],
    [30018],
    [31545, 31546, 31598, 31599],
    [31045],
    [30236, 30237, 30238],
    [31046],
    [31812],
    [31047],
    [30144, 30152],
    [30816],
    [31547],
    [31548],
    [30145],
    [31049],
    [31050],
    [30728],
    [30240, 30241, 30261],
    [31636],
    [31635],
    [30552],
    [30553],
    [30042, 30043, 30044, 30045, 30046],
    [31762],
    [30146],
    [31763],
    [31637],
    [31764],
    [30648],
    [30047, 30048],
    [31051],
    [30817],
    [30147],
    [30122],
    [30038, 30058],
    [31052],
    [30248],
    [30052],
    [30750],
    [30434],
    [31814],
    [30250],
    [31316],
    [30554],
    [31549],
    [31815],
    [30251],
    [30730],
    [30436],
    [30126],
    [31201, 31202, 31203, 31204, 31205, 31206, 31207, 31208, 31209, 31210, 31211, 31212, 31213, 31216, 31217, 31220, 31221, 31294, 31295, 31296, 31297, 31298, 31299],
    [30650],
    [30438],
    [31816],
    [31550],
    [30055],
    [30148],
    [30006, 30007, 30008, 30060, 30061, 30062, 30063, 30064, 30065, 30066, 30067, 30068, 30069, 30090],
    [31057],
    [30557],
    [30818],
    [31058],
    [30671],
    [30558],
    [30555],
    [31054],
    [31055],
    [30252, 30253],
    [30256],
    [31765],
    [31318],
    [30731],
    [31319],
    [31551],
    [30819],
    [30439],
    [31820],
    [30441],
    [31320],
    [31060],
    [31061, 31062],
    [30442],
    [31552],
    [30257],
    [30559],
    [30820],
    [30258],
    [30655, 30656],
    [31063],
    [31064],
    [31065],
    [30259],
    [31766],
    [30560],
    [31767],
    [30260, 30287],
    [31638],
    [31768, 31776],
    [30563],
    [30149],
    [30445],
    [30150],
    [30562],
    [30564],
    [31066],
    [31769],
    [31553],
    [31639],
    [31641],
    [30151],
    [30056],
    [30446],
    [30263, 30264, 30265, 30271],
    [31770],
    [31554],
    [30565],
    [30003, 30010, 30071, 30091, 30092, 30093],
    [31771],
    [30447],
    [30026, 30029],
    [30821],
    [30448],
    [31772],
    [30732],
    [30566],
    [31773],
    [31774],
    [31067],
    [31555],
    [31556],
    [31068],
    [30449],
    [31821],
    [31775],
    [30266],
    [30054],
    [30268],
    [31777],
    [31557],
    [31778],
    [30269],
    [31642],
    [31779],
    [31321],
    [30567],
    [30822],
    [31069],
    [30072],
    [31822],
    [31823],
    [31070],
    [31071],
    [31072],
    [31073],
    [31780],
    [30733],
    [31322],
    [30450],
    [30070],
    [31781],
    [30127],
    [31824],
    [30451],
    [31782],
    [31643],
    [30568],
    [30734],
    [31645],
    [30660],
    [31783],
    [30272],
    [30074],
    [30452],
    [30453, 30499],
    [31075],
    [30735],
    [30273],
    [31076],
    [31077],
    [31323],
    [31825],
    [31324],
    [31326],
    [30736],
    [30738],
    [30274, 30296],
    [31078],
    [31079],
    [30739],
    [30454],
    [30153],
    [30740],
    [30455],
    [30161, 30162, 30163, 30164, 30165],
    [30170],
    [30741],
    [30075, 30076, 30077],
    [30662],
    [31081],
    [30663],
    [30171],
    [31646],
    [31558],
    [31522],
    [31784],
    [31082],
    [31327],
    [30456],
    [30275],
    [31785],
    [30571],
    [31401, 31402, 31403, 31404, 31405, 31406, 31407, 31408, 31409, 31410, 31411, 31412, 31414, 31415, 31416, 31418, 31419, 31420, 31421, 31422, 31498, 31499],
    [31083],
    [30079],
    [31560],
    [31561],
    [30276],
    [31084],
    [31085],
    [30172],
    [30664],
    [30277],
    [31786],
    [31826],
    [30665],
    [30173],
    [31086],
    [31787],
    [30080, 30081, 30082],
    [30039, 30078],
    [30025],
    [30457],
    [31647],
    [31087],
    [31329],
    [30823],
    [31648],
    [30458, 30459, 30460, 30461],
    [30666],
    [30667],
    [30464],
    [30281],
    [31649],
    [30083, 30086, 30087, 30088],
    [30572],
    [30746],
    [30747],
    [31789],
    [30284],
    [31563],
    [30024],
    [30401],
    [31790],
    [30467],
    [31791],
    [31827],
    [30175],
    [30176],
    [30573],
    [30575],
    [30470],
    [30177],
    [30178],
    [30179],
    [30751],
    [31089],
    [30285],
    [30286],
    [31757, 31758, 31792, 31799],
    [30824],
    [31793, 31794],
    [30576],
    [30668],
    [30577],
    [30598],
    [31090],
    [31331],
    [30752],
    [30753],
    [30084, 30085],
    [30755],
    [30289],
    [30580],
    [30471],
    [31795],
    [31328],
    [30290],
    [31091],
    [30291],
    [30669],
    [31829],
    [30473],
    [31601, 31602, 31603, 31604, 31605, 31606, 31698, 31699],
    [30756],
    [30474, 30475],
    [31092],
    [30180],
    [30182],
    [30477],
    [30183],
    [31333],
    [31564],
    [31830],
    [31088, 31093, 31095, 31098, 31099],
    [30828],
    [31094],
    [31796],
    [30673],
    [30677],
    [31565],
    [31831],
    [31501, 31502, 31503],
    [30830],
    [31566],
    [31567],
    [31833],
    [31832],
    [31797],
    [30184],
    [31568],
    [30678],
    [30185],
    [30757],
    [30581],
    [31650],
    [30292],
    [30680],
    [30187],
    [30683],
    [31569],
    [30293],
    [31836],
    [30188, 30189],
    [31798],
    [30833],
    [31096],
    [31097],
    [30582],
    [30295]];

// function will check and alert the user for invalid phone number input upon leaving text field
function numCheck() {
	// grabs the current user input from the text field
	var input = document.getElementById("phoneNum").value;
	
	// This pattern will only accept two formats: 111.222.3333 OR 111-222-3333
	// Rejects all other patterns. Using this to follow the rubric.
	var pattern = /[0-9]{3}(\.(?=[0-9]{3}\.)|-(?=[0-9]{3}-))[0-9]{3}(\.|-)[0-9]{4}$/;
	
	// checks to see if the input matches the required pattern
	// returns true if input matches valid input, false otherwise
	var result = pattern.test(input);

	// if user input is invalid, inform the user and reset the field to be empty
	if (!result) {
		alert("Incorrect format. Valid phone number formats are:\n"
		      + "111.222.3333\n"
		      + "111-222-3333");
		document.getElementById("phoneNum").value = "";
	}
}

function capitalizeFirstName() {
    var x = document.getElementById("firstName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}

function capitalizeLastName() {
    var x = document.getElementById("lastName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}

function autofillCities() {
    
    var x = document.getElementById("city");
    var possibleCities = [];
    
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].startsWith(x.value)) {
            possibleCities.push(cities[i]);
        }
    }
    
    if (possibleCities.length == 1) {
        x.value = possibleCities[0];
    }
    
    x.value = x.value;    
    
}


function autofillZipCodes() {
    
    var index = cities.indexOf(document.getElementById("city").value);
    var select = document.getElementById("zip");
    var options = zipcodes[index];
    
    var i = 0;
    while (i < options.length) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select[i] = el;
        i++;
    }
    
    while (i < select.length) {
        select.removeChild(select[i]);
    }

}

// will check to make sure the form is entirely filled out before submission
function submissionCheck(){
	if (emptyFormCheck()){
		alert("Successful submission! All input is valid!");
	}
	else{
		alert("Failure! Retry!");
	}
}

// checks for empty input
// returns true if all fields are filled in
// other methods will handle correcting the input
function emptyFormCheck(){
	// checks each field to make sure nothing is empty
	if (document.getElementById("firstName").value == ""){
		return false;
	}
	else{
		if (document.getElementById("lastName").value == ""){
			return false;
		}
		else{
			if (document.getElementById("phoneNum").value == ""){
				return false;
			}
			else{
				if (document.getElementById("city").value == ""){
					return false;
				}
				else{
					if (document.getElementById("zip").value == "Select zip code:"){
						return false;
					}
				}
			}
		}
	}
	
	// returns true if all fields are filled
	return true;
}

