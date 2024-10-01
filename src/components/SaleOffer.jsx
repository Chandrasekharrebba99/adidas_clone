import Outletnav from "./Outletnav"

import '../styles/Outlet.scss'
const brandCategories = [
    {
        id:1,
        name:"Men",
        imgUrl:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_men_outlet_iwp_d_e9fc2f3a8c.jpg"
    },
    {
        id:2,
        name:"WOMEN",
        imgUrl:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_women_outlet_iwp_d_d23e216e9f.jpg"
    }, {
        id:3,
        name:"KIDS",
        imgUrl:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_men_outlet_iwp_d_e9fc2f3a8c.jpg"
    }, {
        id:4,
        name:"SLIDES",
        imgUrl:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_outlet_slides_iwp_tile_image_d_fb5c60c28d.jpg"
    },
    {
        id:5,
        name:"SUMMER WEAR",
        imgUrl:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_summer_wear_iwp_tile_d_04c921dbf0.jpg"
    },
]
const SaleOffer = ()=>{
    return(
        <div>
            <div className="main-sale-catergories">
                <div>


                <Outletnav/>
                <div>
                    <h1>Shoes, Clothing & Accessories Sale: Up to 60% &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br/>Off<span>[4603]</span></h1>
                </div>
                <div className="Sale-categories">
                    {brandCategories.map((item)=>{
                        return(
                            <div className="imageCard-cont" key={item.id}>
                                <img src={item.imgUrl} className="imageCard" alt={item.name}/>
                                <div className="img-card-content"> <p>{item.name}</p>
                                </div>
                               
                            </div>
                        )
                    })}
                </div>
              
                </div>
            </div>
            <div className="bluecontainer">
            </div>
        </div>
    )
}

export default SaleOffer