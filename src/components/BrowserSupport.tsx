import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="browser-support">
    {!isHome && <CarbonAds />}
    <h3 className="title">Browser Support</h3>
    <p className="description">
      While not designed for old browsers, Milligram has support for some old
      versions, but we recommend using the latest versions of their browsers.
    </p>
    <div className="example">
      <ul>
        <li>
          Brave <small>latest</small>
        </li>
        <li>
          Chrome <small>latest</small>
        </li>
        <li>
          Edge <small>latest</small>
        </li>
        <li>
          Firefox <small>latest</small>
        </li>
        <li>
          IE <small>latest</small>
        </li>
        <li>
          Opera <small>latest</small>
        </li>
        <li>
          Safari <small>latest</small>
        </li>
      </ul>
      {isHome && (
        <p>
          See more examples of{' '}
          <a href="browser-support.html" title="Browser Support">
            browser support
          </a>
          .
        </p>
      )}
    </div>
  </section>
)
