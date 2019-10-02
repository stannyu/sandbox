import React from 'react';
import './styles.scss';

const App = () => {
  return (
    <div>
      <div>Rooot component</div>
      <a href="#1">
        Link content that references <br />
        <a href="#2"> another link </a>
        within the main one.
      </a>
      <div className="post-link">
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, <a href="https://www.google.com">feugiat vitae</a>, ultricies eget, tempor sit amet, ante.{' '}
          <a href="http://www.apple.com/">Aenean fermentum</a>, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          sagittis tempus lacus enim ac dui. Ut felis. Praesent dapibus, neque{' '}
          <a href="https://www.facebook.com/">id cursus faucibus</a>, tortor neque egestas augue, eu vulputate magna
          eros eu erat. Aliquam erat volutpat.
        </p>

        <a href="http://csswizardry.com/2013/02/introducing-csswizardry-grids/" className="post-link__read-more">
          Read more…
        </a>
      </div>
    </div>
  );
};

export default App;
