import React from 'react'
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
        <img className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684223_.jpg"
        alt=""
        />
        <div className="home__row">
        <Product
            id={123}
            title="Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg"
        />
        <Product
            id={124}
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={800}
            rating={5}
            image="data:image/webp;base64,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"
        />
        </div>
        <div className="home__row">
        <Product
            id={125}
            title="Sceptre E248W-19203R 24 inch Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018 "
            price={80}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/512qAvJUeUL._AC_US160_.jpg"
        />
        <Product
            id={126}
            title="PlayStation 4 Slim 1TB Console"
            price={300}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL._AC_US218_.jpg"
        />
        <Product
            id={127}
            title="KitchenAid KSM155GBCA 5-Qt. Artisan Design Series with Glass Bowl - Candy Apple Red"
            price={389}
            rating={3}
            image="https://m.media-amazon.com/images/I/81QkLzXfKHL._AC_UL320_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
            id={128}
            title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)"
            price={100}
            rating={5}
            image="https://m.media-amazon.com/images/I/81mHL0psH-L._AC_UL320_.jpg"
        />
        </div>
    </div>
    )
}

export default Home
