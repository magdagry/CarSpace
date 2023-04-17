export const categories = [
    {
        id: 0,
        name: "Kia",
        description: `Kia to marka samochodowa pochodząca z Korei Południowej, założona w 1944
        roku. Obecnie jest jednym z największych producentów samochodów na świecie...`,
        image: "images/main/kia.jpeg",
    },
    {
        id: 1,
        name: "Dacia",
        description: `Dacia to marka samochodowa pochodząca z Rumunii, założona w
        1966 roku. Firma
        specjalizuje się w produkcji przystępnych cenowo samochodów dla masowego odbiorcy...`,
        image: "images/main/dacia.jpeg",
    },
    {
        id: 2,
        name: "Ford",
        description: `Ford to amerykańska marka samochodów, która ma bogatą
        historię i oferuje
        wiele różnych modeli, od małych hatchbacków po duże SUV-y i pick-upy. Jedną z największych zalet..`,
        image: "images/main/ford.jpeg",
    },
    {
        id: 3,
        name: "Volkswagen",
        description: `Volkswagen to niemiecka marka samochodów, znana z jakości
        wykonania,
        innowacyjności i stylowego designu swoich produktów. Marka ta cieszy się dużą popularnością...`,
        image: "images/main/vw.jpeg",
    },
    {
        id: 4,
        name: "Mercedes",
        description: `  Mercedes-Benz to niemiecka marka samochodów luksusowych i premium, założona w 1926 roku. Nazwa pochodzi od
        imienia córki jednego z założycieli firmy, Emil Jellinek, który zaczął...`,
        image: "images/main/mercedes.jpeg",
    },
    {
        id: 5,
        name: "Renault",
        description: `Renault to francuska marka samochodów, która oferuje wiele różnych modeli, od małych miejskich aut po duże
        vany i crossovery. Jedną z największych zalet samochodów Renault...`,
        image: "images/main/renault.jpeg",
    }

]

export const categoryDetails = [
{
    id: 0,
    categoryId: 0,
    name: "Kia",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Kia Stringer",
            enginePower: 365,
            mileage: 84000,
            year: 2018,
            price: 73000,
            image: "images/modele/KiaSt.jpeg"
        },
        {
            id: 1,
            name: "Kia Sportage",
            enginePower: 130,
            mileage: 74637,
            year: 2019,
            price: 96000,
            image: "images/modele/kiaSp.jpeg"
        },
        {
            id: 2,
            name: "Kia Ceed",
            enginePower: 81,
            mileage: 188365,
            year: 2017,
            price: 38000,
            image: "images/modele/kiaSp.jpeg"
        }
    ]
},
{
    id: 1,
    categoryId: 1,
    name: "Dacia",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Dacia Logan",
            enginePower: 75,
            mileage: 59000,
            year: 2014,
            price: 21000,
            image: "images/modele/dacia/daciaLogan.jpef"
        },
        {
            id: 1,
            name: "Dacia Duster",
            enginePower: 75,
            mileage: 12500,
            year: 2022,
            price: 82500,
            image: "images/modele/dacia/daciaDuster.jpeg"
        },
        {
            id: 2,
            name: "Dacia Sandero",
            enginePower: 90,
            mileage: 118000,
            year: 2017,
            price: 38800,
            image: "images/modele/dacia/daciaSamdero.jpeg"
        },
    ]

},
{
    id: 2,
    categoryId: 2,
    name: "Ford",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Ford Fiesta",
            enginePower: 96,
            mileage: 109465,
            year: 2009,
            price: 24900,
            image: "images/modele/ford/fordFiesta.jpeg"
        },
        {
            id: 1,
            name: "Ford Focus",
            enginePower: 150,
            mileage: 147000,
            year: 2019,
            price: 67900,
            image: "images/modele/ford/fordFocus.jpeg"
        },
        {
            id: 2,
            name: "Ford Mustang",
            enginePower: 305,
            mileage: 174000,
            year: 2015,
            price: 89800,
            image: "images/modele/fordMustang.jpeg"
        },
        {
            id: 3,
            name: "Ford Explorer",
            enginePower: 287,
            mileage: 237836,
            year: 2012,
            price: 71900,
            image: "images/modele/ford/fordExplorer.jpeg"
        }
    ]
},
{
    id: 3,
    categoryId: 3,
    name: "Volkswagen",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Volkswagen Passat",
            enginePower: 120,
            mileage: 31000,
            year: 2015,
            price: 47000,
            image: "images/modele/Volkswagen/VWpassat.jpeg"
        },
        {
            id: 1,
            name: "Volkswagen Golf",
            enginePower: 136,
            mileage: 161627,
            year: 2017,
            price: 97200,
            image: "images/modele/vw/vwGolf.jpeg"
        },
        {
            id: 2,
            name: "Volkswagen Beetle",
            enginePower: 105,
            mileage: 176000,
            year: 2014,
            price: 39900,
            image: "images/modele/volkswagen/vwBeetle.jpeg"
        }
    ]

},
{
    id: 4,
    categoryId: 4,
    name: "Mercedes",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Mercedes klasa A",
            enginePower: 109,
            mileage: 258024,
            year: 2014,
            price: 58500,
            image: "images/modele/mercedes/mercedesA.jpeg"
        },
        {
            id: 1,
            name: "Mercedes klasa G",
            enginePower: 136,
            mileage: 381000,
            year: 1994,
            price: 109000,
            image: "images/modele/mercedes/mercedesG.jpeg"
        },
        {
            id: 2,
            name: "Mercedes klasa E",
            enginePower: 211,
            mileage: 113000,
            year: 2013,
            price: 79900,
            image: "images/modele/mercedes/mercedesE.jpeg"
        }
    ]

},
{
    id: 5,
    categoryId: 5,
    name: "Renault",
    description: "" ,
    cars: [
        {
            id: 0,
            name: "Renault Clio",
            enginePower: 200,
            mileage: 124448,
            year: 2013,
            price: 51900,
            image: "images/modele/renault/renaultClio.jpeg"
        },
        {
            id: 1,
            name: "Renault Grand Scenic",
            enginePower: 130,
            mileage: 148413,
            year: 2017,
            price: 62900,
            image: "images/modele/renault/renaultGScenic.jpeg"
        },
        {
            id: 2,
            name: "Renault Captur",
            enginePower: 91,
            mileage: 18400,
            year: 2021,
            price: 105000,
            image: "images/modele/renault/renaultCaptur.jpeg"
        },
        {
            id: 3,
            name: "Renault Koleos",
            enginePower: 177,
            mileage: 157000,
            year: 2018,
            price: 84800,
            image: "images/modele/renault/renaultKalos.jpeg"
        }
    ]

}
]
