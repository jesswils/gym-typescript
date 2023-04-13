import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-logo-cream' : '' }
      transition duration-200 hover:text-logo-cream text-xl
      nav-link
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;