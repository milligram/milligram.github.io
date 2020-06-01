import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="blockquotes">
    {!isHome && <CarbonAds />}
    <h3 className="title">Blockquotes</h3>
    <p className="description">
      The Blockquote represents a section that is quoted from another source.
    </p>
    <div className="example">
      <blockquote>
        <p>
          <em>Yeah!! Milligram is amazing.</em>
        </p>
      </blockquote>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<blockquote>
  <p><em>Yeah!! Milligram is amazing.</em></p>
</blockquote>`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="blockquotes.html" title="Blockquotes">
          blockquotes
        </a>
        .
      </p>
    )}
  </section>
)
