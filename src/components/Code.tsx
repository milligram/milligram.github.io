import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="code">
    {!isHome && <CarbonAds />}
    <h3 className="title">Code</h3>
    <p className="description">
      The Code element represents a fragment of computer code. Just wrap
      anything in a <code>code</code> and it will appear like this. if you need
      a block, by default, enter the <code>code</code> within the{' '}
      <code>pre</code>element.
    </p>
    <div className="example">
      <pre>
        <code>{`.milligram {
  color: #9b4dca;
}`}</code>
      </pre>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<pre>
  <code>
    .milligram {
      color: #9b4dca;
    }
  </code>
</pre>`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="code.html" title="Code">
          code
        </a>
        .
      </p>
    )}
  </section>
)
