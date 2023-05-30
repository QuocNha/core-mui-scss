function LabelControl(props: any) {
  const { htmlFor, ...otherProps } = props;
  /* eslint-disable */
  return <label htmlFor={htmlFor} {...otherProps} />;
}

export default LabelControl;
