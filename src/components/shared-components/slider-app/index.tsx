import { useCallback, useMemo, useState } from 'react';
import { IconButton, Typography, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Image } from 'src/components/shared-components/Image';
import { CSSProperties } from 'styled-components';

const SliderWrapper = styled('div')(({ theme }) => ({
  margin: '0 auto',
  width: '40%',
  maxWidth: '100%',
  textAlign: 'center',
  label: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  'input[type=radio]': {
    display: 'none',
  },
  '@media (max-width: 800px)': {
    width: '100%',
    marginTop: '60px',
    marginBottom: '60px',
  },
}));

const SlidesStyled = styled('div')(({ theme }) => ({
  padding: '30px',
  background: '#fff',
  position: 'relative',
  '.over-flow': {
    width: '100%',
    overflow: 'hidden',
  },
}));

const Slide = styled('div')(({ theme }) => ({
  userSelect: 'none',
  padding: '1rem',
}));

const TypographyNameStyled = styled(Typography)(({ theme }) => ({}));

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

const CartImageStyled = styled(Image)(({ theme }) => ({
  width: theme.spacing(50),
  height: '100%',
  objectFit: 'contain',
  flexShrink: 0,
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
}));

export interface ISlide {
  id: number;
  url: string | '';
  detail: any;
}
const DEFAULT_CHECKED = 1;

const slides: ISlide[] = [
  {
    id: 1,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone', price: '600' },
  },
  {
    id: 2,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone1', price: '600' },
  },
  {
    id: 3,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone2', price: '600' },
  },
  {
    id: 4,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone3', price: '600' },
  },
  {
    id: 5,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone4', price: '600' },
  },
  {
    id: 6,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone5', price: '600' },
  },
  {
    id: 7,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone6', price: '600' },
  },
  {
    id: 8,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone7', price: '600' },
  },
  {
    id: 9,
    url: 'https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg)',
    detail: { name: 'Iphone8', price: '600' },
  },
];

