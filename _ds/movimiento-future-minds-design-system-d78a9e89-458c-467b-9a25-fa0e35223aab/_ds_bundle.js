/* @ds-bundle: {"format":4,"namespace":"MovimientoFutureMindsDesignSystem_d78a9e","components":[{"name":"ColorBand","sourcePath":"components/brand/ColorBand.jsx"},{"name":"DisplayTitle","sourcePath":"components/brand/DisplayTitle.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PhotoBlock","sourcePath":"components/brand/PhotoBlock.jsx"},{"name":"Watermark","sourcePath":"components/brand/Watermark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ColorBand.jsx":"cde8a554076f","components/brand/DisplayTitle.jsx":"775bc6ee95d2","components/brand/Eyebrow.jsx":"26b0b548a51d","components/brand/Logo.jsx":"8348d303bdf8","components/brand/PhotoBlock.jsx":"80a9da1401d9","components/brand/Watermark.jsx":"6d204095dfc7","components/core/Badge.jsx":"126c53565a4c","components/core/Button.jsx":"22e766ae8a33","components/core/Card.jsx":"6f314c1ae9eb","components/core/Icon.jsx":"19e53e2540fc","components/core/IconButton.jsx":"23c4fbc7f44d","components/core/Tag.jsx":"5582ac2ea2c1","components/feedback/Dialog.jsx":"a4eaa57c7664","components/feedback/Toast.jsx":"5192705fb1bd","components/feedback/Tooltip.jsx":"a7a44e54f4ef","components/forms/Checkbox.jsx":"6018ed78350a","components/forms/Input.jsx":"298a1702b330","components/forms/Radio.jsx":"2f803abb83e4","components/forms/Select.jsx":"d69c86843716","components/forms/Switch.jsx":"3dbaf82a2023","components/navigation/Tabs.jsx":"4694adb52884","ui_kits/social/FeedScreens.jsx":"a0d4e06a3a00","ui_kits/social/PostTile.jsx":"df7afd907fd3","ui_kits/social/YouTubeThumb.jsx":"ab71ffc986f8","ui_kits/web/Chrome.jsx":"89df44e99a05","ui_kits/web/HomeScreen.jsx":"9494121fc89f","ui_kits/web/JoinScreen.jsx":"1b77a435aeab","ui_kits/web/MethodScreen.jsx":"c063cc2939d5","ui_kits/web/ProgramsScreen.jsx":"5e697add93cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MovimientoFutureMindsDesignSystem_d78a9e = window.MovimientoFutureMindsDesignSystem_d78a9e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ColorBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const INK = {
  rojo: 'var(--pair-rojo-ink)',
  lima: 'var(--pair-lima-ink)',
  naranja: 'var(--pair-naranja-ink)',
  turquesa: 'var(--pair-turquesa-ink)',
  verde: 'var(--pair-verde-ink)',
  gris: 'var(--pair-gris-ink)',
  blanco: 'var(--fmm-carbon)',
  carbon: 'var(--fmm-blanco)'
};
function ColorBand({
  color = 'rojo',
  ink,
  as = 'section',
  padding = 'var(--band-padding-y) var(--layout-gutter)',
  contain = true,
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: `var(--fmm-${color})`,
      color: ink ? `var(--fmm-${ink})` : INK[color] || 'var(--fmm-carbon)',
      padding,
      ...style
    }
  }, rest), contain ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, children) : children);
}
Object.assign(__ds_scope, { ColorBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ColorBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/DisplayTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xxl: 'var(--fs-display-xxl)',
  xl: 'var(--fs-display-xl)',
  lg: 'var(--fs-display-lg)',
  md: 'var(--fs-display-md)',
  sm: 'var(--fs-display-sm)'
};
function DisplayTitle({
  as = 'h2',
  size = 'lg',
  color = 'inherit',
  outline = false,
  align = 'left',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: SIZES[size] || SIZES.lg,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      textAlign: align,
      color: color === 'inherit' ? 'inherit' : `var(--fmm-${color})`,
      margin: 0,
      ...(outline ? {
        WebkitTextStroke: 'var(--text-stroke-white)',
        paintOrder: 'stroke fill'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  color = 'inherit',
  tracking = 'eyebrow',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--fs-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: tracking === 'wide' ? 'var(--ls-wide)' : 'var(--ls-eyebrow)',
      color: color === 'inherit' ? 'inherit' : `var(--fmm-${color})`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  horizontal: 'logo-horizontal',
  vertical: 'logo-vertical',
  isotipo: 'isotipo'
};
const RATIO = {
  horizontal: 1478 / 582,
  vertical: 687 / 1047,
  isotipo: 1083 / 1045
};
function Logo({
  variant = 'horizontal',
  color = 'carbon',
  height,
  assetBase = 'assets',
  clearSpace = false,
  title = 'Movimiento Future Minds',
  style,
  ...rest
}) {
  const file = FILES[variant] || FILES.horizontal;
  const h = height || (variant === 'vertical' ? 120 : variant === 'isotipo' ? 64 : 56);
  const pad = clearSpace ? 'var(--logo-clear-space)' : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      padding: pad,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/${file}-${color}.png`,
    alt: title,
    style: {
      height: h,
      width: h * RATIO[variant === 'vertical' ? 'vertical' : variant === 'isotipo' ? 'isotipo' : 'horizontal'],
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoBlock({
  src,
  alt = '',
  tint,
  blend = 'multiply',
  strength,
  ratio = '4 / 5',
  radius = 'var(--radius-block)',
  align = 'end',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: 'relative',
      margin: 0,
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: radius,
      background: 'var(--surface-muted)',
      display: 'grid',
      alignContent: align === 'end' ? 'end' : align === 'center' ? 'center' : 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), tint ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: `var(--fmm-${tint})`,
      mixBlendMode: blend,
      opacity: strength != null ? strength : 'var(--photo-duotone-mix)'
    }
  }) : null, children ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'relative',
      padding: 'var(--space-4)'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { PhotoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/Watermark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ANCHORS = {
  'top-left': {
    top: '-18%',
    left: '-14%'
  },
  'top-right': {
    top: '-18%',
    right: '-14%'
  },
  'bottom-left': {
    bottom: '-18%',
    left: '-14%'
  },
  'bottom-right': {
    bottom: '-18%',
    right: '-14%'
  },
  'center-right': {
    top: '50%',
    right: '-20%',
    transform: 'translateY(-50%)'
  },
  'center-left': {
    top: '50%',
    left: '-20%',
    transform: 'translateY(-50%)'
  }
};
function Watermark({
  color = 'lima',
  anchor = 'bottom-right',
  size = '70%',
  rotate = 0,
  assetBase = 'assets',
  style,
  ...rest
}) {
  const a = ANCHORS[anchor] || ANCHORS['bottom-right'];
  const t = [a.transform, rotate ? `rotate(${rotate}deg)` : null].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("img", _extends({
    "aria-hidden": "true",
    src: `${assetBase}/isotipo-${color}.png`,
    alt: "",
    style: {
      position: 'absolute',
      width: size,
      pointerEvents: 'none',
      userSelect: 'none',
      opacity: 'var(--graphic-watermark-opacity)',
      ...a,
      ...(t ? {
        transform: t
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Watermark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Watermark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const INK = {
  rojo: 'var(--fmm-blanco)',
  lima: 'var(--fmm-carbon)',
  naranja: 'var(--fmm-carbon)',
  turquesa: 'var(--fmm-blanco)',
  verde: 'var(--fmm-carbon)',
  gris: 'var(--fmm-carbon)',
  carbon: 'var(--fmm-blanco)',
  blanco: 'var(--fmm-carbon)'
};
function Badge({
  color = 'rojo',
  shape = 'pill',
  size = 'md',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      background: `var(--fmm-${color})`,
      color: INK[color],
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: size === 'sm' ? 'var(--fs-body-xs)' : 'var(--fs-eyebrow)',
      padding: size === 'sm' ? '3px 9px' : '5px 13px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-none)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 18px',
    fontSize: 'var(--fs-body-sm)',
    minHeight: 36
  },
  md: {
    padding: '12px 28px',
    fontSize: 'var(--fs-body-md)',
    minHeight: 46
  },
  lg: {
    padding: '16px 40px',
    fontSize: 'var(--fs-body-lg)',
    minHeight: 56
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--fmm-rojo)',
    color: 'var(--fmm-blanco)',
    border: '2px solid transparent'
  },
  accent: {
    background: 'var(--fmm-lima)',
    color: 'var(--fmm-carbon)',
    border: '2px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--fmm-carbon)',
    border: 'var(--border-strong-line)'
  },
  inverse: {
    background: 'var(--fmm-blanco)',
    color: 'var(--fmm-carbon)',
    border: '2px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'currentColor',
    border: '2px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const [state, setState] = React.useState('idle');
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : state === 'hover' ? 'var(--opacity-hover)' : 1,
      transform: !disabled && state === 'press' ? 'scale(var(--press-scale))' : 'none',
      transition: `opacity var(--dur-fast) var(--ease-standard), transform var(--dur-instant) var(--ease-standard)`,
      ...v,
      ...s,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevated = true,
  bordered = false,
  padding = 'var(--space-4)',
  radius = 'var(--radius-card)',
  media,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      borderRadius: radius,
      border: bordered ? 'var(--border-subtle-line)' : 'none',
      boxShadow: elevated ? 'var(--shadow-card)' : 'var(--shadow-none)',
      overflow: 'hidden',
      ...style
    }
  }, rest), media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  weight = 'light',
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `ph-${weight} ph-${name}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const dim = size === 'sm' ? 36 : size === 'lg' ? 56 : 46;
  const glyph = size === 'sm' ? 16 : size === 'lg' ? 26 : 20;
  const looks = {
    primary: {
      background: 'var(--fmm-rojo)',
      color: 'var(--fmm-blanco)',
      border: '2px solid transparent'
    },
    accent: {
      background: 'var(--fmm-lima)',
      color: 'var(--fmm-carbon)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--fmm-carbon)',
      border: 'var(--border-strong-line)'
    },
    inverse: {
      background: 'var(--fmm-blanco)',
      color: 'var(--fmm-carbon)',
      border: '2px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'currentColor',
      border: '2px solid transparent'
    }
  }[variant];
  const [state, setState] = React.useState('idle');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : state === 'hover' ? 'var(--opacity-hover)' : 1,
      transform: !disabled && state === 'press' ? 'scale(var(--press-scale))' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-standard), transform var(--dur-instant) var(--ease-standard)',
      ...looks,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `ph-light ph-${name}`,
    "aria-hidden": "true",
    style: {
      fontSize: glyph,
      lineHeight: 1
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  color = 'gris',
  onRemove,
  selected = false,
  style,
  ...rest
}) {
  const bg = selected ? `var(--fmm-${color === 'gris' ? 'lima' : color})` : 'transparent';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: selected ? '1px solid transparent' : `1px solid var(--fmm-${color === 'gris' ? 'gris' : color})`,
      background: bg,
      color: 'var(--fmm-carbon)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--weight-medium)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Quitar",
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex',
      lineHeight: 1,
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-x",
    "aria-hidden": "true",
    style: {
      fontSize: 13
    }
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  onClose,
  footer,
  width = 560,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'fixed',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-4)',
      background: 'rgba(44,46,53,.55)',
      zIndex: 60,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card-hover)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--fmm-rojo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-display-md)',
      lineHeight: 'var(--lh-display-loose)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-md)',
      lineHeight: 'var(--lh-body)'
    }
  }, children)), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      justifyContent: 'flex-end',
      padding: 'var(--space-4) var(--space-6) var(--space-6)'
    }
  }, footer) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      right: 'var(--space-4)',
      all: 'unset',
      cursor: 'pointer',
      width: 36,
      height: 36,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      color: 'var(--fmm-carbon)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-x",
    "aria-hidden": "true",
    style: {
      fontSize: 20
    }
  })) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--fmm-turquesa)',
    ink: 'var(--fmm-blanco)',
    icon: 'info'
  },
  success: {
    bg: 'var(--fmm-verde)',
    ink: 'var(--fmm-carbon)',
    icon: 'check-circle'
  },
  warning: {
    bg: 'var(--fmm-naranja)',
    ink: 'var(--fmm-carbon)',
    icon: 'warning'
  },
  error: {
    bg: 'var(--fmm-rojo)',
    ink: 'var(--fmm-blanco)',
    icon: 'x-circle'
  }
};
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      background: t.bg,
      color: t.ink,
      padding: 'var(--space-3) var(--space-4)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      maxWidth: 420,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `ph-light ph-${t.icon}`,
    "aria-hidden": "true",
    style: {
      fontSize: 22,
      lineHeight: 1,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 'var(--fs-eyebrow)',
      marginBottom: 2
    }
  }, title) : null, children), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      all: 'unset',
      cursor: 'pointer',
      color: 'inherit',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-x",
    "aria-hidden": "true",
    style: {
      fontSize: 16
    }
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const POS = {
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%,-8px)'
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translate(-50%,8px)'
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translate(-8px,-50%)'
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translate(8px,-50%)'
  }
};
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...POS[placement],
      background: 'var(--fmm-carbon)',
      color: 'var(--fmm-blanco)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-xs)',
      lineHeight: 1.4,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  id,
  onChange,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked == null) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-sm)',
      border: on ? '2px solid var(--fmm-rojo)' : '2px solid var(--fmm-carbon)',
      background: on ? 'var(--fmm-rojo)' : 'var(--fmm-blanco)',
      color: 'var(--fmm-blanco)',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on ? /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-check",
    style: {
      fontSize: 15,
      lineHeight: 1
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-md)',
  color: 'var(--text-body)',
  background: 'var(--fmm-blanco)',
  border: '1px solid var(--fmm-gris)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px 15px',
  minHeight: 46,
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard)'
};
function Input({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    rows: multiline ? rows : undefined,
    "aria-invalid": error ? true : undefined,
    style: {
      ...field,
      borderColor: error ? 'var(--fmm-rojo)' : 'var(--fmm-gris)',
      minHeight: multiline ? undefined : 46,
      resize: multiline ? 'vertical' : undefined
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: error ? 'var(--fmm-rojo)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  id,
  onChange,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked == null) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--fmm-carbon)',
      background: 'var(--fmm-blanco)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--fmm-rojo)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-body)',
      background: 'var(--fmm-blanco)',
      border: '1px solid var(--fmm-gris)',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 44px 13px 15px',
      minHeight: 46,
      outline: 'none'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-caret-down",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 18,
      pointerEvents: 'none',
      color: 'var(--fmm-carbon)'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked == null) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 46,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--fmm-turquesa)' : 'var(--fmm-gris)',
      padding: 3,
      boxSizing: 'border-box',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--fmm-blanco)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  accent = 'rojo',
  style,
  ...rest
}) {
  const first = items.length ? typeof items[0] === 'string' ? items[0] : items[0].value : null;
  const [inner, setInner] = React.useState(defaultValue != null ? defaultValue : first);
  const active = value != null ? value : inner;
  const pick = v => {
    if (value == null) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--fmm-gris)',
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 'var(--fs-body-sm)',
        color: on ? 'var(--fmm-carbon)' : 'var(--text-muted)',
        borderBottom: `3px solid ${on ? `var(--fmm-${accent})` : 'transparent'}`,
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/FeedScreens.jsx
try { (() => {
const NSF = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AF = '../../assets';
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      background: 'var(--fmm-blanco)',
      border: '1px solid var(--fmm-gris)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, children);
}
function AppBar({
  title,
  onBack
}) {
  const {
    Icon
  } = NSF;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '12px 14px',
      borderBottom: '1px solid var(--fmm-gris)'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "Volver",
    style: {
      all: 'unset',
      cursor: 'pointer',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 14
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "paper-plane-tilt",
    size: 20
  })));
}
function ProfileScreen({
  onOpen
}) {
  const {
    Logo,
    Icon,
    Button
  } = NSF;
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "futureminds"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--fmm-rojo)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AF + '/isotipo-lima.png',
    alt: "",
    style: {
      width: 42
    }
  })), [['92', 'Posts'], ['840', 'Seguidores'], ['408', 'Siguiendo']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30,
    assetBase: AF
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, "Despertando mentes, creando futuros. Redefiniendo reglas, liberando potencial."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "futureminds.org")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      flex: 1
    }
  }, "Seguir"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Mensaje")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 14
    }
  }, [['rojo', 'Programas'], ['lima', 'Fest'], ['turquesa', 'Claustro']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: `var(--fmm-${c})`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AF + '/isotipo-blanco.png',
    alt: "",
    style: {
      width: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--fmm-gris)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      padding: '9px 0',
      textAlign: 'center',
      borderBottom: '2px solid var(--fmm-carbon)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid-four",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      padding: '9px 0',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "film-slate",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      padding: '9px 0',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-square",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2
    }
  }, window.POSTS.map(p => /*#__PURE__*/React.createElement(window.PostTile, {
    key: p.id,
    post: p,
    size: 128,
    onClick: () => onOpen(p)
  }))));
}
function PostScreen({
  post,
  onBack
}) {
  const {
    Icon
  } = NSF;
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "futureminds",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--fmm-rojo)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AF + '/isotipo-lima.png',
    alt: "",
    style: {
      width: 19
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "movimientofutureminds"), /*#__PURE__*/React.createElement(Icon, {
    name: "dots-three",
    size: 20,
    style: {
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/React.createElement(window.PostTile, {
    post: post,
    size: 390
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chat-circle",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "paper-plane-tilt",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark-simple",
    size: 22,
    style: {
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginTop: 8
    }
  }, "412 me gusta"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", null, "movimientofutureminds"), " Redefiniendo reglas, liberando potencial. \xBFQu\xE9 cambiar\xEDas ma\xF1ana en tu aula?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fmm-turquesa)',
      marginTop: 6
    }
  }, "#Educaci\xF3nQueTransforma #FutureMinds")));
}
Object.assign(window, {
  ProfileScreen,
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/FeedScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostTile.jsx
try { (() => {
const NSS = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AS = '../../assets';
const POSTS = [{
  id: 1,
  kind: 'quote',
  color: 'rojo',
  ink: 'lima',
  title: 'The quality\nservice you\nexpect',
  body: 'Comunicación de un mensaje clave en bloque de color.'
}, {
  id: 2,
  kind: 'photo',
  color: 'lima',
  ph: 'foto-07.png',
  title: 'Transformando\nla experiencia'
}, {
  id: 3,
  kind: 'logo',
  color: 'lima',
  ink: 'turquesa'
}, {
  id: 4,
  kind: 'photo',
  color: 'turquesa',
  ph: 'foto-08.png',
  title: 'The evolution\ncontinues'
}, {
  id: 5,
  kind: 'quote',
  color: 'turquesa',
  ink: 'lima',
  title: 'Aquí tienes\nque poner\ntu frase',
  body: 'Bloque de color para resaltar el mensaje.'
}, {
  id: 6,
  kind: 'photo',
  color: 'naranja',
  ph: 'foto-09.png',
  title: 'Uniendo\nmentes'
}, {
  id: 7,
  kind: 'quote',
  color: 'verde',
  ink: 'carbon',
  title: 'Curiosidad\nque impulsa\nel aprendizaje'
}, {
  id: 8,
  kind: 'photo',
  color: 'rojo',
  ph: 'foto-11.png',
  title: 'National\nEDEM Fest'
}, {
  id: 9,
  kind: 'quote',
  color: 'naranja',
  ink: 'carbon',
  title: 'Innovación\nen cada paso'
}];
function PostTile({
  post,
  size = 300,
  onClick
}) {
  const {
    Watermark,
    DisplayTitle,
    Logo
  } = NSS;
  const common = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: '1 / 1',
    cursor: onClick ? 'pointer' : 'default'
  };
  const lines = t => (t || '').split('\n').map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("br", null) : null, l));
  if (post.kind === 'logo') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        ...common,
        background: `var(--fmm-${post.color})`,
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal",
      color: post.ink,
      height: size * 0.16,
      assetBase: AS
    }));
  }
  if (post.kind === 'photo') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        ...common,
        background: `var(--fmm-${post.color})`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: AS + '/photography/' + post.ph,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        alignContent: 'end',
        padding: size * 0.06
      }
    }, /*#__PURE__*/React.createElement(DisplayTitle, {
      size: "sm",
      color: "blanco",
      outline: true,
      style: {
        fontSize: size * 0.105
      }
    }, lines(post.title))));
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      ...common,
      background: `var(--fmm-${post.color})`
    }
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: post.ink === 'carbon' ? 'rojo' : post.ink,
    anchor: "bottom-right",
    size: "72%",
    rotate: -12,
    assetBase: AS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: size * 0.07
    }
  }, /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm",
    color: post.ink,
    style: {
      fontSize: size * 0.115
    }
  }, lines(post.title)), post.body ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: size * 0.04,
      fontSize: size * 0.042,
      lineHeight: 1.45,
      color: `var(--fmm-${post.ink})`,
      maxWidth: '72%'
    }
  }, post.body) : null));
}
Object.assign(window, {
  POSTS,
  PostTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/YouTubeThumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NSY = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AY = '../../assets';
const THUMBS = [{
  color: 'turquesa',
  ph: 'foto-01.png',
  title: 'The quality\nservice you\nexpect',
  sub: 'Lorem ipsum dolor sit'
}, {
  color: 'rojo',
  ph: 'foto-03.png',
  title: 'Redefiniendo\nlas reglas',
  sub: 'Educación & emprendimiento'
}, {
  color: 'lima',
  ph: 'foto-04.png',
  title: 'Uniendo\nmentes',
  sub: 'National EDEM Fest'
}];

/** Miniatura de YouTube según las reglas de la p.37 del manual. */
function YouTubeThumb({
  color,
  ph,
  title,
  sub,
  width = 320
}) {
  const {
    DisplayTitle
  } = NSY;
  const h = width * 9 / 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height: h,
      overflow: 'hidden',
      background: `var(--fmm-${color})`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AY + '/isotipo-lima.png',
    alt: "",
    style: {
      position: 'absolute',
      bottom: '-14%',
      left: '32%',
      width: '46%',
      transform: 'rotate(-10deg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: AY + '/photography/' + ph,
    alt: "",
    style: {
      position: 'absolute',
      right: '-2%',
      bottom: 0,
      height: '104%',
      width: '52%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: width * 0.05,
      top: h * 0.14,
      width: '58%'
    }
  }, /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm",
    color: "carbon",
    outline: true,
    style: {
      fontSize: width * 0.082,
      lineHeight: 0.95
    }
  }, title.split('\n').map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("br", null) : null, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: h * 0.06,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: width * 0.036,
      letterSpacing: '0.04em',
      color: 'var(--fmm-blanco)',
      lineHeight: 1.2
    }
  }, sub)));
}
function ThumbsScreen() {
  const {
    Eyebrow,
    DisplayTitle,
    Select,
    Tag
  } = NSY;
  const [i, setI] = React.useState(0);
  const t = THUMBS[i];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Miniaturas YouTube"), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "md",
    style: {
      marginTop: 8,
      marginBottom: 16
    }
  }, "Reglas de la p.37"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(YouTubeThumb, _extends({}, t, {
    width: 420
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, THUMBS.map((x, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: () => setI(n),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: x.color,
    selected: n === i
  }, x.color))))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 14,
      lineHeight: 1.7,
      maxWidth: 320,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Foto de la persona siempre a la derecha, pisando el margen de la pieza."), /*#__PURE__*/React.createElement("li", null, "Isotipo siempre encima de la foto, ocupando el espacio de la imagen."), /*#__PURE__*/React.createElement("li", null, "M\xE1ximo espacio posible del fondo con un \xFAnico color; si es corporativo, mucho mejor."), /*#__PURE__*/React.createElement("li", null, "T\xEDtulo en may\xFAsculas, negrita y con borde blanco."), /*#__PURE__*/React.createElement("li", null, "Subt\xEDtulo en un \xFAnico color, may\xFAscula y negrita."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, THUMBS.map((x, n) => /*#__PURE__*/React.createElement(YouTubeThumb, _extends({
    key: n
  }, x, {
    width: 260
  })))));
}
Object.assign(window, {
  YouTubeThumb,
  ThumbsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/YouTubeThumb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Chrome.jsx
try { (() => {
const NS = window.MovimientoFutureMindsDesignSystem_d78a9e;
const A = '../../assets';
function SiteHeader({
  view,
  onNavigate,
  onJoin
}) {
  const {
    Logo,
    Button
  } = NS;
  const items = [['inicio', 'Inicio'], ['programas', 'Programas'], ['metodologia', 'Metodología'], ['unete', 'Únete']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--fmm-blanco)',
      borderBottom: '1px solid var(--fmm-gris)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '18px var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: e => {
      e.preventDefault();
      onNavigate('inicio');
    },
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 40,
    assetBase: A
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, items.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: '#' + k,
    onClick: e => {
      e.preventDefault();
      onNavigate(k);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 'var(--fs-body-sm)',
      textDecoration: 'none',
      color: 'var(--fmm-carbon)',
      borderBottom: `3px solid ${view === k ? 'var(--fmm-rojo)' : 'transparent'}`,
      paddingBottom: 3
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onJoin
  }, "S\xFAmate")));
}
function SiteFooter() {
  const {
    Logo,
    Icon,
    Eyebrow
  } = NS;
  const cols = [['Movimiento', ['Somos', 'Propósito', 'Visión y misión', 'Valores']], ['Programas', ['Centros', 'Docentes', 'Familias', 'Estudiantes']], ['Recursos', ['Manual de marca', 'Casos', 'Prensa', 'Contacto']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--fmm-gris)',
      color: 'var(--fmm-carbon)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 46,
    assetBase: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      maxWidth: 260,
      color: 'var(--text-muted)'
    }
  }, "Despertando mentes, creando futuros.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement(Eyebrow, null, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-3) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--fmm-carbon)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Movimiento Future Minds"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram-logo",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "youtube-logo",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin-logo",
    size: 20
  }))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HomeScreen.jsx
