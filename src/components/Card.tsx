import React from 'react';
import classNames from 'classnames';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'primary';
};

function Card({
  className,
  variant = 'primary',
  ...props
}: CardProps) {
  const resolvedClassName = classNames(
    'card card-compact shadow-xl',
    {
      'bg-primary text-primary-content': variant === 'primary',
    },
    className,
  );

  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={resolvedClassName}
    />
  );
}

type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

function CardBody({ className, ...props }: CardBodyProps) {
  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={classNames('card-body', className)}
    />
  );
}

type CardTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <p
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className="card-title"
    />
  );
}

type CardActionsProps = React.HTMLAttributes<HTMLDivElement>;

function CardActions({ className, ...props }: CardActionsProps) {
  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={classNames('card-actions justify-end', className)}
    />
  );
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Actions = CardActions;

export default Card;
