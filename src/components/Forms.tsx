import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="forms">
    {!isHome && <CarbonAds />}
    <h3 className="title">Forms</h3>
    <p className="description">
      The Form has never been exactly fun, and it can be downright painful on a
      mobile device with its on-screen keyboard. Milligram helps to make this
      much easier with design focused on the user experience.
    </p>
    <div className="example">
      <form action="">
        <fieldset>
          <label htmlFor="nameField">Name</label>
          <input id="nameField" type="text" placeholder="CJ Patoilo" />
          <label htmlFor="ageRangeField">Age Range</label>
          <select id="ageRangeField">
            <option value="0-13">0-13</option>
            <option value="14-17">14-17</option>
            <option value="18-23">18-23</option>
            <option value="24+">24+</option>
          </select>
          <label htmlFor="commentField">Comment</label>
          <textarea id="commentField" placeholder="Hi CJ …"></textarea>
          <div className="float-right">
            <input id="confirmField" type="checkbox" />
            <label className="label-inline" htmlFor="confirmField">
              Send a copy to yourself
            </label>
          </div>
          <input className="button-primary" type="submit" value="Send" />
        </fieldset>
      </form>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`<form>
  <fieldset>
    <label for="nameField">Name</label>
    <input type="text" placeholder="CJ Patoilo" id="nameField">
    <label for="ageRangeField">Age Range</label>
    <select id="ageRangeField">
      <option value="0-13">0-13</option>
      <option value="14-17">14-17</option>
      <option value="18-23">18-23</option>
      <option value="24+">24+</option>
    </select>
    <label for="commentField">Comment</label>
    <textarea placeholder="Hi CJ …" id="commentField"></textarea>
    <div className="float-right">
      <input type="checkbox" id="confirmField">
      <label className="label-inline" for="confirmField">Send a copy to yourself</label>
    </div>
    <input className="button-primary" type="submit" value="Send">
  </fieldset>
</form>

<!-- Always wrap checkbox and radio inputs in a label and use a <span className="label-inline"> inside of it -->`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="forms.html" title="Forms">
          forms
        </a>
        .
      </p>
    )}
  </section>
)
