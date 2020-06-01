import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="typography">
    {!isHome && <CarbonAds />}
    <h3 className="title">Typography</h3>
    <p className="description">
      CSS3 introduces a few new units, including the <code>rem</code> unit,
      which stands for <em>"root em"</em>. The <code>rem</code> unit is relative
      to the font-size of the root element <code>html</code> . That means that
      we can define a single font size on the root element, and define all{' '}
      <code>rem</code> units to be a percentage of that. The typography has{' '}
      <code>font-size</code> defined in 1.6rem (16px) and{' '}
      <code>line-height</code> in 1.6 (24px). <strong>Milligram</strong> uses
      the <code>font-family</code>
      <a
        href="https://www.google.com/fonts/specimen/Roboto"
        title="Roboto by Christian Robertson"
        target="_blank"
        rel="noopener"
      >
        {' '}
        Roboto
      </a>
      , created by
      <u>Christian Robertson</u>, and provided by Google.
    </p>
    <div className="example">
      <div className="row">
        <div className="column">
          <h1>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h1</code> 4.6rem (46px)
            </span>
          </h1>
          <h2>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h2</code> 3.6rem (36px)
            </span>
          </h2>
          <h3>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h3</code> 2.8rem (28px)
            </span>
          </h3>
          <h4>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h4</code> 2.2rem (22px)
            </span>
          </h4>
          <h5>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h5</code> 1.8rem (18px)
            </span>
          </h5>
          <h6>
            Heading
            <span className="heading-font-size">
              {' '}
              <code>h6</code> 1.6rem (16px)
            </span>
          </h6>
        </div>
      </div>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- Base font-size and line-height -->
<p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>

<!-- Other elements to text markup -->
<a>Anchor</a>
<em>Emphasis</em>
<small>Small</small>
<strong>Strong</strong>
<u>Underline</u>

<!-- Default Headings -->
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>

<!-- The base font-size is set at 62.5% for having the convenience of sizing rems in a way that is similar to using px. So basically 1.6rem = 16px. -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="typography.html" title="Typography">
          typography
        </a>
        .
      </p>
    )}
  </section>
)
