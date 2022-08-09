import React, { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import Map from './Map'
import Loader from './Loader'

export default function Details() {
const {id} = useParams()
const [mapLatitude, setMapLatitude] = useState(null);
const [mapLongtitude, setMapLongtitude] = useState(null);
const [photo, setPhoto] = useState([]);
const [data, setData] = useState([]);
const [res, setRes] = useState(null)

useEffect(()=> {
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3nPoVvWw9BVXWteiiOla8yir/P8jNL0GujqlRgGMR8d8='
        }
      };

      
      fetch(`https://api.foursquare.com/v3/places/${id}/photos?limit=40&sort=NEWEST&classifications=food%2Coutdoor%2Cmenu%2Cindoor`, options)
        .then(response => response.json())
        .then(response => {
            setPhoto(response)
            setData(response)
        })
        .catch(err => alert("photo site: "+err));
      fetch(`https://api.foursquare.com/v3/places/${id}?fields=timezone%2Ccategories%2Cfsq_id%2Cname%2Clocation%2Ctastes%2Cmenu%2Cprice%2Crating%2Chours%2Cdescription%2Cchains%2Cfeatures%2Csocial_media%2Cgeocodes`, options)
        .then(response => response.json())
        .then(response => {
            setMapLatitude(response.geocodes.main.latitude)
            setMapLongtitude(response.geocodes.main.longitude)
            console.log(response)
            setRes(response)
        })
        .catch(err => alert("data site: "+ err));
},[])

    return (
    <div className='overflow-x-hidden'>
        {(mapLatitude && mapLongtitude && data ) ? <> <Map mapLatitude={mapLatitude} mapLongtitude={mapLongtitude} res={res}/> 
        <div className='detail flex flex-col-reverse md:flex-row  w-[100%] mt-8  bg-slate-50'>
            <section className='w-[100%] md:w-[50%] px-4 card  my-4 ml-0 md:ml-[7rem] c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                <h1 className='text-2xl mb-5 font-medium text-[#3f3d56]'>Features </h1>
                <div>
                    <div className='mb-4 flex'>
                        <span> Accepts home delivery</span>
                        <span>{res !== null ? res.features.services ? res.features.services.delivery ?  <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo'/>   : <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/> : " <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/> " : "not specified"}</span>
                    </div>

                    <div className='mb-4 flex'>
                        <span> Accepts credit card </span>
                        <span>{res !== null ? (res.features.payment && res.features.payment.credit_cards) ? res.features.payment.credit_cards.accepts_credit_cards ?  <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo'/>   : <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/>  :  <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/> : "not specified"}</span>
                    </div>

                    <div className='mb-4 flex'>
                        <span>Allows Reservations</span>
                        <span>{res !== null ? (res.features.services && res.features.services.dine_in) ? res.features.services.dine_in.reservations ?  <img className='ml-2' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/845/845646.png' alt='logo'/>   : <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/> : <img className='ml-2' width={20} height={20} src='https://as1.ftcdn.net/v2/jpg/00/66/50/16/1000_F_66501665_JfLTzP1VkkCjJeS7E7v0WLiOu4Kip5Oz.jpg' alt='logo'/>  : "not specified"}</span>
                    </div>

                </div>
            </section>
            <section className=' w-[100%] md:w-[50%] px-4 card md:mx-7 my-4  h-[15rem] bg-white shadow-md hover:shadow-xl rounded-lg overflow-x-hidden overflow-y-auto'>
                <h1 className='text-2xl font-medium mb-5 text-[#3f3d56]'> Menu </h1>
                <div className='pics flex flex-wrap p-3 md:p-0 order-1 md:order-none'>
                    
                    {photo.length > 0 ? photo.map(item => {
                    return <img className='mr-2 mb-2' src={item.prefix+"500x300"+item.suffix} alt='restaurant'  width="130px" height="150px"/>
                    })
                    :
                    <>
                    <img className='mr-2' src='https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg' alt='restaurant'  width="130px" height="150px"/>
                    <img className='mr-2' src='https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg' alt='restaurant'  width="130px" height="150px"/>
                    <img className='mr-2' src='https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg' alt='restaurant'  width="130px" height="150px"/>
                    <img className='mr-2' src='https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg' alt='restaurant'  width="130px" height="150px"/>
                    <img className='mr-2' src='https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg' alt='restaurant'  width="130px" height="150px"/>
                    </>}
                </div>
            </section>
        </div>
        </>
        : <Loader />}
    </div>
  )
}
