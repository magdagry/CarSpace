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
    description: `Kia to marka samochodowa pochodząca z Korei Południowej, założona w 1944 roku. Obecnie jest jednym z największych producentów samochodów na świecie, z siecią sprzedaży i serwisów w ponad 190 krajach. Kia znana jest z produkcji szerokiej gamy samochodów, w tym kompaktowych i miejskich modeli, jak również SUV-ów, crossoverów i samochodów sportowych. W ostatnich latach firma koncentruje się na rozwijaniu swojej oferty samochodów elektrycznych i hybrydowych. Kia słynie z oferowania wysokiej jakości i innowacyjnych samochodów w przystępnej cenie. Firma stawia na nowoczesny design i zaawansowane technologie, takie jak inteligentne systemy bezpieczeństwa i rozrywki. W ostatnich latach Kia zdobyła wiele nagród i wyróżnień, w tym tytuł "Najlepszej Marki Samochodowej" w rankingu "Best Global Brands" magazynu Interbrand. Ważnym elementem strategii marki Kia jest troska o środowisko naturalne. Firma koncentruje się na rozwijaniu samochodów z niższym poziomem emisji spalin i coraz większą liczbą modeli elektrycznych. Podsumowując, Kia to innowacyjna marka samochodowa, oferująca wysokiej jakości pojazdy w przystępnej cenie, które są jednocześnie przyjazne dla środowiska.` ,
    cars: [
        {
            id: 0,
            name: "Kia Stringer",
            enginePower: 365,
            mileage: 84000,
            year: 2018,
            price: 73000,
            image: "images/modele/Kia/KiaSt.jpeg"
        },
        {
            id: 1,
            name: "Kia Sportage",
            enginePower: 130,
            mileage: 74637,
            year: 2019,
            price: 96000,
            image: "images/modele/Kia/kiaSp.jpeg"
        },
        {
            id: 2,
            name: "Kia Ceed",
            enginePower: 81,
            mileage: 188365,
            year: 2017,
            price: 38000,
            image: "images/modele/Kia/KiaC.jpeg"
        }
    ]
},
{
    id: 1,
    categoryId: 1,
    name: "Dacia",
    description: `Dacia to marka samochodowa pochodząca z Rumunii, założona w 1966 roku. Firma specjalizuje się w produkcji przystępnych cenowo samochodów dla masowego odbiorcy.
    Dacia oferuje szeroką gamę samochodów, w tym miejskie modele, samochody rodzinne, SUV-y i dostawcze. Modele Dacii charakteryzują się prostą, ale funkcjonalną stylistyką oraz prostą i solidną konstrukcją. Dacia słynie z tego, że oferuje samochody o stosunkowo niskiej cenie, ale jednocześnie nie rezygnuje z jakości.
    Dacia ma również na swoim koncie wiele wyróżnień i nagród za swoje modele, w tym nagrodę "Best Value Car" w plebiscycie Auto Trader New Car Awards w Wielkiej Brytanii.
    Dacia jest częścią Grupy Renault i korzysta z technologii i komponentów Renault, co pozwala na zwiększenie efektywności produkcji i oferowanie przystępnych cenowo samochodów.
    Ważnym elementem strategii marki Dacia jest również troska o środowisko naturalne. Firma stawia na produkcję samochodów z mniejszą emisją spalin i coraz większą liczbą modeli hybrydowych i elektrycznych.
    Podsumowując, Dacia to marka samochodowa oferująca solidne i funkcjonalne modele w przystępnej cenie, która cieszy się uznaniem kierowców z całego świata.` ,
    cars: [
        {
            id: 0,
            name: "Dacia Logan",
            enginePower: 75,
            mileage: 59000,
            year: 2014,
            price: 21000,
            image: "images/modele/dacia/daciaLogan.jpeg"
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
            image: "images/modele/dacia/daciaSandero.jpeg"
        },
    ]

},
{
    id: 2,
    categoryId: 2,
    name: "Ford",
    description: `Ford to amerykańska marka samochodów, która ma bogatą historię i oferuje wiele różnych modeli, od małych hatchbacków po duże SUV-y i pick-upy. Jedną z największych zalet samochodów Ford jest ich trwałość i niezawodność. Ford to jedna z najstarszych i najbardziej uznanych marek samochodowych na świecie, co przekłada się na ich wysoką jakość. Ford stawia na jakość i wytrzymałość swoich produktów, co przekłada się na długą żywotność samochodów.
    Inną zaletą samochodów Ford jest ich innowacyjność i zaawansowana technologia. Ford wprowadza na rynek wiele innowacyjnych rozwiązań, takich jak systemy bezpieczeństwa, systemy multimedialne i nowoczesne silniki, które oferują wyższą moc i lepsze osiągi.
    Ford oferuje również wiele różnych modeli, w tym samochody sportowe, luksusowe i SUV-y. Dzięki temu każdy klient może znaleźć samochód, który idealnie odpowiada jego potrzebom i stylowi życia. Wśród popularnych modeli Forda znajdują się między innymi Mustang, Focus, Fiesta, Edge i Escape.
    Bezpieczeństwo to kolejna zaleta samochodów Ford. Marka oferuje wiele zaawansowanych systemów bezpieczeństwa, takich jak systemy kontroli trakcji, hamowania awaryjnego, czujniki martwego pola, kamery cofania i wiele innych. Ford stawia na bezpieczeństwo swoich klientów, co przekłada się na ich zadowolenie i pewność podczas jazdy.
    Ostatecznie, Ford oferuje także doskonałą obsługę posprzedażową, w tym szeroką sieć serwisów i części zamiennych. To oznacza, że klienci Forda mogą liczyć na wsparcie i pomoc w przypadku problemów z ich samochodami, co zwiększa ich zadowolenie z zakupu.` ,
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
            image: "images/modele/ford/fordMustang.jpeg"
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
    id: 4,
    categoryId: 4,
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
    id: 5,
    categoryId: 5,
    name: "Renault",
    description: `Renault to francuska marka samochodów, która oferuje wiele różnych modeli, od małych miejskich aut po duże vany i crossovery. Jedną z największych zalet samochodów Renault jest ich innowacyjność - marka zawsze dąży do wprowadzania nowych technologii, dzięki czemu ich samochody są na bieżąco z trendami motoryzacyjnymi. Renault oferuje również wiele modeli samochodów elektrycznych i hybrydowych, co przyczynia się do ochrony środowiska naturalnego.
    Inną zaletą samochodów Renault jest ich wysoka jakość i trwałość. Marka stawia na jakość swoich produktów, co przekłada się na satysfakcję klientów. W samochodach Renault znajdziemy wygodne wnętrza, ergonomiczne fotele, wiele miejsca dla pasażerów i bagażu, a także wiele udogodnień, takich jak klimatyzacja czy systemy multimedialne.
    Bezpieczeństwo to kolejna zaleta samochodów Renault - marka oferuje wiele zaawansowanych systemów bezpieczeństwa, takich jak systemy kontroli trakcji, hamowania awaryjnego, czujniki martwego pola, kamery cofania i wiele innych. Dzięki temu kierowcy i pasażerowie czują się bezpieczni i pewni podczas jazdy.
    Ostatecznie, samochody Renault są stosunkowo tanie w porównaniu z niektórymi innymi markami, co czyni je bardziej dostępnymi dla szerszego grona klientów. Dostępność i niskie ceny są z pewnością dużymi atutami samochodów Renault, co przyciąga wiele osób poszukujących nowego samochodu.` ,
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
            image: "images/modele/renault/renaultGScenic.jpg"
        },
        {
            id: 2,
            name: "Renault Captur",
            enginePower: 91,
            mileage: 18400,
            year: 2021,
            price: 105000,
            image: "images/modele/renault/renaultCaptur.jpg"
        },
        {
            id: 3,
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
