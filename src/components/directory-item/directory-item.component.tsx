import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody } from './directory-item.styles'

interface DirectoryItemProps {
  title: string
  imageUrl: string
  route: string
}

const DirectoryItem: FC<DirectoryItemProps> = ({ title, imageUrl, route }) => {
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem
