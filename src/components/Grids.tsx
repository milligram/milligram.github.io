import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="grids">
    {!isHome && <CarbonAds />}
    <h3 className="title">Grids</h3>
    <p className="description">
      The Grid is a fluid system with a max width of <code>112.0rem</code>{' '}
      <small>(1120px)</small>, that shrinks with the browser/device at smaller
      sizes. The max width can be changed with one line of CSS and all columns
      will resize accordingly. Milligram is different than most because of its
      use of the <strong>CSS Flexible Box Layout Module standard</strong>. The
      advantage is the simplicity, and we know that a functional code is very
      important for maintainability and scalability. Simply add columns you want
      in a row, and they'll evenly take up the available space. If you want
      three columns, add three columns, if you want five columns, add five
      columns. There is no restriction on number of columns, but we advise you
      to follow a design pattern of grid system. See more tips on best practices
      in the
      <a href="#tips" title="Tips">
        {' '}
        tips
      </a>
      .
    </p>
    <div className="example">
      <div className="container">
        <div className="row">
          <div className="column">
            <span className="column-demo">.column</span>
          </div>
          <div className="column">
            <span className="column-demo">.column</span>
          </div>
          <div className="column">
            <span className="column-demo">.column</span>
          </div>
          <div className="column">
            <span className="column-demo">.column</span>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span className="column-demo">.column</span>
          </div>
          <div className="column column-50 column-offset-25">
            <span className="column-demo">.column-50.column-offset-25</span>
          </div>
        </div>
      </div>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- .container is main centered wrapper -->
<div className="container">

  <div className="row">
    <div className="column">.column</div>
    <div className="column">.column</div>
    <div className="column">.column</div>
    <div className="column">.column</div>
  </div>

  <div className="row">
    <div className="column">.column</div>
    <div className="column column-50 column-offset-25">.column column-50 column-offset-25</div>
  </div>

</div>

<!-- Every .column added inside a .row will automatically receive an equal amount of the available area. -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="grids.html" title="Grids">
          grids
        </a>
        .
      </p>
    )}
  </section>
)
