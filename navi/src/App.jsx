import { memo } from 'react';

const App = () => {
  return (
    <div>
      <h2>my name is navi</h2>
      <h4>hello javascript</h4>
      <p>A SMILE IS A CURVE THAT SETS EVERYTHING STRAIGHT</p>
      <img src="https://unsplash.com/photos/dog-running-on-beach-during-daytime-yihlaRCCvd4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" alt=""/>
    </div>
  );
};

export default memo(App);