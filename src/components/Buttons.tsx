import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="buttons">
    {!isHome && <CarbonAds />}
    <h3 className="title">Buttons</h3>
    <p className="description">
      The Button, an essential part of any user experience. Buttons come in
      three basic styles in Milligram: The <code>button</code> element has flat
      color by default, whereas <code>.button-outline</code> has a simple
      outline around, and <code>.button-clear</code> is entirely clear.
    </p>
    <div className="example">
      <a className="button" href="#" onClick={event => event.preventDefault()}>
        Default Button
      </a>
      <button className="button button-outline">Outlined Button</button>
      <input
        className="button button-clear"
        type="submit"
        value="Clear Button"
      />
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- Default Button -->
<a className="button" href="#">Default Button</a>

<!-- Outlined Button -->
<button className="button button-outline">Outlined Button</button>

<!-- Clear Button -->
<input className="button button-clear" type="submit" value="Clear Button">

<!-- Easily apply the .button class for button style in the anchor element. -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="buttons.html" title="Buttons">
          buttons
        </a>
        .
      </p>
    )}
  </section>
)
