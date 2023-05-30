import { useCallback, useMemo, useState } from 'react';
import { IconButton, Typography, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SliderWrapper = styled('div')(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  maxWidth: '100%',
  textAlign: 'center',
  label: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  'input[type=radio]': {
    display: 'none',
  },
}));

const SlidesStyled = styled('div')(({ theme }) => ({
  padding: '30px',
  border: '3px solid #ccc',
  background: '#fff',
  position: 'relative',
  '.over-flow': {
    width: '100%',
    overflow: 'hidden',
  },
  '.inner': {
    transition: 'margin-left 800ms cubic-bezier(0.770, 0.000, 0.175,1.000)',
    width: '400%',
    lineHeight: '0',
    height: '200px',
  },
}));

const Slide = styled('div')(({ theme }) => ({
  width: '25%',
  float: 'left',
  display: 'block',
  height: '100%',
  color: '#fff',
}));

const ControlStyle = styled('div')(({ theme }) => ({
  margin: '-140px 0 0 0',
  width: '100%',
  height: '50px',
  zIndex: 3,
  position: 'relative',
  '.next': {
    transition: 'opacity 0.2s ease-out',
    opacity: '0.4',
    float: 'right',
    ':hover': {
      opacity: '1',
    },
  },
  '.back': {
    transition: 'opacity 0.2s ease-out',
    opacity: '0.4',
    float: 'left',
    ':hover': {
      opacity: '1',
    },
  },
}));

const DEFAULT_CHECKED = 1;

const SliderAppComponent = () => {
  const [checked, setChecked] = useState(DEFAULT_CHECKED);
  const slides = [1, 2, 3, 4];

  const handleNext = () => {
    if (checked === slides.length) {
      return;
    }
    setChecked(checked + 1);
  };

  const handleBack = () => {
    if (checked === DEFAULT_CHECKED) {
      return;
    }
    setChecked(checked - 1);
  };

  const SlidesStyledProps = useMemo(() => {
    let url =
      'url(https://imageio.forbes.com/blogs-images/davidphelan/files/2017/03/IMG_1566-1200x800.jpg?format=jpg&width=1200)';
    if (checked !== 1) {
      url =
        'url(https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)';
    }
    return {
      backgroundImage: url,
      backgroundSize: 'cover',
      transition: 'margin-left 800ms cubic-bezier(0.770, 0.000, 0.175,1.000)',
    };
  }, [checked]);
  const renderSlides = useCallback(() => {
    return (
      <>
        {slides.map((slide) => {
          return (
            <Slide key={slide} className={`slide slide_${slide}`}>
              <div className="slide-content">
                <Typography>Slide {slide}</Typography>
              </div>
            </Slide>
          );
        })}
      </>
    );
  }, [slides]);

  const renderInputs = useCallback(() => {
    return (
      <>
        {slides.map((slide) => {
          return (
            <input
              key={`input-${slide}`}
              type="radio"
              name="slider"
              id={`slide${slide}`}
              checked={checked === slide}
            />
          );
        })}
      </>
    );
  }, [slides, checked]);

  return (
    <SliderWrapper
      id="slider"
      sx={{
        '#slide1:checked ~ #slides .inner': {
          marginLeft: '0',
        },
        '#slide2:checked ~ #slides .inner': {
          marginLeft: '-100%',
        },
        '#slide3:checked ~ #slides .inner': {
          marginLeft: '-200%',
        },
        '#slide4:checked ~ #slides .inner': {
          marginLeft: '-300%',
        },
        '#slide5:checked ~ #slides .inner': {
          marginLeft: '-400%',
        },
      }}
    >
      {renderInputs()}
      <SlidesStyled id="slides" style={SlidesStyledProps}>
        <div className="over-flow">
          <div className="inner">{renderSlides()}</div>
        </div>
      </SlidesStyled>
      <ControlStyle id="controls">
        <IconButton className="next" onClick={handleNext}>
          <ArrowForwardIosIcon sx={{ fontSize: '40px' }} />
        </IconButton>
        <IconButton className="back" onClick={handleBack}>
          <ArrowBackIosNewIcon sx={{ fontSize: '40px' }} />
        </IconButton>
      </ControlStyle>
    </SliderWrapper>
  );
};

export default SliderAppComponent;
