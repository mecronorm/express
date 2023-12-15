const food = [
    {
        name: "Baked Potato Soup",
        img:"https://www.allrecipes.com/thmb/JdeZHt9jQjZct4AS0oP9kssDv8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5867379-361fd5f1eb254d38b7913e0abfaee07a.jpg",
        timeToPrepare: "40 min",
        ingredients: [
            "Bacon",
            "Butter",
            "Flour",
            "Baked Potatoes",
            "Milk",
            "Green Onions",
            "Seasonings",
            "Cheese",
            "Sour Cream"
        ],
        listOfSteps: [
            "Cook the bacon.",
            "Melt the butter, then whisk in the flour and milk.",
            "Add the potatoes and onions and bring to a boil.",
            "Reduce to a simmer, then stir in the remaining ingridients.",
            "Cook until the cheese is melted."
        ],
        cuisine: "peru",
        favorite: true
    },
    {
        name: "Homemade Beef Stew",
        img: "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Classic-beef-stew-4.jpg",
        timeToPrepare: "2 hrs 35 mins",
        ingredients: [
            "3 tablespoons vegetable oil",
            "2 pounds cubed beef stew meat",
            "4 cubes beef bouillon, crumbled",
            "4 cups water",
            "1 teaspoon dried rosemary",
            "1 teaspoon dried parsley",
            "½ teaspoon ground black pepper",
            "3 large potatoes, peeled and cubed",
            "4 carrots, cut into 1 inch pieces",
            "4 stalks celery, cut into 1 inch pieces",
            "1 large onion, chopped",
            "2 teaspoons cornstarch",
            "2 teaspoons cold water"
        ],
        listOfSteps: [
            "Heat oil in a large pot or Dutch oven over medium-high heat; add beef and cook until well browned.",
            "Dissolve bouillon in 4 cups water and pour into the pot; stir in rosemary, parsley, and pepper. Bring to a boil; reduce heat to low, cover, and simmer for 1 hour. Stir in potatoes, carrots, celery, and onion.",
            "Dissolve cornstarch in 2 teaspoons of cold water; stir into stew. Cover and simmer until beef is tender, about 1 hour."
        ],
        cuisine: "american",
        favorite: false
    },
    {
        name: "Panettone",
        img:"https://www.elmundoeats.com/wp-content/uploads/2022/11/RC-Panettone-on-a-wooden-plate.jpg",
        timeToPrepare: "4 hrs",
        ingredients: [
            "⅓ cup warm water (110 degrees F/45 degrees C)",
            "2 (.25 ounce) packages active dry yeast",
            "4 cups all-purpose flour",
            "½ cup warm milk",
            "⅔ cup white sugar",
            "4 large eggs",
            "2 large egg yolks",
            "1 teaspoon vanilla extract",
            "12 tablespoons unsalted butter",
            "2 cups candied mixed fruit",
            "2 ½ teaspoons grated lemon zest",
            "2 tablespoons orange zest",
            "2 tablespoons butter, melted",
            "1 egg yolk",
            "1 tablespoon cream",
            "3 (7 x 4-inch) round paper panettone molds"
        ],
        listOfSteps: [
            "To make sponge, warm a small bowl by rinsing it with hot water. Pour in warm water and sprinkle 1 package yeast on it. Let stand until yeast has dissolved. Stir in 1/2 cup flour, cover with plastic wrap, and let stand 30 minutes, or until doubled. Sprinkle remaining yeast over warm milk. Let stand until dissolved. Beat together sugar, eggs, egg yolks, and vanilla. Stir in milk-yeast mixture. Add sponge and stir until well incorporated.",
            "Combine butter and remaining 3 ½ cups flour until crumbly. Slowly pour in egg mixture and beat on high speed 3 to 4 minutes, until dough is elastic looking and long strands form. Beat in fruit and zests. Turn dough into oiled bowl, cover with plastic wrap, and leave in a warm place to rise until doubled, about 2 to 3 hours.",
            "Brush inside of three 7 x 4-inch paper molds with melted butter. Turn dough out onto a lightly floured work surface and knead a few times to deflate. Divide dough into 3 pieces. Roll each piece into a ball and drop into prepared molds; place on a baking sheet about 4-inches apart and cover loosely with plastic wrap. Let rise in a warm place until doubled again, about 2 hours.",
            "Preheat the oven to 400 degrees F (200 degrees C). Cut an X in top of each loaf with oiled scissors. Combine egg yolk with cream. Brush tops of loaves lightly with egg wash.",
            "Place baking sheet with loaves in bottom 1/3 of preheated oven. After 10 minutes, lower heat to 375 degrees F (190 degrees C). Continue to bake for 30 more minutes; if tops get too brown, cover with foil. Loaves are done when a wooden skewer inserted into centers comes out clean. Cool on wire rack."
        ],
        cuisine: "italian",
        favorite: false
    },
    {
        name: "Soft Gingerbread Cookies",
        img: "https://www.savorynothings.com/wp-content/uploads/2014/11/gingerbread-recipe-image-1.jpg",
        timeToPrepare: "25 mins",
        ingredients: [
            "1 (15 ounce) package spice cake mix, Duncan Hines® Perfectly Moist Spice Cake Mix",
            "1 1/2 teaspoons ground ginger",
            "1/4 teaspoon ground cloves",
            "1 large egg, at room temperature",
            "1/3 cup vegetable oil",
            "1/4 cup molasses"
        ],
        listOfSteps: [
            "Preheat the oven to 350 degrees F (180 degrees C).  Line a baking sheet with parchment.",
            "Whisk together cake mix, ginger, and cloves. Stir egg, oil, and molasses into the cake mix mixture until combined.",
            "Using a cookie scoop or tablespoon, drop the dough about two inches apart onto the prepared baking sheet.",
            "Bake in the preheated oven until cookies are set, 10 to 12 minutes. Cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely."
        ],
        cuisine: "greek",
        favorite: true
    },
    {
        name: "sandwich",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarketsandwich.com%2Fwp-content%2Fuploads%2F2019%2F05%2FMarket_Sandwich-Mega-SmokedHamCheese-basic-768x768.jpg&f=1&nofb=1&ipt=628132f960c0689b95a7c900b29925b615be9fc5054db5aa99682d47b1cbfcd4&ipo=images",
        timeToPrepare: "2 min",
        ingredients: ["bread", "ham", "cheese"],
        listOfSteps: ["cut bread", "add ham", "add cheese"],
        cuisine: "english",
        favorite: true,
    },
    {
        name: "bacon-omelette",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dontgobaconmyheart.co.uk%2Fwp-content%2Fuploads%2F2020%2F09%2Fbacon-cheese-omelette.jpg&f=1&nofb=1&ipt=7c94b0d1ea87cc25c60ffc9d72ac2b57172c29366b05ba10bf046eaf1c5e588d&ipo=images",
        timeToPrepare: "10 min",
        ingredients: ["eggs", "butter", "bacon"],
        listOfSteps: ["melt butter", "fry bacon", "add 2 eggs"],
        cuisine: "french",
        favorite: false,
    },
    {
        name: "PBJ",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flivenaturallymagazine.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fpg-22-shutterstock_172741412.jpg&f=1&nofb=1&ipt=a97e9ca7dcc3c626ecf99a1d357eef91448584c9fcb009c8c382683904e11b18&ipo=images",
        timeToPrepare: "5 min",
        ingredients: ["peanut butter", "bread", "jam"],
        listOfSteps: ["cut bread", "spread PB", "spread jam"],
        cuisine: "american",
        favorite: true,
    },
    {
        name: "hot-dog",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpotatorolls.com%2Fwp-content%2Fuploads%2F2020%2F10%2FBasic-Hot-Dogs.jpg&f=1&nofb=1&ipt=40075df9c611a414d2451dd260c6024a8edec697d806421697f70c15bb871a1c&ipo=images",
        timeToPrepare: "10 min",
        ingredients: ["bread", "wurst", "ketchup", "mustard"],
        listOfSteps: ["boil wurst", "add wurst in bread", "add ketchup", "add mustard"],
        cuisine: "american",
        favorite: true,
    }
]

export default food