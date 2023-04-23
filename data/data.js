export const categories = [
    {
        id: 1,
        name: "Kia",
        description: `Kia to marka samochodowa pochodząca z Korei Południowej, założona w 1944
        roku. Obecnie jest jednym z największych producentów samochodów na świecie...`,
        image: "images/main/kia.jpeg",
    },
    {
        id: 2,
        name: "Dacia",
        description: `Dacia to marka samochodowa pochodząca z Rumunii, założona w
        1966 roku. Firma
        specjalizuje się w produkcji przystępnych cenowo samochodów dla masowego odbiorcy...`,
        image: "images/main/dacia.jpeg",
    },
    {
        id: 3,
        name: "Ford",
        description: `Ford to amerykańska marka samochodów, która ma bogatą
        historię i oferuje
        wiele różnych modeli, od małych hatchbacków po duże SUV-y i pick-upy. Jedną z największych zalet..`,
        image: "images/main/ford.jpeg",
    },
    {
        id: 4,
        name: "Volkswagen",
        description: `Volkswagen to niemiecka marka samochodów, znana z jakości
        wykonania,
        innowacyjności i stylowego designu swoich produktów. Marka ta cieszy się dużą popularnością...`,
        image: "images/main/vw.jpeg",
    },
    {
        id: 5,
        name: "Mercedes",
        description: `  Mercedes-Benz to niemiecka marka samochodów luksusowych i premium, założona w 1926 roku. Nazwa pochodzi od
        imienia córki jednego z założycieli firmy, Emil Jellinek, który zaczął...`,
        image: "images/main/mercedes.jpeg",
    },
    {
        id: 6,
        name: "Renault",
        description: `Renault to francuska marka samochodów, która oferuje wiele różnych modeli, od małych miejskich aut po duże
        vany i crossovery. Jedną z największych zalet samochodów Renault...`,
        image: "images/main/renault.jpeg",
    }

]

