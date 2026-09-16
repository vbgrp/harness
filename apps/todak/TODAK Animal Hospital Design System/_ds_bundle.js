/* @ds-bundle: {"format":4,"namespace":"TODAKAnimalHospitalDesignSystem_299606","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2fc174af9d0d","components/core/Badge.jsx":"c970dc88a761","components/core/Button.jsx":"4e19c7705a5e","components/core/Card.jsx":"46e5f23a46c7","components/core/Icon.jsx":"e9a54fd8474e","components/core/IconButton.jsx":"8f3bfc35cb9a","components/core/Tag.jsx":"a69a166d598a","components/feedback/Dialog.jsx":"ff7e219695c4","components/feedback/Toast.jsx":"edd112370d0a","components/feedback/Tooltip.jsx":"49ca59140160","components/forms/Checkbox.jsx":"3788069a2ab3","components/forms/Field.jsx":"4f831038a9cf","components/forms/Input.jsx":"3d86f842ccb1","components/forms/Radio.jsx":"b8ceed822777","components/forms/Select.jsx":"58117e1769ef","components/forms/Switch.jsx":"25356f97f5df","components/forms/Textarea.jsx":"4afa79b2854f","components/navigation/Stepper.jsx":"845f7bd03986","components/navigation/Tabs.jsx":"160ac7106f63","ui_kits/owner_app/Screens.jsx":"b08d00055a8e","ui_kits/owner_app/Shell.jsx":"afc203746160","ui_kits/website/Chrome.jsx":"2d07357c6fe7","ui_kits/website/DirectionsPage.jsx":"325d0160ada6","ui_kits/website/HomePage.jsx":"23e460ce4c5e","ui_kits/website/ReservePage.jsx":"4ebb1bd6029e","ui_kits/website/ServicesPage.jsx":"dac6dddfeab2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TODAKAnimalHospitalDesignSystem_299606 = window.TODAKAnimalHospitalDesignSystem_299606 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'lockup',
  tone = 'frost',
  height = 64,
  alt = '토닥 동물병원',
  style = {},
  ...rest
}) {
  const base = typeof window !== 'undefined' && window.__TODAK_ASSETS__ || 'assets/';
  const file = {
    lockup: tone === 'white' ? 'logo-todak-white.png' : 'logo-todak-primary.png',
    symbol: tone === 'white' ? 'symbol-todak-white.png' : 'symbol-todak.png',
    wordmark: 'wordmark-todak.png'
  }[variant];
  return React.createElement('img', {
    ...rest,
    src: base + file,
    alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const cache = {};
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';
/* Lucide (2px stroke, round caps) stands in for the brand's icon_medical_set — see readme ICONOGRAPHY. */
function Icon({
  name = 'paw-print',
  size = 20,
  strokeWidth,
  color = 'currentColor',
  title,
  style = {},
  ...rest
}) {
  const [svg, setSvg] = React.useState(cache[name] || '');
  React.useEffect(() => {
    let live = true;
    if (cache[name]) {
      setSvg(cache[name]);
      return;
    }
    fetch(BASE + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      cache[name] = t;
      if (live) setSvg(t);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  const markup = svg ? svg.replace('<svg', '<svg style="display:block;width:100%;height:100%"').replace(/stroke-width="[^"]*"/, 'stroke-width="' + (strokeWidth ?? 2) + '"') : '';
  return React.createElement('span', {
    role: 'img',
    'aria-label': title || name,
    title,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    },
    ...rest,
    dangerouslySetInnerHTML: {
      __html: markup
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  brand: ['var(--frost-100)', 'var(--frost-900)'],
  mint: ['var(--mint-100)', 'var(--mint-700)'],
  accent: ['var(--buttercup-100)', '#8A6604'],
  cta: ['var(--spicy-100)', 'var(--spicy-700)'],
  calm: ['var(--frost-100)', 'var(--frost-900)'],
  neutral: ['var(--line-100)', 'var(--ink-600)']
};
function Badge({
  children,
  tone = 'brand',
  icon,
  solid = false,
  style = {},
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.brand;
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      background: solid ? fg : bg,
      color: solid ? 'var(--white)' : fg,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    key: 'i'
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 36,
    px: 14,
    fs: 'var(--text-sm)',
    gap: 6,
    icon: 16
  },
  md: {
    h: 46,
    px: 20,
    fs: 'var(--text-base)',
    gap: 8,
    icon: 18
  },
  lg: {
    h: 56,
    px: 28,
    fs: 'var(--text-md)',
    gap: 10,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-cta)'
  },
  secondary: {
    background: 'var(--frost-700)',
    color: 'var(--white)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  },
  outline: {
    background: 'var(--white)',
    color: 'var(--frost-700)',
    border: '1.5px solid var(--frost-700)',
    boxShadow: 'var(--shadow-xs)'
  },
  quiet: {
    background: 'var(--frost-100)',
    color: 'var(--frost-700)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--frost-700)',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--frost-800)'
  },
  outline: {
    background: 'var(--frost-100)',
    borderColor: 'var(--frost-800)'
  },
  quiet: {
    background: 'var(--frost-300)'
  },
  ghost: {
    background: 'var(--frost-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.h,
    padding: '0 ' + s.px + 'px',
    fontFamily: 'var(--font-body)',
    fontSize: s.fs,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-normal)',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .45 : 1,
    transition: 'background var(--dur-base) var(--ease-soft),transform var(--dur-fast) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',
    transform: p ? 'scale(.97)' : 'none',
    ...VARIANTS[variant],
    ...(h && !disabled ? HOVER[variant] : null),
    ...style
  };
  return React.createElement(as, {
    ...rest,
    disabled: as === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    key: 'i'
  }) : null, React.createElement('span', {
    key: 't'
  }, children), iconRight ? React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    key: 'r'
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const SURF = {
  white: 'var(--surface-card)',
  sunken: 'var(--surface-tint)',
  brandSoft: 'var(--surface-brand-soft)',
  calm: 'var(--surface-calm)',
  mint: 'var(--surface-mint-soft)',
  brand: 'var(--surface-brand)'
};
function Card({
  children,
  title,
  subtitle,
  icon,
  footer,
  surface = 'white',
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const onBrand = surface === 'brand';
  return React.createElement('div', {
    ...rest,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: SURF[surface] || SURF.white,
      border: '1px solid ' + (onBrand ? 'transparent' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: interactive && h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      color: onBrand ? 'var(--white)' : 'var(--text-body)',
      ...style
    }
  }, icon ? React.createElement('div', {
    key: 'ic',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: onBrand ? 'rgba(255,255,255,.16)' : 'var(--frost-100)',
      color: onBrand ? 'var(--white)' : 'var(--frost-800)',
      marginBottom: 14
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })) : null, title ? React.createElement('h3', {
    key: 't',
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-normal)',
      lineHeight: 'var(--lh-snug)'
    }
  }, title) : null, subtitle ? React.createElement('p', {
    key: 's',
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: onBrand ? 'rgba(255,255,255,.82)' : 'var(--text-muted)'
    }
  }, subtitle) : null, children ? React.createElement('div', {
    key: 'c',
    style: {
      marginTop: title || subtitle || icon ? 16 : 0
    }
  }, children) : null, footer ? React.createElement('div', {
    key: 'f',
    style: {
      marginTop: 18,
      paddingTop: 14,
      borderTop: '1px solid ' + (onBrand ? 'rgba(255,255,255,.2)' : 'var(--border-subtle)')
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const S = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  name = 'x',
  size = 'md',
  variant = 'quiet',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = S[size] || S.md;
  const v = {
    quiet: {
      background: h ? 'var(--frost-300)' : 'var(--action-quiet-bg)',
      color: 'var(--frost-900)',
      border: '1px solid transparent'
    },
    outline: {
      background: h ? 'var(--frost-100)' : 'var(--white)',
      color: 'var(--frost-900)',
      border: '1.5px solid var(--frost-300)'
    },
    ghost: {
      background: h ? 'var(--frost-100)' : 'transparent',
      color: 'var(--frost-800)',
      border: '1px solid transparent'
    },
    solid: {
      background: h ? 'var(--frost-900)' : 'var(--frost-800)',
      color: 'var(--white)',
      border: '1px solid transparent'
    }
  }[variant];
  return React.createElement('button', {
    ...rest,
    'aria-label': label || name,
    disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'var(--transition-base)',
      ...v,
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name,
    size: Math.round(d * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('span', {
    ...rest,
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--frost-800)' : h && onClick ? 'var(--frost-100)' : 'var(--white)',
      color: selected ? 'var(--white)' : 'var(--ink-600)',
      border: '1px solid ' + (selected ? 'var(--frost-800)' : 'var(--border-subtle)'),
      transition: 'var(--transition-base)',
      ...style
    }
  }, children, onRemove ? React.createElement('span', {
    key: 'x',
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 460,
  style = {}
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(24,44,66,.38)',
      backdropFilter: 'blur(3px)',
      animation: 'none'
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      ...style
    }
  }, React.createElement('div', {
    key: 'h',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      marginBottom: description ? 14 : 18
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, title ? React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-normal)'
    }
  }, title) : null, description ? React.createElement('p', {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? React.createElement(__ds_scope.IconButton, {
    name: 'x',
    size: 'sm',
    variant: 'ghost',
    label: '닫기',
    onClick: onClose
  }) : null), children, footer ? React.createElement('div', {
    key: 'f',
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE = {
  success: {
    bg: 'var(--mint-100)',
    fg: 'var(--mint-700)',
    icon: 'check-circle'
  },
  info: {
    bg: 'var(--frost-100)',
    fg: 'var(--frost-900)',
    icon: 'info'
  },
  warning: {
    bg: 'var(--buttercup-100)',
    fg: '#8A6604',
    icon: 'alert-triangle'
  },
  error: {
    bg: 'var(--spicy-100)',
    fg: 'var(--spicy-700)',
    icon: 'alert-circle'
  }
};
function Toast({
  children,
  tone = 'success',
  title,
  icon,
  onClose,
  style = {}
}) {
  const t = TONE[tone] || TONE.success;
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      border: '1px solid rgba(34,43,56,.06)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      maxWidth: 420,
      ...style
    }
  }, React.createElement('span', {
    key: 'i',
    style: {
      color: t.fg,
      marginTop: 1
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20
  })), React.createElement('div', {
    key: 'b',
    style: {
      flex: 1
    }
  }, title ? React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--ink-900)',
      marginBottom: 2
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)'
    }
  }, children)), onClose ? React.createElement('span', {
    key: 'x',
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--ink-400)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement('span', {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      padding: '7px 11px',
      background: 'var(--frost-950)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 60,
      ...style
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style = {}
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '7px',
      background: checked ? 'var(--frost-800)' : 'var(--white)',
      border: '1.5px solid ' + (checked ? 'var(--frost-800)' : 'var(--border-field)'),
      color: 'var(--white)',
      transition: 'var(--transition-base)'
    }
  }, checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 14
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return React.createElement('label', {
    style: {
      display: 'block',
      ...style
    }
  }, label ? React.createElement('span', {
    key: 'l',
    style: {
      display: 'block',
      marginBottom: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--ink-900)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--spicy-500)',
      marginLeft: 3
    }
  }, '*') : null) : null, children, error ? React.createElement('span', {
    key: 'e',
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: 'var(--danger-500)'
    }
  }, error) : hint ? React.createElement('span', {
    key: 'h',
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  icon,
  invalid = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  const input = React.createElement('input', {
    ...rest,
    disabled,
    onFocus: e => {
      setFoc(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFoc(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...{
        width: '100%',
        height: 46,
        padding: '0 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--white)',
        border: '1.5px solid var(--border-field)',
        borderRadius: 'var(--radius-field)',
        boxShadow: 'var(--inset-field)',
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      paddingLeft: icon ? 42 : 14,
      borderColor: invalid ? 'var(--danger-500)' : foc ? 'var(--frost-600)' : 'var(--border-field)',
      boxShadow: foc ? 'var(--ring-focus)' : 'var(--inset-field)',
      background: disabled ? 'var(--line-100)' : 'var(--white)',
      ...style
    }
  });
  if (!icon) return input;
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('span', {
    key: 'i',
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-400)',
      pointerEvents: 'none'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style = {}
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked,
    disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      border: '1.5px solid ' + (checked ? 'var(--frost-800)' : 'var(--border-field)'),
      transition: 'var(--transition-base)'
    }
  }, React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--frost-800)' : 'transparent',
      transition: 'var(--transition-base)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  placeholder,
  invalid = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', {
    ...rest,
    disabled,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      ...{
        width: '100%',
        height: 46,
        padding: '0 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--white)',
        border: '1.5px solid var(--border-field)',
        borderRadius: 'var(--radius-field)',
        boxShadow: 'var(--inset-field)',
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      appearance: 'none',
      paddingRight: 40,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: 'var(--text-body)',
      borderColor: invalid ? 'var(--danger-500)' : foc ? 'var(--frost-600)' : 'var(--border-field)',
      boxShadow: foc ? 'var(--ring-focus)' : 'var(--inset-field)',
      background: disabled ? 'var(--line-100)' : 'var(--white)',
      ...style
    }
  }, placeholder ? React.createElement('option', {
    key: 'ph',
    value: ''
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  })), React.createElement('span', {
    key: 'c',
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-400)',
      pointerEvents: 'none'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style = {}
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--mint-500)' : 'var(--line-200)',
      transition: 'background var(--dur-base) var(--ease-soft)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  invalid = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return React.createElement('textarea', {
    ...rest,
    rows,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      ...{
        width: '100%',
        height: 46,
        padding: '0 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--white)',
        border: '1.5px solid var(--border-field)',
        borderRadius: 'var(--radius-field)',
        boxShadow: 'var(--inset-field)',
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      height: 'auto',
      padding: '12px 14px',
      lineHeight: 'var(--lh-normal)',
      resize: 'vertical',
      borderColor: invalid ? 'var(--danger-500)' : foc ? 'var(--frost-600)' : 'var(--border-field)',
      boxShadow: foc ? 'var(--ring-focus)' : 'var(--inset-field)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0,
  style = {}
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    return React.createElement(React.Fragment, {
      key: i
    }, i ? React.createElement('span', {
      style: {
        flex: 1,
        height: 2,
        margin: '0 10px',
        background: done || on ? 'var(--frost-600)' : 'var(--line-200)',
        borderRadius: 2
      }
    }) : null, React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 'var(--radius-pill)',
        background: done ? 'var(--frost-800)' : on ? 'var(--white)' : 'var(--line-100)',
        border: '1.5px solid ' + (done ? 'var(--frost-800)' : on ? 'var(--frost-800)' : 'var(--line-200)'),
        color: done ? 'var(--white)' : on ? 'var(--frost-900)' : 'var(--text-faint)',
        fontFamily: 'var(--font-en)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-bold)'
      }
    }, done ? React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 15
    }) : i + 1), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--ink-900)' : 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, s)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style = {}
}) {
  const [hover, setHover] = React.useState(null);
  const norm = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  const pill = variant === 'pill';
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: pill ? 6 : 22,
      padding: pill ? 4 : 0,
      background: pill ? 'var(--line-100)' : 'transparent',
      borderRadius: 'var(--radius-pill)',
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, norm.map(t => {
    const on = t.value === value;
    return React.createElement('button', {
      key: t.value,
      role: 'tab',
      'aria-selected': on,
      onClick: () => onChange && onChange(t.value),
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      style: pill ? {
        padding: '9px 18px',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--white)' : hover === t.value ? 'rgba(255,255,255,.6)' : 'transparent',
        color: on ? 'var(--frost-900)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        cursor: 'pointer',
        transition: 'var(--transition-base)'
      } : {
        padding: '0 0 12px',
        border: 'none',
        background: 'transparent',
        borderBottom: '2.5px solid ' + (on ? 'var(--frost-800)' : 'transparent'),
        marginBottom: -1,
        color: on ? 'var(--frost-900)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        cursor: 'pointer',
        transition: 'var(--transition-base)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/owner_app/Screens.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  Icon,
  Tag,
  Tabs,
  Switch,
  Toast,
  Field,
  Input,
  Select,
  Stepper,
  Logo
} = window.TODAKAnimalHospitalDesignSystem_299606;
function HomeScreen({
  onTab
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\uC548\uB155\uD558\uC138\uC694, \uBCF4\uD638\uC790\uB2D8",
    action: /*#__PURE__*/React.createElement(IconButton, {
      name: "bell",
      variant: "quiet",
      size: "sm",
      label: "\uC54C\uB9BC"
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--frost-800)',
      borderRadius: 22,
      padding: 20,
      color: '#fff',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      background: 'rgba(255,255,255,.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dog",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "\uD1A0\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.8)'
    }
  }, "\uB9D0\uD2F0\uC988 \xB7 3\uC0B4 \xB7 4.2kg")), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    solid: true
  }, "D-3")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,.2)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "syringe",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.9)',
      flex: 1
    }
  }, "\uC885\uD569\uBC31\uC2E0 3\uCC28 \xB7 9\uC6D4 19\uC77C \uC608\uC815"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    icon: "calendar-check",
    onClick: () => onTab('예약')
  }, "\uC608\uC57D\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "phone",
    style: {
      flex: '0 0 auto'
    }
  }, "\uC804\uD654")), /*#__PURE__*/React.createElement(Rail, {
    title: "\uB2E4\uAC00\uC624\uB294 \uC77C\uC815",
    more: "\uC804\uCCB4\uBCF4\uAE30"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, [['syringe', '종합백신 3차', '9월 19일 (금) 15:30', 'brand'], ['stethoscope', '정기 건강검진', '10월 4일 (토) 10:00', 'calm']].map(([ic, t, d, tone]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 9999,
      background: tone === 'brand' ? 'var(--frost-100)' : 'var(--frost-100)',
      color: 'var(--frost-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-400)"
  })))), /*#__PURE__*/React.createElement(Rail, {
    title: "\uD1A0\uB2E5 \uC18C\uC2DD"
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "mint",
    icon: "sprout",
    title: "\uAC00\uC744\uCCA0 \uC2EC\uC7A5\uC57D \uBCF5\uC6A9 \uC548\uB0B4",
    subtitle: "\uBAA8\uAE30\uAC00 \uC0AC\uB77C\uC9C0\uB294 11\uC6D4\uAE4C\uC9C0\uB294 \uC608\uBC29\uC57D\uC744 \uACC4\uC18D \uCC59\uACA8\uC8FC\uC138\uC694.",
    padding: 18,
    interactive: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    title: "\uC624\uB298 \uC9C4\uB8CC 19:00\uAE4C\uC9C0",
    style: {
      maxWidth: 'none'
    }
  }, "\uD604\uC7AC \uB300\uAE30 3\uBA85 \xB7 \uC608\uC0C1 15\uBD84"))));
}
function ReserveScreen() {
  const [step, setStep] = React.useState(0);
  const [item, setItem] = React.useState('예방접종');
  const [time, setTime] = React.useState('15:30');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\uC9C4\uB8CC \uC608\uC57D"
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['항목', '시간', '확인'],
    current: step,
    style: {
      marginBottom: 22
    }
  }), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\uC608\uC57D\uC774 \uC811\uC218\uB418\uC5C8\uC5B4\uC694",
    style: {
      maxWidth: 'none'
    }
  }, "9\uC6D4 18\uC77C ", time, " \xB7 ", item)) : null, step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uC9C4\uB8CC \uD56D\uBAA9"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, ['예방접종', '건강검진', '내과 진료', '치과', '피부'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: item === t,
    onClick: () => setItem(t)
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "\uBC18\uB824\uB3D9\uBB3C"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['토리 · 말티즈 3살', '보리 · 코숏 5살']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC99D\uC0C1 \uBA54\uBAA8",
    hint: "\uC120\uD0DD \uC0AC\uD56D"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uBC25\uC744 \uC798 \uC548 \uBA39\uC5B4\uC694"
  })), /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "arrow-right",
    onClick: () => setStep(1)
  }, "\uC2DC\uAC04 \uC120\uD0DD")) : null, step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "9\uC6D4 18\uC77C (\uC218)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, ['09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00'].map(t => {
    const full = t === '11:00' || t === '15:00',
      on = t === time;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      disabled: full,
      onClick: () => setTime(t),
      style: {
        height: 46,
        borderRadius: 12,
        border: '1.5px solid ' + (on ? 'var(--frost-800)' : 'var(--border-field)'),
        background: on ? 'var(--frost-800)' : full ? 'var(--line-100)' : '#fff',
        color: on ? '#fff' : full ? 'var(--text-faint)' : 'var(--ink-900)',
        fontFamily: 'var(--font-en)',
        fontSize: 15,
        fontWeight: 600,
        textDecoration: full ? 'line-through' : 'none',
        cursor: full ? 'not-allowed' : 'pointer'
      }
    }, t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(0)
  }, "\uC774\uC804"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "arrow-right",
    onClick: () => setStep(2)
  }, "\uB2E4\uC74C"))) : null, step === 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\uC608\uC57D \uD655\uC778",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      fontSize: 14
    }
  }, [['반려동물', '토리'], ['진료 항목', item], ['날짜', '9월 18일 (수)'], ['시간', time]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    surface: "calm",
    icon: "info",
    title: "\uC608\uC57D \uBCC0\uACBD",
    subtitle: "\uC9C4\uB8CC 3\uC2DC\uAC04 \uC804\uAE4C\uC9C0 \uC571\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC5B4\uC694.",
    padding: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "\uC774\uC804"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "check",
    onClick: () => {
      setDone(true);
      setStep(0);
    }
  }, "\uC608\uC57D \uC2E0\uCCAD"))) : null));
}
function RecordScreen() {
  const [tab, setTab] = React.useState('진료');
  const REC = {
    '진료': [['2026.08.12', '피부 진료', '외이염 초기 · 점이약 7일', 'mint'], ['2026.05.03', '건강검진', '혈액 15종 정상', 'mint'], ['2026.02.20', '내과 진료', '장염 · 수액 처치', 'neutral']],
    '접종': [['2026.09.19', '종합백신 3차', '예정', 'accent'], ['2026.08.22', '종합백신 2차', '완료', 'mint'], ['2026.07.25', '종합백신 1차', '완료', 'mint']],
    '처방': [['2026.08.12', '점이약 (7일)', '1일 2회 · 양쪽 귀', 'neutral'], ['2026.08.12', '경구 항생제', '1일 1회 · 식후', 'neutral']]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\uC9C4\uB8CC \uAE30\uB85D",
    action: /*#__PURE__*/React.createElement(IconButton, {
      name: "download",
      variant: "quiet",
      size: "sm",
      label: "\uB0B4\uB824\uBC1B\uAE30"
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 18,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 9999,
      background: 'var(--frost-100)',
      color: 'var(--frost-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dog",
    size: 23
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "\uD1A0\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\uB9D0\uD2F0\uC988 \xB7 3\uC0B4 \xB7 4.2kg")), /*#__PURE__*/React.createElement(Badge, {
    tone: "mint",
    icon: "check"
  }, "\uAC74\uAC15 \uC591\uD638")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(REC),
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginTop: 16
    }
  }, REC[tab].map(([d, t, s, tone]) => /*#__PURE__*/React.createElement("div", {
    key: d + t,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 16,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, d), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tone === 'accent' ? '예정' : '완료')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, s))))));
}
function AlertScreen() {
  const [a, setA] = React.useState(true),
    [b, setB] = React.useState(true),
    [c, setC] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\uC54C\uB9BC"
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "warning",
    title: "\uC811\uC885 \uC608\uC815\uC77C\uC774 \uB2E4\uAC00\uC640\uC694",
    style: {
      maxWidth: 'none'
    }
  }, "\uD1A0\uB9AC \xB7 \uC885\uD569\uBC31\uC2E0 3\uCC28 \xB7 3\uC77C \uB4A4"), /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\uC608\uC57D\uC774 \uD655\uC815\uB418\uC5C8\uC5B4\uC694",
    style: {
      maxWidth: 'none'
    }
  }, "9\uC6D4 18\uC77C(\uC218) 15:30 \xB7 \uC608\uBC29\uC811\uC885"), /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    title: "\uAC80\uC9C4 \uACB0\uACFC\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC5B4\uC694",
    style: {
      maxWidth: 'none'
    }
  }, "\uAE30\uB85D \uD0ED\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement(Rail, {
    title: "\uC54C\uB9BC \uC124\uC815"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '6px 18px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, [['접종·재진 알림', a, setA], ['예약 확인 문자', b, setB], ['병원 소식 받기', c, setC]].map(([l, v, set], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, l), /*#__PURE__*/React.createElement(Switch, {
    checked: v,
    onChange: set
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    height: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 10,
      letterSpacing: '.14em',
      color: 'var(--mint-700)'
    }
  }, "TODAK ANIMAL HOSPITAL"))));
}
Object.assign(window, {
  HomeScreen,
  ReserveScreen,
  RecordScreen,
  AlertScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/owner_app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/owner_app/Shell.jsx
try { (() => {
const {
  Icon,
  Logo
} = window.TODAKAnimalHospitalDesignSystem_299606;
function Phone({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: 'var(--white)',
      borderRadius: 38,
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      fontFamily: 'var(--font-en)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-900)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 16
  }))), children), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 12,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-en)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, label) : null);
}
function AppBar({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 20px 14px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: 'var(--ink-900)'
    }
  }, title), action);
}
function TabBar({
  tab,
  onTab
}) {
  const items = [['홈', 'house'], ['예약', 'calendar-check'], ['기록', 'file-heart'], ['알림', 'bell']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      background: 'rgba(255,255,255,.96)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '8px 8px 20px',
      backdropFilter: 'blur(8px)'
    }
  }, items.map(([n, i]) => {
    const on = tab === n;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => onTab(n),
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '6px 0',
        cursor: 'pointer',
        color: on ? 'var(--frost-800)' : 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 22,
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: on ? 700 : 500,
        fontFamily: 'var(--font-body)'
      }
    }, n));
  }));
}
function Scroll({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 20px 24px'
    }
  }, children);
}
function Rail({
  title,
  more
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      margin: '24px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title), more ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--frost-800)',
      fontWeight: 600
    }
  }, more) : null);
}
Object.assign(window, {
  Phone,
  AppBar,
  TabBar,
  Scroll,
  Rail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/owner_app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon,
  Tabs
} = window.TODAKAnimalHospitalDesignSystem_299606;
const NAV = ['홈', '진료안내', '의료진', '예약', '오시는 길'];
function SiteHeader({
  page,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '0 32px',
      height: 84,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('홈'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    height: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: 'var(--frost-900)'
    }
  }, "\uD1A0\uB2E5 \uB3D9\uBB3C\uBCD1\uC6D0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '.14em',
      color: 'var(--mint-700)'
    }
  }, "TODAK ANIMAL HOSPITAL"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onNav(n),
    style: {
      border: 'none',
      background: page === n ? 'var(--frost-100)' : 'transparent',
      color: page === n ? 'var(--frost-900)' : 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: page === n ? 600 : 500,
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-base)'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "\uC9C4\uB8CC \uBB38\uC758"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--frost-900)'
    }
  }, "02-000-0000")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "calendar-check",
    onClick: () => onNav('예약')
  }, "\uC608\uC57D"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--frost-900)',
      color: 'rgba(255,255,255,.78)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    tone: "white",
    height: 58
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-.02em',
      lineHeight: 1.4
    }
  }, "\uC791\uC740 \uC228\uACB0\uB9C8\uB2E4 \uB2FF\uB294 \uB530\uB73B\uD55C \uC190\uAE38,", /*#__PURE__*/React.createElement("br", null), "\uB9C8\uC74C\uAE4C\uC9C0 \uD1A0\uB2E5\uC774\uB294 \uC9C4\uB8CC")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\uC9C4\uB8CC \uC2DC\uAC04"), "\uD3C9\uC77C 09:30 \u2013 19:00", /*#__PURE__*/React.createElement("br", null), "\uD1A0\uC694\uC77C 09:30 \u2013 15:00", /*#__PURE__*/React.createElement("br", null), "\uC810\uC2EC 13:00 \u2013 14:00", /*#__PURE__*/React.createElement("br", null), "\uC77C\uC694\uC77C\xB7\uACF5\uD734\uC77C \uD734\uC9C4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38"), "\uC11C\uC6B8\uC2DC \u25CB\u25CB\uAD6C \u25CB\u25CB\uB85C 00, 1\uCE35", /*#__PURE__*/React.createElement("br", null), "\uC8FC\uCC28 \uAC00\uB2A5 (\uAC74\uBB3C \uB4A4\uD3B8)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)'
    }
  }, "02-000-0000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.14)',
      padding: '18px 32px',
      fontSize: 12,
      textAlign: 'center',
      color: 'rgba(255,255,255,.55)'
    }
  }, "\xA9 2026 TODAK ANIMAL HOSPITAL"));
}
function Placeholder({
  label,
  height = 260,
  radius = 24,
  tone = 'calm'
}) {
  const bg = {
    calm: 'var(--frost-100)',
    mint: 'var(--mint-100)',
    sunken: 'var(--line-100)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: bg,
      border: '1px dashed var(--frost-300)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--frost-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, label));
}
function Section({
  eyebrow,
  title,
  desc,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '0 32px',
      marginTop: 96,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      color: 'var(--mint-700)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '-.02em',
      lineHeight: 1.3,
      color: 'var(--ink-900)'
    }
  }, title) : null, desc ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '56ch'
    }
  }, desc) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, children));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Placeholder,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DirectionsPage.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon,
  Tabs
} = window.TODAKAnimalHospitalDesignSystem_299606;
function DirectionsPage() {
  const [tab, setTab] = React.useState('지하철');
  const WAY = {
    '지하철': '○○역 3번 출구에서 도보 2분. 출구를 나와 직진하시면 1층에 토닥 간판이 보입니다.',
    '버스': '○○사거리 정류장 하차 (100, 271, 470). 횡단보도 건너 바로 왼쪽 건물 1층입니다.',
    '자가용': '건물 뒤편 전용 주차장 5대 · 진료 시 2시간 무료. 만차 시 인근 공영주차장을 안내드립니다.'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    },
    eyebrow: "DIRECTIONS",
    title: "\uC624\uC2DC\uB294 \uAE38",
    desc: "\uC11C\uC6B8\uC2DC \u25CB\u25CB\uAD6C \u25CB\u25CB\uB85C 00, 1\uCE35 \xB7 02-000-0000"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "\uC57D\uB3C4 \uC774\uBBF8\uC9C0 \uBBF8\uC81C\uACF5 \u2014 \uC2E4\uC81C \uC9C0\uB3C4 \uC774\uBBF8\uC9C0\uB85C \uAD50\uCCB4 \uD544\uC694",
    height: 340,
    tone: "sunken"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 26,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(WAY),
    value: tab,
    onChange: setTab,
    style: {
      display: 'inline-flex'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--text-body)'
    }
  }, WAY[tab]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "map-pin"
  }, "\uAE38\uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "phone"
  }, "\uC804\uD654 \uBB38\uC758"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    icon: "clock",
    title: "\uC9C4\uB8CC \uC2DC\uAC04",
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      fontSize: 14
    }
  }, [['평일', '09:30 – 19:00'], ['토요일', '09:30 – 15:00'], ['점심', '13:00 – 14:00'], ['일·공휴일', '휴진']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontWeight: 600
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    surface: "mint",
    icon: "sprout",
    title: "\uB300\uAE30 \uACF5\uAC04",
    subtitle: "\uC544\uC774\uBCF4\uB9AC\uC640 \uC6B0\uB4DC\uD1A4 \uB9C8\uAC10, \uAC15\uC544\uC9C0\xB7\uACE0\uC591\uC774 \uB300\uAE30 \uAD6C\uC5ED\uC744 \uBD84\uB9AC\uD588\uC2B5\uB2C8\uB2E4.",
    padding: 22
  })))));
}
Object.assign(window, {
  DirectionsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DirectionsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Logo
} = window.TODAKAnimalHospitalDesignSystem_299606;
const SERVICES = [{
  icon: 'stethoscope',
  t: '건강검진',
  d: '나이와 견종·묘종에 맞춘 정기 검진 프로그램'
}, {
  icon: 'syringe',
  t: '예방접종',
  d: '시기별 접종 스케줄을 문자로 챙겨드려요'
}, {
  icon: 'heart-pulse',
  t: '내과 진료',
  d: '소화기·피부·호흡기 등 1차 진료 전반'
}, {
  icon: 'bone',
  t: '치과 · 스케일링',
  d: '마취 전 정밀 검사 후 안전하게 진행'
}, {
  icon: 'scissors',
  t: '외과 · 중성화',
  d: '수술 전후 보호자 상담을 꼭 거칩니다'
}, {
  icon: 'sprout',
  t: '토닥 회복 케어',
  d: '퇴원 후 회복까지 함께 지켜봅니다'
}];
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,var(--frost-100) 0%,var(--white) 100%)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '72px 32px 88px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "mint",
    icon: "sprout"
  }, "1\uCC28 \uC9C4\uB8CC \uC911\uC2EC \uB3D9\uBB3C\uBCD1\uC6D0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontSize: 52,
      fontWeight: 700,
      letterSpacing: '-.03em',
      lineHeight: 1.24,
      color: 'var(--frost-950)',
      textWrap: 'pretty'
    }
  }, "\uC791\uC740 \uC228\uACB0\uB9C8\uB2E4 \uB2FF\uB294", /*#__PURE__*/React.createElement("br", null), "\uB530\uB73B\uD55C \uC190\uAE38,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--frost-800)'
    }
  }, "\uB9C8\uC74C\uAE4C\uC9C0 \uD1A0\uB2E5\uC774\uB294 \uC9C4\uB8CC")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, "\uCC28\uAC00\uC6B4 \uBCD1\uC6D0\uC774 \uC544\uB2C8\uB77C, \uBCF4\uD638\uC790\uC640 \uC544\uC774 \uBAA8\uB450\uAC00 \uD3B8\uD788 \uC228 \uC274 \uC218 \uC788\uB294 \uACF5\uAC04\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uC9C4\uB8CC \uC804 \uCDA9\uBD84\uD788 \uC124\uBA85\uD558\uACE0, \uC9C4\uB8CC \uD6C4\uC5D0\uB3C4 \uD68C\uBCF5\uC744 \uD568\uAED8 \uC9C0\uCF1C\uBD05\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "calendar-check",
    onClick: () => onNav('예약')
  }, "\uC9C4\uB8CC \uC608\uC57D\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    icon: "phone"
  }, "02-000-0000")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 36
    }
  }, [['clock', '평일 09:30–19:00'], ['map-pin', '○○역 3번 출구 2분'], ['car', '건물 뒤편 주차']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17,
    color: "var(--frost-700)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "\uB300\uD45C \uC9C4\uB8CC \uC0AC\uC9C4 (\uC6D0\uBCF8 \uC774\uBBF8\uC9C0 \uBBF8\uC81C\uACF5)",
    height: 400,
    tone: "mint"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -24,
      left: -24,
      background: '#fff',
      borderRadius: 20,
      padding: '18px 22px',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    height: 46
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "\uC624\uB298 \uC9C4\uB8CC \uC911"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\uD604\uC7AC \uB300\uAE30 3\uBA85 \xB7 \uC608\uC0C1 15\uBD84")))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "OUR CARE",
    title: "\uD1A0\uB2E5\uC758 \uC9C4\uB8CC \uD56D\uBAA9",
    desc: "1\uCC28 \uC9C4\uB8CC\uC5D0 \uD544\uC694\uD55C \uACFC\uC815\uC744 \uD55C \uACF3\uC5D0\uC11C. \uD544\uC694 \uC774\uC0C1\uC758 \uAC80\uC0AC\uB098 \uC2DC\uC220\uC740 \uAD8C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    icon: s.icon,
    title: s.t,
    subtitle: s.d,
    interactive: true,
    onClick: () => onNav('진료안내')
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "TODAK PROMISE",
    title: "\uC138 \uAC00\uC9C0 \uC57D\uC18D"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "brand",
    icon: "message-circle",
    title: "\uBA3C\uC800 \uC124\uBA85\uD569\uB2C8\uB2E4",
    subtitle: "\uAC80\uC0AC\uC640 \uCE58\uB8CC\uC758 \uC774\uC720\uB97C \uBCF4\uD638\uC790\uAC00 \uC774\uD574\uD560 \uB54C\uAE4C\uC9C0 \uC124\uBA85\uD55C \uB4A4 \uC9C4\uD589\uD569\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "calm",
    icon: "hand-heart",
    title: "\uB35C \uBB34\uC12D\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4",
    subtitle: "\uB300\uAE30\uC2E4\uACFC \uC9C4\uB8CC\uC2E4\uC744 \uBD84\uB9AC\uD558\uACE0, \uC544\uC774\uAC00 \uB180\uB77C\uC9C0 \uC54A\uB3C4\uB85D \uCC9C\uCC9C\uD788 \uB2E4\uAC00\uAC11\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "mint",
    icon: "sprout",
    title: "\uB05D\uAE4C\uC9C0 \uC9C0\uCF1C\uBD05\uB2C8\uB2E4",
    subtitle: "\uD1F4\uC6D0 \uC774\uD6C4 \uD68C\uBCF5 \uACBD\uACFC\uB97C \uBB38\uC790\uC640 \uC571\uC73C\uB85C \uD568\uAED8 \uD655\uC778\uD569\uB2C8\uB2E4."
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "MEDICAL TEAM",
    title: "\uC758\uB8CC\uC9C4",
    desc: "\uBCF4\uD638\uC790\uC640 \uB208\uC744 \uB9DE\uCD94\uACE0 \uC774\uC57C\uAE30\uD558\uB294 \uC9C4\uB8CC\uB97C \uC9C0\uD5A5\uD569\uB2C8\uB2E4."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['김토닥', '대표원장 · 내과', '서울대 수의학 석사'], ['이새싹', '진료원장 · 외과', '동물 외과 전문 과정'], ['박발자', '진료원장 · 치과', '동물 치과 수료']].map(([n, r, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "\uC758\uB8CC\uC9C4 \uC0AC\uC9C4 \uBBF8\uC81C\uACF5",
    height: 190,
    radius: 0,
    tone: "sunken"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--frost-800)',
      fontWeight: 600,
      marginTop: 4
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '96px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--frost-800)',
      borderRadius: 28,
      padding: '56px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      color: 'var(--buttercup-500)'
    }
  }, "RESERVATION"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: '#fff',
      lineHeight: 1.34
    }
  }, "\uAE30\uB2E4\uB9AC\uB294 \uC2DC\uAC04\uB3C4 \uD3B8\uC548\uD558\uB3C4\uB85D,", /*#__PURE__*/React.createElement("br", null), "\uBBF8\uB9AC \uC608\uC57D\uD574 \uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 16,
      color: 'rgba(255,255,255,.8)',
      lineHeight: 1.7
    }
  }, "\uC628\uB77C\uC778 \uC608\uC57D\uC740 \uC9C4\uB8CC 3\uC2DC\uAC04 \uC804\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC751\uAE09 \uC0C1\uD669\uC740 \uBC14\uB85C \uC804\uD654 \uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "calendar-check",
    onClick: () => onNav('예약')
  }, "\uC608\uC57D \uD398\uC774\uC9C0\uB85C"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    icon: "siren"
  }, "\uC751\uAE09 \uC804\uD654")))));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReservePage.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Button,
  Stepper,
  Tag,
  Badge,
  Dialog,
  Toast,
  Icon
} = window.TODAKAnimalHospitalDesignSystem_299606;
const TIMES = ['09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
const FULL = ['11:00', '15:00'];
function ReservePage() {
  const [step, setStep] = React.useState(0);
  const [item, setItem] = React.useState('예방접종');
  const [species, setSpecies] = React.useState('dog');
  const [day, setDay] = React.useState(18);
  const [time, setTime] = React.useState('15:30');
  const [agree, setAgree] = React.useState(false);
  const [remind, setRemind] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    },
    eyebrow: "RESERVATION",
    title: "\uC9C4\uB8CC \uC608\uC57D"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['진료 항목', '날짜·시간', '보호자 정보'],
    current: step
  })), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\uC608\uC57D\uC774 \uC811\uC218\uB418\uC5C8\uC5B4\uC694"
  }, "9\uC6D4 ", day, "\uC77C(\uC218) ", time, " \xB7 ", item, " \xB7 \uD655\uC815 \uBB38\uC790\uB97C \uACE7 \uBCF4\uB0B4\uB4DC\uB9B4\uAC8C\uC694.")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-sm)',
      padding: 28
    }
  }, step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uBC18\uB824\uB3D9\uBB3C \uC885\uB958",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "sp",
    value: "dog",
    label: "\uAC15\uC544\uC9C0",
    checked: species === 'dog',
    onChange: setSpecies
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "sp",
    value: "cat",
    label: "\uACE0\uC591\uC774",
    checked: species === 'cat',
    onChange: setSpecies
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "sp",
    value: "etc",
    label: "\uADF8 \uC678",
    checked: species === 'etc',
    onChange: setSpecies
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "\uC9C4\uB8CC \uD56D\uBAA9",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, ['예방접종', '건강검진', '내과 진료', '치과', '피부', '중성화 상담'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: item === t,
    onClick: () => setItem(t)
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "\uC774\uC804 \uC9C4\uB8CC \uC774\uB825",
    hint: "\uCC98\uC74C \uBC29\uBB38\uC774\uBA74 \uBE44\uC6CC\uB450\uC138\uC694"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
    options: ['처음 방문이에요', '토닥에서 진료받은 적 있어요', '다른 병원 진료 기록이 있어요']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: () => setStep(1)
  }, "\uB0A0\uC9DC \uC120\uD0DD"))) : null, step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "2026\uB144 9\uC6D4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, ['일', '월', '화', '수', '목', '금', '토'].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-faint)',
      paddingBottom: 4
    }
  }, d)), Array.from({
    length: 30
  }, (_, i) => i + 1).map(d => {
    const off = d < 16,
      on = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      disabled: off,
      onClick: () => setDay(d),
      style: {
        height: 40,
        border: '1px solid ' + (on ? 'var(--frost-800)' : 'transparent'),
        background: on ? 'var(--frost-800)' : off ? 'transparent' : 'var(--line-100)',
        color: on ? '#fff' : off ? 'var(--text-faint)' : 'var(--ink-900)',
        borderRadius: 12,
        fontFamily: 'var(--font-en)',
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        cursor: off ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-base)'
      }
    }, d);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uC2DC\uAC04 \uC120\uD0DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 8
    }
  }, TIMES.map(t => {
    const full = FULL.includes(t),
      on = t === time;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      disabled: full,
      onClick: () => setTime(t),
      style: {
        height: 42,
        borderRadius: 12,
        border: '1.5px solid ' + (on ? 'var(--frost-800)' : 'var(--border-field)'),
        background: on ? 'var(--frost-800)' : full ? 'var(--line-100)' : '#fff',
        color: on ? '#fff' : full ? 'var(--text-faint)' : 'var(--ink-900)',
        fontFamily: 'var(--font-en)',
        fontSize: 14,
        fontWeight: 600,
        cursor: full ? 'not-allowed' : 'pointer',
        textDecoration: full ? 'line-through' : 'none',
        transition: 'var(--transition-base)'
      }
    }, t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(0)
  }, "\uC774\uC804"), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: () => setStep(2)
  }, "\uBCF4\uD638\uC790 \uC815\uBCF4"))) : null, step === 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uBCF4\uD638\uC790 \uC774\uB984",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uD64D\uAE38\uB3D9"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC5F0\uB77D\uCC98",
    required: true,
    hint: "\uC608\uC57D \uD655\uC778 \uBB38\uC790\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uBC18\uB824\uB3D9\uBB3C \uC774\uB984",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "paw-print",
    placeholder: "\uD1A0\uB9AC"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uB098\uC774 / \uCCB4\uC911"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "3\uC0B4 \xB7 4.2kg"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "\uC99D\uC0C1 \uBA54\uBAA8",
    hint: "\uD3B8\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "\uC5B4\uC81C \uC800\uB141\uBD80\uD130 \uBC25\uC744 \uC798 \uC548 \uBA39\uACE0, \uAE30\uC6B4\uC774 \uC5C6\uC5B4\uC694."
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "\uC811\uC885\xB7\uC7AC\uC9C4 \uC54C\uB9BC \uBB38\uC790 \uBC1B\uAE30",
    checked: remind,
    onChange: setRemind
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 (\uD544\uC218)",
    checked: agree,
    onChange: setAgree
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "\uC774\uC804"), /*#__PURE__*/React.createElement(Button, {
    icon: "check",
    disabled: !agree,
    onClick: () => setOpen(true)
  }, "\uC608\uC57D \uC2E0\uCCAD"))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\uC120\uD0DD\uD55C \uC608\uC57D",
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      fontSize: 14
    }
  }, [['진료 항목', item], ['반려동물', {
    dog: '강아지',
    cat: '고양이',
    etc: '그 외'
  }[species]], ['날짜', '9월 ' + day + '일 (수)'], ['시간', time]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    surface: "calm",
    icon: "clock",
    title: "\uC9C4\uB8CC \uC2DC\uAC04",
    subtitle: "\uD3C9\uC77C 09:30\u201319:00 \xB7 \uD1A0 09:30\u201315:00 \xB7 \uC810\uC2EC 13:00\u201314:00 \xB7 \uC77C\uC694\uC77C \uD734\uC9C4",
    padding: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "info"
  }, "\uC548\uB0B4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\uC608\uC57D \uBCC0\uACBD\uC740 \uC9C4\uB8CC 3\uC2DC\uAC04 \uC804\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "\uC608\uC57D\uC744 \uD655\uC815\uD560\uAE4C\uC694?",
    description: '9월 ' + day + '일(수) ' + time + ' · ' + item,
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "\uB2E4\uC2DC \uBCFC\uAC8C\uC694"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setDone(true);
        setStep(0);
      }
    }, "\uD655\uC815\uD558\uAE30"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--frost-100)',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square",
    size: 20,
    color: "var(--frost-800)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\uD655\uC815 \uD6C4 \uBCF4\uD638\uC790 \uC5F0\uB77D\uCC98\uB85C \uD655\uC778 \uBB38\uC790\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."))));
}
Object.assign(window, {
  ReservePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReservePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
const {
  Card,
  Tabs,
  Tag,
  Badge,
  Button,
  Icon,
  Toast
} = window.TODAKAnimalHospitalDesignSystem_299606;
const DETAIL = {
  '예방접종': [['강아지 종합백신 (DHPPL)', '5주 간격 3회 · 이후 매년 1회'], ['고양이 3종 백신', '3~4주 간격 3회 · 이후 매년 1회'], ['광견병', '매년 1회 · 법정 접종'], ['켄넬코프', '산책·호텔 이용 전 권장']],
  '건강검진': [['기본 검진', '신체검사 + 혈액 기본 15종'], ['정밀 검진', '혈액 30종 + 방사선 + 초음파'], ['시니어 검진', '7세 이상 · 심장·신장 중심'], ['수술 전 검사', '마취 안전성 확인 필수']],
  '치과': [['구강 검진', '치석·치주염 단계 확인'], ['스케일링', '마취 전 정밀 검사 후 진행'], ['발치', '치근 상태에 따라 결정'], ['홈케어 상담', '칫솔질 교육 포함']]
};
function ServicesPage({
  onNav
}) {
  const [tab, setTab] = React.useState('예방접종');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--frost-100)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '56px 32px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      color: 'var(--mint-700)'
    }
  }, "MEDICAL SERVICES"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: 'var(--frost-950)'
    }
  }, "\uC9C4\uB8CC \uC548\uB0B4"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 17,
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      lineHeight: 1.7
    }
  }, "\uC544\uC774\uC758 \uC0C1\uD0DC\uC640 \uB098\uC774\uC5D0 \uB530\uB77C \uD544\uC694\uD55C \uB9CC\uD07C\uB9CC \uAD8C\uD569\uB2C8\uB2E4. \uBE44\uC6A9\uACFC \uC18C\uC694 \uC2DC\uAC04\uC740 \uC9C4\uB8CC \uC804\uC5D0 \uBBF8\uB9AC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    items: Object.keys(DETAIL),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, DETAIL[tab].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '20px 24px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 9999,
      background: 'var(--frost-100)',
      color: 'var(--frost-800)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "syringe",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    onClick: () => onNav('예약')
  }, "\uC608\uC57D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "brandSoft",
    title: "\uC9C4\uB8CC \uC804 \uC900\uBE44",
    subtitle: "\uC99D\uC0C1\uC774 \uC2DC\uC791\uB41C \uC2DC\uC810, \uC2DD\uC0AC\xB7\uBC30\uBCC0 \uBCC0\uD654, \uBCF5\uC6A9 \uC911\uC778 \uC57D\uC744 \uBA54\uBAA8\uD574 \uC624\uC2DC\uBA74 \uC9C4\uB8CC\uAC00 \uD6E8\uC52C \uBE68\uB77C\uC9D1\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    title: "\uC810\uC2EC\uC2DC\uAC04 13:00\u201314:00"
  }, "\uD574\uB2F9 \uC2DC\uAC04\uC5D0\uB294 \uC608\uC57D\uC774 \uC5F4\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 12
    }
  }, "\uC790\uC8FC \uCC3E\uB294 \uD56D\uBAA9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['중성화', '피부', '설사', '슬개골', '심장', '건강검진'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cta",
    icon: "siren"
  }, "\uC751\uAE09"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\uD638\uD761 \uACE4\uB780\xB7\uACBD\uB828\uC740 \uBC14\uB85C \uC804\uD654 \uC8FC\uC138\uC694."))))));
}
Object.assign(window, {
  ServicesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

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

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
