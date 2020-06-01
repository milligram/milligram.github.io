import Home from '../components/Home'
import Showcase from '../components/Showcase'
import Why from '../components/Why'
import GettingStarted from '../components/GettingStarted'
import Typography from '../components/Typography'
import Blockquotes from '../components/Blockquotes'
import Buttons from '../components/Buttons'
import Lists from '../components/Lists'
import Forms from '../components/Forms'
import Tables from '../components/Tables'
import Grids from '../components/Grids'
import Code from '../components/Code'
import Utilities from '../components/Utilities'
import Tips from '../components/Tips'
import BrowserSupport from '../components/BrowserSupport'

export default () => (
  <>
    <Home />
    <Showcase isHome={true} />
    <Why />
    <GettingStarted isHome={true} />
    <Typography isHome={true} />
    <Blockquotes isHome={true} />
    <Buttons isHome={true} />
    <Lists isHome={true} />
    <Forms isHome={true} />
    <Tables isHome={true} />
    <Grids isHome={true} />
    <Code isHome={true} />
    <Utilities isHome={true} />
    <Tips isHome={true} />
    <BrowserSupport isHome={true} />
  </>
)