export const categoryDetails = [
{
    id: 1,
    categoryId: 1,
    name: "Kia",
    description: `Kia to marka samochodowa pochodząca z Korei Południowej, założona w 1944 roku. Obecnie jest jednym z największych producentów samochodów na świecie, z siecią sprzedaży i serwisów w ponad 190 krajach. Kia znana jest z produkcji szerokiej gamy samochodów, w tym kompaktowych i miejskich modeli, jak również SUV-ów, crossoverów i samochodów sportowych. W ostatnich latach firma koncentruje się na rozwijaniu swojej oferty samochodów elektrycznych i hybrydowych. Kia słynie z oferowania wysokiej jakości i innowacyjnych samochodów w przystępnej cenie. Firma stawia na nowoczesny design i zaawansowane technologie, takie jak inteligentne systemy bezpieczeństwa i rozrywki. W ostatnich latach Kia zdobyła wiele nagród i wyróżnień, w tym tytuł "Najlepszej Marki Samochodowej" w rankingu "Best Global Brands" magazynu Interbrand. Ważnym elementem strategii marki Kia jest troska o środowisko naturalne. Firma koncentruje się na rozwijaniu samochodów z niższym poziomem emisji spalin i coraz większą liczbą modeli elektrycznych. Podsumowując, Kia to innowacyjna marka samochodowa, oferująca wysokiej jakości pojazdy w przystępnej cenie, które są jednocześnie przyjazne dla środowiska.` ,
    cars: [
        {
            id: 11,
            name: "Kia Stringer",
            enginePower: 379,
            mileage: 39500,
            year: 2018,
            price: 125900,
            image: "images/modele/Kia/KiaSt.jpeg"
        },
        {
            id: 12,
            name: "Kia Sportage",
            enginePower: 132,
            mileage: 40290,
            year: 2019,
            price: 96000,
            image: "images/modele/Kia/kiaSp.jpeg"
        },
        {
            id: 13,
            name: "Kia Ceed",
            enginePower: 120,
            mileage: 44000,
            year: 2019,
            price: 61900,
            image: "images/modele/Kia/KiaC.jpeg"
        }
    ]
},
{
    id: 2,
    categoryId: 2,
    name: "Dacia",
    description: `Dacia to marka samochodowa pochodząca z Rumunii, założona w 1966 roku. Firma specjalizuje się w produkcji przystępnych cenowo samochodów dla masowego odbiorcy.
    Dacia oferuje szeroką gamę samochodów, w tym miejskie modele, samochody rodzinne, SUV-y i dostawcze. Modele Dacii charakteryzują się prostą, ale funkcjonalną stylistyką oraz prostą i solidną konstrukcją. Dacia słynie z tego, że oferuje samochody o stosunkowo niskiej cenie, ale jednocześnie nie rezygnuje z jakości.
    Dacia ma również na swoim koncie wiele wyróżnień i nagród za swoje modele, w tym nagrodę "Best Value Car" w plebiscycie Auto Trader New Car Awards w Wielkiej Brytanii.
    Dacia jest częścią Grupy Renault i korzysta z technologii i komponentów Renault, co pozwala na zwiększenie efektywności produkcji i oferowanie przystępnych cenowo samochodów.
    Ważnym elementem strategii marki Dacia jest również troska o środowisko naturalne. Firma stawia na produkcję samochodów z mniejszą emisją spalin i coraz większą liczbą modeli hybrydowych i elektrycznych.
    Podsumowując, Dacia to marka samochodowa oferująca solidne i funkcjonalne modele w przystępnej cenie, która cieszy się uznaniem kierowców z całego świata.` ,
    cars: [
        {
            id: 21,
            name: "Dacia Logan",
            enginePower: 75,
            mileage: 59000,
            year: 2014,
            price: 21000,
            image: "images/modele/dacia/daciaLogan.jpeg"
        },
        {
            id: 22,
            name: "Dacia Duster",
            enginePower: 100,
            mileage: 30000,
            year: 2021,
            price: 82500,
            image: "images/modele/dacia/daciaDuster.jpeg"
        },
        {
            id: 23,
            name: "Dacia Sandero",
            enginePower: 90,
            mileage: 118000,
            year: 2017,
            price: 38800,
            image: "images/modele/dacia/daciaSandero.jpeg"
        },
    ]

},
{
    id: 3,
    categoryId: 3,
    name: "Ford",
    description: `Ford to amerykańska marka samochodów, która ma bogatą historię i oferuje wiele różnych modeli, od małych hatchbacków po duże SUV-y i pick-upy. Jedną z największych zalet samochodów Ford jest ich trwałość i niezawodność. Ford to jedna z najstarszych i najbardziej uznanych marek samochodowych na świecie, co przekłada się na ich wysoką jakość. Ford stawia na jakość i wytrzymałość swoich produktów, co przekłada się na długą żywotność samochodów.
    Inną zaletą samochodów Ford jest ich innowacyjność i zaawansowana technologia. Ford wprowadza na rynek wiele innowacyjnych rozwiązań, takich jak systemy bezpieczeństwa, systemy multimedialne i nowoczesne silniki, które oferują wyższą moc i lepsze osiągi.
    Ford oferuje również wiele różnych modeli, w tym samochody sportowe, luksusowe i SUV-y. Dzięki temu każdy klient może znaleźć samochód, który idealnie odpowiada jego potrzebom i stylowi życia. Wśród popularnych modeli Forda znajdują się między innymi Mustang, Focus, Fiesta, Edge i Escape.
    Bezpieczeństwo to kolejna zaleta samochodów Ford. Marka oferuje wiele zaawansowanych systemów bezpieczeństwa, takich jak systemy kontroli trakcji, hamowania awaryjnego, czujniki martwego pola, kamery cofania i wiele innych. Ford stawia na bezpieczeństwo swoich klientów, co przekłada się na ich zadowolenie i pewność podczas jazdy.
    Ostatecznie, Ford oferuje także doskonałą obsługę posprzedażową, w tym szeroką sieć serwisów i części zamiennych. To oznacza, że klienci Forda mogą liczyć na wsparcie i pomoc w przypadku problemów z ich samochodami, co zwiększa ich zadowolenie z zakupu.` ,
    cars: [
        {
            id: 31,
            name: "Ford Fiesta",
            enginePower: 96,
            mileage: 109465,
            year: 2009,
            price: 24900,
            image: "images/modele/ford/fordFiesta.jpeg"
        },
        {
            id: 32,
            name: "Ford Focus",
            enginePower: 150,
            mileage: 72144,
            year: 2019,
            price: 67900,
            image: "images/modele/ford/fordFocus.jpeg"
        },
        {
            id: 33,
            name: "Ford Mustang",
            enginePower: 305,
            mileage: 174000,
            year: 2015,
            price: 89800,
            image: "images/modele/ford/fordMustang.jpeg"
        },
        {
            id: 34,
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
    id: 4,
    categoryId: 4,
    name: "Volkswagen",
    description: `
    Volkswagen to niemiecka marka samochodów, znana z jakości wykonania, innowacyjności i stylowego designu swoich produktów. Marka ta cieszy się dużą popularnością na całym świecie i jest uznawana za jedną z najbardziej wpływowych w branży motoryzacyjnej.
    Volkswagen został założony w 1937 roku i od tego czasu stał się jednym z najbardziej rozpoznawalnych producentów samochodów na świecie. Marka słynie z produkcji nie tylko osobowych pojazdów, ale również samochodów ciężarowych i autobusów.
    Wolfsburg, siedziba Volkswagen AG, jest jednym z największych centrów badawczo-rozwojowych na świecie, co umożliwia marce wprowadzanie innowacyjnych rozwiązań i technologii do swoich produktów. Volkswagen jest również znany z dbałości o środowisko naturalne i wprowadzania zrównoważonych rozwiązań w swojej działalności.
    W sumie Volkswagen to marka, która kojarzy się z jakością, innowacyjnością i prestiżem. Dzięki swojemu zasięgowi i uznaniu, marka ta z pewnością będzie kontynuować swoją pozycję na rynku motoryzacyjnym i w przyszłości.` ,
    cars: [
        {
            id: 0,
            name: "Volkswagen Passat",
            enginePower: 120,
            mileage: 31000,
            year: 2015,
            price: 47000,
            image: "images/modele/vw/VWpassat.jpeg"
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
        // {
        //     id: 2,
        //     name: "Volkswagen Beetle",
        //     enginePower: 105,
        //     mileage: 176000,
        //     year: 2014,
        //     price: 39900,
        //     image: "images/modele/vw/vwBeetle.jpeg"
        // }
    ]

},
{
    id: 5,
    categoryId: 5,
    name: "Mercedes",
    description: `Mercedes-Benz to niemiecka marka samochodów luksusowych i premium, założona w 1926 roku. Nazwa pochodzi od imienia córki jednego z założycieli firmy, Emil Jellinek, który zaczął produkować samochody pod tą marką w 1901 roku.
    Mercedes-Benz jest znana z produkcji samochodów klasy premium, które charakteryzują się wysoką jakością wykonania, wygodą, bezpieczeństwem i innowacyjnymi technologiami. Firma oferuje szeroki wybór modeli, w tym sedany, coupé, kabriolety, samochody terenowe i sportowe, a także modele z napędem elektrycznym.
    Jako jedna z najstarszych i najbardziej znanych marek samochodowych na świecie, Mercedes-Benz zdobył wiele nagród i wyróżnień za swoje osiągnięcia w dziedzinie inżynierii samochodowej i technologii. Wielu kierowców uważa, że samochody tej marki są synonimem luksusu, wygody i prestiżu.` ,
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
            image: "images/modele/mercedes/mercedesG.jpg"
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
    id: 6,
    categoryId: 6,
    name: "Renault",
    description: `Renault to francuska marka samochodów, która oferuje wiele różnych modeli, od małych miejskich aut po duże vany i crossovery. Jedną z największych zalet samochodów Renault jest ich innowacyjność - marka zawsze dąży do wprowadzania nowych technologii, dzięki czemu ich samochody są na bieżąco z trendami motoryzacyjnymi. Renault oferuje również wiele modeli samochodów elektrycznych i hybrydowych, co przyczynia się do ochrony środowiska naturalnego.
    Inną zaletą samochodów Renault jest ich wysoka jakość i trwałość. Marka stawia na jakość swoich produktów, co przekłada się na satysfakcję klientów. W samochodach Renault znajdziemy wygodne wnętrza, ergonomiczne fotele, wiele miejsca dla pasażerów i bagażu, a także wiele udogodnień, takich jak klimatyzacja czy systemy multimedialne.
    Bezpieczeństwo to kolejna zaleta samochodów Renault - marka oferuje wiele zaawansowanych systemów bezpieczeństwa, takich jak systemy kontroli trakcji, hamowania awaryjnego, czujniki martwego pola, kamery cofania i wiele innych. Dzięki temu kierowcy i pasażerowie czują się bezpieczni i pewni podczas jazdy.
    Ostatecznie, samochody Renault są stosunkowo tanie w porównaniu z niektórymi innymi markami, co czyni je bardziej dostępnymi dla szerszego grona klientów. Dostępność i niskie ceny są z pewnością dużymi atutami samochodów Renault, co przyciąga wiele osób poszukujących nowego samochodu.` ,
    cars: [
        {
            id: 61,
            name: "Renault Clio",
            enginePower: 200,
            mileage: 124448,
            year: 2013,
            price: 51900,
            image: "images/modele/renault/renaultClio.jpeg"
        },
        {
            id: 62,
            name: "Renault Grand Scenic",
            enginePower: 130,
            mileage: 148413,
            year: 2017,
            price: 62900,
            image: "images/modele/renault/renaultGScenic.jpg"
        },
        {
            id: 62,
            name: "Renault Captur",
            enginePower: 91,
            mileage: 18400,
            year: 2021,
            price: 105000,
            image: "images/modele/renault/renaultCaptur.jpg"
        },
        {
            id: 64,
            name: "Renault Koleos",
            enginePower: 177,
            mileage: 157000,
            year: 2018,
            price: 84800,
            image: "images/modele/renault/renaultKoleos.jpeg"
        }
    ]

}
]

export const brandDetails = [
    {
        id: 11,
        brand: "Kia",
        name: "Kia Stinger",
        description: "Kia Stinger to sportowe, czteroosobowe coupe, które zostało wprowadzone na rynek w 2017 roku. Samochód ten jest oferowany z dwoma silnikami benzynowymi: 2.0-litrowym czterocylindrowym silnikiem o mocy 255 KM lub 3.3-litrowym V6 o mocy 365 KM. Kia Stinger oferowana jest także w wersji z napędem na cztery koła oraz z automatyczną skrzynią biegów.",
        price: 125900,
        image: "images/modele/Kia/KiaSt.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "3.3 T-GDI V6 GT AWD"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2018
            },{
                id: 3,
                name: "Przebieg",
                value: 39500
            },{
                id: 4,
                name: "Moc silnika",
                value: 370
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Sedan"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 12,
        brand: "Kia",
        name: "Kia Sportage",
        description: `Kia Sportage to popularny SUV produkowany przez południowokoreańską firmę Kia Motors. Samochód ten jest dostępny na rynku od 1993 roku, a w trakcie swojej ponad 30-letniej historii przeszedł kilka zmian i modernizacji.
        Obecna generacja Kia Sportage została wprowadzona na rynek w 2016 roku, a w 2021 roku przeszła kolejną modernizację. Samochód ten charakteryzuje się nowoczesnym i dynamicznym designem, z dużymi reflektorami i charakterystyczną, szerszą od góry ku dołowi, atrapą chłodnicy.
        Kia Sportage oferuje przestronne wnętrze, które jest dobrze wykończone i wyposażone w nowoczesne technologie. Samochód może pomieścić pięć osób i posiada dużą przestrzeń bagażową. Na desce rozdzielczej znajduje się dotykowy ekran systemu multimedialnego z funkcją nawigacji oraz systemu audio, a także wiele innych funkcji.
        Pod maską Kia Sportage można znaleźć różne silniki, w zależności od wersji. Najpopularniejszą opcją jest benzynowy silnik czterocylindrowy o pojemności 2,0 litra i mocy 163 KM, który jest sprzężony z 6-biegową manualną lub 6-biegową automatyczną skrzynią biegów. Samochód jest również dostępny w wersji z napędem na cztery koła oraz z silnikiem wysokoprężnym.
        Kia Sportage oferuje także wiele systemów bezpieczeństwa i asystujących kierowcę, takich jak system automatycznego hamowania w sytuacjach awaryjnych, system monitorowania martwego pola oraz system utrzymywania pasa ruchu.
        Podsumowując, Kia Sportage to przestronny i nowoczesny SUV, który oferuje zaawansowane technologie i systemy bezpieczeństwa, a także różne opcje silnikowe i napędowe, co pozwala dostosować go do potrzeb i preferencji kierowcy.`,
        price: 96000,
        image: "images/modele/Kia/KiaSp.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "1.6 GDI M 2WD"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2019
            },{
                id: 3,
                name: "Przebieg",
                value: 40290
            },{
                id: 4,
                name: "Moc silnika",
                value: 132
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "SUV"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 13,
        brand: "Kia",
        name: "Kia Ceed",
        description: `Kia Ceed to samochód osobowy segmentu C produkowany przez południowokoreańską markę Kia Motors od 2006 roku. Jest to popularny model oferowany w wielu wersjach nadwoziowych, w tym jako hatchback, kombi i sedan. Kia Ceed wyróżnia się nowoczesnym i atrakcyjnym designem, który został zaprojektowany z myślą o europejskich kierowcach. Wnętrze samochodu jest przestronne i funkcjonalne, oferując wygodne miejsca zarówno dla kierowcy, jak i pasażerów. Kia Ceed to popularny wybór w segmencie samochodów kompaktowych, oferujący wygodną jazdę, dobre osiągi i atrakcyjny wygląd.`,
        price: 61900,
        image: "images/modele/Kia/KiaC.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "Cee'd 1.0 T-GDI GT Line"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2019
            },{
                id: 3,
                name: "Przebieg",
                value: 44000
            },{
                id: 4,
                name: "Moc silnika",
                value: 120
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Kompakt"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 21,
        brand: "Dacia",
        name: "Dacia Logan",
        description: `Model ten zadebiutował na rynku w 2004 roku i od tamtej pory zdobył popularność w wielu krajach na całym świecie, ze względu na swoją prostotę, niezawodność i przystępną cenę. Dacia Logan cieszy się popularnością wśród klientów, którzy szukają prostego, niezawodnego i przede wszystkim niedrogiego samochodu. Jest to także często wybierany model przez floty samochodowe oraz taksówkarzy, ze względu na niskie koszty eksploatacji i dostępność części zamiennych.`,
        price: 61900,
        image: "images/modele/dacia/DaciaLogan.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "MCV 1.2 16V Laureate"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2014
            },{
                id: 3,
                name: "Przebieg",
                value: 59000
            },{
                id: 4,
                name: "Moc silnika",
                value: 75
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Kombi"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 22,
        brand: "Dacia",
        name: "Dacia Duster",
        description: `Dacia Duster to kompaktowy SUV produkowany przez rumuńską firmę motoryzacyjną Dacia, która jest częścią koncernu Renault. Samochód ten został wprowadzony na rynek w 2010 roku i od tego czasu stał się popularnym modelem w Europie i innych częściach świata. Dacia Duster charakteryzuje się prostą, ale nowoczesną stylistyką, dużą przestrzenią w kabinie pasażerskiej i bagażniku oraz przystępną ceną w stosunku do innych SUV-ów na rynku. Samochód ten jest popularny zarówno wśród klientów indywidualnych, jak i wśród flotowych, czyli firmowych.`,
        price: 61900,
        image: "images/modele/dacia/DaciaDuster.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "1.0 TCe Prestige"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2021
            },{
                id: 3,
                name: "Przebieg",
                value: 30000
            },{
                id: 4,
                name: "Moc silnika",
                value: 100
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna+LPG"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "SUV"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 23,
        brand: "Dacia",
        name: "Dacia Sandero",
        description: `Dacia Sandero to kompaktowy samochód osobowy produkowany przez rumuńską firmę Dacia, która jest częścią koncernu Renault-Nissan-Mitsubishi. Pod względem wyglądu zewnętrznego, Dacia Sandero wyróżnia się prostą i funkcjonalną sylwetką. Wnętrze samochodu jest przestronne i oferuje odpowiednią ilość miejsca dla kierowcy i pasażerów. Materiały wykorzystane do wykończenia wnętrza są proste i trwałe. Podsumowując, Dacia Sandero to prosta i funkcjonalna propozycja w segmencie kompaktowych samochodów osobowych, oferująca przestronne wnętrze, niskie koszty użytkowania i różnorodne wersje wyposażenia.`,
        price: 61900,
        image: "images/modele/dacia/daciaSandero.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "TCe 90 (S&S) Comfort"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2017
            },{
                id: 3,
                name: "Przebieg",
                value: 118000
            },{
                id: 4,
                name: "Moc silnika",
                value: 90
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Hatchback"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },
    {
        id: 31,
        brand: "Ford",
        name: "Ford Fiesta",
        description: `Ford Fiesta to popularny samochód osobowy, produkowany przez amerykańską firmę Ford Motor Company od 1976 roku. Samochód należy do segmentu B i jest jednym z najpopularniejszych modeli w swojej klasie na całym świecie. Ford Fiesta to samochód, który oferuje bardzo dobrą jakość wykonania, dynamiczne osiągi, komfortową jazdę i nowoczesne rozwiązania technologiczne, a jednocześnie jest przystępny cenowo i oszczędny w eksploatacji. Dlatego cieszy się on ogromną popularnością zarówno wśród kierowców indywidualnych, jak i wśród flot samochodowych i wypożyczalni.`,
        price: 61900,
        image: "images/modele/ford/fordFiesta.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "Fiesta 1.4 Titanium"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2009
            },{
                id: 3,
                name: "Przebieg",
                value: 109465 
            },{
                id: 4,
                name: "Moc silnika",
                value: 96
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Hatchback"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },{
        id: 32,
        brand: "Ford",
        name: "Ford Focus",
        description: `Ford Focus to samochód osobowy produkowany przez amerykańską firmę Ford Motor Company od 1998 roku. Jest to popularny model, który zdobył wiele nagród i wyróżnień za swoje osiągi, design i innowacyjne rozwiązania. Ford Focus charakteryzuje się również dobrą jakością jazdy i precyzyjnym prowadzeniem. Samochód oferuje wygodne i przestronne wnętrze, a także duży bagażnik, co czyni go świetnym wyborem zarówno dla codziennych dojazdów do pracy, jak i na dalsze wyjazdy.`,
        price: 61900,
        image: "images/modele/ford/fordFocus.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "1.5 EcoBlue Trend Edition"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2019
            },{
                id: 3,
                name: "Przebieg",
                value: 72144
            },{
                id: 4,
                name: "Moc silnika",
                value: 120
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Diesel"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Kombi"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },{
        id: 32,
        brand: "Ford",
        name: "Ford Mustang",
        description: `Ford Mustang to kultowy samochód sportowy produkowany przez amerykańską firmę Ford Motor Company od 1964 roku. Znany z charakterystycznego designu i osiągów, Mustang jest jednym z najbardziej rozpoznawalnych i ikonicznych modeli samochodów na świecie. Mustang charakteryzuje się również agresywnym i wyrazistym designem, który obejmuje charakterystyczne reflektory przednie w kształcie trapezu, grilla w kształcie litery "U" oraz muskularne nadkola. Wewnątrz, Mustang oferuje wygodne i sportowe wnętrze z nowoczesnymi funkcjami, takimi jak klimatyzacja, system multimedialny i nawigacja GPS. Jako samochód sportowy, Mustang oferuje doskonałe osiągi i doskonałe prowadzenie, co czyni go idealnym dla miłośników szybkiej jazdy i adrenaliny. `,
        price: 89800,
        image: "images/modele/ford/fordMustang.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "5.0 V8 GT"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2015
            },{
                id: 3,
                name: "Przebieg",
                value: 174000
            },{
                id: 4,
                name: "Moc silnika",
                value: 305
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "Coupe"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },{
        id: 32,
        brand: "Ford",
        name: "Ford Explorer",
        description: `Ford Explorer to duży SUV produkowany przez amerykańską firmę Ford Motor Company od 1990 roku. Jest to jeden z najpopularniejszych SUV-ów na rynku, oferujący przestronne wnętrze, wygodę i zaawansowane funkcje technologiczne. Explorer charakteryzuje się także doskonałymi osiągami i komfortem jazdy, co czyni go idealnym dla rodzin, które potrzebują dużego i wygodnego samochodu na długie trasy lub dla osób, które potrzebują samochodu z dużą przestrzenią ładunkową. Wraz z systemem napędu na cztery koła, Explorer może być również dobrym wyborem dla osób, które chcą pokonywać trudne warunki terenowe lub przygodowe wyprawy.`,
        price: 89800,
        image: "images/modele/ford/fordExplorer.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "V"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2012
            },{
                id: 3,
                name: "Przebieg",
                value: 237836
            },{
                id: 4,
                name: "Moc silnika",
                value: 287
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna+LPG"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "SUV"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    },{
        id: 41,
        brand: "Volkswagen",
        name: "Volkswagen Passat",
        description: ``,
        price: 89800,
        image: "images/modele/ford/fordExplorer.jpeg",
        details: [
            {
                id: 1,
                name: "Wersja",
                value: "V"

            },{
                id: 2,
                name: "Rok produkcji",
                value: 2012
            },{
                id: 3,
                name: "Przebieg",
                value: 237836
            },{
                id: 4,
                name: "Moc silnika",
                value: 287
            },{
                id: 5,
                name: "Rodzaj paliwa",
                value: "Benzyna+LPG"
            },{
                id: 6,
                name: "Typ nadwozia",
                value: "SUV"
            }
        ],
        accessories: [
                {
                    id: 1,
                    name: "Kamera cofania",
                    price: 800
                },{
                    id: 2,
                    name: "Przyciemnianie tylnich szyb",
                    price: 400
                },{
                    id: 3,
                    name: "Ogrzewanie postojowe",
                    price: 3000
                },{
                    id: 4,
                    name: "Relingi dachowe",
                    price: 600
                },{
                    id: 5,
                    name: "System alarmowy",
                    price: 1200
                },{
                    id: 6,
                    name: "Felgi aluminiowe",
                    price: 1500
                }
        ]
    }
]
