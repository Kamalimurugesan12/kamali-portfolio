import useMagnetic from '../hooks/useMagnetic';

/**
 * Button or link with a magnetic hover effect.
 * Pass `href` to render an <a>, otherwise a <button>.
 */
export default function MagneticButton({
  href,
  variant = 'primary',
  className = '',
  children,
  strength,
  ...rest
}) {
  const ref = useMagnetic(strength);
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
