import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="utilities">
    {!isHome && <CarbonAds />}
    <h3 className="title">Utilities</h3>
    <p className="description">
      Milligram has some functional classes to improve the performance and
      productivity everyday.
    </p>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- Functional Classes -->

<!-- Clear any float  -->
<div class="clearfix">

<!-- Float either directions -->
<div class="float-left"></div>
<div class="float-right"></div>

</div>`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="utilities.html" title="Utilities">
          utilities
        </a>
        .
      </p>
    )}
  </section>
)