const SliderAppComponent = () => {
  const [checked, setChecked] = useState(DEFAULT_CHECKED);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [curTranslate, setCurTranslate] = useState(0);
  const [preTranslate, setPreTranslate] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  const isRenderBack = useMemo(() => {
    return checked !== DEFAULT_CHECKED;
  }, [checked]);

  const isRenderNext = useMemo(() => {
    return checked !== slides?.length;
  }, [checked]);

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
    const url = '';

    return {
      backgroundImage: url,
      backgroundSize: 'cover',
      transition: 'margin-left 800ms cubic-bezier(0.770, 0.000, 0.175,1.000)',
    };
  }, [checked]);

  const SliderStyledProps: CSSProperties = useMemo(() => {
    const styledProps: any = {};
    slides.forEach((slide, index) => {
      const properties = `#slide${slide.id}:checked ~ #slides .inner`;
      if (index === 0) {
        styledProps[properties] = { marginLeft: '0' };
      } else {
        styledProps[properties] = { marginLeft: `-${index * 100}%` };
      }
    });

    return styledProps;
  }, [slides]);

  const InnerStyledProps: CSSProperties = useMemo(() => {
    return {
      transform: `translateX(${curTranslate}px)`,
      transition: 'margin-left 800ms cubic-bezier(0.770, 0.000, 0.175,1.000)',
      width: `${slides.length * 100}%`,
      lineHeight: '0',
      height: '200px',
      cursor: !grabbing ? 'grab' : 'grabbing',
    };
  }, [slides, curTranslate, grabbing]);

  const SlideStyledProps: CSSProperties = useMemo(() => {
    let widthStyled = '100%';
    if (slides.length) {
      widthStyled = `${100 / slides.length}%`;
    }
    return {
      width: widthStyled,
      float: 'left',
      display: 'block',
      height: '100%',
      color: '#fff',
    };
  }, [slides]);

  const getPositionX = (event: any) => {
    return event?.type?.includes('mouse')
      ? event?.pageX
      : event?.touches?.[0].clientX;
  };

  const moveBySlice = (curTranslateMove: number, preTranslateMove: number) => {
    const moveBy = curTranslateMove - preTranslateMove;
    if (moveBy < -100 && checked < slides.length) {
      setChecked(checked + 1);
    }
    if (moveBy > 100 && checked > 1) {
      setChecked(checked - 1);
    }
  };

  const setPositionByIndex = (index: number) => {
    setCurTranslate(index * -window.innerWidth);
    setPreTranslate(index * -window.innerWidth);
  };

  const resetAnimation = () => {
    setCurTranslate(0);
    setStartPos(0);
    setPreTranslate(0);
  };

  const animation = (
    preTranslateX: number,
    positionX: number,
    startPosX: number
  ) => {
    const currentPosition = preTranslateX + positionX - startPosX;
    setCurTranslate(currentPosition);
  };

  const handleDragStartImg = (event: any) => {
    event?.preventDefault();
  };

  const handleTouchStartImg = (event: any) => {
    const startPosTouch = getPositionX(event);
    setStartPos(startPosTouch);
    setIsDragging(true);
    setGrabbing(true);
  };

  const handleTouchEndImg = (event: any) => {
    setIsDragging(false);
    setGrabbing(false);
    moveBySlice(curTranslate, preTranslate);
    setPositionByIndex(checked);
    resetAnimation();
  };

  const handleTouchMoveImg = (event: any) => {
    if (isDragging) {
      animation(preTranslate, getPositionX(event), startPos);
    }
  };

  const handleMouseDownImg = (event: any) => {
    handleTouchStartImg(event);
  };

  const handleMouseUpImg = (event: any) => {
    handleTouchEndImg(event);
  };

  const handleMouseMove = (event: any) => {
    handleTouchMoveImg(event);
  };

  const handleMouseLeaveImg = (event: any) => {
    handleTouchEndImg(event);
  };

  const handleContextMenu = (event: any) => {
    event?.preventDefault();
    event?.stopPropagation();
    return false;
  };

  const renderSlides = useCallback(() => {
    return (
      <>
        {slides.map((slide) => {
          return (
            <Slide
              key={slide?.id}
              sx={SlideStyledProps}
              className={`slide slide_${slide?.id}`}
            >
              <div className="slide-content">
                <TypographyNameStyled>
                  {slide?.detail.name ?? ''}
                </TypographyNameStyled>
                <CartImageStyled
                  src={slide?.url}
                  sx={{
                    transform: grabbing ? 'scale(0.9)' : 'scale(1)',
                  }}
                />
              </div>
            </Slide>
          );
        })}
      </>
    );
  }, [slides, grabbing]);

  const renderInputs = useCallback(() => {
    return (
      <>
        {slides.map((slide) => {
          return (
            <input
              key={`input-${slide.id}`}
              type="radio"
              name="slider"
              id={`slide${slide.id}`}
              checked={checked === slide?.id}
            />
          );
        })}
      </>
    );
  }, [slides, checked]);

  return (
    <SliderWrapper id="slider" sx={SliderStyledProps}>
      {renderInputs()}
      <SlidesStyled
        id="slides"
        style={SlidesStyledProps}
        onDragStart={handleDragStartImg}
        onTouchStart={handleTouchStartImg}
        onTouchEnd={handleTouchEndImg}
        onTouchMove={handleTouchMoveImg}
        onMouseDown={handleMouseDownImg}
        onMouseUp={handleMouseUpImg}
        onMouseLeave={handleMouseLeaveImg}
        onMouseMove={handleMouseMove}
        onContextMenu={handleContextMenu}
      >
        <div className="over-flow">
          <div className="inner" style={InnerStyledProps}>
            {renderSlides()}
          </div>
        </div>
      </SlidesStyled>
      <ControlStyle id="controls">
        {isRenderNext && (
          <IconButton className="next" onClick={handleNext}>
            <ArrowForwardIosIcon sx={{ fontSize: '40px' }} />
          </IconButton>
        )}
        {isRenderBack && (
          <IconButton className="back" onClick={handleBack}>
            <ArrowBackIosNewIcon sx={{ fontSize: '40px' }} />
          </IconButton>
        )}
      </ControlStyle>
    </SliderWrapper>
  );
};

export default SliderAppComponent;
