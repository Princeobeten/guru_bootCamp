import { PEOPLE_URL } from "@/constants"
import Image from "next/image"

interface CampProps {
  'backgroundImage': string,
  'title': string,
  'subtile': string,
  'peopleJoined': string
}

const CampSite = ({backgroundImage, title, subtile, peopleJoined}: CampProps ) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl lg:mx-[80px] 2xl:mx-[0px]`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src='/folded-map.svg' alt="map" width={28} height={28}/>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtile}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} alt="person" width={52} height={52}
              className="inline-block h-10 w-10 rounded-full"/>
            ))}
          </span>
          <p className="regular-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage = "bg-bg-img-1"
          title = "UNICROSS Camp"
          subtile = "Calabar-South, CRS"
          peopleJoined = "50+ Joined"
        />

        <CampSite 
          backgroundImage = "bg-bg-img-2"
          title = "UNICAL Camp"
          subtile = "Calabar-South, CRS"
          peopleJoined = "100+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2  className="regular-24 md:regular-32 2xl:regular-54 capitalize text-white">
            <strong>Feeling overwhelmed </strong>and uncertain about which tech path to take?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white text-justify">
            In the structured environment of a bootcamp, you'll find clarity and guidance to 
            navigate your journey. Embrace the opportunity to explore various technologies, 
            gain hands-on experience, and receive mentorship. With each step, you'll uncover 
            your strengths and interests, paving the way towards a fulfilling career in tech.
          </p>
          <Image src='/quote.svg' alt="quto" width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  )
}

export default Camp