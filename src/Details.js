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
        <div className='detail flex flex-col md:flex-row w-screen  mt-8 '>
            <section className='w-[100%] md:w-1/3 px-4'>
                <h1 className='text-2xl mb-5 font-medium'><u> Features </u></h1>
                <div>
                    <div className='mb-4'>
                        <span> Accepts delivery:</span>
                        <span>{res !== null ? JSON.stringify(res.features.services.delivery) : "not specified"}</span>
                    </div>

                    <div className='mb-4'>
                        <span> Accepts credit card :</span>
                        <span>{res !== null ? JSON.stringify(res.features.payment.credit_cards.accepts_credit_cards) : "not specified"}</span>
                    </div>

                    <div className='mb-4'>
                        <span>Allows Reservations:</span>
                        <span>{res !== null ? JSON.stringify(res.features.services.dine_in.reservations) : "not specified"}</span>
                    </div>

                </div>
            </section>
            <section className=' w-[100%] md:w-1/3'>
                <h1 className='text-2xl font-medium mb-5'><u> Photos </u></h1>
                <div className='pics flex flex-wrap p-3 md:p-0'>
                    
                    {photo.length > 0 ? photo.map(item => {
                    return <img className='mr-2 mb-2' src={item.prefix+"500x300"+item.suffix} alt='restaurant'  width="130px" height="150px"/>
                    })
                    :
                    <>
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
