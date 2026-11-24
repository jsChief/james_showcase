import type { MouseEvent, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
  className?: string
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLElement>) => void
  'aria-label'?: string
}

export function Button({
  children,
  href,
  variant = 'ghost',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
