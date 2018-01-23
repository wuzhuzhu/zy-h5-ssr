import CleanLayout from './clean-layouts'

export default ({ children, title }) => (
  <CleanLayout>
    {/*<p>这个来自于main-layout</p>*/}
    { children }
  </CleanLayout>
)
