import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="tables">
    {!isHome && <CarbonAds />}
    <h3 className="title">Tables</h3>
    <p className="description">
      The Table element represents data in two dimensions or more. We encourage
      the use of proper formatting with <code>thead</code> and{' '}
      <code>tbody</code> to create a <code>table</code>. The code becomes
      cleaner without disturbing understanding.
    </p>
    <div className="example">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron, OH</td>
          </tr>
          <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles, CA</td>
          </tr>
        </tbody>
      </table>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Height</th>
    <th>Location</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Stephen Curry</td>
    <td>27</td>
    <td>1,91</td>
    <td>Akron, OH</td>
  </tr>
  <tr>
    <td>Klay Thompson</td>
    <td>25</td>
    <td>2,01</td>
    <td>Los Angeles, CA</td>
  </tr>
</tbody>
</table>

<!-- Prior to the creation of CSS, HTML <table> elements were often used as a method for page layout. This usage has been discouraged since HTML4, and the <table> element should not be used for layout purposes. -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="tables.html" title="Tables">
          tables
        </a>
        .
      </p>
    )}
  </section>
)