try { (() => {
const NSH = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AH = '../../assets';
function HomeScreen({
  onNavigate,
  onJoin
}) {
  const {
    ColorBand,
    Watermark,
    DisplayTitle,
    Eyebrow,
    Button,
    Card,
    PhotoBlock,
    Badge,
    Icon
  } = NSH;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColorBand, {
    color: "rojo",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: "lima",
    anchor: "center-left",
    size: "62%",
    rotate: -8,
    assetBase: AH
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      alignItems: 'stretch',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-6)',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lima"
  }, "Movimiento Future Minds"), /*#__PURE__*/React.createElement(DisplayTitle, {
    as: "h1",
    size: "xl",
    color: "blanco",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Uniendo mentes/", /*#__PURE__*/React.createElement("br", null), "creando futuros."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 440,
      color: 'var(--fmm-blanco)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 300
    }
  }, "Somos la chispa que enciende el futuro de la educaci\xF3n. Llevamos el aprendizaje m\xE1s all\xE1 de los l\xEDmites tradicionales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onJoin
  }, "\xDAnete al movimiento"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate('metodologia')
  }, "Ver metodolog\xEDa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AH + '/photography/foto-05.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "lima",
    padding: "var(--space-8) var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoBlock, {
    src: AH + '/photography/foto-09.png',
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Insight"), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "lg",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Reinventando", /*#__PURE__*/React.createElement("br", null), "el aprendizaje"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-body-lg)',
      maxWidth: 520
    }
  }, "Cada momento de aprendizaje es una chispa que puede encender una transformaci\xF3n profunda. La educaci\xF3n no es s\xF3lo una transferencia de conocimiento: es un viaje de descubrimiento y crecimiento personal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, ['Innovación', 'Empoderamiento', 'Colaboración', 'Creatividad', 'Curiosidad'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    color: "rojo",
    size: "sm"
  }, t)))))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "blanco",
    padding: "var(--space-8) var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Audiencias"), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "lg",
    style: {
      marginTop: 'var(--space-3)',
      marginBottom: 'var(--space-6)'
    }
  }, "Para qui\xE9n trabajamos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, [['buildings', 'Instituciones progresistas', 'Escuelas y universidades dispuestas a desafiar los métodos tradicionales.'], ['chalkboard-teacher', 'Educadores visionarios', 'Docentes que no temen cuestionar el status quo de su aula.'], ['student', 'Estudiantes desafiantes', 'Jóvenes curiosos que buscan más que una educación convencional.'], ['users-three', 'Familias comprometidas', 'Padres y tutores que quieren estar dentro del proceso educativo.']].map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    bordered: true,
    elevated: false
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 34,
    color: "var(--fmm-rojo)"
  }), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, body))))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "turquesa",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: "lima",
    anchor: "bottom-right",
    size: "52%",
    rotate: 14,
    assetBase: AH
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "lg",
    color: "lima"
  }, "\xDAnete a la vanguardia", /*#__PURE__*/React.createElement("br", null), "de la educaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--fmm-blanco)',
      fontSize: 'var(--fs-body-lg)',
      maxWidth: 520,
      fontWeight: 300
    }
  }, "Cu\xE9ntanos qu\xE9 quieres cambiar en tu centro y te escribimos en 48 horas.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onJoin
  }, "Quiero hablar"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/JoinScreen.jsx
