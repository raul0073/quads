import { PiWhatsappLogo } from 'react-icons/pi'

function Footer() {
  return (
    <section className="w-full bg-transparent p-4">
      <div className="flex justify-end">
      <div className='w-fit text-3xl'>
        <PiWhatsappLogo color='green' className='cursor-pointer hover:animate-pulse duration-75' />
      </div>
      </div>
      
    </section>
  )
}

export default Footer
