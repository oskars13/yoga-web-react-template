

type Props = {
  web: 'instagram' | 'facebook' | 'linkedin'
  username: string
}

export default function SocialLinkable ({ web, username }: Props){
  const path = web+'.com/'
  return (
    <a 
      href={`https://www.${ web === 'linkedin'? path + 'in/':path }${ username }/`}
      target="__blank"
    >
      <img src={`../../public/social/${ web }.png`} alt={`Logo de Acceso a ${ web } (usuario ${username})`} />
    </a>
  )
}