try { (() => {
const NSJ = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AJ = '../../assets';
function JoinScreen() {
  const {
    ColorBand,
    Watermark,
    DisplayTitle,
    Eyebrow,
    Card,
    Input,
    Select,
    Checkbox,
    Radio,
    Button,
    Toast
  } = NSJ;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(ColorBand, {
    color: "rojo",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: "lima",
    anchor: "top-right",
    size: "56%",
    rotate: -16,
    assetBase: AJ
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lima"
  }, "\xDAnete"), /*#__PURE__*/React.createElement(DisplayTitle, {
    as: "h1",
    size: "xl",
    color: "blanco",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Empoderando", /*#__PURE__*/React.createElement("br", null), "mentes"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--fmm-blanco)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 300,
      maxWidth: 420
    }
  }, "Cu\xE9ntanos qu\xE9 quieres cambiar. Te respondemos en 48 horas con una propuesta concreta para tu centro.")), /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    padding: "var(--space-6)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Enviado"
  }, "Hemos recibido tu solicitud."), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm"
  }, "Gracias por sumarte"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-muted)'
    }
  }, "Te escribimos a la direcci\xF3n que nos has dejado en menos de 48 horas."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setSent(false)
  }, "Enviar otra")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tatiana",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "hola@centro.es",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Centro educativo",
    placeholder: "CEIP Miguel Hern\xE1ndez"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Etapa",
    options: ['Infantil', 'Primaria', 'Secundaria', 'Bachillerato', 'Universidad']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Programa",
    options: ['Aula Rebelde', 'Future Labs', 'Familias Dentro', 'Claustro Vivo', 'Brújula Digital']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Perfil"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "perfil",
    label: "Direcci\xF3n",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "perfil",
    label: "Docente"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "perfil",
    label: "Familia"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "perfil",
    label: "Estudiante"
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "\xBFQu\xE9 quieres cambiar?",
    multiline: true,
    rows: 3,
    hint: "M\xE1ximo 500 caracteres"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir el bolet\xEDn del movimiento",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true
  }, "Enviar solicitud")))));
}
Object.assign(window, {
  JoinScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/MethodScreen.jsx
try { (() => {
const NSM = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AM = '../../assets';
function MethodScreen() {
  const {
    ColorBand,
    Watermark,
    DisplayTitle,
    Eyebrow,
    Card,
    Icon,
    PhotoBlock
  } = NSM;
  const pillars = [['compass', 'Innovación educativa como motor de cambio', 'Transformamos los métodos de enseñanza y aprendizaje para adaptarlos a las necesidades del siglo XXI.'], ['hand-heart', 'Empoderamiento de educadores y familias', 'Su participación es clave para construir un sistema educativo más inclusivo y efectivo.'], ['device-mobile', 'Adaptación al mundo digital', 'Integramos tecnologías emergentes para hacer la educación más accesible, interactiva y relevante.'], ['lightbulb', 'Mentalidad crítica y creativa', 'Desarrollamos pensadores críticos, creativos y solucionadores de problemas.'], ['users-three', 'Comunidades de aprendizaje colaborativo', 'Educadores, estudiantes y familias colaboran y comparten conocimientos.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColorBand, {
    color: "turquesa",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: "lima",
    anchor: "bottom-left",
    size: "58%",
    rotate: 10,
    assetBase: AM
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lima"
  }, "Metodolog\xEDa"), /*#__PURE__*/React.createElement(DisplayTitle, {
    as: "h1",
    size: "xl",
    color: "blanco",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Desafiar los l\xEDmites,", /*#__PURE__*/React.createElement("br", null), "transformar paradigmas"))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "blanco",
    padding: "var(--space-8) var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, pillars.map(([icon, t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    bordered: true,
    elevated: false,
    style: i === 4 ? {
      gridColumn: 'span 2'
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--fmm-gris)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28,
    color: "var(--fmm-carbon)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm"
  }, String(i + 1).padStart(2, '0'), " \u2014 ", t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--fs-body-md)',
      color: 'var(--text-muted)'
    }
  }, d))))))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "rojo",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-6)',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lima"
  }, "Arquetipo"), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "lg",
    color: "lima",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Rebelde", /*#__PURE__*/React.createElement("br", null), "y explorador"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--fmm-blanco)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 300,
      maxWidth: 470
    }
  }, "Nuestra esencia se centra en romper barreras y proponer enfoques educativos no convencionales. Nos vemos como catalizadores de cambio.")), /*#__PURE__*/React.createElement(PhotoBlock, {
    src: AM + '/photography/foto-03.png',
    ratio: "1 / 1",
    style: {
      height: '100%'
    }
  }))));
}
Object.assign(window, {
  MethodScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/MethodScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ProgramsScreen.jsx
try { (() => {
const NSP = window.MovimientoFutureMindsDesignSystem_d78a9e;
const AP = '../../assets';
const PROGRAMS = [{
  t: 'Aula Rebelde',
  c: 'rojo',
  tag: 'Centros',
  ph: 'foto-02.png',
  d: 'Rediseño de la programación de un curso completo junto al equipo docente.',
  dur: '12 semanas'
}, {
  t: 'Future Labs',
  c: 'turquesa',
  tag: 'Estudiantes',
  ph: 'foto-03.png',
  d: 'Laboratorios de proyecto donde el alumnado dirige su propia investigación.',
  dur: '1 trimestre'
}, {
  t: 'Familias Dentro',
  c: 'naranja',
  tag: 'Familias',
  ph: 'foto-04.png',
  d: 'Encuentros para que las familias entren en el proceso educativo del centro.',
  dur: '6 sesiones'
}, {
  t: 'Claustro Vivo',
  c: 'verde',
  tag: 'Docentes',
  ph: 'foto-06.png',
  d: 'Formación entre iguales sobre pensamiento crítico y evaluación auténtica.',
  dur: '8 semanas'
}, {
  t: 'National EDEM Fest',
  c: 'lima',
  tag: 'Comunidad',
  ph: 'foto-01.png',
  d: 'El encuentro anual de educación y emprendimiento del movimiento.',
  dur: '3 días'
}, {
  t: 'Brújula Digital',
  c: 'rojo',
  tag: 'Centros',
  ph: 'foto-09.png',
  d: 'Integración de tecnologías emergentes sin perder de vista el criterio.',
  dur: '10 semanas'
}];
function ProgramsScreen({
  onJoin
}) {
  const {
    ColorBand,
    Watermark,
    DisplayTitle,
    Eyebrow,
    Card,
    PhotoBlock,
    Badge,
    Tabs,
    Button,
    Icon
  } = NSP;
  const [filter, setFilter] = React.useState('Todos');
  const tabs = ['Todos', 'Centros', 'Docentes', 'Familias', 'Estudiantes'];
  const list = filter === 'Todos' ? PROGRAMS : PROGRAMS.filter(p => p.tag === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColorBand, {
    color: "lima",
    padding: "0",
    contain: false
  }, /*#__PURE__*/React.createElement(Watermark, {
    color: "rojo",
    anchor: "center-right",
    size: "54%",
    assetBase: AP
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Programas"), /*#__PURE__*/React.createElement(DisplayTitle, {
    as: "h1",
    size: "xl",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Redefiniendo reglas,", /*#__PURE__*/React.createElement("br", null), "liberando potencial"))), /*#__PURE__*/React.createElement(ColorBand, {
    color: "blanco",
    padding: "var(--space-6) var(--space-6) var(--space-8)"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: filter,
    onChange: setFilter,
    accent: "rojo",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    bordered: true,
    elevated: false,
    media: /*#__PURE__*/React.createElement(PhotoBlock, {
      src: AP + '/photography/' + p.ph,
      tint: p.c,
      blend: "multiply",
      ratio: "16 / 10"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: p.c,
    size: "sm"
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), p.dur)), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: "sm",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.d), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 'var(--space-3)'
    },
    onClick: onJoin
  }, "Solicitar"))))));
}
Object.assign(window, {
  ProgramsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ColorBand = __ds_scope.ColorBand;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PhotoBlock = __ds_scope.PhotoBlock;

__ds_ns.Watermark = __ds_scope.Watermark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
