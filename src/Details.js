import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Map from './Map'
import Loader from './Loader'

export default function Details() {
    const { id } = useParams()
    const [mapLatitude, setMapLatitude] = useState(null);
    const [mapLongtitude, setMapLongtitude] = useState(null);
    const [photo, setPhoto] = useState([]);
    const [res, setRes] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'fsq3gq8f3w+ZSaK/ihwuv1UI9+gJMEQJsq1jYVuM4AkiI04='
            }
        };

        const arrayOfUrl = [
            `https://api.foursquare.com/v3/places/${id}/photos?limit=40&sort=NEWEST&classifications=food%2Coutdoor%2Cmenu%2Cindoor`,
            `https://api.foursquare.com/v3/places/${id}?fields=timezone%2Ccategories%2Cfsq_id%2Cname%2Clocation%2Ctastes%2Cmenu%2Cprice%2Crating%2Chours%2Cdescription%2Cchains%2Cfeatures%2Csocial_media%2Cgeocodes`
        ]

        async function getData() {
            let [photos, data] = await Promise.all(arrayOfUrl.map(url => {
                return fetch(url, options)
                    .then(res => res.json())
            }))
            setMapLatitude(data.geocodes.main.latitude)
            setMapLongtitude(data.geocodes.main.longitude)
            setPhoto(photos)
            setRes(data)
        }
        getData()

    }, [id])

    return (
        <div className='overflow-x-hidden'>
            {(res) ?
                <>
                    <Map mapLatitude={mapLatitude} mapLongtitude={mapLongtitude} res={res} />
                    <div className='detail flex flex-col-reverse md:flex-row  w-[100%] mt-8  bg-slate-50 '>
                        <section className='w-[100%] md:w-[50%] px-4 card  my-4 ml-0 md:ml-[7rem] p-3 c-card relative block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                            <h1 className='text-2xl mb-5 font-medium text-[#3f3d56] absolute top-3 left-9'>Features </h1>
                            <div className='mt-12 flex flex-wrap ml-5'>
                                <div className='mb-4 flex'>
                                    <span> Accepts home delivery</span>
                                    <span>
                                        {res !== null ?  
                                        res.features.services ? 
                                        res.features.services.delivery ? 
                                        <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo' /> :
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> :
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> :
                                         "not specified"}
                                    </span>
                                </div>

                                <div className='mb-4 flex'>
                                    <span> Accepts credit card </span>
                                    <span>{res !== null ?
                                        (res.features.payment && res.features.payment.credit_cards) ? 
                                        res.features.payment.credit_cards.accepts_credit_cards ? 
                                        <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo' /> : 
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> : 
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> : 
                                        "not specified"}
                                    </span>
                                </div>

                                <div className='mb-4 flex'>
                                    <span>Allows Reservations</span>
                                    <span>{res !== null ? 
                                        (res.features.services && res.features.services.dine_in) ? 
                                        res.features.services.dine_in.reservations ? 
                                        <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo' /> : 
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> : 
                                        <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo' /> : 
                                        "not specified"}
                                    </span>
                                </div>

                            </div>
                        </section>
                        <section className=' w-[100%] md:w-[50%] px-4 card md:mx-7 my-4 p-3 relative h-[15rem] bg-white  rounded-lg overflow-x-hidden '>
                            <h1 className='text-2xl font-medium mb-5 text-[#3f3d56] absolute top-3 left-9'> Menu </h1>
                            <div className='pics flex flex-wrap ml:2 md:ml-5 p-2 md:p-0 order-1 md:order-none image-scroll mt-12 overflow-y-auto h-[150px]'>

                                {photo.length > 0 ? photo.map(item => {
                                    return <img className='mr-2 mb-2' src={item.prefix + "500x300" + item.suffix} alt='restaurant' width="130px" height="150px" />
                                })
                                    :
                                    <>
                                        <img className='mr-2' src='https://fastly.4sqi.net/img/general/500x300/138653338_Jj4m86VFt-RoUJV6rpeGKYdKuPfIKEvn2mXC24XdSI4.jpg' alt='restaurant' width="130px" height="150px" />
                                        <img className='mr-2' src='https://fastly.4sqi.net/img/general/500x300/54815241_o-czJn8aFebd4bAfX-paOaQLnl3Fk17B2bNYFsN-x-M.jpg' alt='restaurant' width="130px" height="150px" />
                                        <img className='mr-2' src='https://fastly.4sqi.net/img/general/500x300/32732550_5i9ZDxwmUQq8LYWpJmf2ILs5P8WGezdF1b1vXLYe36M.jpg' alt='restaurant' width="130px" height="150px" />
                                        <img className='mr-2' src='https://fastly.4sqi.net/img/general/500x300/138653338_Jj4m86VFt-RoUJV6rpeGKYdKuPfIKEvn2mXC24XdSI4.jpg' alt='restaurant' width="130px" height="150px" />

                                    </>}
                            </div>
                        </section>
                    </div>
                </>
                : <Loader />}
        </div>
    )
}
