import Image from 'next/image'
import atvSVG from '/public/atv.svg'
function Logo() {
  return (
  <>
    <Image 
    src={atvSVG}
    width={50}
    alt='logo'
    />
  </>
  )
}

export default Logo
