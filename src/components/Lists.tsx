import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="lists">
    {!isHome && <CarbonAds />}
    <h3 className="title">Lists</h3>
    <p className="description">
      The List is a very versatile and common way to display items. Milligram
      has three types of lists: The unordered list use <code>ul</code> element
      will be marked with a outline circles, the ordered list use{' '}
      <code>ol</code> element and your items will be marked with numbers, the
      description list use <code>dl</code> element and your items will not be
      marking, only spacings.
    </p>
    <div className="row example">
      <div className="column">
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
        </ul>
      </div>
      <div className="column">
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
        </ol>
      </div>
      <div className="column">
        <dl>
          <dt>Description list item 1</dt>
          <dd>Description list item 1.1</dd>
        </dl>
      </div>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- Unordered list -->
<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
</ol>

<!-- Description list -->
<dl>
  <dt>Description list item 1</dt>
  <dd>Description list item 1.1</dd>
</dl>

<!-- Easily change any <dl>, <ul> or an <ol> to get clear lists, number lists or outline circles. -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="lists.html" title="Lists">
          lists
        </a>
        .
      </p>
    )}
  </section>
)
