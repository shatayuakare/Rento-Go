import React from 'react'

const BrandMarquee = () => {


    const brands = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
            title: "BMW"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
            title: "Mercedes"
        },
        {
            img: "https://www.pngall.com/wp-content/uploads/12/Lexus-Logo-PNG-Image.png",
            title: "Lexus"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1647.png",
            title: "Jaguar"
        },
        {
            img: "https://logonoid.com/images/mg-logo.png",
            title: "MG"
        },
        {
            img: "https://pngimg.com/d/kia_PNG4.png",
            title: "KIA"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1665.png",
            title: "Toyato"
        },
        {
            img: "https://www.car-brand-names.com/wp-content/uploads/2016/03/Suzuki-logo.png",
            title: "Suzuki"
        },
        {
            img: "https://www.freepnglogos.com/uploads/ford-logo-png-pic-33.png",
            title: "Ford"
        },
        {
            img: "https://static.wixstatic.com/media/f2bf43_1c5aa7f89f2f428ba001a79910f667a9~mv2.png/v1/fill/w_440,h_354,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f2bf43_1c5aa7f89f2f428ba001a79910f667a9~mv2.png",
            title: "Tata"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1643.png",
            title: "Honda"
        },
        {
            img: "https://pngimg.com/uploads/nissan/small/nissan_PNG63.png",
            title: "Nissan"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1645.png",
            title: "Hyundai"
        },
        {
            img: "https://seeklogo.com/images/M/mahindra-suvs-logo-AAF596FF12-seeklogo.com.png",
            title: "Mahindra"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1653.png",
            title: "Land Rover"
        },
        {
            img: "https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png",
            title: "JEEP"
        },
        {
            img: "https://pngimg.com/d/car_logo_PNG1645.png",
            title: "Hyundai"
        },
    ]

    return (
        <div className="overflow-hideen px-12 py-10 bg-zinc-100">
            <marquee className={""} behavior="" direction="left" scrollamount={20}>
                <div className="flex gap-32">
                    {
                        brands.map((elem, index) => (
                            <img className='h-28' src={elem.img} alt={elem.title} key={index} />
                        ))
                    }
                </div>
            </marquee>
        </div>
    )
}

export default BrandMarquee