const SliderContainer = ({ children }) => {
  return (
    <div className="popularProducts" data-uk-slider>
      <div className="uk-position-relative">
        <div className="uk-slider-container">
          <div
            className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-medium uk-grid"
            data-uk-height-match=".productItemImg"
          >
            {children}
          </div>
        </div>

        <div className="d-lg-none">
          <a
            className="uk-position-center-left uk-position-small"
            href="#"
            uk-slidenav-previous=""
            uk-slider-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small"
            href="#"
            uk-slidenav-next=""
            uk-slider-item="next"
          ></a>
        </div>

        <div className="d-none d-lg-block">
          <a
            className="uk-position-center-left-out uk-position-small"
            href="#"
            uk-slidenav-previous=""
            uk-slider-item="previous"
          ></a>
          <a
            className="uk-position-center-right-out uk-position-small"
            href="#"
            uk-slidenav-next=""
            uk-slider-item="next"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
