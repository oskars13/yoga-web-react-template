

type Props = {
  web: 'instagram' | 'facebook' | 'linkedin'
  username: string
}

export default function SocialLinkable ({ web, username }: Props){
  const path = web === 'linkedin'? web + '.com/in/' : web + '.com/'
  return (
    <a 
      href={`https://www.${ path }${ username }/`}
      target="__blank"
    >
      <img src={`/social/${ web }.png`} alt={`Icono de acceso a ${ web } (usuario ${username})`} />
    </a>
  )
}