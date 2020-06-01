import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="tips">
    {!isHome && <CarbonAds />}
    <h3 className="title">Tips</h3>
    <p className="description">
      Tips, techniques, and best practice on using Cascading Style Sheets.
    </p>
    <p>
      <strong>Mobile First</strong>
    </p>
    <p>
      The Mobile First is the design strategy that takes priority development
      for mobile devices like smartphones and tablets. It means all styles
      outside of a media queries apply to all devices, then larger screens are
      targeted for enhancement. This prevents small devices from having to parse
      tons of unused CSS. Milligram use some breakpoints like these:
    </p>
    <div className="example">
      <div className="row">
        <ul>
          <li>
            Larger than <strong>Mobile</strong> screen: 40.0rem{' '}
            <span className="heading-font-size">(640px)</span>
          </li>
          <li>
            Larger than <strong>Tablet</strong> screen: 80.0rem{' '}
            <span className="heading-font-size">(1280px)</span>
          </li>
          <li>
            Larger than <strong>Desktop</strong> screen: 120.0rem{' '}
            <span className="heading-font-size">(1920px)</span>
          </li>
        </ul>
      </div>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`/* Mobile First Media Queries */

/* Base style */
{ ... }

/* Larger than mobile screen */
@media (min-width: 40.0rem) { ... }

/* Larger than tablet screen */
@media (min-width: 80.0rem) { ... }

/* Larger than desktop screen */
@media (min-width: 120.0rem) { ... }`}</code>
    </pre>
    <p>
      <strong>Embed Font</strong>
    </p>
    <p>
      <strong>Milligram</strong> uses the <code>font-family</code>
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
      <u>Christian Robertson</u>, and provided by Google. Customize your
      projects using <a href="https://fonts.google.com">Google Fonts</a>. To
      embed your selected fonts into a webpage, copy this code into the{' '}
      {`<head>`} of your HTML document.
    </p>
    <pre className="code prettyprint">
      <code className="code-content">{`/* Embed Font */
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab">

/* Use the following CSS rules to specify these families */
body {
  font-family: 'Roboto Slab', serif;
}`}</code>
    </pre>
    <p>
      <strong>Extending The Inheritances</strong>
    </p>
    <p>
      The style of an element can be defined in several different locations,
      which interact in a complex way. It is this form of interaction makes CSS
      powerful, but it can make it confusing and difficult to debug.
    </p>
    <div className="example">
      <div className="row">
        <div className="column">
          <a
            className="button"
            href="#"
            onClick={event => event.preventDefault()}
          >
            Default .button
          </a>
          <a
            className="button button-outline"
            href="#"
            onClick={event => event.preventDefault()}
          >
            Outlined .button
          </a>
          <a
            className="button button-clear"
            href="#"
            onClick={event => event.preventDefault()}
          >
            Clear .button
          </a>
        </div>
        <div className="column">
          <a
            className="button button-black"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-black
          </a>
          <a
            className="button button-black button-outline"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-black
          </a>
          <a
            className="button button-black button-clear"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-black
          </a>
        </div>
        <div className="column column-20">
          <a
            className="button button-small"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-small
          </a>
          <a
            className="button button-small button-outline"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-small
          </a>
          <a
            className="button button-small button-clear"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-small
          </a>
        </div>
        <div className="column">
          <a
            className="button button-large"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-large
          </a>
          <a
            className="button button-large button-outline"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-large
          </a>
          <a
            className="button button-large button-clear"
            href="#"
            onClick={event => event.preventDefault()}
          >
            .button-large
          </a>
        </div>
      </div>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`/* Extending The Inheritances */

/* Custom color */
.button-black {
  background-color: black;
  border-color: black;
}
.button-black.button-clear,
.button-black.button-outline {
  background-color: transparent;
  color: black;
}
.button-black.button-clear {
  border-color: transparent;
}

/* Custom size */
.button-small {
  font-size: .8rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
}

.button-large {
  font-size: 1.4rem;
  height: 4.5rem;
  line-height: 4.5rem;
  padding: 0 2rem;
}`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="tips.html" title="Tips">
          tips
        </a>
        .
      </p>
    )}
  </section>
)
