import classNames from 'classnames';
import React, { ReactNode } from 'react';

type KeyValueListProps = React.HTMLAttributes<HTMLDListElement>;

function KeyValueList({ className, ...props }: KeyValueListProps) {
  return (
    <dl
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={classNames(className, 'text-l')}
    />
  );
}

interface KeyValueListItemProps {
  title: string;
  value: ReactNode;
}

function KeyValueListItem({ title, value }: KeyValueListItemProps) {
  return (
    <div className="flex gap-2">
      <dt className="font-bold">{title}</dt>
      <dd>{value}</dd>
    </div>
  );
}

KeyValueList.Item = KeyValueListItem;

export default KeyValueList;
